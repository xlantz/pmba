const QUIZ_QUESTIONS = [
  {
    "source": "numbers",
    "prompt": "What is the Tronn's list price in Exhibit 3?",
    "options": [
      "$2,000",
      "$1,538",
      "$1,700",
      "$11,000"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Exhibit 3 lists Tronn at $2,000 price and $1,538 cost."
  },
  {
    "source": "numbers",
    "prompt": "What is Ontario Zink's cost per server?",
    "options": [
      "$1,700",
      "$1,214",
      "$1,538",
      "$750"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Zink: $1,700 price, $1,214 cost."
  },
  {
    "source": "market",
    "prompt": "What revenue share does Ontario hold in basic servers?",
    "options": [
      "20%",
      "36%",
      "50%",
      "14%"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The case states 50%; 20% is Atlantic's share in High Performance."
  },
  {
    "source": "players",
    "prompt": "How is Cadena's sales force compensated?",
    "options": [
      "About 30% salary and 70% commission",
      "All commission",
      "All salary",
      "About 70% salary and 30% commission"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Page 5 gives roughly 70/30 salary/commission."
  },
  {
    "source": "glance",
    "prompt": "By how much can PESA speed up a Tronn, per the case?",
    "options": [
      "Up to four times",
      "Up to two times",
      "Up to ten times",
      "About 14%"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The case says up to four times faster than standard speed."
  },
  {
    "source": "numbers",
    "prompt": "Which application has the largest with/without PESA ratio in Exhibit 2?",
    "options": [
      "File sharing",
      "Web services",
      "e-Mail",
      "Graphics"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Web services 2222 vs 542, about 4.1; file sharing is about 2.0."
  },
  {
    "source": "numbers",
    "prompt": "Which pair scored slightly lower with PESA than without?",
    "options": [
      "e-Mail and enterprise",
      "File sharing and web services",
      "High performance workloads and graphics",
      "Web services and graphics"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "180 vs 187 and 280 vs 281."
  },
  {
    "source": "market",
    "prompt": "What are projected basic-segment units in 2003 (Exhibit 1)?",
    "options": [
      "70,000",
      "210,500",
      "302,500",
      "92,000"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Basic 50,000 / 70,000 / 92,000."
  },
  {
    "source": "numbers",
    "prompt": "What PESA attach rate does footnote 5 assume?",
    "options": [
      "50%",
      "25%",
      "30%",
      "14%"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Half of Atlantic basic servers are assumed to carry PESA; 30% is the mark-up."
  },
  {
    "source": "numbers",
    "prompt": "Footnote 6 asks for what kind of sharing and time basis?",
    "options": [
      "30% to Atlantic, three years",
      "50-50 sharing of one year of savings",
      "Full savings to Atlantic, one year",
      "50-50 sharing over three years"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The three-year server life is noted, but a per-annum estimate is requested."
  },
  {
    "source": "glance",
    "prompt": "Which is NOT one of the four routes Jowers lists?",
    "options": [
      "Give PESA away",
      "Price equal to four Zinks",
      "Price below Ontario's Zink to win share",
      "Value-in-use price"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The four routes are free, four-Zink price, cost-plus PESA, value-in-use."
  },
  {
    "source": "glance",
    "prompt": "What is DayTraderJournal.com's top-ranked buying criterion?",
    "options": [
      "Top-notch post-sales support",
      "Flexible payment terms",
      "Maximum computing speed",
      "Minimize acquisition costs"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Possession cost is second; processing many requests is third."
  },
  {
    "source": "numbers",
    "prompt": "How many basic servers can one administrator manage per Exhibit 3?",
    "options": [
      "40",
      "20",
      "4",
      "80"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "20 is for High Performance servers."
  },
  {
    "source": "players",
    "prompt": "Who was not in the kickoff marketing meeting?",
    "options": [
      "Chris Matzer",
      "Jairo Cadena",
      "Harry Fowler",
      "Emily Jones"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The four attendees were Jowers, Matzer, Jones and Fowler."
  },
  {
    "source": "players",
    "prompt": "What is Matzer's stated belief about software tools?",
    "options": [
      "They should be priced above hardware",
      "They are the main profit source",
      "They should generally be free",
      "They should be sold only through partners"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Page 4."
  },
  {
    "source": "frameworks",
    "prompt": "What is mixed bundling?",
    "options": [
      "Items sold only as a bundle",
      "Two different prices for one item",
      "A bundle sold to two segments only",
      "Items sold separately and also as a bundle"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Pure bundling is the 'only as a bundle' case."
  },
  {
    "source": "frameworks",
    "prompt": "Economic value to the customer equals...",
    "options": [
      "Reference alternative price plus value of differences",
      "Seller's cost plus mark-up",
      "The competitor's price minus the seller's cost",
      "Total market size times price"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "EVC starts from the next-best alternative."
  },
  {
    "source": "frameworks",
    "prompt": "Unit contribution margin is...",
    "options": [
      "Price divided by cost",
      "Price minus unit variable cost",
      "Fixed cost divided by units",
      "Revenue minus total fixed cost"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Break-even units = fixed cost / unit contribution."
  }
];
