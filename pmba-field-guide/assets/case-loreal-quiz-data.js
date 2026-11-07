const QUIZ_QUESTIONS = [
  {
    "source": "glance",
    "prompt": "Who took responsibility for Plénitude in early 1996?",
    "options": [
      "Lindsay Owen-Jones",
      "Guy Peyrelongue",
      "Carol Hamilton",
      "Joseph Campinell"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Carol Hamilton, SVP Marketing in the Retail Division, took the brand in early 1996. Campinell led the division."
  },
  {
    "source": "story",
    "prompt": "What does “trickle down and fire up” describe?",
    "options": [
      "Price cuts at retail trigger higher trade promotion",
      "Local innovations are rolled out globally",
      "Prestige-brand technology reaches mass brands, whose volume funds new R&D",
      "Mass-brand technology moves up to prestige brands"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Technology developed for prestige lines is leveraged in mass outlets where volumes are high, and the resulting profits fund the next generation of R&D."
  },
  {
    "source": "story",
    "prompt": "How many SKUs did Plénitude introduce in the U.S. in 1988?",
    "options": [
      "10",
      "14",
      "19",
      "8"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The U.S. strategy was to introduce the entire line at once: 14 SKUs. (The 1995 line had 19 items: 5 daily, 8 treatment, 6 cleansers.)"
  },
  {
    "source": "story",
    "prompt": "Which statement about the 1982 French launch of Plénitude is correct?",
    "options": [
      "A single moisturizer launched at a 30% price premium",
      "A full line launched at parity pricing",
      "Three moisturizers launched on television",
      "A cleanser launched first in department stores"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "France began with one general-purpose moisturizer, priced 30% above incumbents; cleansers were added in 1986."
  },
  {
    "source": "story",
    "prompt": "In what year did L’Oréal buy out Nestlé’s stake in Cosmair, making it a wholly owned subsidiary?",
    "options": [
      "1991",
      "1996",
      "1988",
      "1994"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "1994. Until then Cosmair had been the U.S. licensee of L’Oréal."
  },
  {
    "source": "market",
    "prompt": "Which brand’s moisturizer dollar share rose most between 1991 and 1995 (Exhibit 7)?",
    "options": [
      "Neutrogena",
      "Almay",
      "Pond’s",
      "Olay"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Pond’s rose from 5.0 to 15.1. Olay fell from 38.3 to 28.2."
  },
  {
    "source": "market",
    "prompt": "What proportion of Plénitude moisturizer units were treatment products in 1995?",
    "options": [
      "12%",
      "49%",
      "35%",
      "65%"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "65% treatment, 35% daily. Olay was 88% daily."
  },
  {
    "source": "market",
    "prompt": "Which brand held 21.6% of 1995 mass cleanser dollars in the ACNielsen table?",
    "options": [
      "Olay",
      "Neutrogena",
      "Plénitude",
      "Noxzema"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Noxzema held 21.6% of cleanser dollars; Plénitude held 3.4%."
  },
  {
    "source": "numbers",
    "prompt": "How does the case tell you to estimate Plénitude’s item costs?",
    "options": [
      "25% of the retail price",
      "25% of the trade price",
      "40% of net sales",
      "Equal to advertising spend"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Footnote 4: use 25% of the trade prices in Exhibit 8A as item costs."
  },
  {
    "source": "numbers",
    "prompt": "What was Plénitude’s 1995 pre-tax result?",
    "options": [
      "Profit of $3.8MM",
      "Loss of $12.5MM",
      "Loss of $25.4MM",
      "Break-even"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Loss of $12.5MM in 1995. The $25.4MM loss was 1990’s."
  },
  {
    "source": "numbers",
    "prompt": "In 1990, how did Plénitude’s advertising and promotion compare with its net sales?",
    "options": [
      "About 80% of sales",
      "Equal to sales",
      "Less than half of sales",
      "Higher than sales ($35.5MM versus $31.7MM)"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "A&P of $35.5MM exceeded net sales of $31.7MM."
  },
  {
    "source": "numbers",
    "prompt": "Approximately what share of Q1 1996 Plénitude dollar sell-through was Revitalift Face (Exhibit 14)?",
    "options": [
      "22%",
      "40%",
      "5%",
      "12%"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "$5,679,850 ÷ $25,807,235 is about 22%."
  },
  {
    "source": "research",
    "prompt": "Which benefit segment was the largest in the 1995 Facial Skin Care Market Study?",
    "options": [
      "Age Focused",
      "Unconcerned",
      "Stressed Out",
      "Price Conscious Socializers"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Unconcerned: 25% of respondents, who basically buy on price."
  },
  {
    "source": "research",
    "prompt": "What is Plénitude’s awareness-to-trial conversion ratio in Exhibit 11?",
    "options": [
      "29%",
      "30%",
      "23%",
      "78%"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "29%: 23% ever tried divided by 78% aware (about 29.5%). 23% is the trial rate and 30% is the retention ratio."
  },
  {
    "source": "research",
    "prompt": "In the Plénitude acceptor/rejector groups, what did many say motivated trial?",
    "options": [
      "A friend’s recommendation",
      "The L’Oréal brand name",
      "Coupons and samples",
      "A dermatologist"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The L’Oréal name was cited by many as the primary motivator; the Plénitude name meant little to them."
  },
  {
    "source": "frameworks",
    "prompt": "On a perceptual map, arrows that point in the same general direction indicate attributes that are:",
    "options": [
      "Highly correlated",
      "Unrelated to each other",
      "Measured on different scales",
      "Rated by different respondents"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Per Appendix A, arrows pointing the same way show highly correlated attributes."
  },
  {
    "source": "frameworks",
    "prompt": "Retention ratio in an awareness-trial-usage study is:",
    "options": [
      "Currently using ÷ ever tried",
      "Ever tried ÷ aware",
      "Repeat purchases ÷ units sold",
      "Aware ÷ total sample"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Retention = % currently using ÷ % ever tried; conversion = % ever tried ÷ % aware."
  },
  {
    "source": "caseb",
    "prompt": "In 2009, L’Oréal’s global ad spending ($4.56 billion) ranked behind which two companies?",
    "options": [
      "Coca-Cola and Nestlé",
      "Estee Lauder and Avon",
      "P&G and Unilever",
      "Revlon and Unilever"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Exhibit 5 and text: third-largest advertiser behind P&G and Unilever."
  }
];
