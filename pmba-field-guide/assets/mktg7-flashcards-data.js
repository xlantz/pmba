const FLASHCARDS = [
  // ---- Customer Value Equation & Value Proposition ----
  { source: "value", front: "State the customer value equation.", back: "Customer value = (total customer benefit − total customer cost), compared against the same calculation for perceived alternatives." },
  { source: "value", front: "What makes up total customer benefit?", back: "Functional, psychological, and monetary benefits drawn from the product, service, and brand image." },
  { source: "value", front: "What makes up total customer cost?", back: "Functional, psychological, and monetary costs of evaluating, obtaining, using, and disposing of the offering." },
  { source: "value", front: "Name the three value domains.", back: "Functional, psychological, monetary." },
  { source: "value", front: "Where does functional value dominate?", back: "Utilitarian goods like office and industrial equipment — performance, reliability, durability, ease of use." },
  { source: "value", front: "Where does psychological value dominate?", back: "Luxury and fashion categories — the joy and status of a high-performance car, for example." },
  { source: "value", front: "Where does monetary value dominate?", back: "Commoditized categories — price, fees, discounts, rebates, financing." },
  { source: "value", front: "List the four steps of customer value analysis.", back: "Identify attributes/benefits customers value; assess their relative importance; assess company and competitor performance on them; monitor value over time." },
  { source: "value", front: "What does it mean if a company wins on every attribute in a value analysis?", back: "It can charge more for the same benefits, or charge the same and gain market share." },
  { source: "value", front: "Define the customer value proposition.", back: "The whole cluster of benefits a brand promises (Volvo: safety + performance + design + environmental responsibility)." },
  { source: "value", front: "Define positioning, and contrast it with the value proposition.", back: "Positioning is the key benefit(s) — the compelling reason to choose — while the value proposition is the whole promised cluster. Volvo's value proposition is broad; its positioning is safety alone." },
  { source: "value", front: "Why is a value proposition customer-specific?", back: "Different customer segments may need distinct value propositions from the very same brand." },
  { source: "value", front: "Name two ways a company can raise customer value.", back: "Add more benefits, or cut costs — price, ownership hassle, or risk (e.g., via a warranty)." },

  // ---- Frame of Reference, POPs & PODs ----
  { source: "positioning", front: "State the positioning statement formula.", back: "\"For [target customers], [brand] offers [key benefits].\"" },
  { source: "positioning", front: "What are the two core positioning decisions?", back: "(1) Choose a frame of reference. (2) Choose the points of parity and points of difference." },
  { source: "positioning", front: "What is a frame of reference, and what does it define?", back: "The benchmark used to judge a brand's value, tied to the target market; it defines category membership — the close substitutes a brand competes against." },
  { source: "positioning", front: "Give an example of choosing an advantageous frame of reference.", back: "The UK Automobile Association positioned itself as the 'fourth emergency service' alongside police, fire, and ambulance, for credibility and urgency." },
  { source: "positioning", front: "Name the three Ds — the criteria for a true point of difference.", back: "Desirable to consumers, deliverable by the company, differentiating from competitors." },
  { source: "positioning", front: "What makes a POD 'deliverable' in the ideal sense?", back: "It's feasible and profitable to create and keep, and ideally preemptive, defensible, and hard for competitors to attack." },
  { source: "positioning", front: "What does 'good enough' mean for a point of parity?", back: "A POP doesn't require beating competitors — just performing well enough that the attribute stops counting against the brand." },
  { source: "positioning", front: "Name the three types of points of parity.", back: "Category (necessary to be a legitimate category member), correlational (a negative arising from your own positive), competitive (neutralizes a rival's POD)." },
  { source: "positioning", front: "Give an example of a category POP.", back: "A travel agency must be able to book both air and hotel — the 'greens fees' of being in that business." },
  { source: "positioning", front: "Give an example of a correlational POP.", back: "'Inexpensive' implies 'not highest quality' — a negative correlated with your own positive attribute." },
  { source: "positioning", front: "How did Visa and AmEx each use competitive POPs?", back: "Visa added gold/platinum cards for prestige (matching AmEx's POD); AmEx expanded merchant acceptance (matching Visa's POD)." },
  { source: "positioning", front: "Explain the Miller Lite example of POP vs. POD.", back: "'Tastes great' is a POP versus regular beer (parity on taste); 'less filling' is the real POD (fewer calories)." },
  { source: "positioning", front: "What is straddle positioning, using BMW as the example?", back: "The POD in one frame becomes the POP in another — BMW's POD is luxury vs. Corvette (POP is performance there), and its POD is performance vs. Cadillac (POP is luxury there)." },
  { source: "positioning", front: "What's the risk of straddling badly?", back: "The brand ends up credible in neither category — as happened to Palm Pilot and Apple Newton straddling pagers and laptops." },
  { source: "positioning", front: "What is the brand substitution test?", back: "Swap a rival's brand name into your positioning statement — if it still reads true, the positioning is too weak or generic to be distinctive." },

  // ---- Brand Mantra & Positioning Bullseye ----
  { source: "mantra", front: "What is a brand mantra, and how many words does it usually run?", back: "A 3–5 word internal statement of the brand's 'heart and soul,' meant for employees and partners, not consumers." },
  { source: "mantra", front: "Distinguish a mantra from a slogan, using Nike.", back: "Mantra (internal): 'authentic athletic performance.' Slogan (external, consumer-facing): 'Just Do It.'" },
  { source: "mantra", front: "Name the three criteria of a good brand mantra.", back: "Communicates what's unique, simplifies the brand's essence, inspires customers and employees." },
  { source: "mantra", front: "List the four layers of the brand positioning bullseye, center out.", back: "Brand mantra (center) → POPs and PODs (as customer benefits) → substantiators/reasons to believe → brand values/personality (intangible) and visual identity (tangible)." },
  { source: "mantra", front: "What is a 'reason to believe' or substantiator? Give an example.", back: "The facts backing up a claimed POP or POD — e.g., Mountain Dew's caffeine content, or NIVEA's coenzyme Q10." },
  { source: "mantra", front: "Name the five dimensions of brand personality.", back: "Sincerity, excitement, competence, sophistication, ruggedness." },
  { source: "mantra", front: "Name the three ways to convey category membership.", back: "Announce category benefits, compare to exemplars, or rely on the product descriptor." },
  { source: "mantra", front: "What does 'claiming a non-member category' mean, with examples?", back: "Borrowing a category's cachet while distancing the brand from it — 'It's Not Delivery, It's DiGiorno!' and 'It's Not TV, It's HBO.'" },
  { source: "mantra", front: "List the five solutions to conflicting benefits, in order of strength.", back: "(1) A product performing well on both; (2) branding; (3) two separate campaigns; (4) link to a person/place/thing with the right equity; (5) reframe the negative relationship as positive." },
  { source: "mantra", front: "Which conflicting-benefits solution does GORE-TEX illustrate, and why is it the strongest?", back: "Solution #1 — a single product (breathable and waterproof) that performs well on both sides of the tradeoff, avoiding any need to compromise." },
  { source: "mantra", front: "What is a perceptual (positioning) map used for?", back: "A visual, quantitative picture of how consumers see brands on key dimensions; overlaying preferences on perceptions reveals unmet-need 'holes' in the market." },
];

const SOURCE_LABELS = {
  value: "Value Proposition",
  positioning: "Frame, POPs & PODs",
  mantra: "Mantra & Bullseye",
};
