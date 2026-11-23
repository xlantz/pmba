const QUIZ_QUESTIONS = [
  {
    "source": "biases",
    "prompt": "You assume a colleague who missed a deadline is lazy, without asking about her workload. Which bias is this?",
    "options": [
      "Similarity bias",
      "Fundamental attribution error (correspondence bias)",
      "Halo effect",
      "Theory Y thinking"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Attributing behavior to a fixed trait instead of the situation is the fundamental attribution error (David)."
  },
  {
    "source": "biases",
    "prompt": "Which is NOT one of the four causes of the bias that David lists?",
    "options": [
      "Lack of full awareness of the situation",
      "Unrealistic expectations of others",
      "Failure to correct initial assumptions",
      "Deliberate prejudice against a group"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The four causes are lack of situational awareness, unrealistic expectations, exaggerated assessments, and not correcting initial assumptions."
  },
  {
    "source": "biases",
    "prompt": "'Sure, he was under pressure, but I never would have caved.' Which cause is this?",
    "options": [
      "Unrealistic expectations of others",
      "Lack of full awareness of the situation",
      "Exaggerated assessment of behavior",
      "Failure to correct initial assumptions"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "We mispredict how we or the average person would act, so we hold unrealistic expectations (cause 2)."
  },
  {
    "source": "biases",
    "prompt": "An interviewer knows a candidate is nervous, yet reads her calm tone as proof she 'didn't care'. Best label?",
    "options": [
      "Lack of situational awareness",
      "Similarity bias",
      "Exaggerated assessment of behavior",
      "Unrealistic expectations"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Even with good knowledge, we read too much into nuances (cause 3). (Application example, not from the article.)"
  },
  {
    "source": "biases",
    "prompt": "Why do sticky first impressions persist, according to David?",
    "options": [
      "People refuse to meet new information",
      "The mind is overloaded, so it fails to revise quick judgments",
      "First impressions are usually right",
      "Situations never change"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "We make quick judgments and normally correct them, but under heavy workload we fail to revise (cause 4)."
  },
  {
    "source": "biases",
    "prompt": "What does the basketball example in David's article illustrate?",
    "options": [
      "Tall players are favored in hiring",
      "Practice beats talent",
      "Teams outperform individuals",
      "We blame the player instead of the temporary limitation (poor lighting)"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Players in a poorly lit gym are judged less talented; the situation is overlooked."
  },
  {
    "source": "biases",
    "prompt": "David's most effective suggestion for dealing with the bias is to:",
    "options": [
      "Consider that you really don't know the person",
      "Suspend all judgments",
      "Rely only on first impressions",
      "Hire only people similar to you"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "He says suspending judgment is probably impossible; leave room for not knowing, which opens continued investigation."
  },
  {
    "source": "biases",
    "prompt": "A hiring manager favors a candidate who attended the same college club. This is best described as:",
    "options": [
      "Structured interviewing",
      "Behavioral questioning",
      "Similarity bias",
      "Scientific management"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The slide names similarity bias: looking, sounding or sharing an activity makes us assume other good similarities."
  },
  {
    "source": "interview",
    "prompt": "According to the Week 3 slides (citing Grant), structured interviews make accuracy:",
    "options": [
      "Improve by about 5%",
      "Double or triple",
      "Stay the same",
      "Fall slightly"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The slide states accuracy doubles or triples."
  },
  {
    "source": "interview",
    "prompt": "Which step is NOT part of a structured interview as the slides describe it?",
    "options": [
      "Identify essential skills and values",
      "Ask the same questions to each person",
      "Score responses",
      "Let each candidate steer the conversation freely"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Free-flowing conversation is the unstructured approach."
  },
  {
    "source": "interview",
    "prompt": "'How many elevators are in New York City?' is an example of a:",
    "options": [
      "Brain teaser",
      "Behavioral question",
      "Work sample",
      "Situational question"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The slide uses it as a brain teaser, which is not that diagnostic."
  },
  {
    "source": "interview",
    "prompt": "'Tell me about a time when you struggled to take criticism' is a ___ question.",
    "options": [
      "Situational",
      "Brain-teaser",
      "Behavioral",
      "Work-sample"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Behavioral = a past situation and what you did."
  },
  {
    "source": "interview",
    "prompt": "'What would you do if the superstar on your team was about to quit?' is a ___ question.",
    "options": [
      "Behavioral",
      "Situational",
      "Open-ended",
      "Work-sample"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Situational = what would you do if..."
  },
  {
    "source": "interview",
    "prompt": "How do the slides suggest creating an answer key for situational questions?",
    "options": [
      "Use an internet template",
      "Ask the candidate's references",
      "Let the interviewer decide afterward",
      "Ask current best employees what they would do"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The slide notes to ask current (best) employees what they would do to make an answer key."
  },
  {
    "source": "slides",
    "prompt": "Asking candidates to role-play a meeting with unhappy customers is a:",
    "options": [
      "Work sample",
      "Brain teaser",
      "Behavioral question",
      "Unstructured chat"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Work samples are relevant pieces of work done during the interview."
  },
  {
    "source": "slides",
    "prompt": "In the class interview exercise, predictions of partners' quiz scores were:",
    "options": [
      "Highly accurate",
      "Pessimistic on average",
      "Weakly related to actual scores and very optimistic",
      "Accurate for strangers only"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Correlations were r = .18 and -.11 on two slides, and mean predictions were around the 86th-87th percentile."
  },
  {
    "source": "slides",
    "prompt": "Which is one of the three forms of control on the Week 3 slide?",
    "options": [
      "Stock options",
      "Employee selection",
      "Union negotiation",
      "Customer segmentation"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The three are specification of division of labor, employee selection, and employee motivation."
  },
  {
    "source": "history",
    "prompt": "Which feature belongs to the 'drive' system?",
    "options": [
      "Piece-rate pay and time studies",
      "Managers and workers as a community",
      "Theory Y empowerment",
      "Motivation through fear and coercion, with day-rate wages"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The drive system relied on foremen, fear, and day rates; piece-rate and time studies came with Taylor."
  },
  {
    "source": "history",
    "prompt": "Frederick Taylor is associated with:",
    "options": [
      "Time studies and piece-rate pay",
      "Conflict resolution by integration",
      "Theory X and Theory Y",
      "The attribution error"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Taylor (1856-1915) led scientific management: time studies, 'fair' piece-rate pay."
  },
  {
    "source": "history",
    "prompt": "Which thinker proposed that conflicts be resolved by integration and organizations run as communities?",
    "options": [
      "Frederick Taylor",
      "Douglas McGregor",
      "Mary Parker Follett",
      "Ned Jones"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Follett (1868-1933) is the slide's source of community, harmony and integration."
  },
  {
    "source": "history",
    "prompt": "A manager believes workers lack ambition and avoid responsibility. McGregor would call this:",
    "options": [
      "Theory Y",
      "Theory X",
      "Scientific optimism",
      "Integration"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Theory X is the pessimistic view: resistant to change, unambitious, irresponsible."
  }
];
