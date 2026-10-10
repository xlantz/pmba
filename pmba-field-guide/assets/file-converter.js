/* File Converter: browser port of "file-to-file conversion tool.py".
   Reads PDF / DOCX / PPTX / XLSX / XLS / CSV / images / TXT and writes
   Word, Excel, CSV, TXT or PDF. Everything runs locally in the browser;
   helper libraries are loaded from a CDN only when a file needs them. */
(function () {
  'use strict';

  var CDN = {
    pdfjs:     'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
    pdfWorker: 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js',
    tesseract: 'https://cdn.jsdelivr.net/npm/tesseract.js@5.1.1/dist/tesseract.min.js',
    mammoth:   'https://cdn.jsdelivr.net/npm/mammoth@1.8.0/mammoth.browser.min.js',
    jszip:     'https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js',
    xlsx:      'https://cdn.jsdelivr.net/npm/xlsx@0.18.5/dist/xlsx.full.min.js',
    jspdf:     'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js'
  };

  var FORMATS = {
    word:  { ext: 'docx' },
    excel: { ext: 'xlsx' },
    csv:   { ext: 'csv' },
    txt:   { ext: 'txt' },
    pdf:   { ext: 'pdf' }
  };

  var IMAGE_EXTS = ['png', 'jpg', 'jpeg', 'tif', 'tiff', 'bmp', 'webp', 'gif'];

  // ---------- DOM ----------
  var $ = function (id) { return document.getElementById(id); };
  var drop = $('fc-drop'), input = $('fc-input'), fileInfo = $('fc-file');
  var formatSel = $('fc-format'), nameInput = $('fc-name'), extLabel = $('fc-ext');
  var convertBtn = $('fc-convert'), statusEl = $('fc-status');
  var progressWrap = $('fc-progress'), bar = $('fc-bar');
  var previewWrap = $('fc-preview-wrap'), preview = $('fc-preview'), redownload = $('fc-redownload');

  var state = { file: null, ext: '', extracted: null, busy: false };

  // ---------- helpers ----------
  var loaded = {};
  function load(key) {
    if (!loaded[key]) {
      loaded[key] = new Promise(function (resolve, reject) {
        var s = document.createElement('script');
        s.src = CDN[key];
        s.onload = resolve;
        s.onerror = function () {
          delete loaded[key];
          s.remove();
          reject(new Error('Could not load a helper library. Check your internet connection and try again.'));
        };
        document.head.appendChild(s);
      });
    }
    return loaded[key];
  }

  function status(msg, isError) {
    statusEl.textContent = msg || '';
    statusEl.classList.toggle('err', !!isError);
  }

  function progress(frac) {
    if (frac == null) { progressWrap.hidden = true; return; }
    progressWrap.hidden = false;
    bar.style.width = Math.round(Math.max(0, Math.min(1, frac)) * 100) + '%';
  }

  function cleanName(s) { return s.replace(/[\\/*?:"<>|]/g, '').trim(); }

  function baseName(name) { return name.replace(/\.[^.]+$/, ''); }

  function formatBytes(n) {
    if (n < 1024) return n + ' B';
    if (n < 1048576) return (n / 1024).toFixed(0) + ' KB';
    return (n / 1048576).toFixed(1) + ' MB';
  }

  function download(blob, filename) {
    var url = URL.createObjectURL(blob);
    var a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    a.remove();
    setTimeout(function () { URL.revokeObjectURL(url); }, 10000);
  }

  // ---------- extractors (each returns { pages: [text], sheets?: [{name, rows}] }) ----------

  // Rebuild lines from pdf.js text items; wide gaps become double spaces so
  // the table splitter (2+ spaces) can find columns, like pdfplumber output.
  function linesFromItems(items) {
    var lines = [];
    items.forEach(function (it) {
      if (!it.str || !it.str.trim()) return;
      var x = it.transform[4], y = it.transform[5];
      var h = Math.abs(it.transform[3]) || it.height || 10;
      var line = null;
      for (var k = 0; k < lines.length; k++) {
        if (Math.abs(lines[k].y - y) < h * 0.5) { line = lines[k]; break; }
      }
      if (!line) { line = { y: y, items: [] }; lines.push(line); }
      line.items.push({ x: x, w: it.width, s: it.str, h: h });
    });
    lines.sort(function (a, b) { return b.y - a.y; });
    return lines.map(function (line) {
      line.items.sort(function (a, b) { return a.x - b.x; });
      var out = '', end = null;
      line.items.forEach(function (it) {
        if (end !== null) {
          var gap = it.x - end;
          if (gap > it.h * 1.2) out = out.replace(/\s+$/, '') + '  ';
          else if (gap > it.h * 0.15 && !/\s$/.test(out) && !/^\s/.test(it.s)) out += ' ';
        }
        out += it.s;
        end = it.x + it.w;
      });
      return out.replace(/\s+$/, '');
    }).join('\n');
  }

  function makeOcr(onProgress) {
    return load('tesseract').then(function () {
      status('Loading the OCR engine (the first time can take 20 seconds or so)...');
      return window.Tesseract.createWorker('eng', 1, {
        logger: function (m) {
          if (m.status === 'recognizing text' && onProgress) onProgress(m.progress);
        }
      });
    });
  }

  async function extractPdf(file) {
    await load('pdfjs');
    var pdfjsLib = window.pdfjsLib;
    pdfjsLib.GlobalWorkerOptions.workerSrc = CDN.pdfWorker;
    var pdf = await pdfjsLib.getDocument({ data: await file.arrayBuffer() }).promise;
    var pages = [], ocr = null, ocrPage = 0, n = pdf.numPages;
    try {
      for (var i = 1; i <= n; i++) {
        status('Reading page ' + i + ' of ' + n + '...');
        progress((i - 1) / n);
        var page = await pdf.getPage(i);
        var text = linesFromItems((await page.getTextContent()).items);
        if (text.replace(/\s/g, '').length < 5) {
          ocrPage = i;
          if (!ocr) {
            ocr = await makeOcr(function (p) { progress((ocrPage - 1 + p) / n); });
          }
          status('Page ' + i + ' of ' + n + ' looks like a scan. Running OCR...');
          var viewport = page.getViewport({ scale: 2 });
          var canvas = document.createElement('canvas');
          canvas.width = viewport.width;
          canvas.height = viewport.height;
          // 'print' intent renders without requestAnimationFrame, so it keeps going in a background tab.
          await page.render({ canvasContext: canvas.getContext('2d'), viewport: viewport, intent: 'print' }).promise;
          try {
            text = (await ocr.recognize(canvas)).data.text;
          } catch (e) {
            text = '';
          }
        }
        pages.push(text || '');
      }
    } finally {
      if (ocr) await ocr.terminate();
    }
    return { pages: pages };
  }

  async function extractWord(file) {
    await load('mammoth');
    var html = (await window.mammoth.convertToHtml({ arrayBuffer: await file.arrayBuffer() })).value;
    var doc = new DOMParser().parseFromString(html, 'text/html');
    var lines = [];
    Array.prototype.forEach.call(doc.body.children, function (el) {
      if (el.tagName === 'TABLE') {
        el.querySelectorAll('tr').forEach(function (tr) {
          lines.push(Array.prototype.map.call(tr.children, function (td) {
            return td.textContent.replace(/\s+/g, ' ').trim();
          }).join('\t'));
        });
      } else if (el.tagName === 'UL' || el.tagName === 'OL') {
        el.querySelectorAll('li').forEach(function (li) { lines.push('- ' + li.textContent.trim()); });
      } else {
        lines.push(el.textContent);
      }
    });
    return { pages: [lines.join('\n')] };
  }

  async function extractPowerPoint(file) {
    await load('jszip');
    var zip = await window.JSZip.loadAsync(await file.arrayBuffer());
    var A = 'http://schemas.openxmlformats.org/drawingml/2006/main';
    var slides = Object.keys(zip.files)
      .filter(function (p) { return /^ppt\/slides\/slide\d+\.xml$/.test(p); })
      .sort(function (a, b) { return parseInt(a.match(/\d+/)[0], 10) - parseInt(b.match(/\d+/)[0], 10); });
    var pages = [];
    for (var i = 0; i < slides.length; i++) {
      var xml = new DOMParser().parseFromString(await zip.file(slides[i]).async('string'), 'application/xml');
      var text = '--- SLIDE ' + (i + 1) + ' ---\n';
      Array.prototype.forEach.call(xml.getElementsByTagNameNS(A, 'p'), function (p) {
        var t = Array.prototype.map.call(p.getElementsByTagNameNS(A, 't'), function (n) { return n.textContent; }).join('');
        if (t.trim()) text += t + '\n';
      });
      pages.push(text);
    }
    return { pages: pages };
  }

  async function extractSpreadsheet(file, isCsv) {
    await load('xlsx');
    var XLSX = window.XLSX;
    var wb = isCsv
      ? XLSX.read(await file.text(), { type: 'string', cellDates: true })
      : XLSX.read(await file.arrayBuffer(), { type: 'array', cellDates: true });
    // Raw values keep numbers numeric for Excel output; formatted text is for the preview / text outputs.
    var sheets = wb.SheetNames.map(function (name) {
      var ws = wb.Sheets[name];
      return {
        name: name,
        rows: XLSX.utils.sheet_to_json(ws, { header: 1, raw: true, defval: '' }),
        text: XLSX.utils.sheet_to_json(ws, { header: 1, raw: false, defval: '' })
      };
    });
    var pages = sheets.map(function (s) {
      var body = s.text.map(function (r) { return r.join('\t'); }).join('\n');
      return sheets.length > 1 ? '--- SHEET: ' + s.name + ' ---\n' + body : body;
    });
    return { pages: pages, sheets: sheets };
  }

  async function extractImage(file) {
    var ocr = await makeOcr(function (p) { progress(p); });
    try {
      status('Reading text from the image...');
      return { pages: [(await ocr.recognize(file)).data.text] };
    } finally {
      await ocr.terminate();
    }
  }

  async function extract(file, ext) {
    if (ext === 'pdf') return extractPdf(file);
    if (ext === 'docx') return extractWord(file);
    if (ext === 'pptx') return extractPowerPoint(file);
    if (ext === 'csv') return extractSpreadsheet(file, true);
    if (ext === 'xlsx' || ext === 'xls' || ext === 'xlsm') return extractSpreadsheet(file, false);
    if (IMAGE_EXTS.indexOf(ext) !== -1) return extractImage(file);
    if (ext === 'doc') throw new Error('Old .doc files aren\'t supported. Open it in Word, use Save As > .docx, then try again.');
    if (ext === 'ppt') throw new Error('Old .ppt files aren\'t supported. Open it in PowerPoint, use Save As > .pptx, then try again.');
    return { pages: [await file.text()] };
  }

  // ---------- writers ----------

  function textToRows(text) {
    var rows = [];
    text.split('\n').forEach(function (line) {
      if (line.trim()) rows.push(line.trim().split(/\s{2,}|\t/));
    });
    return rows;
  }

  function tableSheets(data) {
    if (data.sheets) return data.sheets;
    return [{ name: 'Sheet1', rows: textToRows(data.pages.join('\n\n')) }];
  }

  function csvCell(v) {
    v = v == null ? '' : String(v);
    return /[",\r\n]/.test(v) ? '"' + v.replace(/"/g, '""') + '"' : v;
  }

  function writeCsv(data) {
    var sheets = tableSheets(data);
    var parts = sheets.map(function (s) {
      return (s.text || s.rows).map(function (r) { return r.map(csvCell).join(','); }).join('\r\n');
    });
    // BOM so Excel opens UTF-8 correctly
    return new Blob(['﻿' + parts.join('\r\n\r\n')], { type: 'text/csv;charset=utf-8' });
  }

  async function writeExcel(data) {
    await load('xlsx');
    var XLSX = window.XLSX;
    var wb = XLSX.utils.book_new();
    tableSheets(data).forEach(function (s, i) {
      var name = (s.name || 'Sheet' + (i + 1)).replace(/[\\\/?*\[\]:]/g, '').slice(0, 31) || 'Sheet' + (i + 1);
      XLSX.utils.book_append_sheet(wb, XLSX.utils.aoa_to_sheet(s.rows), name);
    });
    var out = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    return new Blob([out], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
  }

  function xmlEscape(s) {
    return s.replace(/[\x00-\x08\x0B\x0C\x0E-\x1F]/g, '')
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

  // Minimal valid .docx: one paragraph per line, a page break between source pages.
  async function writeWord(data) {
    await load('jszip');
    var RPR = '<w:rPr><w:rFonts w:ascii="Calibri" w:hAnsi="Calibri" w:cs="Calibri"/><w:sz w:val="22"/></w:rPr>';
    var body = '';
    data.pages.forEach(function (page, i) {
      if (i > 0) body += '<w:p><w:r><w:br w:type="page"/></w:r></w:p>';
      page.replace(/\r\n?/g, '\n').split('\n').forEach(function (line) {
        var runs = line.split('\t').map(function (seg) {
          return '<w:t xml:space="preserve">' + xmlEscape(seg) + '</w:t>';
        }).join('<w:tab/>');
        body += '<w:p><w:r>' + RPR + runs + '</w:r></w:p>';
      });
    });
    var documentXml =
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:body>' + body +
      '<w:sectPr><w:pgSz w:w="12240" w:h="15840"/><w:pgMar w:top="1440" w:right="1440" w:bottom="1440" w:left="1440" w:header="720" w:footer="720" w:gutter="0"/></w:sectPr>' +
      '</w:body></w:document>';
    var zip = new window.JSZip();
    zip.file('[Content_Types].xml',
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types">' +
      '<Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/>' +
      '<Default Extension="xml" ContentType="application/xml"/>' +
      '<Override PartName="/word/document.xml" ContentType="application/vnd.openxmlformats-officedocument.wordprocessingml.document.main+xml"/>' +
      '</Types>');
    zip.file('_rels/.rels',
      '<?xml version="1.0" encoding="UTF-8" standalone="yes"?>' +
      '<Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships">' +
      '<Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="word/document.xml"/>' +
      '</Relationships>');
    zip.file('word/document.xml', documentXml);
    return zip.generateAsync({ type: 'blob', mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' });
  }

  // jsPDF's built-in fonts only cover basic Latin, so swap common symbols first.
  function pdfSafe(s) {
    return s.replace(/[‘’‚′]/g, "'").replace(/[“”„″]/g, '"')
      .replace(/[–—−]/g, '-').replace(/[•●▪]/g, '*')
      .replace(/…/g, '...').replace(/ /g, ' ').replace(/\t/g, '    ')
      .replace(/[^\x09\x0A\x0D\x20-\x7E¡-ÿ]/g, '?');
  }

  async function writePdf(data) {
    await load('jspdf');
    var doc = new window.jspdf.jsPDF({ unit: 'pt', format: 'letter' });
    var margin = 54, lineH = 14;
    var width = doc.internal.pageSize.getWidth() - margin * 2;
    var bottom = doc.internal.pageSize.getHeight() - margin;
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(10.5);
    data.pages.forEach(function (page, i) {
      if (i > 0) doc.addPage();
      var y = margin;
      pdfSafe(page.replace(/\r\n?/g, '\n')).split('\n').forEach(function (line) {
        var wrapped = line ? doc.splitTextToSize(line, width) : [''];
        wrapped.forEach(function (w) {
          if (y > bottom) { doc.addPage(); y = margin; }
          doc.text(w, margin, y);
          y += lineH;
        });
      });
    });
    return doc.output('blob');
  }

  function writeOutput(fmt, data) {
    if (fmt === 'txt') return new Blob([data.pages.join('\n\n')], { type: 'text/plain;charset=utf-8' });
    if (fmt === 'csv') return writeCsv(data);
    if (fmt === 'excel') return writeExcel(data);
    if (fmt === 'word') return writeWord(data);
    return writePdf(data);
  }

  // ---------- UI ----------

  function setBusy(b) {
    state.busy = b;
    convertBtn.disabled = b || !state.file;
    redownload.disabled = b;
    drop.classList.toggle('is-busy', b);
  }

  function updateExt() { extLabel.textContent = '.' + FORMATS[formatSel.value].ext; }

  function pickFile(file) {
    if (!file || state.busy) return;
    state.file = file;
    state.ext = (file.name.split('.').pop() || '').toLowerCase();
    state.extracted = null;
    fileInfo.hidden = false;
    fileInfo.textContent = file.name + ' · ' + formatBytes(file.size);
    nameInput.value = cleanName(baseName(file.name)) || 'converted';
    previewWrap.hidden = true;
    progress(null);
    status('Ready. Pick a format and convert.');
    convertBtn.disabled = false;
  }

  async function saveAs(data) {
    var fmt = formatSel.value;
    var name = cleanName(nameInput.value) || 'converted';
    status('Building the ' + FORMATS[fmt].ext.toUpperCase() + ' file...');
    var blob = await writeOutput(fmt, data);
    download(blob, name + '.' + FORMATS[fmt].ext);
  }

  async function convert() {
    if (!state.file || state.busy) return;
    setBusy(true);
    status('Working...');
    try {
      if (!state.extracted) {
        state.extracted = await extract(state.file, state.ext);
        preview.value = state.extracted.pages.join('\n\n');
      }
      progress(1);
      var data = state.extracted;
      if (!data.pages.join('').trim()) {
        status('No text was found in this file.', true);
        return;
      }
      await saveAs(data);
      previewWrap.hidden = false;
      status('Done. Your download should start automatically.');
    } catch (e) {
      console.error(e);
      status('Something went wrong: ' + (e && e.message ? e.message : e), true);
    } finally {
      progress(null);
      setBusy(false);
    }
  }

  async function downloadEdited() {
    if (state.busy) return;
    setBusy(true);
    try {
      var data = { pages: [preview.value] };
      if (state.extracted && state.extracted.sheets && preview.value === state.extracted.pages.join('\n\n')) {
        data = state.extracted;
      }
      await saveAs(data);
      status('Done. Downloaded with your edits.');
    } catch (e) {
      console.error(e);
      status('Something went wrong: ' + (e && e.message ? e.message : e), true);
    } finally {
      setBusy(false);
    }
  }

  input.addEventListener('change', function () { pickFile(input.files[0]); input.value = ''; });
  ['dragenter', 'dragover'].forEach(function (t) {
    drop.addEventListener(t, function (e) { e.preventDefault(); drop.classList.add('is-over'); });
  });
  ['dragleave', 'drop'].forEach(function (t) {
    drop.addEventListener(t, function (e) { e.preventDefault(); drop.classList.remove('is-over'); });
  });
  drop.addEventListener('drop', function (e) {
    if (e.dataTransfer && e.dataTransfer.files.length) pickFile(e.dataTransfer.files[0]);
  });
  formatSel.addEventListener('change', updateExt);
  convertBtn.addEventListener('click', convert);
  redownload.addEventListener('click', downloadEdited);
  updateExt();
})();
