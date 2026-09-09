// Flashcard deck for ACCTG 6000, Unit 5 — Revenue Recognition & Receivables
const FLASHCARDS = [
  { source: "principle", front: "What is the core revenue recognition principle?", back: "Revenue is recognized when it is earned — when the company has satisfied its obligation to the customer — not simply when cash is received." },
  { source: "principle", front: "What are the three timing relationships between cash and revenue?", back: "Cash before revenue is earned (unearned/deferred revenue, a liability); cash at the same time revenue is earned (typical cash sale); cash after revenue is earned (accounts receivable, an asset)." },
  { source: "longterm", front: "What is the cost-to-cost method?", back: "A method for recognizing revenue on a long-term contract in proportion to the costs incurred to date relative to total estimated contract costs." },
  { source: "longterm", front: "What is the cost-to-cost revenue formula?", back: "Revenue recognized = Total contract price × (Costs incurred to date ÷ Total estimated contract costs)." },
  { source: "longterm", front: "A $220 million contract has total estimated costs of $180 million. Year 1 costs incurred are $36 million. What revenue should be recognized?", back: "Percent complete = 36/180 = 20%. Revenue = $220M × 20% = $44 million." },
  { source: "longterm", front: "Using the $220M contract example, what income is recognized in Year 1?", back: "Income = Revenue − Costs incurred = $44M − $36M = $8 million." },
  { source: "longterm", front: "Why can the cost-to-cost method provide a reasonable measure of contract performance?", back: "Costs incurred can serve as a measure of progress toward completing the contract — a company that has spent more of the total estimated cost has likely completed more of the work." },
  { source: "retail", front: "When is revenue recognized for a typical retail store sale?", back: "When the sale occurs and control of the merchandise transfers to the customer — essentially at checkout." },
  { source: "retail", front: "When is revenue recognized for a digital sale where the customer pays online before delivery?", back: "When the merchandise is delivered to the customer or picked up — not when the payment is received or the order is submitted." },
  { source: "retail", front: "Why are sales taxes collected from customers excluded from a retailer's revenue?", back: "The retailer acts as a pass-through conduit for the taxing authority — the cash was never the retailer's revenue to begin with." },
  { source: "retail", front: "How should a retailer report revenue when it expects some current-period sales to be returned?", back: "Net of estimated returns — reduced immediately based on the estimate, not reported at the full gross amount until returns actually occur." },
  { source: "giftcards", front: "How is cash received for a gift card initially recorded?", back: "As a liability, not revenue — nothing has been earned until the card is redeemed." },
  { source: "giftcards", front: "What is gift card breakage?", back: "The estimated portion of gift cards that will never be redeemed — this can be recognized as revenue over time." },
  { source: "giftcards", front: "Why can a reduction in a deferred revenue balance be a leading indicator of lower future revenue?", back: "A smaller balance may mean less previously collected consideration remains to be recognized as revenue in future periods." },
  { source: "giftcards", front: "How does Costco generally recognize annual membership fee revenue?", back: "Ratably over the one-year membership period — not entirely when the fee is collected." },
  { source: "giftcards", front: "What does Costco's accrued member rewards liability represent?", back: "Estimated rewards already earned by Executive members (e.g., 2% on qualified purchases) that Costco expects to provide later." },
  { source: "receivables", front: "What is the allowance method for bad debts?", back: "A method that estimates uncollectible accounts up front and records the estimate as bad debt expense, building an allowance (contra-asset) rather than waiting to learn which specific customers default." },
  { source: "receivables", front: "How does recording bad debt expense affect the balance sheet?", back: "It increases the allowance for uncollectible accounts (a contra-asset) and reduces net accounts receivable — without changing gross accounts receivable." },
  { source: "receivables", front: "If a company's aging analysis calls for an ending allowance of $2,100 and the existing balance is a $700 credit, what bad debt expense should be recorded?", back: "$2,100 − $700 = $1,400 — the change needed to reach the target, not the target itself." },
  { source: "receivables", front: "What do accounts receivable turnover and DSO measure, and which direction indicates faster collection?", back: "AR turnover = Net Sales ÷ Average AR (higher is faster). DSO = 365 ÷ AR turnover (lower is faster). They always move in opposite directions." },
];

const SOURCE_LABELS = {
  principle: "Core Revenue Recognition Principle",
  longterm: "Long-Term Contracts",
  retail: "Retail & Digital Sales, Tax, Returns",
  giftcards: "Gift Cards & Deferred Revenue",
  receivables: "Receivables & Allowance Method",
};
