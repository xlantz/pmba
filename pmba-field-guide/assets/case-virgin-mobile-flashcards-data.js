const FLASHCARDS = [
 {
  "source": "glance",
  "front": "Who is the protagonist and what is his prior experience?",
  "back": "Dan Schulman, CEO of Virgin Mobile USA; 18 years of AT&T telecom experience and former CEO of Priceline.com."
 },
 {
  "source": "glance",
  "front": "What are the subscriber goals?",
  "back": "1 million total subscribers by end of year one and 3 million by year four."
 },
 {
  "source": "glance",
  "front": "What happened to Virgin in Singapore?",
  "back": "The Singapore MVNO (with Singapore Telecommunications) got fewer than 30,000 subscribers and shut down."
 },
 {
  "source": "glance",
  "front": "What three constraints guide the pricing choice?",
  "back": "Prices must be competitive, the company must make money, and pricing must not trigger competitive reactions."
 },
 {
  "source": "market",
  "front": "How many U.S. subscribers and what penetration at end of 2001?",
  "back": "About 130 million, penetration close to 50%."
 },
 {
  "source": "market",
  "front": "Why had the big carriers not targeted the youth segment?",
  "back": "Poor credit, an assumption of low usage, and a roughly $370 acquisition cost versus low expected value."
 },
 {
  "source": "market",
  "front": "What does Exhibit 2 show about the U.S. compared with other countries?",
  "back": "The U.S. has much lower penetration among young people; it is the only country where the 30-59 group is highest."
 },
 {
  "source": "carriers",
  "front": "Industry average monthly bill and cost to serve?",
  "back": "$52 (about 417 minutes) bill; about $30 cost to serve."
 },
 {
  "source": "carriers",
  "front": "What are the components of acquisition cost?",
  "back": "Advertising per gross add, sales commission per subscriber, and handset subsidy."
 },
 {
  "source": "carriers",
  "front": "Define churn and the industry average in the case.",
  "back": "Share of customers leaving each month; about 2% per month."
 },
 {
  "source": "virgin",
  "front": "What is an MVNO and who hosts Virgin Mobile USA?",
  "back": "A mobile virtual network operator leases network capacity; Sprint PCS hosts Virgin Mobile USA via a 50-50 joint venture."
 },
 {
  "source": "virgin",
  "front": "How does Virgin's retail commission compare with the industry?",
  "back": "$30 per phone at Target and Best Buy versus about $100 industry average."
 },
 {
  "source": "virgin",
  "front": "What did Virgin pay for handsets and from whom?",
  "back": "$60 to $100 each, from Kyocera."
 },
 {
  "source": "virgin",
  "front": "How big is Virgin's ad budget relative to the industry?",
  "back": "About $60 million versus about $1.8 billion industry total and more than $650 million for Verizon alone."
 },
 {
  "source": "pricing",
  "front": "Name the three pricing options.",
  "back": "Clone the industry prices; price below the competition; a whole new plan."
 },
 {
  "source": "pricing",
  "front": "What is the off-peak problem described in the case?",
  "back": "Off-peak start slid from 6 pm to 7, 8, then 9 pm; Cingular charged about $7 a month to shift it back an hour."
 },
 {
  "source": "pricing",
  "front": "What do Exhibits 9a and 9b contrast?",
  "back": "9a: the industry plan curve (rational if you pick the right plan). 9b: actual prices paid, scattered widely from about 10 to 60 cents."
 },
 {
  "source": "pricing",
  "front": "What prepaid facts does the case give?",
  "back": "92% of subscribers post-paid; prepaid at 35 to 75 cents per minute; no credit check; AC must be at or below about $100; churn about 6%."
 },
 {
  "source": "cltv",
  "front": "State the case's simple CLTV formula.",
  "back": "CLTV = M / (1 - r + i) - AC, with M monthly margin, r retention, i interest rate, AC acquisition cost."
 },
 {
  "source": "cltv",
  "front": "How is monthly margin defined and what is Virgin's CCPU assumption?",
  "back": "ARPU minus CCPU; Virgin's CCPU is estimated at 45% of revenue in year one."
 },
 {
  "source": "cltv",
  "front": "Derive the case formula from the series in one line.",
  "back": "Let a = r/(1+i). m/(1+i) times (1 + a + a^2 + ...) = m/(1+i) times 1/(1-a) = m/(1+i-r)."
 },
 {
  "source": "cltv",
  "front": "How does the slide \"most common\" variant differ from the case formula?",
  "back": "It assumes churn can occur before the first margin, so it equals r times the case value: m r / (1 + i - r)."
 },
 {
  "source": "cltv",
  "front": "Why must units match in the CLTV formula?",
  "back": "M, r and i must all be per the same period; the case inputs are monthly, so convert annual interest (slides use 5%/12)."
 },
 {
  "source": "cltv",
  "front": "Monthly churn inputs in Exhibit 11?",
  "back": "2% for customers under contract; 6% for prepaid customers."
 },
 {
  "source": "prep",
  "front": "What must the written case include per the syllabus?",
  "back": "A chosen option with specifics (contracts, subsidy, fees, per-minute price) and a CLTV calculation with the case formula."
 }
];
const SOURCE_LABELS = {
 "glance": "Case at a Glance",
 "market": "Market & Target Segment",
 "carriers": "How Carriers Make Money",
 "virgin": "Virgin Mobile Model",
 "pricing": "Pricing Variables & Options",
 "cltv": "CLTV Formulas & Inputs",
 "prep": "Prep Questions",
 "vocab": "Vocabulary & Context"
};
