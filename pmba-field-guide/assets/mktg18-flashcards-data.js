const FLASHCARDS = [
  // ---- Managing Innovation & the Stage-Gate Framework ----
  { source: "innovate", front: "Why does innovation matter so much, despite the odds?", back: "New-offering failure rates run around 95% — but innovation is essential for long-term growth and survival as markets, technology, and customer needs shift." },
  { source: "innovate", front: "List six organizational approaches to managing innovation.", back: "Examples include a dedicated innovation department, cross-functional teams, innovation committees/tournaments, acquiring startups, open innovation with outside partners, and intrapreneurship (internal venture units) — companies mix approaches rather than relying on just one." },
  { source: "innovate", front: "What is the Stage-Gate framework, and how many stages does it typically have?", back: "A five-stage process for developing new offerings, with a go/no-go 'gate' decision between each stage, so weak ideas are screened out before heavy investment." },
  { source: "innovate", front: "Name the three validation criteria used at each Stage-Gate gate.", back: "Desirability (do customers want it?), feasibility (can we build/deliver it?), viability (can we profit from it?)." },
  { source: "innovate", front: "Distinguish a Type 1 screening error from a Type 2 screening error.", back: "Type 1: rejecting a good idea (a false negative — killing something that would have succeeded). Type 2: accepting a bad idea (a false positive — advancing something that will fail)." },
  { source: "innovate", front: "Why is a Type 1 screening error often harder to detect than a Type 2 error?", back: "A killed idea never gets a market test, so the company may never learn it would have succeeded — a Type 2 error's failure is visible once launched." },

  // ---- Idea Generation & Concept Development ----
  { source: "idea", front: "Distinguish top-down from bottom-up idea generation.", back: "Top-down: management/leadership sets strategic direction and solicits ideas to fit it. Bottom-up: ideas originate from employees, customers, or partners and bubble up without being directed from above." },
  { source: "idea", front: "Name some research tools used for idea generation.", back: "Customer surveys and interviews, ethnographic/observational research, focus groups, lead-user research, crowdsourcing, and analyzing complaints or support data for unmet needs." },
  { source: "idea", front: "What is a prototype, and why build one early?", back: "An early physical or digital version of an offering used to test and refine the concept before committing to full-scale production." },
  { source: "idea", front: "Distinguish alpha testing from beta testing.", back: "Alpha testing: internal testing within the company, often with employees, before any external release. Beta testing: testing with real external customers in real-world conditions, before full commercial launch." },
  { source: "idea", front: "What is A/B testing, and when is it used in new-offering development?", back: "Comparing two versions (A and B) of an offering, message, or feature with real customers to see which performs better — used throughout concept refinement and launch." },
  { source: "idea", front: "What is conjoint analysis used for?", back: "A research method that asks customers to make tradeoffs among product attributes, revealing how much each attribute (and attribute level) contributes to their overall preference/choice." },
  { source: "idea", front: "List Rogers' five adopter categories.", back: "Innovators, early adopters, early majority, late majority, laggards — ordered by how quickly each group adopts a new offering." },
  { source: "idea", front: "What is \"the chasm\" in Moore's technology-adoption model?", back: "A gap between early adopters and the early majority — many promising innovations fail to cross it because what appeals to visionaries doesn't yet appeal to the pragmatic mainstream." },

  // ---- Business Model, Validation & Commercial Deployment ----
  { source: "launch", front: "How does designing a new offering's business model tie back to Chapter 2's frameworks?", back: "The business model should be built around the same 5 Cs (context, company, customers, collaborators, competitors), 3 Vs (value, segment, channel), and 7 Ts used in strategic planning — ensuring the new offering fits a coherent go-to-market plan." },
  { source: "launch", front: "What does \"business-model validation\" mean, and what happens if it's skipped?", back: "Testing whether the planned business model (not just the product) actually works in the market before full-scale launch — skipping it risks building a product nobody will pay for at a viable price/cost structure." },
  { source: "launch", front: "What lesson does the Crystal Pepsi failure illustrate?", back: "A novel product (clear cola) generated initial curiosity-driven trial but failed because it didn't deliver a sustained value proposition customers wanted to repeat-purchase — trial without a validated business model doesn't equal success." },
  { source: "launch", front: "What does the \"perpetual motion machine\" example illustrate about feasibility?", back: "An idea can be highly desirable in theory but is infeasible because it violates fundamental constraints (here, physics) — feasibility must be validated, not assumed." },
  { source: "launch", front: "What lesson does Pets.com illustrate about business-model viability?", back: "Even with real customer desirability and operational feasibility, a business model can fail viability if the costs of serving customers (e.g., shipping heavy, low-margin items) exceed what the business model can sustain profitably." },
  { source: "launch", front: "What is \"offering implementation\" in the new-offering process?", back: "The operational work of actually producing, distributing, pricing, and supporting the offering at scale once the business model is validated." },
  { source: "launch", front: "Distinguish selective market deployment from market expansion as commercial-deployment strategies.", back: "Selective market deployment: launch in a limited market/segment first to test and refine before a wider rollout. Market expansion: broaden distribution/segments more aggressively once the offering is validated." },
  { source: "launch", front: "In the Instant-Breakfast-Drink Stage-Gate example, what does each gate check?", back: "Each gate checks desirability, feasibility, and viability at increasing levels of investment — from an initial concept screen through prototype testing, business-model validation, and finally full commercial launch." },
];

const SOURCE_LABELS = {
  innovate: "Managing Innovation & Stage-Gate",
  idea: "Idea Generation & Concept Development",
  launch: "Business Model & Commercial Deployment",
};
