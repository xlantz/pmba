// Flashcard deck for ACCTG 6000, Unit 2 — The Balance Sheet, Income Statement & Statement of Cash Flows
const FLASHCARDS = [
  // ---- Basis of accounting ----
  { source: "basis", front: "What's the difference between cash basis and accrual basis accounting?", back: "Cash basis records revenue/expenses when cash actually changes hands. Accrual basis records them when earned or incurred, regardless of when cash moves \u2014 this is the basis required under GAAP." },
  { source: "basis", front: "What is the fundamental accounting equation?", back: "Assets = Liabilities + Stockholders' Equity." },

  // ---- Balance sheet mechanics ----
  { source: "balance-sheet", front: "What does the Balance Sheet represent, in terms of timing?", back: "A snapshot of assets, liabilities, and equity at one specific point in time (unlike the Income Statement or Cash Flow Statement, which cover a period)." },
  { source: "balance-sheet", front: "What makes an asset 'current' vs. 'long-term'?", back: "Current assets are expected to convert to cash within 12 months (cash, cash equivalents, short-term investments, A/R net, inventory, prepaid expenses). Long-term assets convert beyond a year (PP&E, long-term investments, intangibles)." },
  { source: "balance-sheet", front: "At what value are assets recorded on the Balance Sheet?", back: "Historical cost \u2014 what the company paid for the asset, not its current market value." },
  { source: "balance-sheet", front: "What makes a liability 'current' vs. 'noncurrent'?", back: "Current liabilities are due within 12 months (A/P, accrued liabilities, unearned revenue, short-term debt, current maturities of long-term debt). Noncurrent liabilities are due beyond a year (long-term debt, other long-term liabilities)." },
  { source: "balance-sheet", front: "What is 'unearned' (or deferred) revenue?", back: "Cash a company has received from a customer for a product or service it has not yet delivered \u2014 it's recorded as a liability until the company earns it." },
  { source: "balance-sheet", front: "What is a common-sized Balance Sheet?", back: "A Balance Sheet where every line item is expressed as a percentage of total assets, used to compare across years, companies, or industry benchmarks." },

  // ---- Equity mechanics ----
  { source: "equity", front: "What are the two ways capital enters Stockholders' Equity?", back: "Directly, via the sale of stock (contributed capital), and indirectly, via retained earnings (earned capital)." },
  { source: "equity", front: "What's the difference between common stock and additional paid-in capital?", back: "Common stock is the par value received from the original sale of stock to investors; additional paid-in capital is the amount received in excess of that par value." },
  { source: "equity", front: "What is treasury stock, and how does it affect equity?", back: "A company's own shares that it has repurchased; it reduces total stockholders' equity." },
  { source: "equity", front: "What is the retained earnings roll-forward formula?", back: "Ending Retained Earnings = Beginning Retained Earnings + Net Income (or \u2212 Net Loss) \u2212 Dividends \u2212 Stock repurchased and retired." },
  { source: "equity", front: "How does Retained Earnings change on the Statement of Stockholders' Equity?", back: "It increases by net income and decreases by dividends paid to shareholders and by stock repurchased and retired." },
  { source: "equity", front: "What does Accumulated Other Comprehensive Income (AOCI) capture?", back: "Changes in the fair value of certain assets and liabilities that are not reported through the Income Statement." },
  { source: "equity", front: "What's the difference between book value and market value of a company?", back: "Book value = Stockholders' Equity (from the Balance Sheet, at historical cost). Market value (market cap) = number of common shares outstanding \u00d7 current stock price." },

  // ---- Liquidity metrics ----
  { source: "liquidity", front: "What is Net Working Capital, and how is it calculated?", back: "Current Assets \u2212 Current Liabilities \u2014 a measure of a company's short-term liquidity." },
  { source: "liquidity", front: "What is the Cash Conversion Cycle, and how is it calculated?", back: "Average Days Sales Outstanding + Average Days Inventory Outstanding \u2212 Average Days Payable Outstanding. It measures how many days it takes to convert a sale into cash in hand." },

  // ---- Statements ----
  { source: "statements", front: "What does the Income Statement report, and over what time frame?", back: "A company's financial performance \u2014 revenues, expenses, and net profit or loss \u2014 over a specific period of time (not a snapshot)." },
  { source: "statements", front: "What does the Statement of Cash Flows report, and what are its three sections?", back: "A company's ability to generate cash \u2014 sources and uses of cash \u2014 broken into Operating, Investing, and Financing activities (the same three categories as Unit 1's business activities)." },
  { source: "statements", front: "List the analytical questions to ask when reading a Statement of Cash Flows.", back: "Is the company generating cash from operations? Is that operating cash flow sustainable? Is it investing to grow (PP&E, acquisitions)? Is it building liquidity with excess cash? Is it paying down debt, paying dividends, or repurchasing stock?" },

  // ---- Linkages ----
  { source: "linkages", front: "What line item links the Balance Sheet and the Income Statement?", back: "Retained earnings, which is updated each period by net income." },
  { source: "linkages", front: "What line item links the Balance Sheet and the Statement of Cash Flows?", back: "Cash." },
  { source: "linkages", front: "What line items link the Balance Sheet and the Statement of Stockholders' Equity?", back: "Common stock & additional paid-in capital, retained earnings, and accumulated other comprehensive income." },
  { source: "linkages", front: "What line item links the Income Statement and the Statement of Stockholders' Equity?", back: "Net Income." },

  // ---- SEC filings ----
  { source: "sec", front: "What is a 10-K filing?", back: "The SEC annual report." },
  { source: "sec", front: "What is a 10-Q filing?", back: "The SEC quarterly report." },
  { source: "sec", front: "What is an 8-K filing?", back: "A current report filed with the SEC to announce major or material events occurring between a company's quarterly and annual reports." },

  // ---- Basis addendum ----
  { source: "basis", front: "Besides cash and accrual, what is the third recognized accounting method?", back: "Hybrid basis \u2014 blends cash and accrual concepts, also typical in a small-business setting." },

  // ---- Governance ----
  { source: "governance", front: "What does the SEC do?", back: "Oversees financial markets and regulates, among other things, financial reporting of public companies." },
  { source: "governance", front: "What is FASB, and what does it produce?", back: "The Financial Accounting Standards Board \u2014 a non-profit commissioned by the SEC to set accounting standards (GAAP) for public companies." },
  { source: "governance", front: "What is GAAP?", back: "Generally Accepted Accounting Principles \u2014 the rule book governing accounting treatment for public companies." },
  { source: "governance", front: "What do auditors do, and are they for-profit or non-profit?", back: "For-profit companies hired by public (and private) companies to review and test the veracity of financial reporting, and issue an opinion." },
  { source: "governance", front: "What is the PCAOB?", back: "The Public Companies Accounting Oversight Board \u2014 a non-profit commissioned by the SEC to oversee audit delivery and quality." },
  { source: "governance", front: "Trace the governance chain: how does the SEC relate to FASB and the PCAOB?", back: "SEC \u2192 FASB \u2192 GAAP (the SEC commissions FASB, which sets the rules). SEC \u2192 PCAOB \u2192 Auditors (the SEC commissions the PCAOB, which oversees the auditors who verify GAAP compliance)." },
  { source: "governance", front: "What are the four historical flashpoints behind why accounting governance exists?", back: "The Great Depression (origin of the SEC), Enron and WorldCom (led to the PCAOB's creation), auditor controversies, and continued fraud risk." },
];

const SOURCE_LABELS = {
  basis: "Cash vs. Accrual",
  "balance-sheet": "Balance Sheet",
  equity: "Stockholders' Equity",
  liquidity: "Liquidity Metrics",
  statements: "IS & Cash Flows",
  linkages: "Statement Linkages",
  sec: "SEC Filings",
  governance: "Governance",
};
