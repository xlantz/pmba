// Flashcard deck for MGT 6050, Unit 3 — Conflict, Voice & Culture
const FLASHCARDS = [
  // ---- Shuttle Inquiry (Wald & Schwartz) ----
  { source: "shuttle", front: "In the Columbia shuttle disaster, was the core failure a lack of information or something else?", back: "Something else — engineers actually wanted spy-satellite images of the damage and made informal requests, but those requests never reached mission management team leader Linda Ham. The failure was in the flow of information, not its absence." },
  { source: "shuttle", front: "What is 'NASA Chicken,' per organizational consultant Joseph Grenny?", back: "The phenomenon where no one wants to be the first to raise a flag that could slow a project or carry political/economic risk — so everyone waits, hoping someone else speaks up first." },
  { source: "shuttle", front: "What did one NASA engineer say about the agency's culture around being wrong?", back: "\"The NASA culture does not accept being wrong.\" Instead of a culture where there's no such thing as a stupid question, \"the humiliation factor always runs high.\"" },
  { source: "shuttle", front: "What did Edward Tufte call the safety-critical PowerPoint slide about the foam strike?", back: "A \"PowerPoint festival of bureaucratic hyper-rationalism\" — the format buried real uncertainty behind an falsely reassuring executive summary." },
  { source: "shuttle", front: "Per Tufte, what was the real fault of NASA's upper management?", back: "They didn't look beneath the optimistic surface of their subordinates' reports — a careful read of the actual Boeing analysis would have revealed real uncertainty about whether the debris strike was dangerous." },
  { source: "shuttle", front: "What explanation did Linda Ham give for relying entirely on Boeing's analysis?", back: "\"We must rely on our contractor work force who had the systems expertise... We don't have the tools to do that... or the background or expertise.\"" },

  // ---- The High Cost of Conformity (Bregman) ----
  { source: "conformity", front: "What everyday examples does Bregman use to show adults conform to those around them?", back: "If your colleagues take sick days, you start taking them too; if colleagues are messy, you become messier too." },
  { source: "conformity", front: "What organizational failure does Bregman use as the high-stakes example of conformity/silence?", back: "The Volkswagen emissions scandal — the company installed software to cheat diesel emissions tests for seven years and 11 million cars, yet the head of VW America claimed only \"a couple of software engineers\" knew." },
  { source: "conformity", front: "What is Bregman's three-step framework for resisting conformity?", back: "(1) Have clear, strong, committed values; (2) truly see what's going on around you; (3) have the courage to act on it." },
  { source: "conformity", front: "How does Bregman define leadership?", back: "\"Leadership is the willingness to move in a different direction than others.\"" },
  { source: "conformity", front: "Per Bregman, which of his three steps is hardest, and why?", back: "Courage — because it requires going against the norm of what's happening around you, which doesn't come naturally to adults. It takes practice." },
  { source: "conformity", front: "How does Bregman suggest practicing courage in small ways?", back: "Keep a shared workspace clean when others leave it messy; work when others take sick days; make different choices than the people around you — then notice you can tolerate the discomfort it creates." },

  // ---- The Problem with Most Meetings (Hansen) ----
  { source: "meetings", front: "Per Hansen's study of 5,000 managers, what distinguishes the best performers in meetings?", back: "They are really good at generating rigorous discussions — debating issues, considering alternatives, challenging each other, and listening to minority views." },
  { source: "meetings", front: "Why should you start a meeting with a question instead of your own opinion?", back: "It frames the problem to be debated without biasing the answer, signals you want real debate (not a rubber stamp), and invites people with different views to speak up." },
  { source: "meetings", front: "What is 'warm calling,' and why use it?", back: "Talking to a quiet or junior person before the meeting to tell them their viewpoint matters and you want them to share it with the group — used to draw out people who wouldn't otherwise speak up." },
  { source: "meetings", front: "What did Hansen's study find about psychological safety and meeting performance?", back: "Only about 19% of participants were adept at creating psychologically safe climates for debate, but those who did so performed much better (0.63 correlation with performance)." },
  { source: "meetings", front: "What is the 'contrarian view' tactic, per the American Express example?", back: "CEO Harvey Golub would deliberately argue the opposite position (e.g., asking whether to lower a price when the meeting was about raising it) to force people to have solid arguments for their actual views." },
  { source: "meetings", front: "What historical example does Hansen use to illustrate the danger of not dissecting assumptions?", back: "The Bay of Pigs Invasion — JFK's team never seriously challenged the assumption that a small Cuban exile invasion force would spark a popular uprising against Castro." },
  { source: "meetings", front: "What is a 'transparent advocate' vs. a 'hard sell,' per Hansen?", back: "A transparent advocate shows a plan's downsides along with its upsides; a hard sell (like a used-car salesperson) only highlights the positives and hides the negatives." },
  { source: "meetings", front: "What is a 'pre-mortem,' per Hansen?", back: "Asking, before a decision is finalized: \"Assuming your idea will fail, what would be the key reasons for the failure?\" — used to counter confirmation bias and escalation of commitment." },
  { source: "meetings", front: "What are confirmation bias and escalation of commitment, in Hansen's meetings context?", back: "Confirmation bias: paying attention only to data that supports your own idea. Escalation of commitment: continuing to advocate for a plan even after seeing negative information about it." },

  // ---- Inside Amazon (Kantor & Streitfeld) ----
  { source: "amazon", front: "What is Amazon's 'Anytime Feedback Tool,' per the NYT investigation?", back: "A widget letting employees send praise or criticism about a colleague directly to that colleague's management — bosses can see who sent it, but the subject of the feedback typically cannot." },
  { source: "amazon", front: "What is 'disagree and commit' at Amazon (Leadership Principle No. 13)?", back: "Employees are expected to rip into colleagues' ideas with blunt, even painful feedback — then line up fully behind whatever decision is ultimately made." },
  { source: "amazon", front: "What is the 'Organization Level Review,' and what's it commonly called elsewhere?", back: "Amazon's annual, semi-open forced-ranking session where managers debate and reassign subordinates' rankings; commonly known elsewhere as 'stack ranking' or 'rank and yank.'" },
  { source: "amazon", front: "What phrase did a former Amazon HR executive use to describe the annual staff-culling process?", back: "\"Purposeful Darwinism\" — intentionally cycling through many employees to identify and retain the strongest performers." },
  { source: "amazon", front: "What did multiple former Amazon employees report about how the company treated health and family crises?", back: "Workers recovering from cancer, miscarriage, and other personal crises described being put on performance improvement plans or edged out rather than given time to recover." },
  { source: "amazon", front: "What tension does the article identify between Amazon's stated culture and its lived reality?", back: "Amazon frames intense internal competition and blunt conflict as the engine of innovation and meritocracy, but many employees describe a climate of fear, sabotage through anonymous feedback, and burnout rather than open, safe debate." },
  { source: "amazon", front: "Why is Amazon's culture a useful case to run through Hansen's and Edmondson's frameworks?", back: "It looks like 'good conflict' on the surface (rigorous debate, disagree and commit) but arguably fails Hansen's and Edmondson's core requirement — that people can speak up without fear of retribution — since feedback and rankings are used competitively, sometimes to sabotage rather than to genuinely debate ideas." },
];

const SOURCE_LABELS = {
  shuttle: "Shuttle Inquiry (Wald & Schwartz)",
  conformity: "The High Cost of Conformity (Bregman)",
  meetings: "The Problem with Most Meetings (Hansen)",
  amazon: "Inside Amazon (Kantor & Streitfeld)",
};
