const FLASHCARDS = [
  // ---- Contingencies & Warranties ----
  { source: "contingent", front: "What three ingredients does a liability need before it's recorded?", back: "A present obligation, arising from a past event, where payment is probable and can be reasonably estimated." },
  { source: "contingent", front: "If a payout is probable AND estimable, what happens?", back: "The liability and matching expense are recorded on the financial statements right now." },
  { source: "contingent", front: "If a payout is probable but NOT estimable, what happens?", back: "It's disclosed in the footnotes only — described, but not given a dollar figure on the balance sheet." },
  { source: "contingent", front: "If a payout is 'reasonably possible' (but not probable), what happens?", back: "It's disclosed in the footnotes only, regardless of whether it can be estimated." },
  { source: "contingent", front: "If a payout is 'remote' (unlikely), what happens?", back: "Nothing — it's neither recorded nor disclosed anywhere in the financial statements." },
  { source: "contingent", front: "Does a signed note payable with a stated dollar amount need the probable/possible/remote analysis?", back: "No — it's a definite, known liability with no uncertainty, so it just gets recorded outright at its full amount." },
  { source: "contingent", front: "What's the formula for warranty expense, and when is it recorded?", back: "Units Sold × Expected Repair Rate × Average Repair Cost — recorded all at once, at the time of sale, covering the whole batch's expected repair cost." },
  { source: "contingent", front: "What's the formula for warranty liability at a point in time?", back: "Total Estimated Repair Cost − Repairs Already Performed — the running balance still owed." },
  { source: "contingent", front: "500,000 units sold, 3% expected repair rate, $160 average repair cost. What's the warranty expense?", back: "500,000 × 3% × $160 = 15,000 units × $160 = $2,400,000." },
  { source: "contingent", front: "Same scenario, but 12,000 units have already been repaired. What's the warranty liability?", back: "(15,000 − 12,000) × $160 = 3,000 × $160 = $480,000." },
  { source: "contingent", front: "When a customer actually brings in a product for a warranty repair, does that create a new expense?", back: "Not if the original estimate was reasonable — the expense was already recorded at the time of sale. Servicing the claim just draws down the liability already on the books." },
  { source: "contingent", front: "If actual warranty claims end up exceeding the original estimate, how is that handled?", back: "The estimate is revised prospectively — the revision affects only the current and future periods' expense, without restating prior periods." },

  // ---- Short-Term Notes ----
  { source: "shortterm", front: "What's the core lesson about interest accrual on short-term notes?", back: "Interest accrues continuously, day by day, regardless of when cash actually moves. 'No payment yet' does not mean 'no expense yet.'" },
  { source: "shortterm", front: "What's the simple interest formula?", back: "Interest = Principal × Annual Rate × (Days Outstanding ÷ 365)." },
  { source: "shortterm", front: "A $100,000 note at 12% has been outstanding for 46 days at year-end, with nothing paid yet. What interest should be accrued?", back: "$100,000 × 12% × (46 ÷ 365) = $1,512, recorded as Interest Expense and Interest Payable at year-end." },
  { source: "shortterm", front: "On a year-end balance sheet, what TWO separate liabilities appear for an outstanding note?", back: "Note Payable (the principal) and Interest Payable (interest accrued but not yet paid) — two separate line items for the same loan." },
  { source: "shortterm", front: "When a note that spans a fiscal year-end reaches maturity, what three things happen in one entry?", back: "(1) Record the remaining period's interest expense, (2) close out the Interest Payable set up at the prior year-end, (3) pay principal plus all accumulated interest in cash." },
  { source: "shortterm", front: "How can you check that a year-end accrual split the interest correctly across two fiscal years?", back: "The two pieces of interest expense (this year's accrual + next year's remainder) should sum to the same total as calculating interest on the whole loan in one shot, start to finish." },

  // ---- Installment Notes & Mortgages ----
  { source: "installment", front: "Why does the interest portion of a fixed mortgage payment shrink over time?", back: "Because interest is calculated on the CURRENT outstanding balance, not the original loan amount — as the balance shrinks with each payment, so does the interest charged on it." },
  { source: "installment", front: "In what order do you split a fixed loan payment into interest and principal?", back: "First, Interest portion = Current Balance × Periodic Rate. Then, Principal portion = Total Payment − Interest portion. Finally, New Balance = Old Balance − Principal portion." },
  { source: "installment", front: "A $300,000 mortgage at 6% annual, paid monthly, has a $1,799 fixed payment. What's the interest and principal in Month 1?", back: "Interest = $300,000 × (6%÷12) = $1,500. Principal = $1,799 − $1,500 = $299. New balance = $299,701." },
  { source: "installment", front: "Why does loan payoff accelerate the longer a mortgage runs?", back: "As the balance shrinks, less of each fixed payment is needed for interest, so more of it goes toward principal — compounding faster and faster over the life of the loan." },
  { source: "installment", front: "What is an amortization schedule?", back: "A period-by-period table showing how each fixed payment splits into interest and principal, and how the remaining loan balance shrinks over time." },
  { source: "installment", front: "What is the 'current portion of long-term debt,' and how do you find it?", back: "The PRINCIPAL due within the next 12 months — found by looking one year ahead in the amortization schedule and summing just that year's principal-reduction column. It's never the whole remaining balance." },

  // ---- Bonds ----
  { source: "bonds", front: "What is a bond, in plain terms?", back: "A structured loan where a company borrows from many investors at once, promising regular coupon (interest) payments plus repayment of the face value at maturity." },
  { source: "bonds", front: "Why might a company issue bonds instead of taking a bank loan or issuing stock?", back: "Access (raising large amounts from many investors at once), Terms (locking in a rate and maturity up front), and Control (borrowing without giving up ownership or voting rights)." },
  { source: "bonds", front: "How do bond credit ratings relate to the return investors demand?", back: "Lower risk (AAA/AA) → lower required return. Higher risk (BB/B/CCC and below) → higher required return — similar to how a personal credit score affects loan terms." },
  { source: "bonds", front: "What determines whether a bond sells at par, a discount, or a premium?", back: "Compare the stated (coupon) rate to the market rate: equal → par. Stated below market → discount (below face value). Stated above market → premium (above face value)." },
  { source: "bonds", front: "Why would a bond with a below-market stated rate sell below face value?", back: "Investors won't pay full face value for a coupon that pays less than what they could get elsewhere at the current market rate, so the price has to drop to compensate." },
  { source: "bonds", front: "What is a bond's price, formula-wise?", back: "Price = PV of the coupon payments (as an annuity) + PV of the face value (as a single sum), both discounted at the MARKET rate, never the stated rate." },
  { source: "bonds", front: "$1,000,000 face, 6% stated (semiannual), 5 years, 8% market rate. What's the bond's price, and is it a discount or premium?", back: "Approximately $918,891 — a discount, since the 6% stated rate is below the 8% market rate." },
  { source: "bonds", front: "What is 'Discount on Bonds Payable,' and what kind of account is it?", back: "A contra-liability account that reduces Bonds Payable down to the bond's actual issue price — not a separate debt, just an offset that shrinks to zero as the bond nears maturity." },
  { source: "bonds", front: "Under the effective interest method, how is each period's interest expense calculated?", back: "Interest Expense = Carrying Amount × Market Rate per period — recalculated from the bond's current, evolving carrying value each period." },
  { source: "bonds", front: "For a bond issued at a discount, why is interest expense higher than the cash coupon paid?", back: "Interest expense uses the market rate (higher) applied to carrying value, while the cash coupon uses the stated rate (lower) applied to face value; the gap is the discount amortizing away, gradually raising carrying value toward face value." },
  { source: "bonds", front: "Continuing the $918,891 discount-bond example: first-period cash coupon is $30,000, and interest expense is $36,756. What's the new carrying value after this period?", back: "Discount amortized = $36,756 − $30,000 = $6,756. New carrying value = $918,891 + $6,756 = $925,647." },
  { source: "bonds", front: "How do you compute gain or loss on early retirement of a bond?", back: "Carrying Amount at time of retirement − Cash Paid to Retire. Paying less than carrying amount = gain. Paying more = loss." },

  // ---- Debt Ratios & Present Value ----
  { source: "ratios", front: "What's the difference between 'total liabilities' and 'interest-bearing debt'?", back: "Total liabilities = everything a company owes (A/P, wages, taxes, loans, bonds — all of it). Interest-bearing debt = only the narrower slice that actually charges interest (notes, bonds, mortgages, leases)." },
  { source: "ratios", front: "What's the formula for liabilities-to-equity, and is it averaged like ROE?", back: "Total Liabilities ÷ Total Stockholders' Equity, both at a single point in time — NOT averaged, since both figures are balance-sheet snapshots rather than period flows." },
  { source: "ratios", front: "What's the formula for debt-to-equity, and how does it differ from liabilities-to-equity?", back: "Interest-Bearing Debt ÷ Total Stockholders' Equity — same idea as liabilities-to-equity, but using only the interest-charging slice of liabilities in the numerator." },
  { source: "ratios", front: "What is Times Interest Earned, and why does it use EBIT instead of net income?", back: "EBIT ÷ Interest Expense. It uses EBIT (profit before interest and taxes) because the question is whether operating profit alone can cover the interest bill — which you can't assess if interest has already been subtracted from the profit figure." },
  { source: "ratios", front: "What's the difference between the current ratio and the quick ratio?", back: "Current ratio = Current Assets ÷ Current Liabilities. Quick ratio = (Cash + Receivables) ÷ Current Liabilities — a stricter version that excludes inventory, which can be slow to convert to cash." },
  { source: "ratios", front: "How can large stock buybacks (treasury stock) distort debt-to-equity-style ratios?", back: "Buybacks reduce stockholders' equity — sometimes even making it negative — which inflates debt-to-equity ratios without any actual change in the company's debt. Analysts sometimes add treasury stock back to both equity and assets for a cleaner comparison." },
  { source: "ratios", front: "What do present value (PV) and future value (FV) each answer?", back: "PV asks what a future payment (or stream of payments) is worth today. FV asks what today's money grows into by a future date — both rest on the idea that money today is worth more than the same amount later." },
  { source: "ratios", front: "What kind of cash flow is a bond's coupon payment stream, and how is it priced?", back: "An annuity (a series of equal, repeating payments) — priced using the present-value-of-an-annuity formula, separate from the face value's single-sum present value." },
];

const SOURCE_LABELS = {
  contingent: "Contingencies & Warranties",
  shortterm: "Short-Term Notes",
  installment: "Installment Notes & Mortgages",
  bonds: "Bonds",
  ratios: "Debt Ratios & PV",
};
