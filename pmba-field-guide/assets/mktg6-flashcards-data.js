const FLASHCARDS = [
  // ---- The Logic of Targeting ----
  { source: "logic", front: "What are the three steps from segmentation to positioning?", back: "Segmentation (identify distinct buyer groups) → targeting (pick which segment(s) to serve) → positioning (establish, communicate, and deliver the right benefits)." },
  { source: "logic", front: "What is mass (undifferentiated) marketing? Give an example.", back: "One offer for the whole market, ignoring segment differences. Lowest costs but vulnerable to market splintering. Classic example: Ford Model T." },
  { source: "logic", front: "What is targeted (differentiated) marketing? Give an example.", back: "Different products for different segments — Estée Lauder: flagship for older consumers, Clinique/M·A·C for younger, Aveda for aromatherapy fans, Origins for eco-conscious buyers." },
  { source: "logic", front: "What is one-to-one marketing, and when does it work best?", back: "The ultimate level — each segment is one customer. Works best with lots of individual customer data and cross-sellable/repeat-purchase/high-value products (e.g., Wagner Custom Skis)." },
  { source: "logic", front: "What is mass customization? Give two examples.", back: "Individually designed products/services delivered on a mass basis — the MINI configurator, Coke Freestyle (100+ flavors)." },
  { source: "logic", front: "What are the two key strategic-targeting questions?", back: "Can the company create superior value for these customers? (target compatibility) Can these customers create superior value for the company? (target attractiveness)" },
  { source: "logic", front: "What is target compatibility?", back: "The company's ability to outdo competitors in fulfilling target-customer needs, based on its resources." },
  { source: "logic", front: "List the six resource types behind target compatibility.", back: "Business infrastructure, access to scarce resources, skilled employees, technological expertise, strong brands, collaborator networks." },
  { source: "logic", front: "What are the three traits of a core competency?", back: "A source of competitive advantage/significant customer benefit; applies across many markets; hard for competitors to imitate." },
  { source: "logic", front: "What is target attractiveness?", back: "Customers' ability to create value for the company — monetary value plus strategic value (social, scale, information)." },
  { source: "logic", front: "Define monetary value in target attractiveness.", back: "Customer revenues (market size/growth, buying power, loyalty, price sensitivity, competitive intensity) minus the costs of serving them." },
  { source: "logic", front: "Name the three types of strategic value.", back: "Social (opinion leaders/trendsetters), scale (benefits from scale of operations), information (data/feedback from customers, including lead users)." },
  { source: "logic", front: "Give an example of scale strategic value.", back: "Airlines, hotels, Uber, Airbnb, Instagram, and TikTok targeting low-margin or unprofitable customers early to build a user base." },
  { source: "logic", front: "What is tactical targeting?", back: "Linking the (unobservable) value-based segment to observable characteristics — the customer profile — so the company can actually reach people." },
  { source: "logic", front: "List the four customer-profile categories.", back: "Demographic (firmographic for B2B), geographic, behavioral, psychographic." },
  { source: "logic", front: "What are the two principles guiding tactical targeting?", back: "Effectiveness (reach all strategically viable customers) and cost efficiency (reach only those customers, minimizing waste)." },
  { source: "logic", front: "Strategic vs. tactical targeting — what question does each answer?", back: "Strategic: who is worth serving (value)? Tactical: how do we reach and contact them (reach)?" },
  { source: "logic", front: "What is a persona, and what's the caution around using one?", back: "A detailed hypothetical-customer profile (demographic/psychographic/behavioral, with a name/photo/bio). Caution: a persona represents an individual, not the whole segment — companies often build multiple personas." },

  // ---- Multi-Segment Targeting & Niche Markets ----
  { source: "multi", front: "What is single-segment (concentrated) marketing? Give an example.", back: "Serve one segment only — deep expertise and operating economies, but concentrated risk. Example: Porsche (sports-car enthusiasts)." },
  { source: "multi", front: "What is selective specialization? Give an example.", back: "Pick several unrelated-but-attractive segments, diversifying risk with little synergy needed. Example: Crest Whitestrips initially targeting brides-to-be and gay men." },
  { source: "multi", front: "What is product specialization? Give an example.", back: "Sell one product to several segments. Example: a microscope maker selling to university, government, and commercial labs. Risk: disruption by new technology." },
  { source: "multi", front: "What is market specialization? Give an example.", back: "Serve many needs of one customer group. Example: Hallmark's many sub-lines (Mahogany, LGBTQ+, charity tie-ins) all serving card-buyers broadly." },
  { source: "multi", front: "What does an attractive niche look like?", back: "Distinct needs, willing to pay a premium, decent size/profit/growth potential, unlikely to attract competitors, and gains from specialization." },
  { source: "multi", front: "Niche marketers vs. mass marketers — what do each win on?", back: "Niche marketers win on margin; mass marketers win on volume." },
  { source: "multi", front: "What is the multi-segment pitfall?", back: "If a company builds offerings around its own production capability rather than each segment's actual needs, offerings end up competing for the same customers while other segments go unserved, and customers get confused." },
  { source: "multi", front: "What is the Long Tail (Chris Anderson)?", back: "Lower distribution costs plus better recommendation engines let companies profit from many low-volume niche products, shifting some markets from an 80/20 rule toward 50/50." },
  { source: "multi", front: "What's a limitation of the Long Tail idea?", back: "It doesn't apply everywhere — autos and aircraft still rely on mass-produced hits, and poor recommendation systems can leave long-tail items too obscure to sell." },

  // ---- Segmenting Consumer & Business Markets ----
  { source: "segment", front: "Name the four bases for segmenting consumer markets.", back: "Demographic, geographic, behavioral, psychographic." },
  { source: "segment", front: "Why is demographic segmentation so popular?", back: "Demographics correlate with needs and are easy to measure." },
  { source: "segment", front: "List the six generations (Silent Gen to Gen Alpha) with birth-year ranges.", back: "Silent Gen (1925–45), Baby Boomers (1946–64), Gen X (1965–81), Millennials (1982–96), Gen Z (1997–2012), Gen Alpha (2013–)." },
  { source: "segment", front: "What's the distinction between life stage and life-cycle stage?", back: "Life stage covers events like divorce, remarriage, new home, elder care — it is not the same as life-cycle stage (e.g., single, married, parent)." },
  { source: "segment", front: "What is an \"hourglass\" market, and how did Levi's respond?", back: "A market where the middle erodes while growth happens at both the discount and premium ends; Levi's responded with a premium Made & Crafted line and a budget Signature line." },
  { source: "segment", front: "What is geoclustering? Give an example.", back: "Combining geographic and demographic segmentation (e.g., Claritas's PRIZM — 68 segments by income, education, occupation, home value, urbanization, age, kids at home)." },
  { source: "segment", front: "List the five behavioral segmentation variables.", back: "User status, usage rate, buyer-readiness stage, loyalty status, occasions." },
  { source: "segment", front: "What is the heavy-user paradox for beer, and why does it matter?", back: "Heavy beer drinkers are ~87% of consumption (~7× light drinkers), but heavy users can be either fiercely loyal or price-driven brand-switchers, with less room to grow purchases — light users may respond better to new appeals." },
  { source: "segment", front: "List the six buyer-readiness stages.", back: "Unaware → aware → informed → interested → desirous → intends to buy." },
  { source: "segment", front: "Name the four loyalty-status segments.", back: "Hard-core loyal (one brand always), split-loyal (2–3 brands), shifting-loyalty, switchers (no loyalty)." },
  { source: "segment", front: "What does the VALS framework classify, and on what two dimensions?", back: "VALS classifies U.S. adults by motivation (ideals, achievement, or self-expression) and resources (personality traits + demographics)." },
  { source: "segment", front: "Why did Honda's Element fail despite good psychographic targeting?", back: "It targeted 21-year-olds but attracted 42-year-old \"psychologically young\" Boomers instead, and the model was eventually discontinued — demographics didn't predict the real psychographic fit." },
  { source: "segment", front: "List the five B2B-specific segmentation variable categories.", back: "Demographic/firmographic, operating variables, purchasing approaches, situational factors, personal characteristics." },
  { source: "segment", front: "What is the lesson from the Timken example?", back: "Timken discovered some customers generated revenue but little profit; it shifted focus to higher-margin sectors (heavy-processing, aerospace, defense) — segment by profitability, not just revenue." },
];

const SOURCE_LABELS = {
  logic: "Targeting Logic & Strategy",
  multi: "Multi-Segment & Niche",
  segment: "Segmenting Markets",
};
