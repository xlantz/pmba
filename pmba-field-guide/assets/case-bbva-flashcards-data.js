const FLASHCARDS = [
  { source: "glance", front: "Who is the protagonist of the BBVA Compass case and what is he deciding?", back: "Frank Sottosanti, CMO. How to allocate the next (same-or-lower) marketing budget across offline and online channels." },
  { source: "glance", front: "What is Media Contacts?", back: "The bank's media agency, the interactive arm of Havas; it buys and monitors online media." },
  { source: "market", front: "What share of total U.S. deposits did the 10 largest banks hold in 2009?", back: "46.4%." },
  { source: "market", front: "Who is the ideal BBVA Compass customer?", back: "\"Strivers,\" age 25 to 54, household income above $75,000, with needs beyond checking." },
  { source: "market", front: "According to Exhibit 2, which three reasons were most often cited for choosing a bank?", back: "Free checking (45.9%), convenient branches (45.9%), easy online banking (44.3%)." },
  { source: "offline", front: "What happened to aided awareness when the bank adopted the BBVA Compass name?", back: "It dropped from 86% (2008) to 48% (2009); the 2010 goal was 53%." },
  { source: "offline", front: "What did the NBA sponsorship make BBVA?", back: "Official bank of the NBA, WNBA and NBA Development League in the U.S., Spain and Puerto Rico (signed by BBVA Group, Sept 2010)." },
  { source: "offline", front: "What is the stated reason for the bowl-game sponsorships?", back: "They supplement the NBA deal, especially in markets without NBA teams, and connect with customers' passion." },
  { source: "offline", front: "Roughly how much of the offline advertising budget went to brand building?", back: "About 50%." },
  { source: "online", front: "List the online acquisition steps from click to funded account.", back: "Click, start application (about 10%), complete (under 50%), approved (about 80%), fund in time (about two-thirds)." },
  { source: "online", front: "What is the effective cost of the online promotion per new customer?", back: "About $100." },
  { source: "online", front: "Why is display harder to evaluate than search?", back: "Customers see multiple display ads before converting, and last-click credit goes elsewhere; networks also overlap." },
  { source: "numbers", front: "What were the 2010 planned online checking budgets for display and search?", back: "Display $677,000; search $545,000; total $1,222,000." },
  { source: "numbers", front: "Table C: what are the cost per application figures?", back: "Display $88, search $73, total online $81 (per completed application)." },
  { source: "numbers", front: "In Table B, what is the media split?", back: "TV 53%, online 21%, radio 14%, outdoor 7%, newspaper 4%, magazine 1%." },
  { source: "numbers", front: "What does Exhibit 10 compare?", back: "Paid-search conversion rate for users exposed to display ads (by network) vs users not exposed (1.26% baseline; 1.48% total exposed)." },
  { source: "frameworks", front: "Define last-click attribution.", back: "All credit for a conversion goes to the final click before it." },
  { source: "frameworks", front: "What is the attribution problem?", back: "Assigning proper credit to the multiple ads and channels that influence a customer before conversion." },
  { source: "frameworks", front: "What is the marginal-analysis rule for allocating a fixed budget?", back: "Shift dollars toward the channel with the higher marginal return per dollar until marginal returns are about equal (MR = MC idea)." },
  { source: "frameworks", front: "How do you compute a funnel's overall conversion?", back: "Multiply the step conversion rates together." },
  { source: "prep", front: "What does the case give as CLTV of a checking account and acquisition cost thresholds?", back: "About $800 over five years; keep acquisition cost below $200; $100-150 good; below $100 great." },
  { source: "prep", front: "How do online and branch customers differ in retention?", back: "About 55% annual retention online vs 65% for branch customers." },
  { source: "prep", front: "What share of new checking accounts come from each channel?", back: "About 5% online, 80% branches, the rest telephone and direct mail." },
  { source: "context", front: "Who explained the multi-exposure customer journey example?", back: "Sharon Bernstein, director of insights at Media Contacts." }
];

const SOURCE_LABELS = {
  glance: "Case at a glance",
  market: "Industry, Bank & Customers",
  offline: "Goals, Offline & Sponsorships",
  online: "Online: Funnel, Search & Display",
  numbers: "The Numbers",
  frameworks: "Frameworks",
  prep: "Prep Questions",
  context: "People & Vocabulary"
};
