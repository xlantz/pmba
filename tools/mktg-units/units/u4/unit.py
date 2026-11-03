# Unit 4 (Week 4): Customer Lifetime Value. Chapters 8, 19 + Unit_4 slides.

META = {
  "week": 4,
  "nav": "Customer Lifetime Value",
  "title": "Products, loyalty &amp; customer lifetime value",
  "title_plain": "Products, loyalty & customer lifetime value",
  "description": "MKTG 6090 Unit 4 (Week 4): designing and managing products, building customer loyalty, plus the professor's slides on discounted cash flow, customer lifetime value formulas (rebuilt and verified), and marketing planning with the 4Cs and SWOT.",
  "lede": "What you sell (Ch 8) and how you keep the people who buy it (Ch 19). The slides put a number on keeping them: discounted cash flow, customer lifetime value under different churn and contract assumptions, and the 4Cs and SWOT that turn the numbers into a marketing plan.",
  "glance": """      <ul style="margin:0 0 12px;">
        <li><strong>Week 4 topic:</strong> Customer Lifetime Value.</li>
        <li><strong>Reading:</strong> Chapters 8 and 19.</li>
        <li><strong>Quiz</strong> on the chapters, due Monday evening.</li>
        <li><strong>Case:</strong> Virgin Mobile USA, &ldquo;Pricing for the Very First Time.&rdquo;</li>
        <li><strong>Markstrat:</strong> Decision 3.</li>
      </ul>
      <p style="margin:0;"><strong>How the pieces connect.</strong> Chapter 19 explains why loyalty and retention matter; the CLTV formulas say how much they are worth in dollars, which is exactly the question behind any pricing or contract decision in Virgin Mobile. The 4Cs and SWOT organize everything else you know into a plan.</p>""",
  "walk_heading": "Chapters 8 and 19 and the Unit 4 slides",
  "quiz_blurb": "Covers both chapters plus NPV, the CLTV formulas, the contract-then-churn example and the 4Cs / SWOT.",
  "angles": [
    "Match a product differentiator, design principle or line-stretching move to an example (Ch 8).",
    "Explain the acquisition funnel, satisfaction vs. loyalty, and CRM tools (Ch 19).",
    "Compute an NPV by discounting each cash flow and subtracting the outlay.",
    "Pick the right CLTV formula for the timing assumption: m&middot;r/(1+i&minus;r) vs. m/(1+i&minus;r), minus AC.",
    "Value a contract as a no-churn annuity plus a discounted churning tail.",
    "Sort facts into the 4Cs and SWOT; explain &ldquo;can&rsquo;t get there from here.&rdquo;",
  ],
  "footer": "MKTG 6090 &mdash; Marketing Management, University of Utah PMBA. Textbook sections from the Chapter 8 and 19 pages (Kotler/Keller/Chernev, <em>Marketing Management</em>, 17th ed.); slide sections from the Unit 4 slides. The CLTV formulas were scrambled in extraction and have been rebuilt from their definitions and checked numerically.",
  "card": {"blurb": "Designing products and building loyalty, plus NPV, the CLTV formulas (derived and checked), contracts vs. churn, and the 4Cs and SWOT.",
           "tags": ["Ch 8, 19", "CLTV Formulas", "4Cs & SWOT"]},
  "parts": [
    {"chapter": 8}, {"chapter": 19},
    {"authored": ["u4_dcf", "u4_cltv", "u4_contract", "u4_plan", "u4_case"]},
  ],
}

LABELS = {
  "u4_dcf": "Unit 4 · Time Value & NPV",
  "u4_cltv": "Unit 4 · CLTV Formulas",
  "u4_contract": "Unit 4 · Contract-Then-Churn CLTV",
  "u4_plan": "Unit 4 · 4Cs, We/They & SWOT",
  "u4_case": "Unit 4 · Case Prompt: Virgin Mobile",
}

FLASHCARDS = [
  ("u4_dcf", "What is $1 worth in two years at 5%?", "$1 x 1.05 x 1.05 = $1.1025."),
  ("u4_dcf", "Present value formula?", "PV = FV / (1 + i)^n."),
  ("u4_dcf", "NPV of $100 now for $40 a year for 3 years at 5%?", "40/1.05 + 40/1.05^2 + 40/1.05^3 - 100 = 38.10 + 36.28 + 34.55 - 100 = about $8.93 (slide shows $8.92)."),
  ("u4_cltv", "CLTV with a known average lifetime N?", "Sum over n = 1..N of M_n / (1 + i)^n, minus acquisition cost."),
  ("u4_cltv", "CLTV with a retention rate?", "Sum over n of M_n x r^n / (1 + i)^n, minus acquisition cost."),
  ("u4_cltv", "'Most common' constant-margin CLTV and its assumptions?", "m x r / (1 + i - r) - AC; first margin at end of period 1, customers can churn during period 1."),
  ("u4_cltv", "Case-version constant-margin CLTV and its assumption?", "m / (1 + i - r) - AC; no churn before the first margin."),
  ("u4_cltv", "m = $22/month, i = 0.004166, r = 0.98: case CLTV gross of AC?", "22 / (1.004166 - 0.98) = $910.37."),
  ("u4_cltv", "The trick behind the closed-form CLTV formulas?", "With a = r/(1+i), S = a + a^2 + ... satisfies S = a + aS, so S = a/(1 - a) = r/(1 + i - r)."),
  ("u4_contract", "Contract-then-churn CLTV pieces (slides)?", "24 months of $22 discounted = $501.47; tail 22/(1.004166 - 0.94) discounted = $309.02; minus $370 AC = $440.49."),
  ("u4_contract", "Why does 6% churn after a 2-year contract still hurt vs. steady 2%?", "The tail decays fast: gross value is $810.49 vs. $910 at steady 2%."),
  ("u4_plan", "The 4Cs of the situation analysis?", "Customers, company, competitors, collaborators."),
  ("u4_plan", "What is a we/they analysis?", "Comparing the company with competitors on marketing and manufacturing skills, financial resources, cost structure, brand image and other strengths and weaknesses."),
  ("u4_plan", "\"Can't get there from here\"?", "A competitive disadvantage too large to close, so the plan should avoid competing on it."),
  ("u4_plan", "SWOT: which parts are internal and external?", "Strengths and weaknesses are internal; opportunities and threats are external."),
]

QUIZ = [
  ("u4_dcf", "A $100 investment returns $40 at the end of each of the next three years. At 5%, its NPV is closest to:",
   ["$20.00", "$8.93", "$14.29", "-$8.93"], 1,
   "38.10 + 36.28 + 34.55 - 100 = 8.93. The undiscounted $20 gain shrinks because it arrives in the future."),
  ("u4_dcf", "At a 5% discount rate, what is $1.1025 received in two years worth today?",
   ["$1.05", "$1.1025", "$1.00", "$0.95"], 2,
   "PV = 1.1025 / 1.05^2 = $1.00."),
  ("u4_cltv", "Which CLTV formula assumes customers cannot churn before the first margin?",
   ["m x r / (1 + i - r) - AC", "m x N - AC", "m / (1 + i) - AC", "m / (1 + i - r) - AC"], 3,
   "The case formula, m/(1+i-r), starts the series with a full m/(1+i)."),
  ("u4_cltv", "Margin is $22 a month, the monthly discount rate 0.004166 and retention 0.98. Using the 'most common' formula, CLTV gross of acquisition cost is about:",
   ["$892", "$910", "$1,100", "$22"], 0,
   "22 x 0.98 / (1.004166 - 0.98) = $892.16."),
  ("u4_cltv", "Same inputs, but with the case formula m / (1 + i - r). Gross CLTV is about:",
   ["$892", "$1,078", "$910", "$540"], 2,
   "22 / 0.024166 = $910.37, the $910 used in the case discussion."),
  ("u4_cltv", "Holding everything else equal, raising the retention rate r will:",
   ["Lower CLTV, because the denominator grows", "Raise CLTV, because (1 + i - r) gets smaller", "Leave CLTV unchanged", "Raise acquisition cost"], 1,
   "A higher r shrinks the denominator 1 + i - r, so CLTV rises."),
  ("u4_contract", "In the slides' contract example, what is the CLTV after the $370 acquisition cost?",
   ["$501.47", "$910.00", "$810.49", "$440.49"], 3,
   "$501.47 (24 months, no churn) + $309.02 (discounted 6%-churn tail) - $370 = $440.49."),
  ("u4_contract", "Why is the post-contract value 22/(1.004166 - 0.94) divided by (1.004166)^25 in the slides?",
   ["To discount the tail, valued at the end of the contract, back to today", "To add interest earned during the contract", "To convert annual margins to monthly ones", "To subtract the acquisition cost"], 0,
   "The tail is valued at the point the contract ends and must be discounted back to the present."),
  ("u4_plan", "A company finds its rival has far larger manufacturing scale and no realistic way to match it. The slides call this:",
   ["A competitive advantage", "\"Can't get there from here\"", "An opportunity", "A collaborator gap"], 1,
   "A disadvantage too big to close; the plan should compete elsewhere."),
  ("u4_plan", "In a SWOT built from the 4Cs, a competitor's new low-price product is a:",
   ["Strength", "Weakness", "Opportunity", "Threat"], 3,
   "It is external and harmful, so it is a threat."),
]
