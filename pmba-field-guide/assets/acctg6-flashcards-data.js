const FLASHCARDS = [
  // ---- Costing Methods ----
  { source: "costing", front: "What does FIFO assume about which costs get expensed first?", back: "FIFO (First-In, First-Out) assumes the oldest inventory costs are expensed first; ending inventory reflects the most recently purchased costs." },
  { source: "costing", front: "What does LIFO assume about which costs get expensed first?", back: "LIFO (Last-In, First-Out) assumes the most recently purchased costs are expensed first; ending inventory reflects the oldest costs on the books." },
  { source: "costing", front: "How does the weighted-average method work?", back: "It blends all available unit costs into a single average cost per unit, applied consistently to both COGS and ending inventory." },
  { source: "costing", front: "In a period of rising costs, which method produces the lowest COGS and highest ending inventory?", back: "FIFO — because it expenses the oldest, cheaper costs first, leaving the newer, more expensive costs in ending inventory." },
  { source: "costing", front: "In a period of rising costs, which method produces the highest COGS and lowest ending inventory?", back: "LIFO — because it expenses the newest, more expensive costs first, leaving the older, cheaper costs in ending inventory." },
  { source: "costing", front: "What happens to the FIFO/LIFO relationship if costs are falling instead of rising?", back: "Every relationship reverses: FIFO becomes the highest-COGS/lowest-inventory method, and LIFO becomes the lowest-COGS/highest-inventory method." },
  { source: "costing", front: "A company has 400 units @ $10, buys 500 @ $12 and 300 @ $15, then sells 900 units. What is FIFO COGS?", back: "400 @ $10 + 500 @ $12 = $4,000 + $6,000 = $10,000 (the 900 oldest units)." },
  { source: "costing", front: "Using the same data, what is LIFO COGS?", back: "300 @ $15 + 500 @ $12 + 100 @ $10 = $4,500 + $6,000 + $1,000 = $11,500 (the 900 newest units)." },

  // ---- LIFO Reserve ----
  { source: "reserve", front: "What is the LIFO reserve?", back: "The dollar difference between what inventory would be reported at under FIFO and what it's actually reported at under LIFO (FIFO Inventory − LIFO Inventory) — a required disclosure for LIFO companies." },
  { source: "reserve", front: "How do you convert a LIFO company's inventory to a FIFO basis?", back: "FIFO Inventory = LIFO Inventory + LIFO Reserve." },
  { source: "reserve", front: "How do you convert LIFO COGS to a FIFO basis?", back: "FIFO COGS = LIFO COGS − the increase in the LIFO reserve during the year. Use the change in the reserve, not its ending balance, to convert an income-statement figure." },
  { source: "reserve", front: "A company's LIFO reserve grows from $400,000 to $460,000 during the year. What does this imply about LIFO vs. FIFO COGS for that year?", back: "LIFO COGS is $60,000 higher than FIFO COGS would have been — the $60,000 increase in the reserve is exactly that gap." },
  { source: "reserve", front: "Why do analysts care about the LIFO reserve at all?", back: "It's the bridge that lets an analyst compare a LIFO company with a FIFO competitor on equal footing, since the two methods can otherwise report very different inventory and COGS for identical underlying operations." },

  // ---- Inventory Analysis ----
  { source: "turnover", front: "What is inventory turnover, and how is it computed?", back: "COGS ÷ Average inventory — how many times per year, on average, a company sells through its entire inventory balance." },
  { source: "turnover", front: "What is days inventory outstanding (DIO), and how is it computed?", back: "365 ÷ Inventory turnover — the average number of days inventory sits before it's sold." },
  { source: "turnover", front: "A retailer reports COGS of $18 million and average inventory of $3 million. What are its turnover and DIO?", back: "Turnover = $18M/$3M = 6.0. DIO = 365/6.0 ≈ 60.8 days." },
  { source: "turnover", front: "Why can't you directly compare inventory turnover between a LIFO company and a FIFO competitor?", back: "LIFO and FIFO report different COGS and average inventory in a rising-cost environment, so the LIFO reserve needs to be applied first to make the comparison meaningful." },
  { source: "turnover", front: "Is a rising inventory turnover ratio always good news?", back: "Not necessarily — check whether it reflects genuinely faster sales, or a company running unusually lean in a way that risks stockouts." },

  // ---- PP&E ----
  { source: "ppe", front: "What is the straight-line depreciation formula?", back: "(Cost − Salvage value) ÷ Useful life — spreads an asset's depreciable cost evenly across each year of its useful life." },
  { source: "ppe", front: "Equipment costs $60,000, has a $5,000 salvage value, and a 5-year useful life. What is annual straight-line depreciation?", back: "($60,000 − $5,000)/5 = $11,000 per year." },
  { source: "ppe", front: "The same equipment is purchased on September 1. What is depreciation for the first calendar year?", back: "The asset is in service 4 of 12 months: $11,000 × 4/12 ≈ $3,667." },
  { source: "ppe", front: "What is net book value (NBV)?", back: "Cost − Accumulated depreciation — an asset's carrying value on the balance sheet at a point in time." },
  { source: "ppe", front: "How do you determine the gain or loss on disposal of an asset?", back: "Gain (or loss) = Proceeds − Net book value at the time of sale." },
  { source: "ppe", front: "Equipment with cost $60,000 and accumulated depreciation of $44,000 is sold for $21,000. Gain or loss?", back: "NBV = $60,000 − $44,000 = $16,000. Gain = $21,000 − $16,000 = $5,000 gain." },
  { source: "ppe", front: "What does it mean if an asset is sold for exactly its net book value?", back: "Neither a gain nor a loss is recognized — proceeds minus NBV equals zero." },
  { source: "ppe", front: "What is PP&E turnover, and how is it computed?", back: "Sales ÷ PP&E — how efficiently a company generates sales from its investment in property, plant, and equipment." },
  { source: "ppe", front: "Why should PP&E turnover mainly be compared within a single industry?", back: "Capital-intensive industries (manufacturing, utilities) naturally run lower PP&E turnover than asset-light industries (services, software), so cross-industry comparisons are misleading." },
];

const SOURCE_LABELS = {
  costing: "Costing Methods",
  reserve: "LIFO Reserve",
  turnover: "Inventory Analysis",
  ppe: "PP&E",
};
