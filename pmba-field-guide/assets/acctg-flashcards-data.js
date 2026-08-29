// Flashcard deck for ACCTG 6000, Unit 1 — Financial Reporting Foundations & Profitability Analysis
const FLASHCARDS = [
  // ---- Foundations ----
  { source: "foundations", front: "What is the objective of financial reporting?", back: "To provide users with information that supports investment and management decisions." },
  { source: "foundations", front: "What are the three recognized methods of accounting?", back: "Cash basis (record only when cash moves), Accrual basis (record when the economic event happens, required by GAAP), and Hybrid basis (blends cash and accrual, typical in small businesses)." },
  { source: "foundations", front: "What is the broader 6-category user list, beyond the three decision-focused groups?", back: "Owners/Potential Investors, Creditors, Management, Government, Analysts, Employees. Not contradictory with the 3-group framework (Investors, Lenders, Managers) — just a fuller enumeration." },
  { source: "foundations", front: "What are the four limitations of financial statements?", back: "(1) Historical cost, not market value (e.g., Apple's reported equity isn't close to its market value), (2) estimates can mislead, (3) the reporting framework keeps evolving, (4) errors and fraud can materially impact reports." },
  { source: "foundations", front: "What three techniques make up financial statement analysis, beyond just ratios?", back: "Horizontal Analysis (comparing an account across periods), Vertical Analysis (an account as % of a core figure), and Financial Ratios (grouped into Liquidity, Profitability, Debt/Equity, and Productivity)." },
  { source: "foundations", front: "Who are the three main user groups of financial statements, and what decision does each make?", back: "(1) Investors & Equity Analysts \u2014 judge profitability/financial strength to estimate equity value; (2) Lenders & Credit Analysts \u2014 assess ability to repay debt and manage credit risk; (3) Company Managers \u2014 inform decisions within the company." },
  { source: "foundations", front: "What are the three business forces that shape a company's goals, objectives, and strategy?", back: "Market conditions, competitive pressures, and regulations." },

  // ---- Business activities & statements ----
  { source: "activities", front: "What are the three business activities every company engages in?", back: "Operating, Investing, and Financing." },
  { source: "activities", front: "What falls under 'Operating' activities?", back: "Hiring & training employees, manufacturing products, delivering services, marketing & selling, and managing after-sale customer support." },
  { source: "activities", front: "What falls under 'Investing' activities?", back: "Acquiring land, buildings & equipment; growing the business with new products/services; or acquiring other companies to expand into new markets." },
  { source: "activities", front: "What falls under 'Financing' (Financial) activities?", back: "Raising cash to fund operating and investing activities \u2014 primarily by selling stock and borrowing cash." },
  { source: "activities", front: "Why do the three business activities (Operating, Investing, Financing) matter beyond just being a conceptual list?", back: "They are literally the three sections of the Statement of Cash Flows." },
  { source: "statements", front: "What are the four financial statements?", back: "Balance Sheet, Income Statement, Statement of Stockholders' Equity, Statement of Cash Flows." },

  // ---- Disclosure ----
  { source: "disclosure", front: "What are the three benefits of financial disclosure?", back: "(1) Lower cost of capital (lower interest rates or higher stock prices), (2) improved recruiting efforts, (3) greatly increased supplier-customer relations." },
  { source: "disclosure", front: "What are the four costs of financial disclosure?", back: "(1) Preparation and dissemination cost, (2) competitive disadvantage from revealing proprietary information, (3) litigation potential, (4) political costs." },

  // ---- Ratios ----
  { source: "ratios", front: "What is the equation for Return on Assets (ROA), and what does it measure?", back: "Net Income \u00f7 Average Total Assets. Measures how efficiently a company generates profit from its total asset base, regardless of financing mix." },
  { source: "ratios", front: "What is the equation for Net Profit Margin, and what does it measure?", back: "Net Income \u00f7 Net Sales. Measures how much profit is earned per dollar of sales \u2014 reflects cost control and pricing power." },
  { source: "ratios", front: "What is the equation for Total Asset Turnover, and what does it measure?", back: "Net Sales \u00f7 Average Total Assets. Measures how efficiently a company uses its assets to generate sales (an activity/efficiency ratio, not profitability)." },
  { source: "ratios", front: "What is the equation for Return on Equity (ROE), and what does it measure?", back: "Net Income \u00f7 Average Stockholders' Equity. Measures the return generated specifically for shareholders on their invested capital." },
  { source: "ratios", front: "How does ROA decompose into Net Profit Margin and Total Asset Turnover?", back: "ROA = Net Profit Margin \u00d7 Total Asset Turnover." },
  { source: "ratios", front: "How does ROE relate to ROA and financial leverage?", back: "ROE = ROA \u00d7 Equity Multiplier, where the Equity Multiplier = Average Total Assets \u00f7 Average Stockholders' Equity. More debt financing amplifies ROE relative to ROA." },
  { source: "ratios", front: "Two companies have the same ROA but very different profit margins and asset turnover. What does this suggest?", back: "They likely have different business models \u2014 one may earn high margins on lower sales volume (e.g., a luxury brand) while the other earns thin margins on high sales volume (e.g., a discount retailer)." },

  // ---- Strategic frameworks ----
  { source: "frameworks", front: "What are Porter's Five Forces?", back: "A framework analyzing industry competitive structure: threat of new entrants, bargaining power of suppliers, bargaining power of buyers, threat of substitutes, and rivalry among existing competitors." },
  { source: "frameworks", front: "What does SWOT stand for, and what is it used for?", back: "Strengths, Weaknesses, Opportunities, Threats \u2014 a framework for qualitative strategic/company analysis, often paired with financial ratio analysis." },
];

const SOURCE_LABELS = {
  foundations: "Foundations",
  activities: "Business Activities",
  statements: "Financial Statements",
  disclosure: "Disclosure",
  ratios: "Profitability Ratios",
  frameworks: "Strategic Frameworks",
};
