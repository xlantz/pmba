const QUIZ_QUESTIONS = [
 {
  "source": "glance",
  "prompt": "What subscriber goal did Schulman set for the end of the first year?",
  "options": [
   "1 million",
   "500,000",
   "2 million",
   "3 million"
  ],
  "correctIndex": 0,
  "correctFeedback": "Correct.",
  "incorrectFeedback": "Not quite.",
  "explanation": "The goal was 1 million by the end of year one and 3 million by year four."
 },
 {
  "source": "glance",
  "prompt": "What kind of operator is Virgin Mobile USA?",
  "options": [
   "A facilities-based carrier with its own towers",
   "An MVNO that buys minutes on Sprint's network as used",
   "A reseller of Verizon handsets only",
   "A prepaid-only calling-card company"
  ],
  "correctIndex": 1,
  "correctFeedback": "Correct.",
  "incorrectFeedback": "Not quite.",
  "explanation": "It is a 50-50 JV with Sprint hosted on Sprint's PCS network; minutes are bought as used."
 },
 {
  "source": "market",
  "prompt": "Which carrier had the most subscribers in Exhibit 1 (Q4 2001)?",
  "options": [
   "Cingular",
   "Sprint",
   "Verizon",
   "AT&T (affiliates)"
  ],
  "correctIndex": 2,
  "correctFeedback": "Correct.",
  "incorrectFeedback": "Not quite.",
  "explanation": "Verizon had 29.5 million, ahead of Cingular at 21.7 million."
 },
 {
  "source": "market",
  "prompt": "Which was NOT a reason the case gives for big carriers avoiding youth?",
  "options": [
   "Poor credit quality",
   "Assumed low or irregular usage",
   "High acquisition cost versus customer value",
   "Youth penetration was already saturated"
  ],
  "correctIndex": 3,
  "correctFeedback": "Correct.",
  "incorrectFeedback": "Not quite.",
  "explanation": "Youth penetration was low in the U.S. with robust projected growth; the other three are reasons given."
 },
 {
  "source": "market",
  "prompt": "In Exhibit 2, which U.S. age group has the highest penetration?",
  "options": [
   "Ages 15-19",
   "Ages 30-59",
   "Ages 20-29",
   "All groups are equal"
  ],
  "correctIndex": 1,
  "correctFeedback": "Correct.",
  "incorrectFeedback": "Not quite.",
  "explanation": "The U.S. is the one country shown where the 30-59 group is highest, with youth much lower."
 },
 {
  "source": "carriers",
  "prompt": "Using the case's industry averages, what is the implied monthly gross margin per subscriber?",
  "options": [
   "$52",
   "$30",
   "$22 ($52 bill minus $30 cost to serve)",
   "$370"
  ],
  "correctIndex": 2,
  "correctFeedback": "Correct.",
  "incorrectFeedback": "Not quite.",
  "explanation": "$52 average bill minus about $30 cost to serve gives $22 per month."
 },
 {
  "source": "carriers",
  "prompt": "Which is NOT a component of acquisition cost in Exhibit 11?",
  "options": [
   "Network cost per minute",
   "Advertising per gross add",
   "Sales commission per subscriber",
   "Handset subsidy"
  ],
  "correctIndex": 0,
  "correctFeedback": "Correct.",
  "incorrectFeedback": "Not quite.",
  "explanation": "Network cost is part of CCPU (cost to serve), not acquisition cost."
 },
 {
  "source": "carriers",
  "prompt": "What share of U.S. subscribers had contracts, and what share of prospects failed credit checks?",
  "options": [
   "About 50% had contracts; 10% failed",
   "Over 90% had contracts; 3% failed",
   "About 92% prepaid; 30% failed",
   "Over 90% had contracts; 30% failed checks"
  ],
  "correctIndex": 3,
  "correctFeedback": "Correct.",
  "incorrectFeedback": "Not quite.",
  "explanation": "The case says over 90% had contracts and that 30% of prospective customers failed credit checks."
 },
 {
  "source": "virgin",
  "prompt": "What sales commission does Virgin pay Target and Best Buy per phone?",
  "options": [
   "$100",
   "$30 (versus about $100 industry)",
   "$60",
   "$10"
  ],
  "correctIndex": 1,
  "correctFeedback": "Correct.",
  "incorrectFeedback": "Not quite.",
  "explanation": "Virgin's channel agreements charge $30 per phone; the industry average is $100."
 },
 {
  "source": "virgin",
  "prompt": "What does Virgin pay Kyocera per handset?",
  "options": [
   "$150 to $300",
   "$30 to $60",
   "$60 to $100",
   "$100 to $200"
  ],
  "correctIndex": 2,
  "correctFeedback": "Correct.",
  "incorrectFeedback": "Not quite.",
  "explanation": "Industry handset costs were $150 to $300; Virgin's contract with Kyocera was $60 to $100."
 },
 {
  "source": "virgin",
  "prompt": "About how large is Virgin Mobile USA's advertising budget?",
  "options": [
   "About $60 million",
   "About $650 million",
   "About $1.8 billion",
   "About $6 million"
  ],
  "correctIndex": 0,
  "correctFeedback": "Correct.",
  "incorrectFeedback": "Not quite.",
  "explanation": "Virgin's budget was about $60M, compared with over $650M for Verizon alone."
 },
 {
  "source": "pricing",
  "prompt": "How did off-peak start times change over time?",
  "options": [
   "From 9 pm to 6 pm",
   "From 8 pm to 10 pm",
   "They stayed at 6 pm",
   "From 6 pm to 7, 8, then 9 pm"
  ],
  "correctIndex": 3,
  "correctFeedback": "Correct.",
  "incorrectFeedback": "Not quite.",
  "explanation": "Off-peak originally began at 6 pm and shifted later in steps to 9 pm."
 },
 {
  "source": "pricing",
  "prompt": "What does the note on Exhibit 10b say about each additional off-peak hour?",
  "options": [
   "It raises price by 1.5 cents",
   "It lowers average price per minute by about 1.5 cents",
   "It lowers price by 15 cents",
   "It has no effect"
  ],
  "correctIndex": 1,
  "correctFeedback": "Correct.",
  "incorrectFeedback": "Not quite.",
  "explanation": "The note says prices assume off-peak starting at 9 pm and each additional off-peak hour cuts average price per minute by about 1.5 cents."
 },
 {
  "source": "pricing",
  "prompt": "What are the case's churn figures for contract vs no contract/prepaid?",
  "options": [
   "6% vs 2% per month",
   "1% vs 3% per month",
   "2% vs 6% per month",
   "2% vs 12% per month"
  ],
  "correctIndex": 2,
  "correctFeedback": "Correct.",
  "incorrectFeedback": "Not quite.",
  "explanation": "Industry churn averaged 2% with contracts; estimated to climb to 6% per month without them (and 6% for prepaid)."
 },
 {
  "source": "cltv",
  "prompt": "What is the case's simple CLTV formula?",
  "options": [
   "M / (1 - r + i) - AC",
   "M / (1 + r - i) - AC",
   "M r / (1 - r + i) + AC",
   "M (1 - r + i) - AC"
  ],
  "correctIndex": 0,
  "correctFeedback": "Correct.",
  "incorrectFeedback": "Not quite.",
  "explanation": "Exhibit 11 gives LTV = M/(1 - r + i) - AC, under constant margin and infinite life."
 },
 {
  "source": "cltv",
  "prompt": "How does the slide \"most common\" variant, m r/(1 + i - r), relate to the case formula?",
  "options": [
   "It equals the case value divided by r",
   "It is identical to the case formula",
   "It equals the case value plus r",
   "It equals r times the case value (before AC)"
  ],
  "correctIndex": 3,
  "correctFeedback": "Correct.",
  "incorrectFeedback": "Not quite.",
  "explanation": "It assumes customers can churn before the first margin; the extra factor is r."
 },
 {
  "source": "cltv",
  "prompt": "In the general CLTV formula, what is r^(a-1)?",
  "options": [
   "The interest rate for year a",
   "The survival rate for year a",
   "The margin for year a",
   "The acquisition cost"
  ],
  "correctIndex": 1,
  "correctFeedback": "Correct.",
  "incorrectFeedback": "Not quite.",
  "explanation": "Exhibit 11 defines r^(a-1) as the survival rate for year a; the first period has survival 1."
 },
 {
  "source": "cltv",
  "prompt": "What does the case say about Virgin's CCPU in year one?",
  "options": [
   "Constant at $30 per month",
   "Equal to 2% of revenues",
   "Constant at 45% of revenues",
   "Falling from 45% to 30% of revenues"
  ],
  "correctIndex": 2,
  "correctFeedback": "Correct.",
  "incorrectFeedback": "Not quite.",
  "explanation": "Analysts estimated CCPU at 45% of revenues because most costs were variable."
 }
];
