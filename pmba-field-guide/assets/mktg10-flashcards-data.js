const FLASHCARDS = [
  // ---- Branding & the Role of Brands ----
  { source: "branding", front: "What is the formal definition of a brand?", back: "A name, term, design, symbol or any other feature that identifies one seller's goods or service as distinct from those of other sellers." },
  { source: "branding", front: "What is the ultimate purpose of a brand?", back: "To create, for consumers, the company and its collaborators, value that goes beyond the value created by the product and service aspects of the offering." },
  { source: "branding", front: "How do brands help consumers?", back: "A brand is a promise: it sets expectations, reduces risk, simplifies decisions, can express identity, and adds meaning beyond actual product characteristics (quality, reliability, durability)." },
  { source: "branding", front: "How do brands help firms?", back: "Simplify product handling, signal quality, create loyalty (predictable demand, barriers to entry, price premiums often 20%+), and are legal property that can be bought and sold." },
  { source: "branding", front: "What did the New Coke episode teach?", back: "Coke spent $4M on research and blind taste tests, but measured taste and missed emotional attachment. Ten weeks after the 1985 launch it brought back 'Classic Coke'. Loyalty is only visible when you change something crucial." },
  // ---- Brand Equity & Valuation ----
  { source: "equity", front: "What is customer-based brand equity?", back: "The differential effect that brand knowledge has on consumer response to the marketing of that brand. If there is no difference in response, the product is a commodity and competition is on price." },
  { source: "equity", front: "Name the 11 benefits of a strong brand.", back: "1 better perceived performance; 2 loyalty; 3 less vulnerability to competitors/crises; 4 larger margins; 5 inelastic to price rises, elastic to cuts; 6 trade support; 7 more effective communications; 8 licensing; 9 extensions; 10 recruiting/retention; 11 financial market returns." },
  { source: "equity", front: "Brand audit vs. brand tracking: how do they differ?", back: "Audit: focused procedures to assess brand health and uncover sources of equity (at planning, shifts in direction, regularly such as annually). Tracking: uses the audit as input to collect quantitative consumer data over time as consistent baseline." },
  { source: "equity", front: "What are the four stages of the brand value chain?", back: "Marketing program investment > customer mindset > market performance > shareholder value." },
  { source: "equity", front: "What are the three multipliers in the brand value chain?", back: "Program multiplier (quality of the program investment); customer multiplier (competitive superiority, channel support, customer size and profile); market multiplier (analysts and investors' actions)." },
  { source: "equity", front: "Distinguish brand equity from brand valuation.", back: "Brand equity (customer-based) = what consumers think, feel and do. Brand valuation (financial-based equity) = estimating total financial value: the net present value of the total returns the brand will generate over its lifetime." },
  { source: "equity", front: "How is goodwill different from brand equity?", back: "Goodwill is the monetary value of all of a company's intangible assets (brands, patents, copyrights, know-how, licenses, distribution arrangements, culture, management practices). Brand equity is only one part." },
  { source: "equity", front: "What are the three financial approaches to valuing a brand?", back: "Cost approach (historical or replacement cost), market approach (branded vs. identical unbranded revenue minus brand-building cost, e.g. Morton Salt), financial approach (NPV of future brand earnings)." },
  { source: "equity", front: "What three steps make up the financial approach?", back: "Compute the company's future cash flow; estimate the brand's contribution to it; adjust using a risk factor for the volatility of earnings attributable to the brand." },
  // ---- Brand Resonance Model ----
  { source: "resonance", front: "List the four steps of the brand resonance model.", back: "1 Identify the brand and associate it with products/needs; 2 establish brand meaning through tangible and intangible associations; 3 elicit proper judgments and feelings; 4 convert responses into intense, active loyalty." },
  { source: "resonance", front: "Name the six brand building blocks, bottom to top.", back: "Salience; performance and imagery; judgments and feelings; resonance." },
  { source: "resonance", front: "Which side of the pyramid is rational and which is emotional?", back: "Left side = rational route (performance, judgments). Right side = emotional route (imagery, feelings). MasterCard 'Priceless' hit both." },
  { source: "resonance", front: "What three factors drive brand knowledge building?", back: "1 Brand elements; 2 the product/service and all accompanying marketing programs; 3 other associations indirectly transferred by linking the brand to another entity (person, place, thing)." },
  // ---- Brand Elements, Programs & Associations ----
  { source: "elements", front: "What are the six criteria for choosing brand elements?", back: "Memorable, meaningful, likable (brand-building) and transferable, adaptable, protectable (defensive)." },
  { source: "elements", front: "What is the 'test' of a brand element's appropriateness?", back: "What would consumers think or feel about the product if the brand element were all they knew? (e.g., Nature Valley sounds healthful, Toughbook sounds durable)." },
  { source: "elements", front: "Spell out DRIVE.", back: "Distinctiveness, Relevance, Integrated, Value, Excellence." },
  { source: "elements", front: "Three core packaging principles?", back: "Visibility, differentiation, transparency." },
  { source: "elements", front: "Which entities supply secondary brand associations?", back: "The company, countries/regions, channels of distribution, other brands (ingredient/cobranding), characters (licensing), spokespeople (endorsements), events (sponsorship), third-party sources (awards, reviews)." },
  { source: "elements", front: "What is the main risk of leveraging secondary associations?", back: "Anything bad that happens to the linked entity may transfer to the brand (Tiger Woods, Lance Armstrong, Kanye West/Ye endorsers)." },
  { source: "elements", front: "What are the startup-brand guidelines?", back: "Compelling performance advantage; one or two strong brands/associations; encourage trial; cohesive digital strategy; buzz and loyal community; well-integrated brand elements; leverage secondary associations." },
  // ---- Brand Architecture & Cobranding ----
  { source: "architecture", front: "What do brand breadth and brand depth mean in brand architecture?", back: "Breadth = boundaries (which products share a brand name). Depth = complexity (how many variations of the name)." },
  { source: "architecture", front: "What is the basic principle of designing a brand portfolio?", back: "Maximize market coverage so no target customers are ignored, and minimize brand overlap. If dropping brands raises profit, it is too big; if adding brands raises profit, it is not big enough." },
  { source: "architecture", front: "Name the three brand-portfolio strategies with an example each.", back: "House of brands (General Mills); branded house (Heinz, GE); sub-brand (Kellogg's Rice Krispies)." },
  { source: "architecture", front: "Pros and cons: house of brands vs. branded house?", back: "House of brands: a failure does not tie other offerings' reputation to it. Branded house: lower development cost and instant recognition, but greater risk of negative spillover." },
  { source: "architecture", front: "What is a flagship product and what are branded variants?", back: "Flagship = the product that best embodies the brand (Camry, Accord, Mercedes S-class). Branded variants = lines supplied to specific retailers or channels because of retailer pressure." },
  { source: "architecture", front: "What are the four forms of cobranding?", back: "Same-company (Trix + Yoplait), joint-venture (GE/Hitachi), multiple-sponsor (Taligent), retail (Pizza Hut/KFC/Taco Bell in one location)." },
  { source: "architecture", front: "What are the three requirements for successful ingredient branding?", back: "Consumers believe the ingredient matters to the end product; they are convinced it is superior (communication campaign); a distinctive symbol or logo signals it is in the host product." },
  // ---- Brand Extensions ----
  { source: "extensions", front: "Line extension vs. category extension?", back: "Line: new product in a category the parent already serves (Dannon Smoothies). Category: stretch into a category not currently associated (Swiss Army watches)." },
  { source: "extensions", front: "What share of new products are brand extensions?", back: "Typically 80 to 90 percent in any one year." },
  { source: "extensions", front: "Key research insights on extension success?", back: "Favorable parent associations plus perceived fit; prototypical brands are hard to extend out of category (Coca-Cola juice); concrete attributes harder to extend than abstract benefits; vertical extensions often need sub-brands." },
  { source: "extensions", front: "Why did the Bic perfume extension fail?", back: "Bic judged fit on one or two associations (cheap, disposable, convenient) and ignored all consumers' brand knowledge; lack of cachet and negative image." },
  { source: "extensions", front: "Name the disadvantages of brand extensions.", back: "Brand dilution, consumer confusion/frustration, retailer rejection, cannibalization of the parent, and forgone chance to create a new brand with its own equity (Touchstone, Dockers, DeWalt)." },
  // ---- Revitalization & Crisis ----
  { source: "manage", front: "How should a brand revitalization start?", back: "Understand the original sources of equity: are positive associations fading or negative ones attached? Then decide whether to keep the positioning or create a new one." },
  { source: "manage", front: "What does a swift and sincere crisis response look like?", back: "Public acknowledgment of impact, willingness to take steps, proof the fix works. J&J Tylenol: swift, sincere, triple tamper-proof packaging. Gerber: refused to pull product, share fell from 66% to 52%." },
  { source: "manage", front: "What are the four brand guidelines for a general crisis?", back: "Empathy, Value, Strategy, Innovation (Stop, Start, and Continue (But Improve))." },
  // ---- Luxury Brands ----
  { source: "luxury", front: "What are the common denominators of luxury brands?", back: "Quality and uniqueness. The winning formula for many: craftsmanship, heritage, authenticity and history." },
  { source: "luxury", front: "Name the luxury brand management principles.", back: "Align all marketing decisions with the image; premium aspirational image; broad competitor definition; fight counterfeits; align elements and associations; wrap experiences around products; balance classic and contemporary." },
];

const SOURCE_LABELS = {
  branding: "Branding & the Role of Brands",
  equity: "Brand Equity & Valuation",
  resonance: "Brand Resonance Model",
  elements: "Brand Elements, Programs & Associations",
  architecture: "Brand Architecture & Cobranding",
  extensions: "Brand Extensions",
  manage: "Revitalization & Crisis",
  luxury: "Luxury Brands",
};
