const FLASHCARDS = [
  // ---- Planning & SBUs ----
  { source: "planning", front: "What are the three levels of planning?", back: "Corporate, business unit, and market offering — each nested inside the last." },
  { source: "planning", front: "What three activities happen at the corporate planning level?", back: "Define the mission and culture, establish strategic business units (SBUs), and allocate resources across them." },
  { source: "planning", front: "List Drucker's five mission questions.", back: "What is our business? Who is the customer? What is of value to the customer? What will our business be? What should our business be?" },
  { source: "planning", front: "Name the five characteristics of a good mission statement.", back: "Focuses on a limited number of specific goals; stresses major policies and values; defines the major markets served; takes a long-term view; is short, memorable, and meaningful." },
  { source: "planning", front: "Why is corporate culture harder to change than structure or policy?", back: "Culture guides discretionary behavior — it tells employees what to do when no one in leadership is watching, which structural or policy changes alone can't override." },
  { source: "planning", front: "What are the three characteristics of an SBU?", back: "A standalone business (or group of related businesses), its own competitors, and a manager accountable for strategic planning and profit." },
  { source: "planning", front: "What's the difference between a specialized and a diversified SBU portfolio?", back: "Specialized = narrow product lines (Ferrari, GoPro). Diversified = broad assortments across many lines (Microsoft, Nestlé), often to capture growth in areas the company doesn't yet compete in." },
  { source: "planning", front: "What three resource decisions can a company make for an SBU?", back: "Grow, harvest (draw cash from), or hold." },
  { source: "planning", front: "What is the BCG matrix, and what's the textbook's criticism of it?", back: "A 2×2 comparing market share and growth rate; the textbook calls it widely used but \"oversimplified and subjective.\"" },
  { source: "planning", front: "What is a business model made of, in strategy/tactics terms?", back: "Strategy (target market + value proposition) plus tactics (the 7 Ts)." },
  { source: "planning", front: "Why do some firms split into separate companies, like Kellogg did in 2022?", back: "Units growing at very different rates (cereal vs. snacks) can do better on their own — Kellogg became WK Kellogg Co. and Kellanova." },

  // ---- 5 Cs, 3 Vs & 7 Ts ----
  { source: "market", front: "Name the 5 Cs.", back: "Customers, collaborators, competitors, company, context." },
  { source: "market", front: "What are the five parts of \"context\" in the 5-C framework?", back: "Sociocultural, technological, regulatory, economic, physical." },
  { source: "market", front: "What's the single most important idea about the 5 Cs?", back: "The choice of target customers determines everything else — change the target customer and you usually change the competitors, collaborators, resources, and context." },
  { source: "market", front: "How does the 5-C framework differ from Porter's Five Forces in how it defines the market?", back: "Porter's Five Forces defines the market by industry; the 5-C framework defines it by customer need." },
  { source: "market", front: "Why doesn't the 5-C framework have a separate \"substitutes\" category?", back: "Because it defines competitors by customer need, a substitute that meets the same need already counts as a competitor." },
  { source: "market", front: "Name the 3 Vs.", back: "Customer value, collaborator value, company value." },
  { source: "market", front: "What does an \"optimal\" value proposition balance?", back: "All three Vs — customer, collaborator, and company value — in a way that still lets the company reach its own goals." },
  { source: "market", front: "Name the 7 Ts.", back: "Product, service, brand, price, incentives, communication, distribution." },
  { source: "market", front: "What's the key difference between product and service in the 7-T framework?", back: "A product transfers ownership rights; a service creates value without ownership." },
  { source: "market", front: "What's the key difference between incentives and communication?", back: "Incentives enhance value (coupons, discounts, rebates); communication only informs (ads, PR, social media)." },
  { source: "market", front: "Map the 4 Ps to the 7 Ts.", back: "Product → product/service/brand; price → price; promotion → incentives/communication; place → distribution." },
  { source: "market", front: "What are the three limitations of the 4-P framework?", back: "No product/service split; treats brand as part of the product; lumps incentives and communication together as one \"promotion\" bucket." },
  { source: "market", front: "What is the market value map?", back: "A visual of the business model — target market and value proposition (the strategy) plus the market offering (the tactics)." },

  // ---- G-STIC & the Plan ----
  { source: "gstic", front: "What does G-STIC stand for?", back: "Goal, Strategy, Tactics, Implementation, Control." },
  { source: "gstic", front: "What three parts make up a G-STIC goal?", back: "A focus (the metric), a quantitative benchmark, and a temporal benchmark." },
  { source: "gstic", front: "What's the difference between a monetary and a strategic goal?", back: "Monetary goals are profit-based (net income, ROI). Strategic goals are nonmonetary (volume, awareness, culture, recruiting)." },
  { source: "gstic", front: "What are the three parts of implementation in G-STIC?", back: "Resource development, offering development, and commercial deployment." },
  { source: "gstic", front: "What's the difference between selective deployment and a large-scale rollout?", back: "Selective deployment launches in a primary market first, then expands; a large-scale rollout launches broadly from the start." },
  { source: "gstic", front: "What are the two components of control in G-STIC?", back: "Evaluate performance (spot gaps against benchmarks) and monitor the environment (opportunities and threats)." },
  { source: "gstic", front: "What's the single function of the control step in G-STIC?", back: "To tell the company whether to stay the course, modify, or abandon its plan." },
  { source: "gstic", front: "What are the four parts of a marketing plan?", back: "Executive summary, situation overview, G-STIC (the core), and exhibits." },
  { source: "gstic", front: "What are the three functions of a marketing plan?", back: "Describe the goal and course of action, inform stakeholders, and persuade decision makers." },
  { source: "gstic", front: "What are the four criteria of a good marketing audit?", back: "Comprehensive, systematic, unbiased, periodic." },
  { source: "gstic", front: "What's the key difference between a marketing plan and a marketing audit?", back: "The plan looks forward and plots a course of action; the audit examines past and present performance to set the current course." },
];

const SOURCE_LABELS = {
  planning: "Planning & SBUs",
  market: "5 Cs, 3 Vs & 7 Ts",
  gstic: "G-STIC & the Plan",
};
