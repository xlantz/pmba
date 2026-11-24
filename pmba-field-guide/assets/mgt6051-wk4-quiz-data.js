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
    "explanation": "The syllabus: closed book, 1 hour, one page of notes. It covers all of Part 1 (Tue 12/1)."
  },
  {
    "source": "schein",
    "prompt": "In Schein's reading, what is \"the price of membership\"?",
    "options": [
      "The values, norms and behavior patterns the organization considers necessary for every new member to learn",
      "The tuition or entry fee a newcomer pays",
      "Everything a newcomer learns on the job",
      "The salary an organization offers to attract recruits"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Schein limits socialization to the learning that the organization considers necessary for any new member; he calls this the price of membership."
  },
  {
    "source": "schein",
    "prompt": "Which is NOT one of the five things Schein says a newcomer must learn?",
    "options": [
      "The organization's basic goals",
      "The behavior patterns needed to perform the role",
      "The member's preferred career path outside the firm",
      "Rules that maintain the organization's identity and integrity"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The five are goals, preferred means, role responsibilities, behavior patterns for effective performance, and rules protecting identity and integrity."
  },
  {
    "source": "schein",
    "prompt": "A supervisor asks each new engineer to diagnose a circuit that violates textbook principles but works. What is he doing?",
    "options": [
      "Training the new engineers in circuit design",
      "Building commitment through public confession",
      "Transitioning them to full-member status",
      "Deliberate unfreezing: an upending experience that deflates arrogance and makes the newcomer receptive"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Schein's circuit example: engineers say it cannot work, then are shown it has sold for years; they leave chastened and keen to learn."
  },
  {
    "source": "schein",
    "prompt": "On day one a new analyst is given only trivial tasks and the reports she writes go unread. Which Schein concept fits best?",
    "options": [
      "Creative individualism",
      "Upending experiences",
      "Transition to full member",
      "Pivotal norms"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Assignments that are trivial, reports no one reads, and similar events are upending experiences that disconfirm assumptions about self and job."
  },
  {
    "source": "schein",
    "prompt": "A graduate follows the pivotal norm of getting the job done but ignores the dress and lunch customs. Which response is this?",
    "options": [
      "Type 2: creative individualism",
      "Type 1: rebellion",
      "Type 3: conformity",
      "A failed socialization with no label"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Creative individualism is acceptance of the pivotal norms only, with rejection of the rest. Schein says this is what most organizations should want."
  },
  {
    "source": "schein",
    "prompt": "In Schein's scheme, where do standards of dress and decorum usually fall (though it varies by organization)?",
    "options": [
      "Pivotal norms in every organization",
      "Never a norm at all",
      "Relevant norms",
      "Something only the first boss decides"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Schein lists dress, decorum, not being publicly disloyal and living in the right neighborhood as relevant norms, adding that in some organizations such norms can be pivotal or peripheral (the IBM example)."
  },
  {
    "source": "schein",
    "prompt": "Which pair gives Schein's share of Sloan graduates who had left their first job for the classes of 1963 and 1964?",
    "options": [
      "73% and 67%",
      "50% and 25%",
      "73% and 50%",
      "67% and 50%"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Class of 1962: 73%; class of 1963: 67%; class of 1964: 50%."
  },
  {
    "source": "schein",
    "prompt": "A public relations firm invites a graduate to lunches with senior people, and he feels guilty at the thought of leaving. Which mechanism is this?",
    "options": [
      "Investing in the newcomer so that guilt builds loyalty",
      "Unfreezing through hazing",
      "Small behavioral commitments",
      "Learning the business from the ground up"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Schein describes this as the first commitment mechanism: invest in the newcomer so that he repays with loyalty and hard work."
  },
  {
    "source": "schein",
    "prompt": "Which characteristic of a profession does Schein say a manager is least like?",
    "options": [
      "Making decisions from general principles",
      "Relating to a voluntary association of colleagues rather than hierarchical authority",
      "Having a code of ethics",
      "Gaining status through accomplishment"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Schein says managers are expected to accept hierarchical authority, whereas professionals accept only the authority of colleagues."
  },
  {
    "source": "schein",
    "prompt": "According to Schein, what should companies do about first bosses?",
    "options": [
      "Replace them with outside consultants",
      "Keep them away from new graduates",
      "Train them, because the boss creates the climate for rebellion, conformity or creative individualism",
      "Teach them mostly peripheral values"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Schein argues that companies train the graduate but not the boss, and that the boss has the power that matters."
  },
  {
    "source": "thomas",
    "prompt": "Thomas & Griffin define social information as:",
    "options": [
      "Comments, observations and cues from people whose view of the job the employee considers relevant",
      "The objective description of a job in writing",
      "Only official company announcements",
      "Rumors passed among customers"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "It can come from people tied to the job (co-workers, supervisors, customers) or outsiders (family, friends)."
  },
  {
    "source": "thomas",
    "prompt": "In the Asch line experiment as reported by Thomas & Griffin, what share gave a wrong answer when co-workers gave wrong answers?",
    "options": [
      "More than one-third",
      "Under 1%",
      "About one-tenth",
      "Nearly everyone"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Under 1% misjudged when alone; more than one-third went along with the confederates."
  },
  {
    "source": "thomas",
    "prompt": "Miners return to work after a disaster at a neighboring mine with little fear. What does Thomas & Griffin say explains this?",
    "options": [
      "Miners are paid enough to ignore danger",
      "They want to believe the company and co-workers that an accident is unlikely, so social information shapes perceived danger",
      "Miners cannot find any other work",
      "The mines become objectively safer"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The authors use it to show that the same job characteristic is perceived differently depending on the information received."
  },
  {
    "source": "thomas",
    "prompt": "Co-workers keep talking about the time clock until a newcomer starts to notice it. Which of the four ways is this?",
    "options": [
      "Justification",
      "Behavior",
      "Importance (salience)",
      "Objective job measurement"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Frequent discussion of a feature raises its perceived importance, making it salient."
  },
  {
    "source": "thomas",
    "prompt": "Which source of social information does management control most?",
    "options": [
      "Friends and family",
      "Customers",
      "Former employees",
      "Supervisors"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The article says management has the greatest control over information provided by supervisors; there is little it can do about family, friends or customers."
  },
  {
    "source": "thomas",
    "prompt": "How does experience change an employee's use of social information?",
    "options": [
      "New employees are more receptive and use many sources; the number of sources shrinks with experience",
      "Experienced employees use more sources than new ones",
      "Experience makes employees ignore all social information",
      "New employees rely on one source only"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The variety of sources decreases as people gain experience, although reliance on a few selected sources may increase."
  },
  {
    "source": "thomas",
    "prompt": "Griffin's field experiment found that managers could:",
    "options": [
      "Change attitudes only by redesigning tasks",
      "Change employees' perceptions of the job without changing the job, by giving positive social cues",
      "Improve pay perceptions by raising pay",
      "Eliminate the influence of co-workers"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Managers trained to give positive social cues changed perceptions of task variety, autonomy, feedback and friendship opportunities, versus a control group."
  },
  {
    "source": "thomas",
    "prompt": "Survey results show low satisfaction, but a job redesign changes little. Which Thomas & Griffin idea explains it?",
    "options": [
      "Surveys never measure attitudes",
      "Jobs have no objective features",
      "Responses may reflect social information, which stays unchanged if only the job changes",
      "Employees do not talk to co-workers"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "If answers come from social information rather than the objective job, changing the job has minimal impact until the social information changes."
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
    "explanation": "Wages, full-time benefits and bonuses are essential, but the authors say the social aspects matter more."
  },
  {
    "source": "orellana",
    "prompt": "A new hire arrives and the supervisor says \"Oh, was that today?\" Which practice is being violated?",
    "options": [
      "Build relationships before hiring",
      "Assign a mentor",
      "Create career jobs",
      "Ensure a positive first-day reception"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Practice 4. It reads as \"you do not care\", which can drive early exits."
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
    "prompt": "What do the authors call the first weeks of employment?",
    "options": [
      "An unpaid trial",
      "A probationary period for both employer and employee",
      "A training-only phase",
      "A honeymoon period"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Both sides are gauging fit: the employer asks whether the hire adapts, the hire asks whether it is a respectful place for a career."
  },
  {
    "source": "kp10",
    "prompt": "Commitment 9 is defined as:",
    "options": [
      "Celebrate the values and victories by creating a spirit of community",
      "Envision the future by imagining possibilities",
      "Recognize contributions by showing appreciation for individual excellence",
      "Foster collaboration by building trust"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Commitment 9 belongs to Encourage the Heart. Celebrating values and victories is Commitment 10 (summary from the book's published structure)."
  },
  {
    "source": "kp10",
    "prompt": "Which of the Five Practices contains Commitment 9?",
    "options": [
      "Model the Way",
      "Enable Others to Act",
      "Challenge the Process",
      "Encourage the Heart"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Encourage the Heart contains Commitments 9 and 10."
  },
  {
    "source": "missing",
    "prompt": "Which items are still missing from this page?",
    "options": [
      "K&P Chapter 10 text, the Week 4 slides, and the optional Coaching onboarding article",
      "Schein and Thomas & Griffin",
      "Orellana and Ingram & Choi",
      "Only the syllabus"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Schein and Thomas & Griffin are now covered; Ch 10 is only summarized, and the slides and optional article were not provided."
  },
  {
    "source": "connect",
    "prompt": "Schein urges training the first boss. Which Thomas & Griffin idea supports this?",
    "options": [
      "Customers are the most important source",
      "For many employees the immediate supervisor is the organization and the source management controls most",
      "Experienced employees ignore supervisors",
      "Family members control the new hire's attitudes"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Both readings point to the immediate supervisor as the highest-leverage influence on a newcomer."
  },
  {
    "source": "connect",
    "prompt": "Ingram & Choi report that COOs with low values alignment needed about what pay increase to be as likely to stay as high-alignment COOs?",
    "options": [
      "10%",
      "25%",
      "40%",
      "60%"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The 40% figure is from the Week 1 Ingram & Choi reading."
  },
  {
    "source": "connect",
    "prompt": "Calling a struggling new hire \"lazy\" without checking whether she was mentored most resembles which Week 3 concept?",
    "options": [
      "Stage-gate screening",
      "Espoused values",
      "Values alignment",
      "Correspondence bias (blaming character, not situation)"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Orellana notes strugglers are often labelled lazy or dumb when they simply lack mentoring; David calls the blame-the-person pattern the correspondence bias."
  },
  {
    "source": "kp10",
    "prompt": "Which pair names the two sections of Chapter 10, Recognize Contributions?",
    "options": [
      "Expect the Best and Personalize Recognition",
      "Create a Spirit of Community and Be Personally Involved",
      "Seize the Initiative and Exercise Outsight",
      "Enhance Self-Determination and Develop Competence"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Expect the Best and Personalize Recognition are the two sections under Commitment 9 (from a published table of contents). The other pairs belong to Celebrate the Values and Victories, Search for Opportunities and Strengthen Others."
  }
];
