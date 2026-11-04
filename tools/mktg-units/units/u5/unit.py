# Unit 5 (Week 5): CRM & Database Marketing. Chapter 9 (all), Chapter 11 "Managing incentives" section only,
# Chapter 14 "Direct marketing" section only + Unit_5 slides.

META = {
  "week": 5,
  "nav": "CRM & Database Marketing",
  "title": "Services, incentives &amp; database marketing",
  "title_plain": "Services, incentives & database marketing",
  "description": "MKTG 6090 Unit 5 (Week 5): designing and managing services, the managing-incentives section of Chapter 11 and the direct-marketing section of Chapter 14, plus the professor's slides on sales promotions, trade response and conjoint analysis.",
  "lede": "Services (Ch 9) are the product in most customer relationships; incentives (from Ch 11) and direct marketing (from Ch 14) are how companies use customer data to act on those relationships. The slides show what promotions actually do to sales, and how conjoint analysis measures the trade-offs customers make.",
  "glance": """      <ul style="margin:0 0 12px;">
        <li><strong>In person (10/27):</strong> case discussion, Adobe&rsquo;s Customer Journey.</li>
        <li><strong>Read:</strong> the Adobe case; all of Chapter 9; Chapter 11, <strong>&ldquo;Managing Incentives&rdquo; section only</strong>; Chapter 14, <strong>&ldquo;Direct Marketing&rdquo; section only</strong>.</li>
        <li><strong>Due Monday evening:</strong> quiz on Chapters 9, 11 and 14 (the assigned sections).</li>
        <li><strong>Remote session (10/29):</strong> watch Sales Promotions; Conjoint Analysis; MARKSTRAT Decision 4. Complete MARKSTRAT Decision 4.</li>
      </ul>
      <p style="margin:0;"><strong>How the pieces connect.</strong> Database marketing lets you aim offers at individual customers; the slides warn what blunt promotions do (mostly brand switching, two weeks of lift) and show conjoint as the way to find what customers would actually pay for. The rest of Chapters 11 and 14 is covered later (all of Chapter 11 in Unit 9).</p>""",
  "walk_heading": "Chapter 9, the assigned sections of Chapters 11 and 14, and the Unit 5 slides",
  "quiz_blurb": "Covers services, managing incentives, direct marketing, plus the slides on promotion effects, trade response and conjoint analysis.",
  "angles": [
    "Name the four characteristics of services and match a marketing response to each (Ch 9).",
    "Explain the service blueprint and the gaps in service quality (Ch 9).",
    "Match a consumer or trade incentive to its purpose (Ch 11 incentives section).",
    "Name the direct-marketing channels and the benefits and concerns of direct marketing (Ch 14 direct section).",
    "Recall 22/60/18 (category incidence / brand choice / quantity) and 2 vs. 39 weeks.",
    "Explain forward buying and low pass-through, and when a price promotion makes sense.",
    "Explain conjoint: why stated ideals fail, what an orthogonal design is, part-worths, and attribute importance.",
  ],
  "footer": "MKTG 6090 &mdash; Marketing Management, University of Utah PMBA. Textbook sections from the Chapter 9 page and the assigned sections of the Chapter 11 and 14 pages (Kotler/Keller/Chernev, <em>Marketing Management</em>, 17th ed.); slide sections from the Unit 5 slides, with the conjoint design and all percentages checked.",
  "card": {"blurb": "Services, managing incentives and direct marketing, plus what promotions really do to sales and how conjoint analysis measures trade-offs.",
           "tags": ["Ch 9 + parts of 11, 14", "Sales Promotions", "Conjoint"]},
  "parts": [
    {"chapter": 9},
    {"chapter": 11, "blocks": ["incentives"], "note": "this unit uses only the Managing Incentives section"},
    {"chapter": 14, "blocks": ["direct"], "note": "this unit uses only the Direct Marketing section"},
    {"authored": ["u5_promo", "u5_conjoint", "u5_case"]},
  ],
}

LABELS = {
  "u5_promo": "Unit 5 · Sales Promotions & Trade",
  "u5_conjoint": "Unit 5 · Conjoint Analysis",
  "u5_case": "Unit 5 · Case Prompt: Adobe Journey",
}

FLASHCARDS = [
  ("u5_promo", "Sources of a promotion's immediate sales lift?", "Category incidence 22%, brand choice 60%, purchase quantity 18%."),
  ("u5_promo", "How long do promotion vs. advertising effects last?", "Promotions about 2 weeks; advertising about 39 weeks."),
  ("u5_promo", "Where are permanent promotion effects more likely?", "In emerging markets rather than mature ones; long-term effects come mainly from category incidence."),
  ("u5_promo", "What is forward buying?", "Retailers stock up at the trade-deal price and sell later at regular price, keeping the discount."),
  ("u5_promo", "What is pass-through?", "How much of a trade promotion reaches consumers as a lower price; often little."),
  ("u5_promo", "Five problems with sales promotions?", "Limited long-term impact; cheapens brand image; reinforces switching and deal-sensitivity; little pass-through; discounts to people who would buy anyway."),
  ("u5_promo", "When do price promotions make sense, per the slides?", "To generate trial for superior products; and a strong brand is the key to managing trade promotions."),
  ("u5_conjoint", "Why not just ask consumers for their ideal product?", "They want infeasible bundles (e.g. 275 yards, 54 holes, $1.25), which doesn't show what is a must-have and what can go."),
  ("u5_conjoint", "What does conjoint analysis measure?", "The value placed on each attribute, including price, and how consumers trade attributes off against each other."),
  ("u5_conjoint", "Golf-ball conjoint finding for Buyer 1?", "Buyer 1 trades away ball life in favor of driving distance."),
  ("u5_conjoint", "What is an orthogonal design?", "A balanced subset of profiles (9 of 81 credit cards) where each level appears equally and level pairs are balanced, so effects can be estimated separately."),
  ("u5_conjoint", "What is a part-worth utility?", "The value of one level of one attribute; summed across attributes it values a whole product."),
  ("u5_conjoint", "Credit-card attribute importance?", "Interest 59%, annual fee 24%, brand 10%, credit limit 7%."),
  ("u5_conjoint", "How is attribute importance computed?", "Range of that attribute's part-worths divided by the sum of all attributes' ranges."),
]

QUIZ = [
  ("u5_promo", "According to the slides, most of a promotion's immediate sales increase comes from:",
   ["Customers switching brands within the category", "New customers entering the category", "Customers buying larger quantities", "Retailers expanding shelf space"], 0,
   "Brand choice accounts for 60%, category incidence 22% and quantity 18%."),
  ("u5_promo", "On average, promotion effects last about ___ weeks, versus about ___ weeks for advertising.",
   ["39; 2", "2; 39", "6; 12", "1; 52"], 1,
   "Promotions about 2 weeks, advertising about 39."),
  ("u5_promo", "A retailer buys three months of stock during a trade deal and sells it later at full price. This is:",
   ["Pass-through", "Category incidence", "Forward buying", "Slotting"], 2,
   "Forward buying keeps the discount as retailer profit, so little passes through to shoppers."),
  ("u5_promo", "Which is NOT one of the slides' problems with sales promotions?",
   ["Cheapens brand image", "Reinforces deal-sensitivity", "Discounts to people who would buy anyway", "Builds long-term category loyalty in mature markets"], 3,
   "Long-term buying impact is limited, especially in mature markets."),
  ("u5_promo", "When do the slides say price promotions are most useful?",
   ["To generate trial for superior products", "To defend a weak brand against private labels", "To clear inventory before every quarter-end", "To raise the brand's premium image"], 0,
   "Trial of a genuinely better product can stick; other uses mostly borrow future sales."),
  ("u5_conjoint", "Why is a survey of consumers' 'ideal' golf ball not very useful?",
   ["Consumers can't describe golf balls", "The ideal combines the best of every attribute, which may not be feasible, and doesn't reveal trade-offs", "Golf balls have only one attribute", "Price can't be included in surveys"], 1,
   "Everyone wants 275 yards, 54 holes and $1.25; conjoint reveals what they would give up."),
  ("u5_conjoint", "Four attributes with three levels each make 81 possible credit cards. The slides use 9 because the design is:",
   ["Random", "Orthogonal", "Sequential", "Hierarchical"], 1,
   "An orthogonal (balanced) design lets each attribute's effect be estimated from far fewer profiles."),
  ("u5_conjoint", "In the credit-card example, which attribute matters most to choice?",
   ["Brand", "Credit limit", "Interest rate", "Annual fee"], 2,
   "Interest 59%, annual fee 24%, brand 10%, credit limit 7%."),
  ("u5_conjoint", "Part-worth ranges are interest 5.9, fee 2.4, brand 1.0 and limit 0.7. What is the fee's importance?",
   ["2.4%", "10%", "41%", "24%"], 3,
   "Importance = 2.4 / (5.9 + 2.4 + 1.0 + 0.7) = 2.4 / 10 = 24%."),
]
