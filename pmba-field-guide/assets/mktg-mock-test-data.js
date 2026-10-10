// Combined MKTG 6090 mock-test question pool: renamed copies of each
// chapter's QUIZ_QUESTIONS array (to avoid colliding with the page-local
// QUIZ_QUESTIONS global on mktg1.html/mktg2.html/mktg3.html/mktg7.html),
// concatenated into one pool for the mock test page.

const MKTG1_QUIZ_QUESTIONS = [
  {
    source: "scope",
    prompt: "\"Our engineers built the most advanced vacuum on the market, so customers will find us.\" This statement reflects which philosophy, and what trap does it fall into?",
    options: [
      "Marketing concept; the sense-and-respond trap",
      "Product concept; the better-mousetrap fallacy",
      "Production concept; the mass-distribution trap",
      "Selling concept; the overcapacity trap",
    ],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "This is the product concept's classic trap: assuming a superior product will sell itself without pricing, distribution, or promotion — the \"better-mousetrap fallacy.\"",
  },
  {
    source: "scope",
    prompt: "A direct-to-consumer startup like Warby Parker sells glasses online, cutting out traditional optical retailers. This is an example of:",
    options: ["Reintermediation", "Disintermediation", "Category management", "Showrooming"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Disintermediation is a DTC firm cutting out the middleman. Reintermediation is the opposite — a traditional firm fighting back by blending online and physical (\"brick-and-click\").",
  },
  {
    source: "scope",
    prompt: "A traditional retailer responds to DTC competitors by opening a slick e-commerce site alongside its physical stores. This is:",
    options: ["Disintermediation", "Reintermediation", "The better-mousetrap fallacy", "Category membership"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "This is reintermediation — a traditional firm blending online and physical retail (\"brick-and-click\") in response to DTC disintermediation.",
  },
  {
    source: "scope",
    prompt: "Real estate and stocks are examples of which of the ten things that get marketed?",
    options: ["Organizations", "Information", "Properties", "Experiences"],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Properties are intangible rights of ownership — real estate or financial property like stocks and bonds.",
  },
  {
    source: "scope",
    prompt: "According to the chapter, where do genuinely fresh ideas tend to come from inside a company?",
    options: [
      "Only from senior executives at headquarters",
      "Employees with diverse perspectives, employees far from HQ, and employees new to the industry",
      "External consultants exclusively",
      "The finance department",
    ],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The chapter names three underrepresented sources: employees with contemporary/diverse perspectives, employees far from headquarters, and employees new to the industry.",
  },
  {
    source: "scope",
    prompt: "A customer researches a product in-store, then buys it for less online later. This new consumer capability is called:",
    options: ["Showrooming", "Disintermediation", "Retailtainment", "Mental accounting"],
    correctIndex: 0,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Showrooming is a new consumer capability directly enabled by the technology force reshaping markets.",
  },
  {
    source: "holistic",
    prompt: "Which of the following is NOT one of the four components of holistic marketing?",
    options: ["Relationship marketing", "Transactional marketing", "Internal marketing", "Performance marketing"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The four are relationship, integrated, internal, and performance marketing. Holistic marketing explicitly favors relationships over one-off transactions.",
  },
  {
    source: "holistic",
    prompt: "A GE MRI sale is bundled with installation, maintenance, and training so every touch point delivers a consistent message. This best illustrates:",
    options: ["Internal marketing", "Relationship marketing", "Integrated marketing", "Performance marketing"],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Integrated marketing coordinates every activity — sales, service, support — so the whole offering delivers consistent value and message.",
  },
  {
    source: "holistic",
    prompt: "An airline VP wants a customer-service initiative to succeed but can't personally control food quality, cleaning, hiring, or fares. Getting other departments on board requires:",
    options: ["Vertical alignment", "Horizontal alignment", "Category management", "A brand mantra"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Horizontal alignment is coordination with other departments; vertical alignment is coordination with senior management.",
  },
  {
    source: "holistic",
    prompt: "A company moves from tracking only profit to also tracking its environmental and social impact. This shift is best described as moving toward a:",
    options: ["Selling concept", "Better-mousetrap approach", "Triple bottom line", "Category point of parity"],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "A triple bottom line — people, planet, profits — is performance marketing's broader measure of return.",
  },
  {
    source: "holistic",
    prompt: "Which philosophy is most at risk of the \"better-mousetrap fallacy\"?",
    options: ["Production concept", "Product concept", "Selling concept", "Market-value concept"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The product concept assumes customers want the highest quality or most features, and risks believing a great product sells itself without pricing, distribution, or promotion.",
  },
  {
    source: "holistic",
    prompt: "According to Levitt, what does the marketing concept focus on that the selling concept does not?",
    options: [
      "The seller's need to turn inventory into cash",
      "The buyer's actual needs",
      "Maximizing short-term sales volume regardless of fit",
      "Overcapacity reduction",
    ],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Levitt's distinction: selling focuses on the seller's need to turn product into cash; marketing focuses on the buyer's needs.",
  },
  {
    source: "org",
    prompt: "In the customer-oriented (inverted) org chart, who sits at the very bottom?",
    options: ["Customers", "Frontline employees", "Top management", "Middle (service) managers"],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The inverted chart puts customers on top, then frontline people, then middle managers who support them, with top management at the bottom, supporting everyone above.",
  },
  {
    source: "org",
    prompt: "P&G and Diageo largely organize by product category rather than individual brand. Why?",
    options: [
      "Category management is required by GAAP",
      "It matches how powerful retailers manage shelf space and reduces internal brand-vs-brand rivalry",
      "It eliminates the need for a CMO",
      "It is the most common structure across all industries",
    ],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Category management matches how powerful retailers (Walmart, Target) actually think about shelf space, and it reduces the internal competition for resources that brand management can create.",
  },
];

const MKTG2_QUIZ_QUESTIONS = [
  {
    source: "planning",
    prompt: "Which of the following is NOT one of the three characteristics of an SBU?",
    options: [
      "It could stand on its own as a business",
      "It has its own competitors",
      "It has a manager accountable for strategic planning and profit",
      "It shares a single brand with the parent company",
    ],
    correctIndex: 3,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The three characteristics are: a standalone business, its own competitors, and an accountable manager. Sharing a brand with the parent isn't one of them.",
  },
  {
    source: "planning",
    prompt: "A company with narrow product lines like Ferrari or GoPro has which kind of SBU portfolio?",
    options: ["Diversified", "Specialized", "Matrix", "Functional"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Specialized portfolios have narrow assortments — one or a few product lines. Diversified portfolios (Microsoft, Nestlé) span many lines.",
  },
  {
    source: "planning",
    prompt: "The textbook's main criticism of the BCG matrix is that it is:",
    options: ["Too expensive to compute", "Oversimplified and subjective", "Only usable by public companies", "Focused exclusively on profit, not growth"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The BCG matrix (share × growth) is widely used, but the book explicitly calls it \"oversimplified and subjective.\"",
  },
  {
    source: "planning",
    prompt: "\"A better everyday life for the many people\" (IKEA) illustrates which characteristic of a good mission statement?",
    options: ["A limited number of specific goals", "A long-term view", "Defining the major markets served", "Being short and memorable only"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "IKEA's mission is framed to remain relevant for decades — a long-term, enduring view rather than a near-term specific goal.",
  },
  {
    source: "planning",
    prompt: "Why is corporate culture considered harder to change than a company's structure or policies?",
    options: [
      "Culture is legally protected and cannot be altered",
      "Culture guides discretionary behavior — what employees do when no one senior is watching",
      "Culture only affects marketing, not operations",
      "Culture automatically updates whenever leadership changes",
    ],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Frei & Morriss: culture guides discretionary behavior — \"it tells us what to do when the CEO isn't in the room\" — which makes it much stickier than a formal policy change.",
  },
  {
    source: "market",
    prompt: "Which framework defines competitors by the customer need they fulfill, making a separate \"substitutes\" category unnecessary?",
    options: ["Porter's Five Forces", "The 5-C framework", "The BCG matrix", "G-STIC"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The 5-C framework defines the market by customer need, so a substitute that meets the same need already counts as a competitor — no separate category is needed.",
  },
  {
    source: "market",
    prompt: "A company offers a $1-off coupon. In the 7-T framework, this is best classified as:",
    options: ["Communication", "Price", "Incentives", "Distribution"],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Coupons are incentives — they enhance value by cutting cost. The old 4-P framework would have lumped this into \"promotion\" alongside advertising.",
  },
  {
    source: "market",
    prompt: "Which of these is one of the three stated limitations of the 4-P framework?",
    options: [
      "It has too many categories to remember",
      "It treats brand as part of the product, even though firms can outsource manufacturing and focus purely on the brand",
      "It ignores price entirely",
      "It only applies to services, not goods",
    ],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The three limitations: no product/service split, treating brand as part of product, and lumping incentives with communication under \"promotion.\"",
  },
  {
    source: "market",
    prompt: "In the 5-C framework, changing the target customer usually also changes:",
    options: [
      "Nothing else — the 5 Cs are independent of each other",
      "Only the company's internal org chart",
      "The competitors, collaborators, required resources, and context",
      "Only the price the company can charge",
    ],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The choice of target customer determines everything else in the 5-C framework — it cascades into who the competitors, collaborators, and relevant context are.",
  },
  {
    source: "market",
    prompt: "In the 3-V framework, why do collaborators choose to work with a company?",
    options: [
      "Because the company value exceeds the collaborator value",
      "Because collaborator value — their own benefits and costs — beats competitive alternatives",
      "Collaborators never have a choice in the matter",
      "Because of customer value alone",
    ],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Collaborator value covers all benefits and costs to the collaborator — why they'd pick this offering over competing alternatives, not the company's own returns.",
  },
  {
    source: "market",
    prompt: "A software company sells the same code either as a one-time purchase or as a monthly subscription with support. Which 7-T distinction does this illustrate?",
    options: ["Brand vs. price", "Product vs. service — ownership is the key difference", "Incentives vs. communication", "Distribution vs. communication"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The same underlying offering can be a product (ownership transfers) or a service (value without ownership) depending on how it's packaged — ownership is the distinguishing factor.",
  },
  {
    source: "gstic",
    prompt: "\"Increase brand awareness to 40% by the end of Q2\" is what type of goal, and what does \"end of Q2\" represent?",
    options: [
      "Monetary goal; quantitative benchmark",
      "Strategic goal; temporal benchmark",
      "Strategic goal; quantitative benchmark",
      "Monetary goal; temporal benchmark",
    ],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Awareness is a nonmonetary (strategic) focus; \"by end of Q2\" is the temporal benchmark, while \"40%\" is the quantitative benchmark.",
  },
  {
    source: "gstic",
    prompt: "What is the primary function of the control step in G-STIC?",
    options: [
      "To set the company's annual budget",
      "To tell the company whether to stay the course, modify, or abandon its plan",
      "To design the product's packaging",
      "To select the target market",
    ],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Control has one function: signal whether to stay the course, modify, or abandon — based on evaluating performance and monitoring the environment.",
  },
  {
    source: "gstic",
    prompt: "A company launches a new product in one metro area first, planning to expand later if it succeeds. This is an example of:",
    options: ["Large-scale rollout", "Selective deployment", "Resource development", "A marketing audit"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Selective deployment launches in a primary market first, then expands — one of the two commercial-deployment approaches under implementation.",
  },
  {
    source: "gstic",
    prompt: "What is the key difference between a marketing plan and a marketing audit?",
    options: [
      "A plan is only for new products; an audit is only for mature ones",
      "A plan looks forward and plots a course of action; an audit examines past and present performance",
      "An audit is always done internally; a plan is always done externally",
      "There is no meaningful difference between the two",
    ],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The plan is forward-looking; the audit looks at past and present performance to find overlooked opportunities and problems, then feeds back into the plan.",
  },
  {
    source: "gstic",
    prompt: "Why should a marketing audit ideally be done by an outside party rather than the department itself?",
    options: [
      "Outside parties are cheaper",
      "Self-audits tend to be too subjective — an unbiased view is one of the four audit criteria",
      "It's a legal requirement in most industries",
      "Internal staff aren't allowed to see G-STIC documents",
    ],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "\"Unbiased\" is one of the four audit criteria (comprehensive, systematic, unbiased, periodic) — self-audits are prone to being too subjective.",
  },
];

const MKTG3_QUIZ_QUESTIONS = [
  {
    source: "characteristics",
    prompt: "A consumer avoids a brand specifically because it's associated with a group whose values she rejects. This group is her:",
    options: ["Aspirational group", "Dissociative group", "Family of orientation", "Opinion-leader network"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "A dissociative group is one whose values or behavior a person rejects — the opposite of an aspirational group, which a person hopes to join.",
  },
  {
    source: "characteristics",
    prompt: "Which family relationship has the more direct influence on everyday, routine buying?",
    options: ["Family of orientation", "Family of procreation", "Reference groups", "Social class"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Family of procreation (spouse and children) has the more direct influence on day-to-day buying; family of orientation (parents/siblings) shapes broader orientations like religion and politics.",
  },
  {
    source: "characteristics",
    prompt: "A global fashion study found collectivistic-culture shoppers (Portugal, Mexico, Turkey), compared to individualistic-culture shoppers, tend to:",
    options: [
      "Return items more often and chase trends",
      "Follow the crowd, value long-term retailer reputation, and prefer physical stores",
      "Shop exclusively online across many channels",
      "Buy almost entirely for themselves rather than family",
    ],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Collectivistic shoppers follow the crowd, value long-term retailer reputation, buy for family, and prefer physical stores — individualistic shoppers are the ones who chase trends and return items more.",
  },
  {
    source: "characteristics",
    prompt: "Hamburger Helper is designed to need at least one pan and about 15 minutes of prep, rather than zero effort. This targets consumers seeking:",
    options: ["Maximum convenience with no involvement", "A convenience-involvement segment — some convenience, but some involvement too", "A money-constrained lifestyle", "A dissociative reference group"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "This targets a 'convenience involvement segment' that wants convenience but still wants to feel some involvement in preparing the meal — not zero effort.",
  },
  {
    source: "characteristics",
    prompt: "Consumers who buy brands to match how they believe others perceive them are acting on which type of self-concept?",
    options: ["Actual self-concept", "Ideal self-concept", "Others' self-concept", "Aspirational self-concept"],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The three self-concept types are actual, ideal, and how others see you (\"others' self-concept\") — this effect is strongest for publicly consumed products.",
  },
  {
    source: "psych",
    prompt: "A consumer forms an opinion of a discount based on how it's presented — '$1.50 a day' feels smaller than '$550 a year,' even though they're equal. This illustrates:",
    options: ["Mental accounting", "Decision framing", "The availability heuristic", "The conjunction fallacy"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Decision framing is how the presentation of a choice — not its actual substance — changes the decision.",
  },
  {
    source: "psych",
    prompt: "A gambler treats a $100 casino win differently from $100 earned at work, spending the winnings more freely. This is:",
    options: ["Mental accounting", "Selective distortion", "The representativeness heuristic", "Choice architecture"],
    correctIndex: 0,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Mental accounting is treating money as belonging to separate mental 'accounts' depending on its source, rather than as fully fungible.",
  },
  {
    source: "psych",
    prompt: "A blind taste test and a branded taste test of the same product produce different preference results. This demonstrates:",
    options: ["Selective attention", "Selective distortion", "Selective retention", "The availability heuristic"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Selective distortion is interpreting information to fit preconceptions — the brand label itself changes how the same product is perceived.",
  },
  {
    source: "psych",
    prompt: "A shopper only remembers her favorite brand's strengths and forgets that a competitor also performed well. This is:",
    options: ["Selective attention", "Selective distortion", "Selective retention", "Framing"],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Selective retention is remembering the positives of liked brands while forgetting competitors' good points — it happens after the information is already processed.",
  },
  {
    source: "psych",
    prompt: "People tend to believe homicide kills more people annually than emphysema, though the opposite is true, because homicides are more memorable and widely reported. This is the:",
    options: ["Availability heuristic", "Representativeness heuristic", "Conjunction fallacy", "Framing effect"],
    correctIndex: 0,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The availability heuristic is judging likelihood by how easily examples come to mind — vivid, memorable events feel more probable than they are.",
  },
  {
    source: "psych",
    prompt: "Believing 'Linda is a bank teller and a feminist' is more likely than 'Linda is a bank teller' alone is a classic case of the:",
    options: ["Availability heuristic", "Conjunction fallacy", "Representativeness heuristic only", "Anchoring effect"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The conjunction fallacy is believing two events together are more probable than one alone — which is mathematically impossible, since a conjunction can never exceed either individual probability.",
  },
  {
    source: "psych",
    prompt: "A consumer with the motivation, ability, and opportunity to think carefully about a product ad takes which persuasion route, per the Elaboration Likelihood Model?",
    options: ["Peripheral route, producing a durable attitude", "Central route, producing a durable attitude", "Central route, producing a cue-dependent attitude", "Peripheral route, producing a cue-dependent attitude"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "With motivation, ability, and opportunity all present, the audience takes the central route — careful thought about the message, producing a more durable attitude.",
  },
  {
    source: "psych",
    prompt: "Memory of 'how to ride a bike' — automatic and hard to verbalize — is an example of which memory type?",
    options: ["Episodic memory", "Semantic memory", "Procedural memory", "Associative memory"],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Procedural memory covers how to do things — automatic skills like riding a bike — distinct from episodic (events) and semantic (facts/concepts) memory.",
  },
  {
    source: "buying",
    prompt: "A consumer knows of 20 laptop brands but seriously considers only 4 that meet her budget and specs. This narrowed group is her:",
    options: ["Total set", "Awareness set", "Consideration set", "Choice set"],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The consideration set is the subset of the awareness set that meets the buyer's initial criteria — narrower still is the choice set, the final strong contenders.",
  },
  {
    source: "buying",
    prompt: "A buyer weighs quality at 50%, price at 30%, and design at 20%, scoring a brand 6, 8, and 5 respectively on each. What is the brand's perceived value under the expectancy-value model?",
    options: ["5.9", "6.4", "6.8", "7.0"],
    correctIndex: 1,
    correctFeedback: "Correct — 0.5(6) + 0.3(8) + 0.2(5) = 3.0 + 2.4 + 1.0.",
    incorrectFeedback: "Not quite — recompute: 0.5(6) + 0.3(8) + 0.2(5).",
    explanation: "0.5(6) + 0.3(8) + 0.2(5) = 3.0 + 2.4 + 1.0 = 6.4.",
  },
  {
    source: "buying",
    prompt: "A shopper worries a purchase will embarrass her in front of friends. This is which type of perceived risk?",
    options: ["Functional risk", "Psychological risk", "Social risk", "Opportunity risk"],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Social risk is the fear that a purchase will cause embarrassment in front of others; psychological risk concerns the buyer's own mental well-being, not others' opinions.",
  },
  {
    source: "buying",
    prompt: "A product performs better than a buyer expected. Per the satisfaction model, this results in:",
    options: ["Disappointment", "Satisfaction", "Delight", "Cognitive dissonance"],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Performance below expectations produces disappointment, meeting expectations produces satisfaction, and exceeding expectations produces delight.",
  },
  {
    source: "buying",
    prompt: "Under a non-compensatory decision rule, a laptop that scores poorly on battery life but excellently on price:",
    options: [
      "Can still win overall because price offsets battery life",
      "Is judged on battery life in isolation, with no offset from its price strength",
      "Is automatically eliminated regardless of other attributes",
      "Is scored using the same formula as the compensatory model",
    ],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Non-compensatory rules judge attributes in isolation — a weakness on one attribute is not offset by a strength on another, unlike the compensatory expectancy-value model.",
  },
];

const MKTG7_QUIZ_QUESTIONS = [
  {
    source: "value",
    prompt: "For a luxury handbag, which type of value is typically of primary importance?",
    options: ["Functional", "Monetary", "Psychological", "Collaborator"],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Psychological value — the emotional and self-expressive benefits — dominates luxury and fashion categories; monetary value tends to dominate commoditized categories.",
  },
  {
    source: "value",
    prompt: "Volvo's marketing promises safety, performance, design, and environmental responsibility together. This full bundle is Volvo's:",
    options: ["Positioning", "Value proposition", "Point of parity", "Brand mantra"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The value proposition is the whole cluster of promised benefits; positioning would instead single out the one key benefit (for Volvo, safety) as the compelling reason to choose.",
  },
  {
    source: "value",
    prompt: "According to the customer value equation, how is customer value determined?",
    options: [
      "Total benefit alone, regardless of cost",
      "Total cost alone, regardless of benefit",
      "Net benefit (benefit minus cost) compared against the same calculation for perceived alternatives",
      "Price alone compared to competitors' prices",
    ],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Customer value is relative: it's how much better the net benefit (total benefit minus total cost) is compared to the alternatives customers perceive as available.",
  },
  {
    source: "value",
    prompt: "A company selling bulk industrial fasteners is competing primarily on:",
    options: ["Psychological value", "Functional value", "Monetary value only, never functional", "Brand personality"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Functional value — performance, reliability, durability — dominates utilitarian, industrial goods.",
  },
  {
    source: "value",
    prompt: "In customer value analysis, what should a company do if importance ratings for an attribute diverge widely across respondents?",
    options: [
      "Ignore that attribute entirely",
      "Cluster respondents into different market segments",
      "Automatically assume the highest-rated group is correct",
      "Remove the attribute from the analysis",
    ],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Wide divergence in importance ratings signals that respondents should be clustered into different segments rather than treated as one uniform market.",
  },
  {
    source: "positioning",
    prompt: "A new light beer must convince drinkers it tastes 'good enough' compared with regular beer. For this brand, taste is best classified as a:",
    options: ["Point of difference", "Category point of parity", "Correlational point of parity", "Brand mantra"],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The brand's low-calorie POD creates a potential negative — weaker taste — that must be neutralized. A negative that arises from your own positive attribute is a correlational POP.",
  },
  {
    source: "positioning",
    prompt: "Which of the following is NOT one of the three criteria for a point of difference?",
    options: ["Desirable to consumers", "Deliverable by the company", "Differentiating from competitors", "Discounted relative to competitors"],
    correctIndex: 3,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The three Ds are desirable, deliverable, and differentiating — price discounting isn't one of the criteria.",
  },
  {
    source: "positioning",
    prompt: "BMW positioned itself with a point of difference on luxury versus Corvette, and a point of difference on performance versus Cadillac. This is an example of:",
    options: ["Lowest common denominator positioning", "Straddle positioning", "Competitive depositioning", "Category membership by exemplar"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "In straddle positioning, the POD in one frame of reference becomes the POP in the other frame — BMW's luxury POD vs. Corvette is its POP vs. Cadillac, and vice versa for performance.",
  },
  {
    source: "positioning",
    prompt: "What is the main risk of straddle positioning done poorly, as illustrated by Palm Pilot and Apple Newton?",
    options: [
      "The brand becomes too expensive to produce",
      "The brand ends up credible in neither of the categories it straddles",
      "The brand loses all points of parity automatically",
      "The company is forced to abandon its brand mantra",
    ],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Palm Pilot and Apple Newton tried to straddle pagers and laptops but weren't credible as either — a poorly executed straddle can leave a brand legitimate in no category.",
  },
  {
    source: "positioning",
    prompt: "The UK Automobile Association positioned itself as the 'fourth emergency service.' This illustrates which positioning decision?",
    options: ["Choosing a brand mantra", "Choosing an advantageous frame of reference", "Resolving conflicting benefits", "Building a perceptual map"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Choosing to frame itself alongside police, fire, and ambulance rather than against ordinary roadside-assistance competitors is a frame-of-reference decision, giving it more credibility and urgency.",
  },
  {
    source: "positioning",
    prompt: "\"For busy professionals, Hertz offers a fast, convenient way to rent the right car at an airport\" is an example of a:",
    options: ["Brand mantra", "Positioning statement", "Perceptual map", "Point of parity"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "This follows the positioning statement formula: 'For [target customers], [brand] offers [key benefits].'",
  },
  {
    source: "positioning",
    prompt: "Swapping a rival's brand into your own positioning statement, and finding that it still reads true, reveals that your positioning:",
    options: ["Passes the brand substitution test", "Fails the brand substitution test — it's too weak or generic", "Has achieved an ideal straddle", "Has too many points of difference"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "If a rival's name fits just as well into the statement, the positioning isn't distinctive enough — it fails the brand substitution test.",
  },
  {
    source: "positioning",
    prompt: "A brand manager insists that the company's positioning statement must accurately describe every single product in a 40-item line. What's the likely result, per the 80-20 rule?",
    options: [
      "A sharper, more distinctive positioning statement",
      "A vague, lowest-common-denominator statement, since positioning is only meant to fit about 80% of the line",
      "No change, since positioning statements ignore product lines entirely",
      "A statement that automatically becomes a brand mantra",
    ],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The 80-20 rule says a positioning statement should fit about 80% of a brand's products; forcing it to cover 100% waters it down to the lowest common denominator.",
  },
  {
    source: "mantra",
    prompt: "Nike's \"authentic athletic performance\" differs from \"Just Do It\" because it is:",
    options: ["An external slogan", "An internal brand mantra", "A positioning statement for investors", "A category point of parity"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Mantras are internal, guiding employees and partners; slogans like 'Just Do It' are external and consumer-facing.",
  },
  {
    source: "mantra",
    prompt: "In the brand positioning bullseye, what sits at the very center?",
    options: ["Visual identity", "Substantiators / reasons to believe", "The brand mantra", "Points of parity"],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The bullseye runs center-out: brand mantra → POPs/PODs → substantiators/reasons to believe → values/personality and visual identity.",
  },
  {
    source: "mantra",
    prompt: "\"It's Not Delivery, It's DiGiorno!\" is an example of which technique?",
    options: [
      "Comparing to exemplars",
      "Claiming a category the brand doesn't belong to, to highlight a point of difference",
      "Relying on the product descriptor",
      "A brand mantra",
    ],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "DiGiorno is frozen pizza, but it borrows the delivered-pizza category's cachet while distinguishing itself from it, to stress its own quality.",
  },
  {
    source: "mantra",
    prompt: "GORE-TEX is marketed as both breathable and waterproof in a single product. Which solution to conflicting benefits does this illustrate?",
    options: [
      "Two separate campaigns, one per benefit",
      "Linking to a person or thing with the right equity",
      "Developing a product that performs well on both — generally the strongest approach",
      "Reframing the negative relationship as positive",
    ],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Building a single product that performs well on both sides of the tradeoff is the strongest of the five solutions to conflicting benefits.",
  },
  {
    source: "mantra",
    prompt: "Which of the following is one of the three criteria for a good brand mantra?",
    options: ["It should be at least ten words long", "It should simplify the brand's essence", "It should be identical to the brand's slogan", "It should list every product feature"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The three criteria are: communicates what's unique, simplifies the brand's essence (short, crisp, vivid), and inspires customers and employees.",
  },
];

const MKTG6_QUIZ_QUESTIONS = [
{
    source: "logic",
    prompt: "A company decides not to serve customers with low switching costs, focusing only on customers whose needs its unique manufacturing process serves best. This is an example of:",
    options: ["Tactical targeting", "Target compatibility (strategic targeting)", "Cost-efficiency principle", "Market specialization"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Target compatibility is about whether the company's resources let it create superior value — here, its unique process is the resource being matched to the right customers.",
  },
  {
    source: "logic",
    prompt: "An airline targets a low-margin group of first-time flyers because growing its overall user base strengthens its network and future pricing power. This illustrates:",
    options: ["Monetary value", "Social strategic value", "Scale strategic value", "Information strategic value"],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Scale value comes from the benefits of larger operations/network effects, even when the customer segment itself is low-margin.",
  },
  {
    source: "logic",
    prompt: "Which pair correctly matches a targeting type with its guiding question?",
    options: [
      "Strategic targeting — How do we reach these customers?",
      "Tactical targeting — Can we create superior value for them?",
      "Strategic targeting — Can we create superior value for them, and can they create value for us?",
      "Tactical targeting — Should we ignore this segment entirely?",
    ],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Strategic targeting addresses value (compatibility + attractiveness); tactical targeting addresses reach (effectiveness + cost efficiency).",
  },
  {
    source: "logic",
    prompt: "A new travel-rewards credit card links \"wants travel benefits, pays on time\" to observable traits like reading travel magazines and having a strong credit score. This is an example of:",
    options: ["Target compatibility", "Building a tactical customer profile", "Market specialization", "The Long Tail"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Tactical targeting links an unobservable, value-based segment to observable profile traits so the company can actually reach people.",
  },
  {
    source: "multi",
    prompt: "A microscope manufacturer sells different instruments to university, government, and commercial labs. This is:",
    options: ["Market specialization", "Product specialization", "Selective specialization", "Single-segment concentration"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Product specialization: one product line sold across multiple segments.",
  },
  {
    source: "multi",
    prompt: "Crest Whitestrips initially targeted two unrelated groups — brides-to-be and gay men — each individually attractive but with little synergy between them. This is:",
    options: ["Market specialization", "Product specialization", "Selective specialization", "Single-segment concentration"],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Selective specialization picks several unrelated-but-attractive segments to diversify risk, without needing synergy between them.",
  },
  {
    source: "multi",
    prompt: "According to the Long Tail idea, lower distribution costs and better recommendation engines shift some markets from an 80/20 rule toward:",
    options: ["90/10", "50/50", "70/30", "99/1"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Chris Anderson's Long Tail argument is that online markets can shift sales distribution from 80/20 toward roughly 50/50 between hits and niches.",
  },
  {
    source: "multi",
    prompt: "Niche marketers win primarily on ______, while mass marketers win primarily on ______.",
    options: ["volume; margin", "margin; volume", "price; quality", "quality; price"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Niche marketers win on margin (specialization, premium pricing); mass marketers win on volume.",
  },
  {
    source: "segment",
    prompt: "Heavy beer drinkers account for a hugely disproportionate share of consumption but are described as often extremely loyal or completely unloyal. This is an example of segmenting by:",
    options: ["Buyer-readiness stage", "Usage rate", "Occasions", "Loyalty status"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "This is the classic usage-rate (light/medium/heavy user) segmentation example from the chapter.",
  },
  {
    source: "segment",
    prompt: "The VALS framework segments consumers primarily by:",
    options: ["Income and education", "Motivation and resources (psychographics)", "Geographic location", "Buyer-readiness stage"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "VALS is a psychographic framework based on consumer motivation (ideals, achievement, self-expression) and resources.",
  },
  {
    source: "segment",
    prompt: "Honda's Element was designed to target 21-year-olds but ended up attracting 42-year-old \"psychologically young\" Boomers instead. This illustrates a limitation of:",
    options: [
      "Relying only on demographic segmentation when psychographic fit matters more",
      "Geoclustering",
      "B2B purchasing-approach segmentation",
      "The Long Tail",
    ],
    correctIndex: 0,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Demographics (age) didn't predict who actually wanted the product — a psychographic trait (feeling \"young\") turned out to matter more.",
  },
  {
    source: "segment",
    prompt: "Claritas's PRIZM system, which groups zip codes into 68 segments by income, education, occupation, home value, urbanization, age, and kids at home, is an example of:",
    options: ["Geoclustering", "Firmographic segmentation", "The buyer-readiness funnel", "The Long Tail"],
    correctIndex: 0,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Geoclustering combines geographic and demographic segmentation to answer questions like which zip codes hold the best customers.",
  },
  {
    source: "segment",
    prompt: "Timken shifted its focus away from some automotive customers toward heavy-processing, aerospace, and defense after realizing:",
    options: [
      "Those customers generated revenue but little profit",
      "Automotive demand had permanently disappeared",
      "Aerospace customers were easier to reach tactically",
      "The automotive segment was a niche market",
    ],
    correctIndex: 0,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The Timken lesson is to segment by profitability, not just revenue — some customers can generate significant revenue while contributing little profit.",
  },
  {
    source: "segment",
    prompt: "A company's buyer-readiness campaign begins with simple awareness ads, then shifts to benefit-dramatizing ads, and finally to a free-exam offer. This sequence is designed to move customers through the:",
    options: ["Loyalty-status segments", "Buyer-readiness stages", "B2B purchasing approaches", "Long Tail"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Buyer-readiness stages run unaware → aware → informed → interested → desirous → intends to buy, and marketing messaging shifts to match the mix of stages present.",
  },
];

const MKTG17_QUIZ_QUESTIONS = [
{
    source: "growth",
    prompt: "A coffee chain increases growth by encouraging existing customers to visit more often, using a loyalty app with streak rewards. This is an example of:",
    options: ["Market development", "Market penetration", "Product development", "Diversification"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Market penetration grows share within an existing market using an existing product — here, by increasing purchase frequency.",
  },
  {
    source: "growth",
    prompt: "A U.S. snack brand with no changes to its product begins selling in Mexico and Brazil for the first time. This is:",
    options: ["Market penetration", "Market development", "Product development", "Diversification"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Market development takes an existing product into a new market — here, a new geography.",
  },
  {
    source: "growth",
    prompt: "A furniture retailer acquires the trucking company it has long used to ship products to customers. This is:",
    options: ["Backward integration", "Forward integration", "Horizontal integration", "Market development"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Forward integration moves toward the customer-facing end of the channel — acquiring distribution/delivery capability.",
  },
  {
    source: "growth",
    prompt: "Which best describes a \"cloner\" strategy toward an established pioneer product?",
    options: [
      "Copying the pioneer's offering and positioning almost exactly",
      "Adapting the pioneer's product for a different market",
      "Keeping some differentiation in pricing and promotion",
      "Inventing an unrelated new technology",
    ],
    correctIndex: 0,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "A cloner closely copies both the product and its positioning, in contrast to an imitator (keeps some differentiation) or an adapter (adapts for new markets).",
  },
  {
    source: "position",
    prompt: "A brand with the highest survey recall and top-of-mind awareness, even if it isn't the sales leader, has strong:",
    options: ["Share of market", "Share of mind", "Share of heart", "Pioneer advantage"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Share of mind refers to top-of-mind brand awareness, distinct from share of market (sales volume) or share of heart (preference/loyalty).",
  },
  {
    source: "position",
    prompt: "A technology company invents a new battery chemistry, but a different company is first to successfully sell a commercial product built on it to mainstream customers. The second company is the:",
    options: ["Inventor", "Product pioneer", "Market pioneer", "Cloner"],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The market pioneer is first to successfully market the product at scale — a distinct role from the inventor (technology) or product pioneer (first commercial product).",
  },
  {
    source: "position",
    prompt: "A market leader gives up a weak, low-profit regional market to concentrate its marketing spend on its strongest, most profitable territories. This is a:",
    options: ["Flanking defense", "Contraction defense", "Pre-emptive defense", "Guerrilla attack"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Contraction defense is a planned retreat from weaker positions to better defend the strongest ones — not a sign of overall weakness.",
  },
  {
    source: "position",
    prompt: "Instead of attacking the market leader directly, a challenger launches an entirely new product category the leader has ignored. This is a:",
    options: ["Frontal attack", "Flank attack", "Bypass attack", "Guerrilla attack"],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "A bypass attack avoids head-to-head competition altogether by moving into new markets, technologies, or segments.",
  },
  {
    source: "position",
    prompt: "A company that anticipates a need customers don't yet know they have, and builds a solution before being asked, is practicing:",
    options: ["Responsive marketing", "Anticipative marketing", "Creative marketing", "Guerrilla marketing"],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Creative marketing uncovers and offers solutions customers hadn't thought to ask for, beyond simply anticipating a known future need.",
  },
  {
    source: "plc",
    prompt: "During which PLC stage are sales growing rapidly while profits typically improve as competitors enter and volume increases?",
    options: ["Introduction", "Growth", "Maturity", "Decline"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The growth stage features rapid sales increases and improving profitability as the product gains broader adoption.",
  },
  {
    source: "plc",
    prompt: "A company keeps selling a declining product with minimal further investment, intending to extract maximum remaining profit before exiting. This is:",
    options: ["Divesting", "Harvesting", "Repositioning", "Cycle-recycling"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Harvesting means minimizing investment while continuing to sell, to capture remaining cash flow before eventual exit.",
  },
  {
    source: "plc",
    prompt: "A product sees an initial sales spike, a sharp decline, and then settles into a long, stable plateau. This matches which alternative PLC pattern?",
    options: ["Cycle-recycle", "Scalloped pattern", "Growth-slump-maturity", "Standard S-curve"],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Growth-slump-maturity describes rapid initial growth, a sharp drop, and then a stable plateau — distinct from the smooth standard S-curve.",
  },
  {
    source: "plc",
    prompt: "Which best distinguishes a fad from a trend?",
    options: [
      "A fad is driven by broad societal shifts, while a trend is emotion-driven and short-lived",
      "A fad is a short, often emotion-driven surge that fades quickly, while a trend has durability and momentum",
      "Fads and trends are the same thing described differently by different industries",
      "A trend only applies to the decline stage of the PLC",
    ],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Fads are short and often emotionally driven, fading quickly, while trends reflect durable shifts with real momentum.",
  },
  {
    source: "plc",
    prompt: "A product sees repeated new bursts of growth driven by newly added features, uses, or user groups over time. This matches which alternative PLC pattern?",
    options: ["Growth-slump-maturity", "Scalloped pattern", "Cycle-recycle", "Standard decline"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The scalloped pattern shows a series of new growth cycles, each sparked by new features, uses, or user segments.",
  },
];

const MKTG18_QUIZ_QUESTIONS = [
{
    source: "innovate",
    prompt: "Roughly what share of new offerings fail, according to the chapter's opening statistic?",
    options: ["25%", "50%", "75%", "95%"],
    correctIndex: 3,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The chapter opens by noting new-offering failure rates run around 95% — underscoring why a disciplined process matters.",
  },
  {
    source: "innovate",
    prompt: "A go/no-go decision point between each stage of new-offering development, used to screen out weak ideas before heavy investment, describes:",
    options: ["A persona", "A gate in the Stage-Gate framework", "Conjoint analysis", "Market expansion"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Stage-Gate uses gate decisions between each of its stages to control investment risk as an idea develops.",
  },
  {
    source: "innovate",
    prompt: "At each Stage-Gate gate, which three validation criteria are typically assessed?",
    options: [
      "Desirability, feasibility, viability",
      "Price, promotion, place",
      "Awareness, interest, desire",
      "Market share, mind share, heart share",
    ],
    correctIndex: 0,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Each gate checks whether customers want it (desirability), whether it can be built/delivered (feasibility), and whether it can be profitable (viability).",
  },
  {
    source: "innovate",
    prompt: "A company kills a promising new-product idea during screening, and a competitor later launches something similar to huge success. This is an example of:",
    options: ["A Type 1 screening error", "A Type 2 screening error", "Business-model validation", "A bypass attack"],
    correctIndex: 0,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "A Type 1 error is a false negative — rejecting an idea that would have succeeded.",
  },
  {
    source: "idea",
    prompt: "A company's leadership sets a strategic direction (e.g., \"expand into wearables\") and then solicits ideas to fit it. This is:",
    options: ["Bottom-up idea generation", "Top-down idea generation", "Beta testing", "Conjoint analysis"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Top-down idea generation starts with management-set direction, in contrast to bottom-up ideas that originate from employees or customers.",
  },
  {
    source: "idea",
    prompt: "Testing a nearly finished product with real external customers under real-world conditions, before full commercial launch, is:",
    options: ["Alpha testing", "Beta testing", "A/B testing", "Conjoint analysis"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Beta testing uses real external customers in real conditions, distinct from alpha testing (internal, within the company).",
  },
  {
    source: "idea",
    prompt: "A research method that asks customers to make tradeoffs among product attributes, revealing how much each attribute contributes to overall preference, is:",
    options: ["A/B testing", "Ethnographic research", "Conjoint analysis", "Ansoff analysis"],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Conjoint analysis quantifies how much each attribute level contributes to overall choice by analyzing tradeoffs customers make.",
  },
  {
    source: "idea",
    prompt: "In Rogers' adopter categories, which group adopts a new offering first?",
    options: ["Early majority", "Innovators", "Late majority", "Laggards"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The order is innovators, early adopters, early majority, late majority, laggards.",
  },
  {
    source: "idea",
    prompt: "In Moore's technology-adoption model, \"the chasm\" refers to the gap between:",
    options: [
      "Innovators and early adopters",
      "Early adopters and the early majority",
      "Early majority and late majority",
      "Late majority and laggards",
    ],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The chasm sits between early adopters (visionaries) and the early majority (pragmatists) — many innovations fail to cross it.",
  },
  {
    source: "launch",
    prompt: "A new offering's business model should be designed around which frameworks from earlier in the course?",
    options: [
      "The 5 Cs, 3 Vs, and 7 Ts",
      "The Ansoff matrix only",
      "Rogers' adopter categories",
      "The six defense strategies",
    ],
    correctIndex: 0,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Chapter 18 ties new-offering business-model design back to the 5 Cs, 3 Vs, and 7 Ts planning frameworks from Chapter 2.",
  },
  {
    source: "launch",
    prompt: "Crystal Pepsi generated strong initial trial from curiosity but failed quickly. This best illustrates:",
    options: [
      "A feasibility failure",
      "Trial without a validated, repeatable value proposition",
      "A Type 1 screening error",
      "Successful market expansion",
    ],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Crystal Pepsi shows that initial curiosity-driven trial doesn't guarantee a sustainable business — the value proposition didn't hold up for repeat purchase.",
  },
  {
    source: "launch",
    prompt: "An idea for a perpetual motion machine might be highly desirable in theory, but is rejected because it is:",
    options: ["Undesirable", "Infeasible", "Unprofitable", "Already patented"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "The example illustrates a feasibility failure — the idea violates fundamental physical constraints, regardless of how desirable it might be.",
  },
  {
    source: "launch",
    prompt: "Pets.com had real customer desirability and operational feasibility but still failed because:",
    options: [
      "Customers didn't want pet supplies online",
      "The product couldn't technically be built",
      "The cost of shipping heavy, low-margin items made the business model unviable",
      "It never tested its product at all",
    ],
    correctIndex: 2,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Pets.com illustrates a viability failure — serving costs exceeded what the business model could sustain profitably.",
  },
  {
    source: "launch",
    prompt: "Launching a new offering in a limited market or segment first, to test and refine before a wider rollout, is:",
    options: ["Market expansion", "Selective market deployment", "Beta testing", "Horizontal integration"],
    correctIndex: 1,
    correctFeedback: "Correct.",
    incorrectFeedback: "Not quite.",
    explanation: "Selective market deployment limits initial launch scope to validate and refine before a broader market-expansion rollout.",
  },
];

const MKTG5_QUIZ_QUESTIONS = [
  {
    "source": "c5_scope",
    "prompt": "A 1970s research executive tells a studio a science-fiction film will fail, citing post-Watergate realism and the word \"war\" in the title, without ever studying the script. The chapter says he delivered:",
    "options": [
      "Information and opinion, not insight",
      "A causal experiment",
      "A syndicated-service report",
      "A properly designed descriptive study"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The chapter says he delivered information and opinion, not insight; he failed to study the script, which was a human story of love, conflict, loss, and redemption. The film was Star Wars."
  },
  {
    "source": "c5_scope",
    "prompt": "A juice brand drops the iconic orange-and-straw image from its carton without adequately testing consumer reactions, and sales fall 20 percent. This best illustrates:",
    "options": [
      "The advantage of relying on secondary data",
      "Why quotas should exceed forecasts",
      "The value of share of search",
      "The danger of making marketing changes without consumer insight"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Tropicana redesigned its packaging without adequately testing reactions; sales fell 20 percent and it reinstated the old design after a few months."
  },
  {
    "source": "c5_scope",
    "prompt": "Using the chapter's norm of 1 to 2 percent of sales, a company with $300 million in sales would typically budget about how much for marketing research?",
    "options": [
      "$30 million to $60 million",
      "$300,000 to $600,000",
      "$3 million to $6 million",
      "$15 million to $30 million"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "1 to 2 percent of $300 million is $3 million to $6 million, with a large share often spent on outside firms."
  },
  {
    "source": "c5_process",
    "prompt": "A manager asks the researcher to \"find out everything you can about first-class air travelers' needs.\" The chapter would call this problem definition:",
    "options": [
      "Too narrow, because it fixes the price at $25",
      "Too broad, because it collects a lot of unnecessary information",
      "Just right, because it is actionable",
      "Causal, because it tests cause and effect"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "A problem defined too broadly yields unnecessary information. A good definition focuses on the key issue yet stays specific enough to act on."
  },
  {
    "source": "c5_process",
    "prompt": "A researcher's goal is to quantify how many first-class passengers would buy ultra-high-speed Wi-Fi at $25. This is which type of research?",
    "options": [
      "Exploratory",
      "Descriptive",
      "Causal",
      "Qualitative-only"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Descriptive research seeks to quantify demand. Exploratory identifies the problem and suggests solutions; causal tests cause and effect."
  },
  {
    "source": "c5_process",
    "prompt": "An airline charges $25 for in-flight Wi-Fi one week and $15 the next on the same route with about the same number of first-class passengers. The purpose is to test:",
    "options": [
      "A cause-and-effect relationship between price and usage",
      "Brand personification",
      "Who belongs in the sampling frame",
      "Whether the sales budget is conservative"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Experimental research is built to capture cause and effect by controlling other explanations; here, price is the treatment and usage is the response."
  },
  {
    "source": "c5_process",
    "prompt": "American estimated a $50,000 long-term profit from Wi-Fi and would pay up to $40,000 for research that could improve its pricing and promotion. A firm quotes $48,000. What follows from the chapter's logic?",
    "options": [
      "Worth doing, because the quote is below the $50,000 estimate",
      "Worth doing, because primary data are always required",
      "Not worth doing, because secondary data are free",
      "Not worth doing, because the cost is above what the research is worth"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The cost of research should be in line with its benefits; the chapter says if it costs more than $40,000, it is not worth doing. Being below the $50,000 profit is the trap."
  },
  {
    "source": "c5_approaches",
    "prompt": "An auto advertiser buys a copy of a J.D. Power survey on who buys specific brands to decide where to place online ads. The advertiser is using:",
    "options": [
      "Primary data",
      "Experimental data",
      "Secondary data",
      "Ethnographic data"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Secondary data were collected for another purpose and already exist. It is the low-cost first move before collecting costly primary data."
  },
  {
    "source": "c5_approaches",
    "prompt": "To revive popcorn sales, a company spends nine months observing families at home and studying weekly diaries, and concludes that popcorn \"facilitates interaction.\" This is:",
    "options": [
      "Survey research",
      "A causal experiment",
      "Ethnographic research",
      "Data mining"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Ethnographic research immerses the researcher in consumers' lives to uncover unarticulated desires; ConAgra did this for Orville Redenbacher."
  },
  {
    "source": "c5_approaches",
    "prompt": "A grocer's scanner data show many low-income households buy some expensive brands, even though interviewees said otherwise. Why might the chapter trust the scanner data more?",
    "options": [
      "Scanner data are a probability sample",
      "Actual purchases are often more reliable than what consumers state",
      "Interviews are always causal",
      "Scanner data are qualitative"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Behavioral research uses actual purchase traces, which often are more reliable than the statements consumers offer to researchers."
  },
  {
    "source": "c5_approaches",
    "prompt": "After a series of focus groups reveals consistent preferences, a manager wants to treat the results as the whole market's view. The chapter's caution is:",
    "options": [
      "Researchers must avoid generalizing because a small group may not reflect the market",
      "Focus groups cannot be used for exploratory work",
      "Moderators should hide their agenda from the client",
      "Focus groups are valid only if held in person"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Focus groups are a useful exploratory step, but the preferences of the few people involved may not accurately reflect the market as a whole."
  },
  {
    "source": "c5_instruments",
    "prompt": "A survey item reads: \"Small airlines generally give better service than large ones,\" with answers from 1 (strongly disagree) to 5 (strongly agree). This is a:",
    "options": [
      "Semantic differential",
      "Dichotomous question",
      "Intention-to-buy scale",
      "Likert scale"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "A Likert scale gives a statement and asks for the level of agreement or disagreement."
  },
  {
    "source": "c5_instruments",
    "prompt": "In a laddering interview, the respondent says, \"I can help them if they're in trouble\" after a chain starting with \"the phone looks well built.\" That final answer is the:",
    "options": [
      "Attribute",
      "Functional benefit",
      "Emotional benefit",
      "Core value"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The ladder runs attribute, functional benefit, emotional benefit, core value. Being able to help family in trouble is the deepest rung."
  },
  {
    "source": "c5_instruments",
    "prompt": "A team wants to understand why consumers say one thing and do another in an ad test, using brain activity instead of stated preferences. What should the team keep in mind?",
    "options": [
      "Brain research is universally accepted and inexpensive",
      "Brain research cannot differ from stated preferences",
      "Neuromarketing can be expensive and obtrusive and should not be the sole basis for decisions",
      "Brain research replaces the need for any sample"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The chapter notes high brain activity Super Bowl ads differed from those with the highest stated preference, but neurological research is costly, obtrusive, and not universally accepted."
  },
  {
    "source": "c5_sampling",
    "prompt": "A survey team debates whether to include travelers under 18 and whether to interview both traveler and spouse. Which sampling decision is this?",
    "options": [
      "Sample size",
      "Sampling unit",
      "Sampling procedure",
      "Contact method"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The sampling unit answers \"Whom should we survey?\" Size is how many; procedure is how to choose respondents."
  },
  {
    "source": "c5_sampling",
    "prompt": "A researcher wants to be able to say there are \"95 chances in 100\" that the true average falls within a stated interval. Which procedure makes that possible?",
    "options": [
      "Probability sampling",
      "Intercept sampling in a mall",
      "Convenience sampling by email",
      "Focus-group recruitment"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Probability sampling lets marketers calculate confidence limits for sampling error and makes the sample more representative."
  },
  {
    "source": "c5_sampling",
    "prompt": "A handset maker sees its share of search climb sharply. According to the studies the chapter reports, market-share changes for phone brands typically follow in about:",
    "options": [
      "6 months",
      "3 months",
      "9 to 12 months",
      "The same week"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Changes in share of search preceded market-share changes by about 3 months for energy brands, about 6 months for mobile phone handsets, and about 9 to 12 months for autos."
  },
  {
    "source": "c5_decision",
    "prompt": "At $25, 5 of 10 first-class passengers use Wi-Fi; at $15, 6 of 10 do. Which price yields more revenue per 10 passengers, and by how much?",
    "options": [
      "$15, by $35",
      "$25, by $5",
      "$15, by $90",
      "$25, by $35"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "$25 x 5 = $125 versus $15 x 6 = $90, so $25 earns $35 more."
  },
  {
    "source": "c5_decision",
    "prompt": "Wi-Fi earns $125 per flight day for 365 days, and each plane needs a $90,000 investment. About how long to break even?",
    "options": [
      "About 6 months",
      "About 1 year",
      "About 2 years",
      "About 4 years"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "$125 x 365 = $45,625 a year; $90,000 divided by $45,625 is about 2 years."
  },
  {
    "source": "c5_demand",
    "prompt": "A firm estimates 50,000 potential buyers who each buy 4 units a year at $20. Using the chapter's method, total market potential is:",
    "options": [
      "$1,000,000",
      "$4,000,000",
      "$250,000",
      "$14,000,000"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Market potential is buyers x average quantity x price: 50,000 x 4 x $20 = $4,000,000."
  },
  {
    "source": "c5_demand",
    "prompt": "A company sets one conservative estimate for purchasing and cash-flow planning and a separate higher target to stretch its sales force. Relative to the sales forecast, these are:",
    "options": [
      "Budget slightly above the forecast; quota slightly below it",
      "Budget slightly below the forecast; quota slightly above it",
      "Both exactly equal to the forecast",
      "Budget equal to market potential; quota equal to company sales potential"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "A sales budget is conservative and set slightly lower than the forecast; a quota is often set slightly higher to stimulate effort."
  },
  {
    "source": "c5_demand",
    "prompt": "Your sales grow 5 percent a year while industry sales grow 10 percent. What does that tell you?",
    "options": [
      "You are losing relative standing in the industry",
      "You are gaining market share",
      "Your share is unchanged",
      "Your sales forecast is too high"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Growing slower than the industry means your market share is shrinking."
  },
  {
    "source": "c5_demand",
    "prompt": "A panel of experts gives estimates, the results are combined, and further rounds of estimating and refining follow. This is the:",
    "options": [
      "Market-test method",
      "Conjoint analysis",
      "Econometric analysis",
      "Delphi method"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The Delphi method adds further rounds of estimating and refining after experts' estimates are combined."
  },
  {
    "source": "c5_metrics",
    "prompt": "A marketing dashboard should include two market-based scorecards. They are:",
    "options": [
      "One for sales and one for profit",
      "One for customers and one for competitors",
      "One for performance and one for early-warning signals",
      "One for short-term and one for long-term brand"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The chapter says company input to the dashboard should include one scorecard reflecting performance and another providing possible early warning signals."
  }
];

const MKTG10_QUIZ_QUESTIONS = [
  {
    "source": "c10_branding",
    "prompt": "A shopper is willing to pay $100 for an unbranded leather bag but roughly ten times that for an otherwise identical bag carrying a luxury brand name. This best illustrates that:",
    "options": [
      "Consumers may evaluate the identical product differently depending on how it is branded",
      "Price is set by manufacturing cost alone",
      "Generic products are always lower quality",
      "Packaging is the only source of value"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The chapter uses this $100-versus-ten-times example to show that brand knowledge changes how consumers evaluate the same product."
  },
  {
    "source": "c10_branding",
    "prompt": "Coca-Cola spent $4 million on research and blind taste tests before launching New Coke, yet the launch caused a national uproar and the old formula returned ten weeks later. What did the research fail to measure?",
    "options": [
      "The taste of the new formula",
      "Pepsi's market share",
      "The price consumers would pay",
      "Consumers' emotional attachment to Coca-Cola"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Researchers measured taste but failed to adequately measure emotional attachment to the brand."
  },
  {
    "source": "c10_equity",
    "prompt": "Shoppers react more favorably to a product and the way it is marketed when they can see the brand name than when the identical offer is unbranded. The brand has:",
    "options": [
      "Negative customer-based brand equity",
      "Strong goodwill on the balance sheet",
      "A high brand valuation by definition",
      "Positive customer-based brand equity"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Customer-based brand equity is the differential effect of brand knowledge on response; more favorable response when identified = positive equity."
  },
  {
    "source": "c10_equity",
    "prompt": "A marketing team wants quantitative data collected from consumers over time to give consistent baseline information about how its brand and marketing programs are performing. This is:",
    "options": [
      "A brand audit",
      "Brand valuation",
      "Brand tracking",
      "The cost approach"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Brand tracking uses the audit as input to collect quantitative data over time; a brand audit assesses brand health and sources of equity."
  },
  {
    "source": "c10_equity",
    "prompt": "In the brand value chain, a firm's marketing program is excellent and changes customer mindsets, but strong competitors, weak channel support and a small customer base keep it from producing market share. Which multiplier is limiting value?",
    "options": [
      "The customer multiplier",
      "The program multiplier",
      "The market multiplier",
      "The salience multiplier"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The customer multiplier governs how much value created in customers' minds shows up in market performance: competitive superiority, channel support, and customer size and profile."
  },
  {
    "source": "c10_equity",
    "prompt": "An analyst values the Morton Salt brand by comparing revenues from Morton salt with revenues from its generic equivalent, then subtracting the cost of building and managing the brand. This is the:",
    "options": [
      "Cost approach",
      "Financial approach",
      "Market approach",
      "Replacement approach"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The market approach estimates brand equity from the revenue difference between a branded offering and an identical unbranded one, adjusted for brand-building expense."
  },
  {
    "source": "c10_equity",
    "prompt": "A CFO says 'brand equity and goodwill are the same thing.' The best correction is that:",
    "options": [
      "Goodwill covers only brand names and logos",
      "Goodwill is broader: it covers all intangible assets such as patents, know-how, culture and licenses, with brand equity as one part",
      "Goodwill is broader because it includes only tangible assets",
      "Brand equity is broader because it includes goodwill"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Goodwill is the monetary value of all of a company's intangible assets, so it is a much broader term than brand equity."
  },
  {
    "source": "c10_resonance",
    "prompt": "Customers can name a brand instantly in many buying situations, but they have little idea what it stands for or how they feel about it. Which building block has the brand achieved?",
    "options": [
      "Brand resonance",
      "Brand salience",
      "Brand judgments",
      "Brand imagery"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Salience is the base of the pyramid: how often and easily customers think of the brand. Meaning, responses and resonance sit above it."
  },
  {
    "source": "c10_resonance",
    "prompt": "MasterCard's 'Priceless' campaign communicated the card's wide acceptance and also the emotional payoffs those advantages permitted. In the brand resonance model this reflects:",
    "options": [
      "Moving only up the left side of the pyramid",
      "Salience without any meaning",
      "A brand architecture strategy",
      "The duality of brands: building up both the rational and emotional sides of the pyramid"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The model emphasizes the duality of brands; MasterCard succeeded by going up both the rational (left) and emotional (right) sides."
  },
  {
    "source": "c10_resonance",
    "prompt": "A customer says, 'This brand makes me feel warm and comfortable.' In the brand resonance model, this statement describes brand:",
    "options": [
      "Judgments",
      "Performance",
      "Salience",
      "Feelings"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Brand feelings are customers' emotional responses and reactions. Judgments are personal opinions and evaluations."
  },
  {
    "source": "c10_elements",
    "prompt": "Amazon chose the name of the world's biggest river rather than 'Books 'R' Us' so it could grow beyond books. Which brand-element criterion does this best illustrate?",
    "options": [
      "Transferable",
      "Memorable",
      "Protectable",
      "Likable"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "A transferable element can introduce new products in the same or different categories and cross geographic boundaries and segments."
  },
  {
    "source": "c10_elements",
    "prompt": "A marketing program is highly creative and unique, but target customers do not see it as meaningful or worth considering. Under the DRIVE test, which letter is failing?",
    "options": [
      "Distinctiveness",
      "Relevance",
      "Integrated",
      "Excellence"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Relevance asks how meaningful the program is to customers and whether they feel the brand is one they should seriously consider."
  },
  {
    "source": "c10_elements",
    "prompt": "A startup's soap bottle has a distinctive teardrop shape that stands out on crowded shelves at Target and Walmart. Which core packaging principle is it mainly serving?",
    "options": [
      "Transparency",
      "Brand salience",
      "Protectability",
      "Visibility"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Visibility is about cutting through information clutter and arresting shoppers' attention; Method's teardrop bottle is the chapter's example."
  },
  {
    "source": "c10_elements",
    "prompt": "Burton, a snowboard maker, launches the 'Dominator by Burton' surfboard, sells it in popular surf shops, signs pro surfers and sponsors a surfing competition. Burton is:",
    "options": [
      "Leveraging secondary brand associations",
      "Using a house-of-brands strategy",
      "Running a brand audit",
      "Practicing ingredient branding exclusively"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Sub-branding, channels, endorsers and sponsorship are all ways to link the brand to other entities and borrow their meaning."
  },
  {
    "source": "c10_architecture",
    "prompt": "A company sells hams under one family name and fertilizers under a completely different one. A major advantage of this approach is that:",
    "options": [
      "A product failure or low-quality image does not tie the reputation of the company's other offerings to it",
      "It lowers development costs because no name must be researched",
      "It builds the greatest corporate intangible value",
      "It prevents any cannibalization between products"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Separate family names (house of brands) insulate other offerings; lower name-development cost belongs to the branded-house strategy."
  },
  {
    "source": "c10_architecture",
    "prompt": "Campbell introduces new soups under its corporate name and gets instant recognition. The main downside of this branded-house strategy is:",
    "options": [
      "Higher advertising costs to build name recognition",
      "A greater chance of negative spillover if one product's bad experience contaminates the others",
      "No ability to leverage corporate image associations",
      "Loss of control over retail distribution"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Umbrella branding reduces cost and speeds recognition but risks negative spillover across products sharing the brand."
  },
  {
    "source": "c10_architecture",
    "prompt": "A firm finds that its profit would rise if it dropped one of its overlapping brands. According to the chapter, its brand portfolio is:",
    "options": [
      "Too big",
      "Not big enough",
      "Optimal",
      "Perfectly differentiated"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "If profits can rise by dropping brands the portfolio is too big; if they can rise by adding brands it is not big enough."
  },
  {
    "source": "c10_architecture",
    "prompt": "A fabric maker wants shoppers to insist on its fiber inside other companies' jackets. Which set of requirements must be met for ingredient branding to succeed?",
    "options": [
      "Low price, wide distribution and a family brand name",
      "The host brand must be weak, and the ingredient must be hidden",
      "Consumers believe the ingredient matters, are convinced it is superior, and see a distinctive symbol or logo signaling it",
      "Exclusive licensing, retail cobranding and a flagship product"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The three requirements: perceived importance to performance, perceived superiority (via communication), and a distinctive seal-like symbol."
  },
  {
    "source": "c10_extensions",
    "prompt": "Dannon adds Low Fat, Plain and Smoothies yogurts, while Swiss Army brand moves into watches. These are respectively:",
    "options": [
      "Category extensions; a line extension",
      "Line extensions; a vertical sub-brand",
      "Line extensions; a category extension",
      "Both are category extensions"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Line extensions are new flavors/forms in a category the brand already serves; category extensions move into a category it does not currently serve."
  },
  {
    "source": "c10_extensions",
    "prompt": "Giorgio Armani wants a lower-priced product line without hurting the core brand, so it introduces Armani Exchange. This is mainly done to:",
    "options": [
      "Extend horizontally across product categories",
      "Create an ingredient brand",
      "Mitigate brand dilution and sales cannibalization when extending downscale",
      "Lower the cost of researching the parent brand's name"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Vertical extensions often require sub-branding to prevent dilution and cannibalization (downscale) or negative associations (upscale)."
  },
  {
    "source": "c10_extensions",
    "prompt": "Bic, known for inexpensive disposable products, launched $5 perfumes and failed. According to the chapter, the major mistake was:",
    "options": [
      "Judging fit on one or two associations instead of consumers' full brand knowledge",
      "Spending too little on advertising",
      "Selling through too few channels",
      "Using a sub-brand instead of the parent name"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Bic focused on a few associations as a basis of fit (affordability, convenience) and ignored negative image associations and lack of cachet for perfume."
  },
  {
    "source": "c10_extensions",
    "prompt": "Tide keeps roughly the same market share as 50 years ago thanks to scented, unscented, pod and liquid line extensions. Shifts from the original to those extensions are best described as:",
    "options": [
      "Brand dilution",
      "Preemptive cannibalization",
      "Harmful cannibalization",
      "A category extension"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Within-brand shifts can be acceptable when those consumers would otherwise have switched to a competing brand."
  },
  {
    "source": "c10_manage",
    "prompt": "A brand's sales are falling because the marketing program no longer delivers on what customers expect of the product, though the core positioning is still sound. The best strategy is:",
    "options": [
      "Reinvention",
      "A new brand architecture",
      "Retail cobranding",
      "Back to basics"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "When the problem lies more in execution, 'back to basics' (as Harley-Davidson and Pabst did) fits; when the positioning itself is outdated, reinvention is needed."
  },
  {
    "source": "c10_manage",
    "prompt": "Glass shards were found in some of Gerber's baby food jars; Gerber insisted its plants were fine and refused to pull products from stores, and share fell from 66% to 52%. What lesson does the chapter draw?",
    "options": [
      "Consumers rarely react to crises in the short term",
      "Not withdrawing the product made the company look like it did not care; response must be swift and sincere",
      "Public relations should be avoided during a crisis",
      "A strong denial protects market share"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Consumers must see the response as both swift and sincere; refusing to pull product gave the appearance of not being a caring company."
  },
  {
    "source": "c10_luxury",
    "prompt": "Louis Vuitton does not advertise sales, does not sell through wholesalers, does not license its brand, and makes slightly less than demand. This reflects which luxury principle?",
    "options": [
      "Defining competitors narrowly",
      "Aligning all marketing decisions and protecting identity to preserve the premium, exclusive image",
      "Maximizing short-term volume",
      "Using price promotions to attract aspirational customers"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Luxury marketers must align product, pricing, communication and distribution with the brand image and protect its exclusivity."
  },
  {
    "source": "c10_luxury",
    "prompt": "According to the chapter, what are the common denominators of luxury brands?",
    "options": [
      "Low price and wide availability",
      "Frequent sales and mass advertising",
      "Quality and uniqueness",
      "Novelty and rapid trend-following"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "A luxury shopper must feel they get something truly special; craftsmanship, heritage, authenticity and history are common ways to deliver this."
  }
];

const MKTG20_QUIZ_QUESTIONS = [
  {
    "source": "c20_decide",
    "prompt": "A U.S. regional grocery chain opens stores abroad and fails because it misjudges what local shoppers want and builds weak supply networks. These are best described as:",
    "options": [
      "General risks of entering any new market",
      "Specific risks of a foreign country",
      "Expropriation risk",
      "Country-of-origin effects"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "General risks involve failing to understand needs, competitors, supply/distribution or promotion — they could occur in any new market, domestic or foreign."
  },
  {
    "source": "c20_decide",
    "prompt": "A firm's home market is saturated, so it enters other countries to reduce its dependence on any one market and to reach a larger customer base. Which pair of motives from the chapter is this?",
    "options": [
      "Counterattack global competitors; serve global customers",
      "Meet domestic-content rules; avoid tariffs",
      "Transfer ideas between markets; avoid transfer pricing",
      "Reduce dependence on one market; achieve economies of scale"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The chapter lists better profit opportunities, a larger base for economies of scale, reduced dependence on any one market, counterattacking competitors in their home markets, and serving global customers."
  },
  {
    "source": "c20_decide",
    "prompt": "Tesco closed Fresh & Easy in the U.S. after five unprofitable years. Which statement best captures why, per the chapter?",
    "options": [
      "Tesco lacked any prior research on U.S. families",
      "The U.S. government expropriated the stores",
      "U.S. customers were not accustomed to its ready meals, self-service registers and unorthodox store layouts",
      "Its stores were too large and sold too many convenience goods"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Despite extensive research, U.S. customers weren't used to British-style ready meals and self-service cash registers; the range was narrow and stores were cold, leading to over $1.6 billion in losses and a 2013 exit."
  },
  {
    "source": "c20_markets",
    "prompt": "A firm plans to enter one country at a time, carefully sequencing expansion to avoid straining human and financial resources. This is the:",
    "options": [
      "Sprinkler approach",
      "Waterfall approach",
      "Born-global approach",
      "Straight extension"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The waterfall approach enters countries gradually in sequence; the sprinkler approach enters many simultaneously."
  },
  {
    "source": "c20_markets",
    "prompt": "A consumer-technology company faces intense competition and believes first-mover advantage is crucial in every region. Which entry-timing approach fits, and what is its main risk?",
    "options": [
      "Waterfall; it exposes the firm to expropriation",
      "Sprinkler; it forces the firm to rely on licensees",
      "Waterfall; it makes first-mover advantage impossible",
      "Sprinkler; it requires substantial resources and is hard to plan across diverse markets"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The sprinkler approach is better when first-mover advantage is crucial and competitive intensity is high, but it needs substantial resources and complex planning."
  },
  {
    "source": "c20_markets",
    "prompt": "A firm picks Canada, England and Australia over larger markets such as Germany and France because of familiar language and laws. What is the chapter's caution?",
    "options": [
      "Cultural proximity always raises tariffs",
      "It forces a joint venture",
      "It may overlook better markets and only superficially analyze real differences",
      "It makes licensing illegal"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The chapter warns that choosing by cultural proximity can overlook potentially better markets and underestimate real differences."
  },
  {
    "source": "c20_markets",
    "prompt": "Unilever sold four-cent sachets of detergent and shampoo in rural India. Which emerging-market principle does this illustrate?",
    "options": [
      "Smaller packaging and lower prices are critical when income and space are limited",
      "Standardization is always cheapest",
      "Price premiums are easy to command in emerging markets",
      "Kirana stores prefer large bulk packs"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The chapter says smaller packaging and lower prices are often critical when income and space are limited."
  },
  {
    "source": "c20_entry",
    "prompt": "A manufacturer hires an independent export-management company to handle foreign sales for a fee, with no export staff of its own. This is:",
    "options": [
      "Direct exporting",
      "Licensing",
      "Indirect exporting",
      "Direct investment"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Indirect exporting uses independent intermediaries — export merchants, export agents, cooperatives, export-management companies — which means less investment and less risk."
  },
  {
    "source": "c20_entry",
    "prompt": "A firm replaces its independent agents with an overseas sales subsidiary that handles sales, distribution and customer service. Relative to indirect exporting, it now faces:",
    "options": [
      "Less investment and less risk",
      "Somewhat greater investment and risk, but greater potential return",
      "No change in risk or control",
      "Complete loss of control over the brand"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Direct exporting increases investment and risk somewhat, but so does the potential return; the chapter orders modes by ascending commitment, risk, control and profit potential."
  },
  {
    "source": "c20_entry",
    "prompt": "A U.S. soft-drink firm lets a foreign bottler use its trademark for a royalty, but supplies the secret syrup itself. The syrup is mainly meant to:",
    "options": [
      "Reduce the licensee's royalty",
      "Qualify the deal as a joint venture",
      "Avoid dumping charges",
      "Keep the licensee dependent so it doesn't become a competitor later"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "A licensor has less control than over its own operations and may create a competitor; supplying proprietary components (as Coca-Cola does with syrup) and leading in innovation keep the licensee dependent."
  },
  {
    "source": "c20_entry",
    "prompt": "A Japanese TV maker has local factories in Eastern Europe produce its sets under its own brand, which lets it start faster but reduces its control over the process. This is:",
    "options": [
      "Franchising",
      "Contract manufacturing",
      "A joint venture",
      "Indirect exporting"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Toshiba and Hitachi use contract manufacturing in Eastern Europe — a faster start with the option to partner with or buy out the local manufacturer later."
  },
  {
    "source": "c20_entry",
    "prompt": "A foreign government requires that a market entrant share ownership with a local firm. Which entry mode is that, and what is a typical drawback?",
    "options": [
      "Licensing; the licensor gives up all control",
      "Direct investment; profits are limited",
      "Joint venture; partners may disagree over investment or marketing policies",
      "Direct export; the firm loses brand equity"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Joint ventures may be required for economic or political reasons; drawbacks include disagreements (e.g., reinvest earnings vs. pay dividends) and constraints on worldwide policies."
  },
  {
    "source": "c20_entry",
    "prompt": "Starbucks grew to nearly 90 Australian stores but lost $105 million and closed two-thirds of them. The chapter uses this to illustrate the risk of:",
    "options": [
      "Indirect exporting",
      "Contract manufacturing",
      "Gray-market diversion",
      "Direct investment failing to adapt to local preferences"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Direct investment exposes a large commitment; Starbucks' sweeter, pricier drinks did not suit Australian tastes."
  },
  {
    "source": "c20_entry",
    "prompt": "Kraft bought Cadbury partly for Cadbury's deep roots in India. Which drawback of acquisition is the biggest risk after such a deal?",
    "options": [
      "Having to charge a uniform price",
      "A mismatch between the two corporate cultures and a longer-term commitment",
      "Losing the ability to use local brands",
      "Reduced exposure to tariffs"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Acquisition drawbacks include the required investment, possible corporate-culture mismatch and a longer-term commitment to the country."
  },
  {
    "source": "c20_program",
    "prompt": "A company uses one global brand message and one product design in every country to maximize scale economies. What risk does the chapter attach to this standardized program?",
    "options": [
      "It lowers brand consistency",
      "It raises marketing costs",
      "It ignores differences in customer needs, usage, competition, and legal/cultural/political context",
      "It prevents leveraging good ideas across markets"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Standardization offers scale economies, lower costs and consistency, but ignores differences in needs, response, competitive environment and legal, cultural and political specifics."
  },
  {
    "source": "c20_program",
    "prompt": "A Japanese-style society where an individual's self-worth is rooted in the social system rather than personal achievement scores high on which cultural dimension?",
    "options": [
      "Masculinity",
      "Collectivism",
      "Uncertainty avoidance",
      "Indulgence"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "In collectivist societies (e.g., Japan) self-worth is rooted in the social system; in individualistic ones (e.g., the U.S.) people look after themselves and their immediate families."
  },
  {
    "source": "c20_product",
    "prompt": "Cameras and many machine tools are introduced abroad with no change, avoiding extra R&D, retooling or promotional modification. This strategy is:",
    "options": [
      "Straight extension",
      "Product adaptation",
      "Product invention",
      "Retailer versioning"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Straight extension introduces the product in the foreign market without any change."
  },
  {
    "source": "c20_product",
    "prompt": "Campbell lost an estimated $30 million launching condensed soup in England because consumers saw expensive small cans and didn't know to add water. What lesson does this teach?",
    "options": [
      "Condensed soup cannot be adapted",
      "Standardization can backfire when consumers differ in product knowledge and usage behavior",
      "Luxury goods must be localized",
      "Counterfeiting reduces demand"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Standardization can fail if consumers differ in knowledge, preferences and usage behavior — as with Campbell's soup."
  },
  {
    "source": "c20_product",
    "prompt": "Dunkin' sells a rocky road doughnut in the UK and Europe, while Switzerland's Migros and Cooperative chains each get a different coffee blend. These are, respectively:",
    "options": [
      "A country version and a regional version",
      "Straight extension and product invention",
      "A regional version and a retailer version",
      "A retailer version and a country version"
    ],
    "correctIndex": 2,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Regional versions serve a group of markets; retailer versions (like Migros vs. Cooperative blends) help avoid channel conflict."
  },
  {
    "source": "c20_product",
    "prompt": "Quaker Oats, Swift and Monsanto researched nutrition needs of less-developed countries and formulated new low-cost, high-protein foods. Which global product strategy is this?",
    "options": [
      "Straight extension",
      "Product adaptation",
      "Contract manufacturing",
      "Product invention"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Product invention develops new products for global markets rather than using or adapting current ones."
  },
  {
    "source": "c20_product",
    "prompt": "A luxury house finds that fakes of its handbags are sold on auction sites. According to the chapter, which defense uses AI software?",
    "options": [
      "Scanning for look-alike ads, unauthorized sites using its trademarks, and keywords like 'cheap' or 'factory'",
      "Switching to a market-based price",
      "Franchising its brand",
      "Raising transfer prices"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "AI software detects counterfeit storefronts via similar ads, unauthorized sites with logos, keywords like cheap/discount/authentic/factory, impossible colors and too-low prices."
  },
  {
    "source": "c20_brand",
    "prompt": "Clairol's 'Mist Stick' curling iron was a problem in Germany because 'mist' is slang for manure. This is an example of the need for:",
    "options": [
      "Brand adaptation",
      "Transfer pricing",
      "Straight extension",
      "Waterfall entry"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Brand names, slogans, numbers and colors can have unintended meanings in other languages and cultures."
  },
  {
    "source": "c20_pricing",
    "prompt": "A handbag costs $2,000 in Italy and $4,000 in China because of transportation, tariffs, and importer, wholesaler and retailer margins. This is:",
    "options": [
      "Price escalation",
      "Dumping",
      "A transfer price",
      "Uniform pricing"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Price escalation from added costs and currency risk can require a price two to five times higher to earn the same profit."
  },
  {
    "source": "c20_pricing",
    "prompt": "A parent charges its foreign subsidiary far less than cost for goods shipped, and regulators accuse it of entering the market unfairly. What are they alleging?",
    "options": [
      "Dumping",
      "Price escalation",
      "Gray-market diversion",
      "A uniform price"
    ],
    "correctIndex": 0,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "Charging too low a transfer price can lead to accusations of dumping — charging less than cost or less than the home price to enter or win a market."
  },
  {
    "source": "c20_placepromo",
    "prompt": "Coca-Cola and Goodyear let each country choose from a library of pre-made ads. Which communication approach is this?",
    "options": [
      "One message everywhere, varying only language",
      "A global pool of ads from which each country selects",
      "Country managers creating ads freely",
      "Same theme with adapted execution only"
    ],
    "correctIndex": 1,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The four approaches are one message; same theme with local execution; a global pool of ads; and country-created ads within guidelines."
  },
  {
    "source": "c20_placepromo",
    "prompt": "An authorized distributor buys more than it can sell locally and reships the goods to a higher-priced country, undercutting legitimate dealers there. This is the:",
    "options": [
      "Waterfall approach",
      "Counterfeit market",
      "Franchise system",
      "Gray market"
    ],
    "correctIndex": 3,
    "correctFeedback": "Correct.",
    "incorrectFeedback": "Not quite.",
    "explanation": "The gray market diverts branded goods from authorized channels, creating a free-rider problem and harming brand equity."
  }
];

const MKTG_MOCK_POOL = MKTG1_QUIZ_QUESTIONS.concat(MKTG2_QUIZ_QUESTIONS).concat(MKTG3_QUIZ_QUESTIONS).concat(MKTG7_QUIZ_QUESTIONS).concat(MKTG6_QUIZ_QUESTIONS).concat(MKTG17_QUIZ_QUESTIONS).concat(MKTG18_QUIZ_QUESTIONS).concat(MKTG5_QUIZ_QUESTIONS).concat(MKTG10_QUIZ_QUESTIONS).concat(MKTG20_QUIZ_QUESTIONS);
const MKTG_MOCK_LABELS = {
  scope: "Ch 1 \u00b7 Scope & Realities",
  holistic: "Ch 1 \u00b7 Holistic Marketing",
  org: "Ch 1 \u00b7 Customer-Oriented Org",
  planning: "Ch 2 \u00b7 Planning & SBUs",
  market: "Ch 2 \u00b7 5 Cs, 3 Vs & 7 Ts",
  gstic: "Ch 2 \u00b7 G-STIC & the Plan",
  characteristics: "Ch 3 \u00b7 Culture, Social & Personal",
  psych: "Ch 3 \u00b7 Needs, Perception & Memory",
  buying: "Ch 3 \u00b7 Buying Decision Process",
  value: "Ch 7 \u00b7 Value Proposition",
  positioning: "Ch 7 \u00b7 Frame, POPs & PODs",
  mantra: "Ch 7 \u00b7 Mantra & Bullseye",
  logic: "Ch 6 \u00b7 Targeting Logic & Strategy",
  multi: "Ch 6 \u00b7 Multi-Segment & Niche",
  segment: "Ch 6 \u00b7 Segmenting Markets",
  growth: "Ch 17 \u00b7 Growth Strategies",
  position: "Ch 17 \u00b7 Market Position",
  plc: "Ch 17 \u00b7 Product Life Cycle",
  innovate: "Ch 18 \u00b7 Managing Innovation",
  idea: "Ch 18 \u00b7 Idea Generation & Concept Dev.",
  launch: "Ch 18 \u00b7 Business Model & Deployment",
  c5_scope: "Ch 5 · Research & Who Does It",
  c5_process: "Ch 5 · Five-Step Process & the Problem",
  c5_approaches: "Ch 5 · Data Sources & Approaches",
  c5_instruments: "Ch 5 · Research Instruments",
  c5_sampling: "Ch 5 · Sampling & Contact Methods",
  c5_decision: "Ch 5 · Data Mining, Analysis & Decision",
  c5_demand: "Ch 5 · Measuring & Forecasting Demand",
  c5_metrics: "Ch 5 · Metrics & Dashboards",
  c10_branding: "Ch 10 · Branding & the Role of Brands",
  c10_equity: "Ch 10 · Brand Equity & Valuation",
  c10_resonance: "Ch 10 · Brand Resonance Model",
  c10_elements: "Ch 10 · Brand Elements, Programs & Associations",
  c10_architecture: "Ch 10 · Brand Architecture & Cobranding",
  c10_extensions: "Ch 10 · Brand Extensions",
  c10_manage: "Ch 10 · Revitalization & Crisis",
  c10_luxury: "Ch 10 · Luxury Brands",
  c20_decide: "Ch 20 · Deciding Whether to Go Abroad",
  c20_markets: "Ch 20 · Deciding Which Markets to Enter",
  c20_entry: "Ch 20 · Deciding How to Enter",
  c20_program: "Ch 20 · Standardize vs. Adapt",
  c20_product: "Ch 20 · Global Product Strategies",
  c20_brand: "Ch 20 · Global Brand Strategies",
  c20_pricing: "Ch 20 · Global Pricing",
  c20_placepromo: "Ch 20 · Global Communication & Distribution",
};
