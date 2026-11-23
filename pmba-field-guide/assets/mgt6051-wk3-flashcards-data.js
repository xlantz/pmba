const FLASHCARDS = [
  {
    "source": "glance",
    "front": "What are the two end-of-class objectives the Week 3 slides list?",
    "back": "Understand the psychology behind hiring, and expand your ideas of how to hire well."
  },
  {
    "source": "glance",
    "front": "When is the Part 1 midterm and what is its format?",
    "back": "Tues 12/1 in class; closed book, 1 hour (syllabus)."
  },
  {
    "source": "biases",
    "front": "What is the fundamental attribution error (a.k.a. correspondence bias)?",
    "back": "Attributing others' behavior to fixed personality traits instead of considering the constraints of their situation."
  },
  {
    "source": "biases",
    "front": "In David's story, what does Jack do and what do you conclude?",
    "back": "Jack announces your project is cancelled; you decide he is phony, risk-averse and visionless, though he may be acting under pressure from the VP."
  },
  {
    "source": "biases",
    "front": "Name David's four causes of the bias, in order.",
    "back": "1) Lack of full awareness of the situation; 2) unrealistic expectations of others; 3) exaggerated assessments of behavior; 4) failure to correct initial assumptions."
  },
  {
    "source": "biases",
    "front": "Cause 1 in one line, with a hiring example.",
    "back": "We lack information about others' constraints. Example: a candidate's rushed answers get read as 'sloppy' when they had a delayed flight (Example)."
  },
  {
    "source": "biases",
    "front": "Cause 2: what is the error?",
    "back": "Even knowing the pressure, we hold unrealistic expectations because we mispredict what we or the average person would do ('I would never have caved')."
  },
  {
    "source": "biases",
    "front": "Cause 3: what is the error?",
    "back": "Exaggerated assessment: we read too much into each nuance of behavior (e.g., Jack seems confident, so 'he wanted this all along')."
  },
  {
    "source": "biases",
    "front": "Cause 4: when does it get worst?",
    "back": "When we have a lot on our plate (cognitive load): the mind skips correcting its quick first judgment."
  },
  {
    "source": "biases",
    "front": "Who did David say first observed this bias, and who traced its four causes?",
    "back": "Ned Jones and Victor Harris (experiment about 45 years earlier); Daniel Gilbert proposed the four root causes."
  },
  {
    "source": "biases",
    "front": "What is the basketball example meant to show?",
    "back": "Players shooting in a poorly lit gym look less talented; we blame the player, not the lighting."
  },
  {
    "source": "biases",
    "front": "What does David recommend as the most effective fix?",
    "back": "Simply consider that you really don't know Jack; leaving room for that keeps you investigating."
  },
  {
    "source": "biases",
    "front": "Does David say we should suspend our judgments?",
    "back": "No. It is probably impossible, and snap judgments can carry useful information; the problem is when they are never revisited."
  },
  {
    "source": "biases",
    "front": "What is similarity bias (Week 3 slide)?",
    "back": "Assuming a person who looks or sounds like me, or shares an extracurricular, is like me in other good ways."
  },
  {
    "source": "interview",
    "front": "Unstructured vs structured interview?",
    "back": "Unstructured: see where the conversation goes. Structured: identify essential skills/values, same questions for everyone, score the responses."
  },
  {
    "source": "interview",
    "front": "How much does structure help, per the slides (Grant)?",
    "back": "Accuracy doubles or triples."
  },
  {
    "source": "interview",
    "front": "Which question types are 'not that diagnostic'?",
    "back": "Brain teasers (elevators in NYC) and open-ended questions (why do you want to work here?)."
  },
  {
    "source": "interview",
    "front": "Behavioral vs situational question?",
    "back": "Behavioral: 'tell me about a time when...' (past). Situational: 'what would you do if...' (hypothetical)."
  },
  {
    "source": "interview",
    "front": "How can you build an answer key for situational questions?",
    "back": "Ask current (best) employees what they would do and use that as the key."
  },
  {
    "source": "interview",
    "front": "What are work samples? Give two slide examples.",
    "back": "A relevant piece of work done or performed during the interview, e.g., write a manual, role-play meeting unhappy customers, cook an omelet."
  },
  {
    "source": "star",
    "front": "What does STAR stand for? (general background)",
    "back": "Situation, Task, Action, Result; a way to organize a behavioral answer. Not from the provided reading."
  },
  {
    "source": "slides",
    "front": "What are the three forms of control on the Week 3 slide?",
    "back": "Specification of the division of labor/jobs; employee selection; employee motivation."
  },
  {
    "source": "slides",
    "front": "What was the interview exercise's goal and format?",
    "back": "Predict a partner's midterm quiz score after a 7-minute interview; interviewer paid for accuracy, interviewee for looking good."
  },
  {
    "source": "slides",
    "front": "What did the class results show?",
    "back": "Predictions correlated weakly with actual scores (r = .18 and r = -.11 on two slides) and were very optimistic (mean predictions around the 86th-87th percentile)."
  },
  {
    "source": "slides",
    "front": "Three reasons the slide gives for 'what went wrong'?",
    "back": "Questions weren't diagnostic; different questions to different candidates; interviewer bias (optimism, similarity)."
  },
  {
    "source": "history",
    "front": "What did the 'drive' system look like?",
    "back": "Strong foreman, monitoring, ad hoc planning, 'slothful' worker assumption, fear/coercion (even physical abuse), day-rate wages."
  },
  {
    "source": "history",
    "front": "Taylor: dates, method, pay view, and a con?",
    "back": "1856-1915; time studies; 'fair' piece-rate pay; saw workers as intellectually dim but hard-working. Pro: saves time/money. Con: mechanistic."
  },
  {
    "source": "history",
    "front": "Follett: dates and core ideas?",
    "back": "1868-1933; organization as community, managers and workers in harmony, resolve conflict by integration; foundations of empowerment."
  },
  {
    "source": "history",
    "front": "McGregor's Theory X vs Theory Y?",
    "back": "X: pessimistic (resistant to change, lack ambition, irresponsible). Y: optimistic (capable of responsibility, self-direction, imagination). Managers' beliefs can affect behavior."
  }
];

const SOURCE_LABELS = {
  "glance": "This Week at a Glance",
  "biases": "David: Person-Perception Biases",
  "interview": "Interview Types & Structure",
  "star": "STAR Method (General Background)",
  "history": "Historical Perspective",
  "slides": "Hiring Slides: Control, Exercise & AI",
  "connect": "Connect the Dots"
};
