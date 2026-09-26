const FLASHCARDS = [
  // ---- Scope & Realities ----
  { source: "scope", front: "What is the managerial definition of marketing?", back: "The art and science of identifying, attracting, and retaining customers through creating, delivering, and communicating superior customer value." },
  { source: "scope", front: "What did Drucker mean by \"the aim of marketing is to make selling superfluous\"?", back: "If you understand the customer well enough, the product sells itself — the Wii, iPad, and Prius were all swamped with orders because of marketing homework, not great retail selling." },
  { source: "scope", front: "Name the ten things that get marketed.", back: "Goods, services, events, experiences, persons, places, properties, organizations, information, ideas." },
  { source: "scope", front: "What does \"properties\" mean as a marketing domain?", back: "Intangible rights of ownership — real estate or financial property, like stocks and bonds." },
  { source: "scope", front: "Where do fresh ideas tend to come from inside a company?", back: "Employees with diverse or contemporary perspectives, employees far from headquarters, and employees new to the industry." },
  { source: "scope", front: "Name the four forces reshaping every market.", back: "Technology, globalization, physical environment, social responsibility." },
  { source: "scope", front: "What does Friedman's \"the world is flat\" describe?", back: "Globalization leveling the competitive playing field — a call center 900 miles away can take a drive-thru order." },
  { source: "scope", front: "Name the three new market outcomes from the four forces.", back: "New consumer capabilities, new company capabilities, and a new competitive environment." },
  { source: "scope", front: "What is showrooming?", back: "Comparing products in a physical store, then buying online — a new consumer capability." },
  { source: "scope", front: "What is disintermediation? Give an example.", back: "Direct-to-consumer firms cutting out traditional middlemen — Warby Parker, Casper, Away." },
  { source: "scope", front: "What is reintermediation?", back: "Traditional firms fighting back by blending online and physical retail — \"brick-and-click.\"" },
  { source: "scope", front: "Companies want to avoid becoming the next Blockbuster or Barnes & Noble. Who overtook them, and why?", back: "Netflix and Amazon overtook them by updating their business models to fit new consumer and technology realities." },

  // ---- Holistic Marketing ----
  { source: "holistic", front: "What are the four components of holistic marketing?", back: "Relationship marketing, integrated marketing, internal marketing, performance marketing." },
  { source: "holistic", front: "What are the four constituents of relationship marketing?", back: "Customers, employees, marketing partners, and the financial community — the result is a marketing network." },
  { source: "holistic", front: "What is integrated marketing?", back: "Coordinating every activity so it delivers a consistent value and message across every touch point — \"the whole is greater than the sum of its parts.\"" },
  { source: "holistic", front: "Internal marketing needs two kinds of alignment. What are they?", back: "Vertical alignment (with senior management) and horizontal alignment (with other departments)." },
  { source: "holistic", front: "What is a \"triple bottom line\"?", back: "People, planet, profits — performance marketing's broader measure of return, beyond just financial results." },
  { source: "holistic", front: "What is the production concept, and when does it fit?", back: "Consumers want products that are widely available and inexpensive; fits developing or expanding markets (Lenovo, Haier in China)." },
  { source: "holistic", front: "What is the \"better-mousetrap fallacy\"?", back: "The product-concept trap of believing a superior product will sell itself without pricing, distribution, and promotion." },
  { source: "holistic", front: "What is the selling concept, and when is it used?", back: "Left alone, buyers won't buy enough, so push hard — used for unsought goods (insurance, cemetery plots) or overcapacity." },
  { source: "holistic", front: "What is the marketing concept?", back: "Customer-centered, \"sense and respond\" (mid-1950s): find the right products for your customers, not customers for your products." },
  { source: "holistic", front: "What is the market-value concept?", back: "Holistic: every functional area creates value for customers, company, and collaborators. Define the business as a customer-satisfying process, not a product." },
  { source: "holistic", front: "According to Levitt, how do selling and marketing differ?", back: "Selling focuses on the seller's need to turn product into cash; marketing focuses on the buyer's needs." },
  { source: "holistic", front: "Give the market-value version of Xerox's mission (\"we make copying equipment\").", back: "\"We help improve office productivity\" — the market-value view defines the business by the need it fills, not the product it makes." },

  // ---- Customer-Oriented Org ----
  { source: "org", front: "Describe the customer-oriented (inverted) org chart.", back: "Customers on top, then frontline people, then middle (service) managers who support them, then top management at the bottom." },
  { source: "org", front: "What is the most common marketing department structure, and what's its main weakness?", back: "Functional (specialists report to a CMO) — simple to administer, but groups compete for budget and status." },
  { source: "org", front: "What are the main downsides of brand management as an org structure?", back: "Low authority, little functional expertise, and short tenures that push toward short-term, market-share-driven thinking." },
  { source: "org", front: "What is category management, and why do firms like P&G use it?", back: "Managing by product category rather than individual brand; it matches how powerful retailers (Walmart, Target) actually manage shelf space and reduces internal brand-vs-brand rivalry." },
  { source: "org", front: "In a market-based organization, are market managers staff or line?", back: "Staff, not line — they're organized around distinct user groups (Canon: consumer, business, government)." },
  { source: "org", front: "What is the CMO's single most important role?", back: "Infusing the customer perspective into every touch point across the company." },
  { source: "org", front: "What did David Packard mean by \"marketing is far too important to leave to the marketing department\"?", back: "Every department shapes the customer experience, so CMOs must coordinate across the company through persuasion, not authority." },
  { source: "org", front: "Why is a company being \"customer-oriented\" necessary but not sufficient?", back: "Rivals copy customer-focused advantages fast, so the firm must also be creative — even strong firms like Nestlé and Coca-Cola have missed emerging trends." },
];

const SOURCE_LABELS = {
  scope: "Scope & Realities",
  holistic: "Holistic Marketing",
  org: "Customer-Oriented Org",
};
