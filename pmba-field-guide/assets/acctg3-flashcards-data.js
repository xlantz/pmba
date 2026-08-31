// Flashcard deck for ACCTG 6000, Unit 3 — The Accounting Cycle, Adjustments & the Closing Process
const FLASHCARDS = [
  // ---- The accounting cycle ----
  { source: "cycle", front: "What are the four steps of the accounting cycle, in order?", back: "(1) Analyze transactions, prepare entries, and post entries; (2) Prepare and post accounting adjustments; (3) Prepare financial statements; (4) Close the books to set up the next accounting period." },
  { source: "cycle", front: "What are the three 'cycle tools' used to track transactions?", back: "The Financial Statement Effects Template (FSET), T-Accounts, and Journal Entries." },

  // ---- FSET & T-Accounts ----
  { source: "fset", front: "What is the Financial Statement Effects Template (FSET)?", back: "A tool that represents complex financial transactions in a simple way, capturing transactions across all four financial statements at once, facilitating analysis and interpretation." },
  { source: "fset", front: "What is the FSET equation?", back: "Assets = Liabilities + Equity, expanded as: Cash Asset + Noncash Asset = Liabilities + Contributed Capital + Earned Capital, where Revenues \u2212 Expenses = Net Income flows into Earned Capital as Retained Earnings." },
  { source: "fset", front: "What do T-Accounts capture?", back: "Increases and decreases to individual balance sheet and income statement accounts; they can be used to keep running totals." },
  { source: "fset", front: "What is the natural balance of assets vs. liabilities and equity in a T-account?", back: "Assets carry a natural debit balance; liabilities and equity carry a natural credit balance." },
  { source: "fset", front: "In a journal entry, which side is the debit and which is the credit?", back: "Debit = left, Credit = right." },

  // ---- Adjustments ----
  { source: "adjustments", front: "Why do accounting adjustments exist? Give the wages example.", back: "Because cash movement and economic activity don't always happen at the same time. Example: employees may earn wages during a period but not be paid until after period-end \u2014 failing to recognize the wages owed would understate liabilities and overstate net income." },
  { source: "adjustments", front: "What are the two timing categories for accounting adjustments?", back: "(1) Cash is paid or received before expenses or revenues are recognized; (2) Cash is paid or received after expenses or revenues are recognized." },
  { source: "adjustments", front: "What is a Prepaid (Deferred) Expense?", back: "An advance cash payment that will ultimately become an expense in the future (cash moves before the expense is recognized)." },
  { source: "adjustments", front: "What is an Unearned (Deferred) Revenue?", back: "Cash received from customers before any services or goods are provided (cash moves before the revenue is recognized)." },
  { source: "adjustments", front: "What is an Accrued Expense?", back: "An expense incurred and recognized on the income statement even though cash hasn't been paid yet (expense recognized before cash moves)." },
  { source: "adjustments", front: "What is an Accrued Revenue?", back: "Revenue earned and recognized on the income statement even though cash hasn't been received yet (revenue recognized before cash moves)." },

  // ---- Constructing statements ----
  { source: "construction", front: "In what order must the financial statements be constructed from a completed FSET, and why?", back: "(1) Income Statement, (2) Reconcile Retained Earnings, (3) Statement of Stockholders' Equity, (4) Balance Sheet, (5) Statement of Cash Flows \u2014 in this order because each statement depends on data produced by the one before it (e.g., you need net income before you can reconcile retained earnings)." },
  { source: "construction", front: "How do you prepare the Balance Sheet from the FSET?", back: "Start with the beginning balances from the prior year's balance sheet, then use the FSET entries in the balance sheet columns to determine activity in each account during the year. The bottom row of the FSET provides the balance sheet equation." },

  // ---- Closing process ----
  { source: "closing", front: "What is the closing process?", back: "The zeroing out of ONLY the temporary accounts by transferring their ending balances to retained earnings." },
  { source: "closing", front: "What are the temporary accounts, and what's true about their balance at the start of each period?", back: "Revenues, expenses, and dividends. Their balance at the start of each accounting period is $0 \u2014 they only record the current period's activity." },
  { source: "closing", front: "Why isn't net income automatically processed to the balance sheet as retained earnings?", back: "Because companies use journal entries to capture transactions and adjustments, so a formal closing process is required at each period-end to transfer temporary account balances into retained earnings." },
  { source: "closing", front: "In what order are journal entries closed during the closing process?", back: "(1) Close Revenue and Gain Accounts; (2) Close Expense and Loss Accounts (COGS, Operating Expenses, Nonoperating Expenses, Tax Expense); (3) Close Dividend Account." },
];

const SOURCE_LABELS = {
  cycle: "Accounting Cycle",
  fset: "FSET & T-Accounts",
  adjustments: "Adjustments",
  construction: "Constructing Statements",
  closing: "Closing Process",
};
