const FLASHCARDS = [
  // ---- Growth Strategies: Ansoff, M&A, Innovation ----
  { source: "growth", front: "What are the four strategies in the Ansoff (growth) matrix?", back: "Market penetration (existing product, existing market), market development (existing product, new market), product development (new product, existing market), diversification (new product, new market)." },
  { source: "growth", front: "What is market penetration, and what are its typical tactics?", back: "Growing share within an existing market with an existing product — tactics include increasing usage frequency/quantity, winning competitors' customers, and converting nonusers." },
  { source: "growth", front: "What is market development?", back: "Taking an existing product into a new market — new geography, new segment, or new use/application for the current offering." },
  { source: "growth", front: "What is product development (as a growth strategy)?", back: "Creating a new product or line extension to sell to an existing, already-served market." },
  { source: "growth", front: "What is diversification, and why is it the riskiest Ansoff strategy?", back: "A new product into a new market — riskiest because it draws on neither existing product expertise nor existing customer relationships." },
  { source: "growth", front: "What are the three types of M&A-driven growth (integration)?", back: "Backward integration (acquire a supplier), forward integration (acquire a distributor/customer-facing channel), horizontal integration (acquire a competitor)." },
  { source: "growth", front: "Give an example of backward integration.", back: "A manufacturer buying its raw-material or component supplier to control costs and supply." },
  { source: "growth", front: "Give an example of forward integration.", back: "A manufacturer buying a retailer or distributor to control how its product reaches customers." },
  { source: "growth", front: "What is horizontal integration?", back: "Acquiring a direct competitor to gain share, scale, or capabilities quickly." },
  { source: "growth", front: "Distinguish a cloner, an imitator, and an adapter.", back: "Cloner: copies the pioneer's offering and positioning almost exactly. Imitator: copies some features but keeps differentiation (pricing, packaging, promotion). Adapter: takes the pioneer's product and adapts/improves it for different markets." },
  { source: "growth", front: "Why might a company choose imitation over innovation as a growth strategy?", back: "Lower R&D cost and risk, faster time to market, and the ability to learn from the pioneer's mistakes — though it sacrifices first-mover advantages." },

  // ---- Market Position & Pioneer Advantage ----
  { source: "position", front: "What are the three types of market position a company can hold?", back: "Share of market (sales/volume share), share of mind (top-of-mind awareness), share of heart (preference/loyalty)." },
  { source: "position", front: "What are the three ways a company can grow or defend its market position?", back: "Expand the total market, defend current share, or expand share by taking it from competitors." },
  { source: "position", front: "Distinguish inventor, product pioneer, and market pioneer.", back: "Inventor: first to develop the underlying technology. Product pioneer: first to turn the technology into a commercial product. Market pioneer: first to successfully market the product to customers at scale — these three roles need not be the same company." },
  { source: "position", front: "What is \"pioneer advantage\"?", back: "Benefits a first-mover can capture: brand association with the category, customer switching costs, and a head start on scale/learning curve — but it isn't guaranteed (many pioneers fail and are overtaken by fast followers)." },
  { source: "position", front: "List six market-leader defense strategies.", back: "Position defense, flanking defense, pre-emptive defense, counteroffensive defense, mobile defense, contraction defense." },
  { source: "position", front: "What is a flanking defense?", back: "Protecting weak sides/flanks before a competitor attacks there, by launching products or actions that cover gaps in the current position." },
  { source: "position", front: "What is a contraction defense?", back: "Giving up weaker territory/segments to concentrate resources on defending the strongest, most profitable ones (planned contraction, not retreat)." },
  { source: "position", front: "List five challenger (attack) strategies.", back: "Frontal attack, flank attack, encirclement attack, bypass attack, guerrilla attack." },
  { source: "position", front: "What is a bypass attack?", back: "A challenger avoids attacking the leader head-on and instead moves into new markets, technologies, or segments the leader hasn't addressed." },
  { source: "position", front: "What is a guerrilla attack?", back: "Small, intermittent attacks (price cuts, promotions, legal challenges) meant to harass and weaken a competitor rather than win outright." },
  { source: "position", front: "Distinguish responsive, anticipative, and creative marketing.", back: "Responsive: reacts to customer needs already expressed. Anticipative: looks ahead to needs customers will soon have. Creative: uncovers and offers solutions customers hadn't thought to ask for." },

  // ---- Product Life Cycle ----
  { source: "plc", front: "What are the four stages of the Product Life Cycle?", back: "Introduction, growth, maturity, decline." },
  { source: "plc", front: "Describe sales and profit during the introduction stage.", back: "Sales are low and grow slowly; profits are typically negative or minimal due to high launch/promotion costs." },
  { source: "plc", front: "Describe sales and profit during the growth stage.", back: "Sales rise rapidly as the market adopts the product; profits improve as costs are spread over higher volume and competitors enter." },
  { source: "plc", front: "What characterizes the maturity stage of the PLC?", back: "Sales growth slows and flattens as the market saturates; competition intensifies and profits may start to erode (described by three phases: growth, stable, decaying maturity)." },
  { source: "plc", front: "What are the three phases within the maturity stage?", back: "Growth maturity (sales growth slows), stable maturity (sales flatten on a per-capita basis), decaying maturity (absolute sales start to decline)." },
  { source: "plc", front: "What characterizes the decline stage, and what are the two main options?", back: "Sales and profits fall, often due to new technology, shifting tastes, or competition — companies choose to harvest (reduce investment, maximize remaining cash flow) or divest (exit the business/product)." },
  { source: "plc", front: "Distinguish harvest from divest as decline-stage strategies.", back: "Harvest: keep selling with minimal investment to extract maximum profit before exit. Divest: sell or discontinue the product/business outright." },
  { source: "plc", front: "List three alternative PLC patterns (beyond the standard S-curve).", back: "Growth-slump-maturity (initial rapid growth, a sharp drop, then a stable plateau); cycle-recycle (a second growth bump driven by promotion or relaunch); scalloped pattern (repeated new-growth cycles from new features, uses, or users)." },
  { source: "plc", front: "Distinguish a fad from a trend.", back: "Fad: a short, unpredictable, often emotion-driven surge in popularity that fades quickly. Trend: a direction or sequence of events with momentum and durability, shaped by broader shifts in society/technology/culture." },
  { source: "plc", front: "What marketing emphasis typically shifts across PLC stages (promotion vs. price vs. distribution)?", back: "Introduction emphasizes awareness-building promotion; growth emphasizes building distribution/share; maturity emphasizes defending share, often via price/promotion competition and differentiation; decline emphasizes cost control or exit." },
];

const SOURCE_LABELS = {
  growth: "Growth Strategies: Ansoff, M&A, Innovation",
  position: "Market Position & Pioneer Advantage",
  plc: "Product Life Cycle",
};
