# Unit 2 (Week 2): Segmentation & Target Marketing. Chapters 6, 17, 18 + Unit_2 slides.

META = {
  "week": 2,
  "nav": "Segmentation & Target Marketing",
  "title": "Segmentation, targeting &amp; marketing math",
  "title_plain": "Segmentation, targeting & marketing math",
  "description": "MKTG 6090 Unit 2 (Week 2): segmentation and targeting, growth strategy and the product life cycle, new offerings, plus the professor's slides on margins and break-even, the experience curve, marginal analysis and perceptual maps.",
  "lede": "Choose whom to serve (Ch 6), how to grow and defend a market position (Ch 17), and how new offerings are developed (Ch 18). The slides supply the numbers behind those choices: margins, break-even, the experience curve, how far to push a budget, and perceptual maps for seeing where each brand stands.",
  "glance": """      <ul style="margin:0 0 12px;">
        <li><strong>Week 2 topic:</strong> Segmentation &amp; Target Marketing.</li>
        <li><strong>Reading:</strong> Chapters 6, 17 and 18.</li>
        <li><strong>Quiz</strong> on the chapters, due Monday evening.</li>
        <li><strong>Case:</strong> Emotiv Systems, &ldquo;It&rsquo;s the Thoughts That Count.&rdquo;</li>
        <li><strong>Markstrat:</strong> Decision 1 (Sunday 9:00 pm). Have the manual read.</li>
      </ul>
      <p style="margin:0;"><strong>How the pieces connect.</strong> Chapter 6 picks the target; the perceptual map shows where your brand sits relative to that target&rsquo;s ideal; the marketing math (margins, break-even, experience curve, marginal analysis) tells you whether a position is worth what it costs. Emotiv and Markstrat Decision 1 ask you to do all three at once.</p>""",
  "walk_heading": "Chapters 6, 17 and 18 and the Unit 2 slides",
  "quiz_blurb": "Covers the three chapters plus margins and break-even, the experience curve, marginal analysis, perceptual maps and the first Markstrat decisions.",
  "angles": [
    "Name segmentation bases and the criteria for an attractive target segment (Ch 6).",
    "Match a growth strategy or market-position strategy to a scenario, and place a product in its life-cycle stage (Ch 17).",
    "Order the stages of new-offering development and name the adopter categories (Ch 18).",
    "Convert a manufacturer price to a retail price with a % margin (divide by 1 &minus; m), and avoid the markup trap.",
    "Compute BEP, BESP, and the extra units needed for a new fixed cost or a variable-cost increase.",
    "Solve for the experience-curve exponent from two points and turn it into a per-doubling percentage.",
    "Explain where MR = MC is optimal on an S-curve and how to split a budget across mix elements.",
    "Read a perceptual map: ideal points, owning a dimension, stuck in the middle, empty quadrants.",
  ],
  "footer": "MKTG 6090 &mdash; Marketing Management, University of Utah PMBA. Textbook sections from the Chapter 6, 17 and 18 pages (Kotler/Keller/Chernev, <em>Marketing Management</em>, 17th ed.); slide sections from the Unit 2 slides, with every formula and table value recomputed. Garbled or image-only slide content is flagged rather than guessed.",
  "card": {"blurb": "Segmentation and targeting, growth and the life cycle, and new offerings, plus margins and break-even, the experience curve, marginal analysis and perceptual maps.",
           "tags": ["Ch 6, 17, 18", "Break-Even Math", "Perceptual Maps"]},
  "parts": [
    {"chapter": 6}, {"chapter": 17}, {"chapter": 18},
    {"authored": ["u2_math", "u2_curve", "u2_margin", "u2_maps", "u2_markstrat", "u2_case"]},
  ],
}

LABELS = {
  "u2_math": "Unit 2 · Margins & Break-Even",
  "u2_curve": "Unit 2 · Experience Curve",
  "u2_margin": "Unit 2 · Sales Response & Marginal Analysis",
  "u2_maps": "Unit 2 · Positioning & Perceptual Maps",
  "u2_markstrat": "Unit 2 · Markstrat First Decisions",
  "u2_case": "Unit 2 · Case Prompt: Emotiv",
}

FLASHCARDS = [
  ("u2_math", "Contribution margin (CM)?", "Manufacturer's selling price minus variable cost: each unit's contribution toward covering fixed costs."),
  ("u2_math", "Manufacturer price $6, retail margin 40%. Retail price?", "$6 / (1 - 0.40) = $10. Margins are a % of price, not a markup on cost ($6 x 1.40 = $8.40 is wrong)."),
  ("u2_math", "Break-even point formula?", "BEP = FC / CM (units)."),
  ("u2_math", "Break-even selling price at a given volume?", "BESP = (FC / volume) + VC."),
  ("u2_math", "Extra units needed to pay for a new ad campaign?", "Additional fixed cost / CM."),
  ("u2_math", "Extra units needed after a per-unit cost increase?", "FC / (CM - new per-unit cost) - FC / CM: recompute the higher BEP and subtract the old one."),
  ("u2_curve", "Experience-curve formula?", "c_n = c_1 x n^-a, so ln c_n = ln c_1 - a ln n."),
  ("u2_curve", "c_1 = 110 and c_1,000,000 = 60. What is a?", "a = ln(110/60) / ln(1,000,000) = 0.6061 / 13.8155 = 0.0438."),
  ("u2_curve", "With a = 0.0438, how much does cost fall per doubling?", "2^-0.0438 = 0.970, so about 3% per doubling."),
  ("u2_curve", "How is break-even found when costs fall with experience?", "Sum each unit's contribution (which rises as cost falls) until the total equals fixed cost."),
  ("u2_margin", "Shape of the typical sales response to advertising?", "S-shaped: slow start, increasing returns, then diminishing returns."),
  ("u2_margin", "Where is optimal spend on an S-curve?", "Where MR = MC on the diminishing-returns part; the MR = MC point on the rising part is not optimal."),
  ("u2_margin", "How should a limited budget be split across mix elements?", "Put each next dollar where it returns most; stop when marginal returns are equal across elements."),
  ("u2_maps", "Why is Tylenol best positioned on the slides' map?", "It is close to segment 1's ideal, differentiated from all others, and owns gentleness."),
  ("u2_maps", "Why isn't private-label aspirin automatically the worst position?", "Price isn't on the map, and it would score well on price; look at every dimension."),
  ("u2_maps", "Two reasons a map quadrant can be empty?", "It isn't technologically feasible, or consumers won't believe a product can combine both (e.g. gentle and effective)."),
  ("u2_maps", "What does 'stuck in the middle' mean? Example?", "Decent on everything, best at nothing; buyers go to specialists. Bufferin, JC Penney, family restaurants, traditional American sedans."),
  ("u2_maps", "How should Bayer respond to being beaten by Tylenol on both dimensions?", "Find a position it can win: heart health."),
  ("u2_maps", "Attribute-based vs. similarity-based maps?", "Attribute-based: ratings on attributes, factor analysis, plot factor scores. Similarity-based: pairwise similarities, MDS, researcher picks and interprets dimensions."),
  ("u2_markstrat", "Which Markstrat market must you never use?", "Nutrite: no Nutrite research and no Nutrite products."),
]

QUIZ = [
  ("u2_math", "A manufacturer sells a book to the bookstore for $6, and the bookstore's margin is 40%. What is the retail price?",
   ["$8.40", "$10.00", "$9.60", "$14.00"], 1,
   "Margins are a percent of price: $6 / (1 - 0.40) = $10. Multiplying by 1.40 treats it as a markup on cost."),
  ("u2_math", "Fixed costs are $500,000, the selling price is $10 and variable cost is $6. What is the break-even volume?",
   ["50,000 units", "83,333 units", "125,000 units", "200,000 units"], 2,
   "CM = $10 - $6 = $4; BEP = 500,000 / 4 = 125,000 units."),
  ("u2_math", "With FC of $500,000 and VC of $6, what price breaks even at 100,000 units?",
   ["$11.00", "$10.00", "$5.00", "$16.00"], 0,
   "BESP = FC / volume + VC = 5 + 6 = $11."),
  ("u2_math", "CM is $4. A new $100,000 ad campaign must sell how many additional units to break even?",
   ["4,000", "40,000", "400,000", "25,000"], 3,
   "Additional FC / CM = 100,000 / 4 = 25,000 units."),
  ("u2_math", "FC = $500,000 and CM = $4. Upgraded materials add $0.50 per unit. How many more units are needed to break even?",
   ["About 17,857", "12,500", "62,500", "About 142,857"], 0,
   "New BEP = 500,000 / 3.50 = 142,857; old BEP = 125,000; difference about 17,857 units."),
  ("u2_curve", "The first unit costs 110 and the millionth costs 60. What is the experience-curve exponent a?",
   ["0.0438", "0.85", "0.545", "0.15"], 0,
   "a = ln(110/60) / ln(1,000,000) = 0.6061 / 13.8155 = 0.0438."),
  ("u2_curve", "With a = 0.0438, each doubling of cumulative production cuts unit cost by about:",
   ["15%", "4.4%", "3%", "30%"], 2,
   "2^-0.0438 = 0.970, a drop of about 3% per doubling."),
  ("u2_curve", "Why can't break-even with an experience curve be computed as FC / CM?",
   ["Because fixed costs also fall with experience", "Because CM changes with every unit, so contributions must be summed", "Because price rises over time", "Because the curve only applies after break-even"], 1,
   "Unit cost falls as volume grows, so each unit contributes more; break-even is where the sum of contributions equals FC."),
  ("u2_margin", "On an S-shaped sales response curve, the optimal advertising level is where:",
   ["Sales are maximized", "MR = MC on the rising part of the curve", "Advertising equals 10% of sales", "MR = MC on the diminishing-returns part of the curve"], 3,
   "There MR = MC and returns are falling; the MR = MC point on the rising part is not optimal."),
  ("u2_margin", "A brand has money left for one more $1k. Advertising's next $1k would bring $1.2k of sales and the sales force's would bring $1.5k. What should it do?",
   ["Spend on advertising, the bigger budget line", "Spend on the sales force, the higher marginal return", "Split it evenly", "Keep it, since both returns are falling"], 1,
   "Spend the next dollar where it returns the most."),
  ("u2_maps", "On the slides' pain-reliever map, why is Tylenol considered the best-positioned brand?",
   ["It is the cheapest brand", "It is the most effective brand", "It is close to segment 1's ideal, differentiated, and owns gentleness", "It sits in the middle of the map"], 2,
   "Closeness to an ideal point, differentiation and owning a dimension are the three reasons the slides give."),
  ("u2_maps", "Bufferin is decent on both gentleness and effectiveness but best at neither. The slides call this:",
   ["Owning a dimension", "Stuck in the middle", "A home-run position", "An empty quadrant"], 1,
   "Gentle-seekers choose Tylenol and effectiveness-seekers choose Advil or Nuprin."),
  ("u2_maps", "Which statement describes similarity-based (MDS) perceptual mapping?",
   ["Customers rate brands on a list of attributes, then factor analysis groups them", "The researcher chooses the dimensions before collecting data", "It requires price data for every brand", "Customers rate how similar products are; the researcher chooses and interprets the dimensions"], 3,
   "MDS reproduces the pattern of similarities; less up-front work, but the dimensions can be hard to interpret."),
  ("u2_maps", "Why might no brand occupy the 'highly gentle and highly effective' corner of the map?",
   ["It may be technically infeasible, or consumers may not believe a gentle product is effective", "That segment is too small to serve", "Regulators forbid the claim", "It is always the most expensive position"], 0,
   "The slides give exactly these two reasons and cite BMW and Range Rover as brands that combined 'opposites.'"),
]
