const FLASHCARDS = [
  // ---- Henley & Price — Fairness Climate ----
  { source: "fairness", front: "What is a 'fairness (justice) climate,' per Henley & Price / Colquitt, Noe & Jackson?", back: "A team's shared, collective perception of how fairly it is being treated — distinct from any one member's individual perception." },
  { source: "fairness", front: "What was the key finding about agreement and fairness climate?", back: "Agreement amplifies the effect: teams that agreed they were treated unfairly had the worst performance and highest absenteeism; teams that agreed they were treated fairly had the best performance and lowest absenteeism." },
  { source: "fairness", front: "How does team size affect fairness climate?", back: "Bigger teams showed lower perceived fairness and less agreement about it — larger teams make it harder for members to voice opinions on things like policy and procedure." },
  { source: "fairness", front: "How does team diversity affect fairness climate, specifically?", back: "More diverse teams showed less agreement among members about how fairly they were being treated — diversity mainly hurt consensus, not necessarily the average fairness level itself." },
  { source: "fairness", front: "How does collective orientation affect fairness climate?", back: "Team members who believed team interests outweigh individual ones were more likely to feel fairly treated — though this didn't increase agreement about it." },
  { source: "fairness", front: "What study did Colquitt, Noe & Jackson conduct, and on whom?", back: "A survey of 88 semi-autonomous teams (1,700+ members) at six plants of an automotive parts manufacturer, measuring fairness, diversity, and collectivism perceptions plus supervisor performance ratings and absence records." },
  { source: "fairness", front: "What are the practical implications for managers from this research?", back: "Staff teams with people who have a positive team orientation; train leaders to build fairness climate, especially in large/diverse teams; include all members in decisions; apply procedures consistently and explain any deviations." },

  // ---- Phillips — Diversity ----
  { source: "diversity", front: "What is 'informational diversity,' and why does it matter?", back: "People who differ from one another bring different information, opinions, and perspectives to a task — the core mechanism behind diversity's cognitive benefits." },
  { source: "diversity", front: "What is the 'anticipation effect' in diverse groups?", back: "Noticing social difference makes group members anticipate disagreement, prompting them to work harder cognitively and socially — even before any actual interaction takes place." },
  { source: "diversity", front: "What did the Dezsö & Ross study find about gender diversity in top management?", back: "Female representation in top management was associated with a $42 million average increase in firm value, with a stronger effect at innovation-focused firms." },
  { source: "diversity", front: "What did the Phillips, Neale & Northcraft murder-mystery study find?", back: "Racially diverse three-person groups significantly outperformed all-white groups at a task requiring members to share both common and uniquely held clues." },
  { source: "diversity", front: "What did Antonio et al. (2004) find about dissenting opinions?", back: "When a Black person delivered a dissenting opinion to a group of white people, it was perceived as more novel and led to broader thinking than the identical dissent from a white person." },
  { source: "diversity", front: "What did Loyd, Wang, Lount & Phillips (2013) find about political diversity?", back: "Democrats and Republicans prepared harder for a debate when told their disagreeing partner was from the opposing party than when told the partner shared their own party — even with identical disagreement content." },
  { source: "diversity", front: "What did Freeman & Huang (2014) find about ethnically diverse research teams?", back: "Papers written by ethnically diverse author teams received more citations and had higher impact factors than papers from more homogeneous teams." },
  { source: "diversity", front: "What did Sommers (2006) find in his mock jury study, and why is the mechanism important?", back: "Racially diverse juries considered facts more carefully and made fewer errors than all-white juries — not because minority jurors added new information, but because white jurors became more diligent and open-minded in the presence of diversity." },
  { source: "diversity", front: "What metaphor does Phillips use to describe the discomfort of diversity?", back: "Diversity is like exercise — the pain of pushing yourself produces the gain of growth." },

  // ---- Auletta Part 1 — Power, Greed and Glory ----
  { source: "power", front: "Who were Lehman Brothers' two co-CEOs in 1983, and what role did each play?", back: "Peter G. Peterson ('Mr. Outside': polished, Establishment-connected, public image and client relationships) and Lewis L. Glucksman ('Mr. Inside': blunt trader running day-to-day operations)." },
  { source: "power", front: "What was the 'banker vs. trader' divide at Lehman?", back: "Bankers took a longer horizon and cultivated client relationships, earning fees on deals; traders made fast, numbers-driven decisions. Bankers were traditionally seen as the elite despite traders generating two-thirds of the firm's profits." },
  { source: "power", front: "What personal resentments did Glucksman carry into the conflict?", back: "Decades of feeling like an outsider — resentment toward 'Our Crowd' Jews who he felt looked down on him, toward bankers who dismissed traders, and toward status mattering more than performance." },
  { source: "power", front: "What happened at the July 12, 1983 lunch that triggered the power struggle?", back: "Peterson was seated at the head of the table while Glucksman was seated far down the side. As Peterson delivered his familiar name-dropping 'speech,' Glucksman seethed and left determined to remove him." },
  { source: "power", front: "How quickly was Peterson actually forced out after that lunch?", back: "Thirteen days — after secret negotiations and a generous severance agreement." },
  { source: "power", front: "Who was Richard S. Fuld Jr. in this 1983 story, and why is he significant?", back: "Glucksman's 37-year-old protégé, promoted to run all of Lehman's trading. He later became Lehman's CEO and led the firm through its far more famous 2008 bankruptcy over two decades later." },

  // ---- Auletta Part 2 — The Fall ----
  { source: "fall", front: "What happened in the September 1983 bonus and stock allocation?", back: "Glucksman and four mostly-trading allies took 25% of the entire bonus pool, without full board discussion, while several senior bankers saw cuts or minimal increases." },
  { source: "fall", front: "What did departing partner Eric Gleacher say was the reason he left?", back: "'What they did when they paid out the bonuses in September was the primary reason I left... Anybody with common sense would not be so greedy.'" },
  { source: "fall", front: "How many partners left after the bonus decision, and what did they take with them?", back: "Six partners left within a few months, taking roughly $30 million — about 17% of Lehman's total capital." },
  { source: "fall", front: "What was 'a classic management error,' per board member Henry Breck?", back: "Glucksman allowed a contentious board meeting to take place without him present — the single absence during which the board, for the first time, openly voiced doubts and effectively seized control from him." },
  { source: "fall", front: "What did the board's 'capital search' committee actually explore?", back: "In practice, it was a euphemism for exploring a sale of the firm — which resulted in the 1984 merger into Shearson/American Express." },
  { source: "fall", front: "What happened when partner Peter Solomon challenged Peterson's resignation at the board meeting?", back: "Solomon asked, 'Have you resigned, and are asking us to vote? Or is this an issue open to discussion?' Peterson replied, 'I have resigned.' No one else on the board spoke up." },
  { source: "fall", front: "How did older Lehman partners and younger partner Stephen Schwarzman each describe the sale as a 'tragedy' — and how did their reasons differ?", back: "Older partners called it a tragedy of lost tradition and community ('My home was destroyed'). Schwarzman called it a tragedy because 'the business was not sold at the optimal time' — a financial framing, not an emotional one." },
];

const SOURCE_LABELS = {
  fairness: "Fairness Climate",
  diversity: "Diversity",
  power: "Power & Greed (Pt. 1)",
  fall: "The Fall (Pt. 2)",
};
