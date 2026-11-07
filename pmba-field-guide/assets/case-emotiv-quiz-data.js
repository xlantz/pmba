const QUIZ_QUESTIONS = [
  {
    "source": "glance",
    "prompt": "Where are Emotiv's R&D labs located?",
    "options": [
      "Sydney",
      "San Francisco",
      "Melbourne",
      "Cambridge, MA"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "R&D was in Sydney; the commercial headquarters was in San Francisco (p. 1)."
  },
  {
    "source": "tech",
    "prompt": "How many mental states could the EPOC detect by October 2007?",
    "options": [
      "12",
      "30",
      "16",
      "42"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The system detected 30 states across Expressiv, Affectiv and Cognitiv; the headset had 16 sensors (p. 4, Exhibit 4)."
  },
  {
    "source": "tech",
    "prompt": "What was the main reason Emotiv chose EEG over fMRI and PET?",
    "options": [
      "EEG has the best signal quality",
      "It requires no software",
      "Low cost and portability",
      "It is the newest technology"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "EEG had a roughly $10,000-range cost and was portable, despite weaker signal quality (pp. 2 to 3)."
  },
  {
    "source": "tech",
    "prompt": "What is a key drawback of EEG described in the case?",
    "options": [
      "It only works in hospitals",
      "It needs radioactive tracers",
      "It only measures one mental state",
      "Electrical signals must pass through the skull, degrading quality"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The signal crosses protective layers and the skull before reaching the electrode (p. 2)."
  },
  {
    "source": "options",
    "prompt": "What is the typical console-maker royalty on a peripheral?",
    "options": [
      "3% to 5% of retail price",
      "1% to 2% of retail price",
      "10% to 15% of retail price",
      "20% of retail price"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "3% to 5%; 10% to 15% is the game-title royalty paid by third-party publishers (pp. 5, 8)."
  },
  {
    "source": "options",
    "prompt": "What royalty would a third-party game publisher expect on EPOC?",
    "options": [
      "About 15% of game retail price",
      "About 2% of EPOC's selling price",
      "Flat $5 per game",
      "None"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "About 2% of EPOC's selling price (p. 9)."
  },
  {
    "source": "options",
    "prompt": "Why did the case say Nintendo might not be a viable partner?",
    "options": [
      "Wii sales were poor",
      "Nintendo refused to meet",
      "Wii lacked the computing power, and Nintendo focused on improving its existing motion detection",
      "Nintendo had its own headset"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Two issues: limited computing power for the algorithms and management focus on existing motion detection (p. 8)."
  },
  {
    "source": "options",
    "prompt": "What did Sony Europe propose?",
    "options": [
      "A full-price EPOC for the PS3",
      "An exclusive bundle with Guitar Hero",
      "To acquire Emotiv",
      "An EPOClite with fewer sensors for the PSP"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "A simpler EPOClite for the PSP, at lower price and lower game costs (p. 9)."
  },
  {
    "source": "options",
    "prompt": "What does EmoKey enable?",
    "options": [
      "Existing PC games to be controlled by EPOC mental states in place of keystrokes",
      "Console compatibility",
      "A direct sales website",
      "Voice commands"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "EmoKey maps mental states onto keyboard functions for backward compatibility (p. 10)."
  },
  {
    "source": "industry",
    "prompt": "Which statement about PC gaming matches the case?",
    "options": [
      "PC publishers pay a per-game platform royalty",
      "PC games are mostly designed for Windows and carry no per-game royalty to a platform owner",
      "PC gaming was growing faster than consoles",
      "PC gaming was larger than console gaming"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Windows dominance and no platform royalty are listed differences (p. 6)."
  },
  {
    "source": "industry",
    "prompt": "In Exhibit 7, which console led worldwide cumulative shipments at the end of September 2007?",
    "options": [
      "Xbox 360",
      "PS3",
      "Wii",
      "Tie between Wii and PS3"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Wii 12.26M (42.1%) versus Xbox 360 11.98M (41.1%) and PS3 4.92M (16.9%)."
  },
  {
    "source": "numbers",
    "prompt": "What is the EPOC's unit production cost before and after the first million units?",
    "options": [
      "$399, then $299",
      "$60, then $110",
      "$199, then $99",
      "$110, then $60"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "$110 per unit, dropping to $60 after one million units (p. 11)."
  },
  {
    "source": "numbers",
    "prompt": "Which margin does the case associate with Best Buy?",
    "options": [
      "35%",
      "25%",
      "7%",
      "0%"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Best Buy 35%; e-tailers 25%; 0% direct; plus 7% MDF on non-direct sales (pp. 11 to 12)."
  },
  {
    "source": "numbers",
    "prompt": "What does the case say is the expected distribution of EPOC sales by channel?",
    "options": [
      "50% retail, 50% online",
      "80% retail, 15% e-tailers, rest direct",
      "30% retail, 60% e-tailers, 10% direct",
      "100% retail"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "About 80% retail, 15% e-tailers, and the rest direct (p. 12)."
  },
  {
    "source": "numbers",
    "prompt": "In Exhibit 11, Guitar Hero accessory units in its second year (2006) were:",
    "options": [
      "82,800",
      "1,734,000",
      "1,138,000",
      "3,000,000"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "82,800 in 2005, 1,138,000 in 2006, 1,734,000 in 2007E."
  },
  {
    "source": "numbers",
    "prompt": "Which price point do retailers say was the highest EPOC could probably charge?",
    "options": [
      "$99",
      "$199",
      "$299",
      "$399"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "$399 was suggested as the highest given console prices (p. 11)."
  },
  {
    "source": "fwmarket",
    "prompt": "Moore's chasm sits between which two groups?",
    "options": [
      "Early adopters and early majority",
      "Innovators and early adopters",
      "Late majority and laggards",
      "Early majority and late majority"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The chasm separates visionary early adopters from pragmatic early majority buyers."
  },
  {
    "source": "fwmarket",
    "prompt": "Which is NOT one of the standard tests of a useful market segment?",
    "options": [
      "Measurable",
      "Identical in needs to all other segments",
      "Accessible",
      "Actionable"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Segments should be differentiable (respond differently), not identical."
  },
  {
    "source": "fwmarket",
    "prompt": "Which is typically true of B2B markets compared with B2C?",
    "options": [
      "Single decision maker and short cycle",
      "Only mass-media marketing",
      "Organizational buying centers and longer sales cycles",
      "Always lower prices"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "B2B purchases usually involve several people and longer processes."
  },
  {
    "source": "fwmix",
    "prompt": "In forecasting by analogy, which step typically comes first?",
    "options": [
      "Compute cumulative installed base",
      "Set the price",
      "Run conservative and aggressive scenarios",
      "Select comparable products and judge their fit"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Choosing and vetting the analog comes first; scaling and stress tests follow."
  }
];
