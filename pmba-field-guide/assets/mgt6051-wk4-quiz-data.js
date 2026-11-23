const QUIZ_QUESTIONS = [
  {
    "source": "glance",
    "prompt": "The Leadership Vision Video is due on which date?",
    "options": [
      "Thu 11/26",
      "Tue 12/1",
      "Thu 12/3",
      "Tue 11/24"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The syllabus lists the Leadership Vision Video as due Thursday 11/26. Votes for the best video are due 12/1."
  },
  {
    "source": "glance",
    "prompt": "Which is true about the Part 1 midterm quiz?",
    "options": [
      "Open book with unlimited notes",
      "Closed book, 1 hour, one page of your own notes",
      "Closed book, 2 hours, no notes",
      "Take-home on Canvas over the weekend"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The syllabus: closed book, 1 hour, one page front and back handwritten (or one typed side). The final is the 2-hour exam."
  },
  {
    "source": "glance",
    "prompt": "What is the topic of both Week 4 sessions?",
    "options": [
      "Leadership styles",
      "Hiring and biases",
      "Onboarding / Culture",
      "Values"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Week 4 (11/24 and 11/26) is Onboarding / Culture."
  },
  {
    "source": "glance",
    "prompt": "Which assignment is due on Tuesday 11/24?",
    "options": [
      "Leadership Vision Video",
      "Votes for best video",
      "Paper: Leadership Principles Inventory",
      "Reply to Topic"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Reply to Topic is due 11/24. The LPI paper was Week 3, the video is 11/26, votes are 12/1."
  },
  {
    "source": "orellana",
    "prompt": "According to Tomaskovic-Devey and Orellana, what matters most for getting young workers to stick around?",
    "options": [
      "The social aspects of hiring, especially mutual respect and trust",
      "Free training programs",
      "Flexible remote work",
      "Signing bonuses"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Wages, full-time benefits and bonuses are essential but the authors say the social aspects matter more."
  },
  {
    "source": "orellana",
    "prompt": "Whom did the authors interview?",
    "options": [
      "CEOs of large firms",
      "Workforce development professionals",
      "HR software vendors",
      "Young workers who quit"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "They talked with professionals who help employers find workers and young adults find employers."
  },
  {
    "source": "orellana",
    "prompt": "A new hire arrives and the supervisor says \"Oh, was that today?\" Which practice is being violated?",
    "options": [
      "Build relationships before hiring",
      "Assign a mentor",
      "Ensure a positive first-day reception",
      "Create career jobs"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Practice 4. The article uses this scenario: it reads as \"you do not care\", which can drive early exits."
  },
  {
    "source": "orellana",
    "prompt": "Which scenario best matches the article's advice on mentoring?",
    "options": [
      "Offer mentors only to managers",
      "Let employees volunteer to be mentored if they want",
      "Leave new hires to figure out the culture themselves",
      "Pair each new core-production hire with an assigned mentor"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The article criticizes leaving lower-level onboarding to chance; assign mentors for job skills and informal culture."
  },
  {
    "source": "orellana",
    "prompt": "A supervisor bans phones on the floor with no explanation. What does the article recommend?",
    "options": [
      "Explain why the rule makes sense",
      "Drop the rule",
      "Allow phones only for breaks",
      "Enforce it silently so rules stay firm"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Practice 6: communicate the rule and the reason, otherwise you sound like a coercive parent saying \"just do it\"."
  },
  {
    "source": "orellana",
    "prompt": "A new hire never asks for help even when stuck. Which practice addresses this?",
    "options": [
      "Communicate career progression",
      "Create a culture where young workers can ask questions",
      "Understand non-work lives",
      "Racially equitable workplace"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Practice 7: young workers fear failure and disrespect and hide the need for help; make asking normal."
  },
  {
    "source": "orellana",
    "prompt": "A new hire is repeatedly late because the bus schedule is unreliable. What does the article suggest?",
    "options": [
      "Require a car",
      "Write them up as unreliable",
      "Learn about their non-work life before judging",
      "Move them to another team"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Practice 8: understanding non-work lives prevents mistaking complex lives for bad work habits."
  },
  {
    "source": "orellana",
    "prompt": "Which statement best matches what the authors call the first weeks of employment?",
    "options": [
      "An unpaid trial",
      "A training-only phase",
      "A honeymoon period",
      "A probationary period for both employer and employee"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Both sides are gauging fit: the employer asks whether the hire adapts, the hire asks whether it is a respectful place for a career."
  },
  {
    "source": "orellana",
    "prompt": "What risk does the article raise about job tours, websites and videos?",
    "options": [
      "They can signal non-belonging if everyone shown is white or male",
      "They reveal trade secrets",
      "They delay hiring",
      "They cost too much"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Practice 3: if no one looks like me, I may assume I am not welcome."
  },
  {
    "source": "orellana",
    "prompt": "The authors call a color-blind approach to race:",
    "options": [
      "The safest legal approach",
      "An insult to people of color and immigrants",
      "Required by law",
      "A good first step"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Practice 10: a color-blind approach disregards lived experience of discrimination; check pay, shifts, hours and assignments."
  },
  {
    "source": "kp10",
    "prompt": "Chapter 10 of The Leadership Challenge is:",
    "options": [
      "Set the Example",
      "Celebrate the Values and Victories",
      "Recognize Contributions",
      "Strengthen Others"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Per the published table of contents: Ch 10 Recognize Contributions; Ch 11 is Celebrate the Values and Victories."
  },
  {
    "source": "kp10",
    "prompt": "Commitment 9 is defined as:",
    "options": [
      "Celebrate the values and victories by creating a spirit of community",
      "Envision the future by imagining possibilities",
      "Foster collaboration by building trust",
      "Recognize contributions by showing appreciation for individual excellence"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Commitment 9 belongs to Encourage the Heart. Celebrating values and victories is Commitment 10; fostering collaboration is Commitment 7; envisioning the future is Commitment 3."
  },
  {
    "source": "kp10",
    "prompt": "Which of the Five Practices contains Commitment 9?",
    "options": [
      "Encourage the Heart",
      "Model the Way",
      "Enable Others to Act",
      "Challenge the Process"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Encourage the Heart: Commitments 9 and 10."
  },
  {
    "source": "kp10",
    "prompt": "A manager writes a specific, private thank-you note to an employee who dislikes public praise. Which Chapter 10 idea is this?",
    "options": [
      "Clarify values",
      "Personalize recognition",
      "Celebrate victories as a community",
      "Challenge the process"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Personalize Recognition (an earlier-edition section title) is about fitting appreciation to the individual; the 7th-edition wording was not verified, so check your copy."
  },
  {
    "source": "connect",
    "prompt": "Calling a struggling new hire \"lazy\" without looking at whether they were mentored most resembles which Week 3 concept?",
    "options": [
      "Stage-gate screening",
      "Espoused values",
      "Correspondence bias (blaming character, not situation)",
      "Values alignment"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The article notes strugglers are often labelled lazy or dumb when they simply lack mentoring; the David article calls this blame-the-person pattern the correspondence bias."
  },
  {
    "source": "connect",
    "prompt": "Ingram & Choi report that COOs with low values alignment needed about what pay increase to be as likely to stay as high-alignment COOs?",
    "options": [
      "60%",
      "10%",
      "25%",
      "40%"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The 40% figure is from the Week 1 Ingram & Choi reading; it supports the Week 4 theme that fit and respect matter as much as pay."
  },
  {
    "source": "background",
    "prompt": "General background (not from the readings): in Schein's model, which level is the deepest and least visible?",
    "options": [
      "Basic assumptions",
      "Slogans",
      "Artifacts",
      "Espoused values"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "General background: artifacts are visible, espoused values are stated, basic assumptions are taken for granted. Confirm with the Schein reading when you have it."
  },
  {
    "source": "background",
    "prompt": "General background (not from the readings): a poster says \"Integrity first\" but employees routinely fudge numbers. Which two Schein levels are in conflict?",
    "options": [
      "Artifacts and espoused values",
      "Espoused values and basic assumptions",
      "Artifacts and basic assumptions",
      "None"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "General background: the stated value (espoused) conflicts with what is taken for granted (basic assumption). Not built from the provided readings."
  },
  {
    "source": "glance",
    "prompt": "Which readings were NOT provided as text when this page was built?",
    "options": [
      "David and Jordan et al.",
      "Tomaskovic-Devey & Orellana and K&P Ch 10",
      "Thomas & Griffin, Schein, and the Week 4 slides",
      "Christensen and Ingram & Choi"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The Canvas readings (Thomas & Griffin; Schein) and the Week 4 slides still need to be brought in. K&P Ch 10 is summarized from public facts only."
  }
];
