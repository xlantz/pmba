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

  // ---- Turnover & Cash Cycle ----
  { source: "turnover", front: "What is inventory turnover, and how is it computed?", back: "COGS ÷ Average inventory — how many times per year, on average, a company sells through its entire inventory balance." },
  { source: "turnover", front: "What is days inventory outstanding (DIO), and how is it computed?", back: "365 ÷ Inventory turnover — the average number of days inventory sits before it's sold." },
  { source: "turnover", front: "A retailer reports COGS of $18 million and average inventory of $3 million. What are its turnover and DIO?", back: "Turnover = $18M/$3M = 6.0. DIO = 365/6.0 ≈ 60.8 days." },
  { source: "turnover", front: "Why can't you directly compare inventory turnover between a LIFO company and a FIFO competitor?", back: "LIFO and FIFO report different COGS and average inventory in a rising-cost environment, so the LIFO reserve needs to be applied first to make the comparison meaningful." },
  { source: "turnover", front: "Is a rising inventory turnover ratio always good news?", back: "Not necessarily — check whether it reflects genuinely faster sales, or a company running unusually lean in a way that risks stockouts." },
  { source: "turnover", front: "What is days sales outstanding (DSO), and how is it computed?", back: "(Average Accounts Receivable ÷ Sales Revenue) × 365 — the average number of days it takes to collect cash from customers after a credit sale." },
  { source: "turnover", front: "What is days payable outstanding (DPO), and how is it computed?", back: "(Average Accounts Payable ÷ COGS) × 365 — the average number of days the company takes to pay its own suppliers." },
  { source: "turnover", front: "What is the cash conversion cycle (CCC) formula?", back: "CCC = DSO + DIO − DPO — the number of days of cash tied up between paying for inventory and collecting from customers." },
  { source: "turnover", front: "A company has average AR of $500,000 on $6,000,000 sales, average inventory of $700,000 on $4,200,000 COGS, and average AP of $350,000. What is the CCC?", back: "DSO = (500,000/6,000,000) × 365 = 30.4 days. DIO = (700,000/4,200,000) × 365 = 60.8 days. DPO = (350,000/4,200,000) × 365 = 30.4 days. CCC = 30.4 + 60.8 − 30.4 = 60.8 days." },
  { source: "turnover", front: "What does a negative cash conversion cycle mean?", back: "The company collects cash from customers before it even has to pay its own suppliers for that same inventory — common in some retail and subscription models." },

  // ---- PP&E ----
  { source: "ppe", front: "What costs are capitalized into a PP&E asset's cost basis?", back: "Delivery/set-up costs, taxes on the purchase, direct costs to build (materials, labor), and overhauls that extend useful life or add substantial structural improvements." },
  { source: "ppe", front: "What costs are excluded from PP&E cost and expensed as incurred instead?", back: "Minor/regular repairs and maintenance, insurance on the asset, and wages of employees who operate/use the asset." },
  { source: "ppe", front: "What is the straight-line depreciation formula?", back: "(Cost − Salvage value) ÷ Useful life — spreads an asset's depreciable cost evenly across each year of its useful life." },
  { source: "ppe", front: "Equipment costs $60,000, has a $5,000 salvage value, and a 5-year useful life. What is annual straight-line depreciation?", back: "($60,000 − $5,000)/5 = $11,000 per year." },
  { source: "ppe", front: "The same equipment is purchased on September 1. What is depreciation for the first calendar year?", back: "The asset is in service 4 of 12 months: $11,000 × 4/12 ≈ $3,667." },
  { source: "ppe", front: "What is the double-declining balance (DDB) rate, and what does it apply to?", back: "DDB Rate = 2 × (1 ÷ Useful Life). That rate is applied to the asset's declining net book value each year (not its original cost)." },
  { source: "ppe", front: "A $60,000 asset with a $5,000 salvage value and 5-year life is depreciated under DDB. What is year 1 depreciation?", back: "DDB rate = 2 × (1/5) = 40%. Year 1 depreciation = 40% × $60,000 = $24,000." },
  { source: "ppe", front: "Under DDB, can an asset be depreciated below its salvage value?", back: "No — once net book value would fall below salvage value, depreciation is capped so NBV lands exactly at salvage value, and no further depreciation is taken." },
  { source: "ppe", front: "What is the units-of-production depreciation formula?", back: "Rate per unit = (Cost − Salvage Value) ÷ Total estimated units of output; each period's depreciation = rate per unit × actual units produced that period." },
  { source: "ppe", front: "A machine costs $100,000, has a $10,000 salvage value, and is expected to produce 90,000 units. It produces 12,000 units in year 1. What is year 1 depreciation?", back: "Rate per unit = ($100,000 − $10,000)/90,000 = $1.00. Year 1 depreciation = 12,000 × $1.00 = $12,000." },
  { source: "ppe", front: "What is net book value (NBV)?", back: "Cost − Accumulated depreciation — an asset's carrying value on the balance sheet at a point in time." },
  { source: "ppe", front: "How do you determine the gain or loss on disposal of an asset?", back: "Gain (or loss) = Proceeds − Net book value at the time of sale." },
  { source: "ppe", front: "Equipment with cost $60,000 and accumulated depreciation of $44,000 is sold for $21,000. Gain or loss?", back: "NBV = $60,000 − $44,000 = $16,000. Gain = $21,000 − $16,000 = $5,000 gain." },
  { source: "ppe", front: "What does it mean if an asset is sold for exactly its net book value?", back: "Neither a gain nor a loss is recognized — proceeds minus NBV equals zero." },
  { source: "ppe", front: "What is PP&E turnover, and how is it computed?", back: "Sales ÷ PP&E — how efficiently a company generates sales from its investment in property, plant, and equipment." },
  { source: "ppe", front: "Why should PP&E turnover mainly be compared within a single industry?", back: "Capital-intensive industries (manufacturing, utilities) naturally run lower PP&E turnover than asset-light industries (services, software), so cross-industry comparisons are misleading." },

  // ---- Intangibles ----
  { source: "intangibles", front: "What is an intangible asset?", back: "A long-lived asset with no physical substance that still provides a future economic benefit — copyrights, trademarks, franchises/licenses, patents, and goodwill are common examples." },
  { source: "intangibles", front: "What is goodwill, and how is it amortized?", back: "The portion of a company's value (typically from an acquisition) not attributable to any individually identifiable asset. It is not amortized — it's tested periodically for impairment instead." },
  { source: "intangibles", front: "For a self-created (internally developed) intangible, what costs get capitalized?", back: "Only direct costs of obtaining legal/government approval — legal fees and filing fees for a patent or trademark application, for example." },
  { source: "intangibles", front: "For a self-created intangible, what costs are expensed as incurred instead of capitalized?", back: "Nearly everything else that creates the intangible's value: R&D employee salaries, equipment, and office space used to develop the underlying invention or work." },
  { source: "intangibles", front: "How does capitalizing a purchased intangible differ from capitalizing a self-created one?", back: "A company that purchases a patent, trademark, or other intangible from someone else capitalizes the full purchase price, since that cost is no longer uncertain — unlike a self-created intangible, where only direct legal/filing costs are capitalized." },
  { source: "intangibles", front: "How are intangible assets with a finite useful life amortized?", back: "Typically using the straight-line method over the useful life, similar in mechanic to straight-line depreciation for PP&E." },
  { source: "intangibles", front: "Which intangibles are not amortized, and why?", back: "Intangibles with an indefinite useful life — like goodwill, or a trademark/copyright a company intends to renew and use indefinitely — aren't amortized; they're tested periodically for impairment instead." },
  { source: "ppe", front: "How do you compute what percent of an asset's useful life is \"used up,\" and what's the common mistake?", back: "% Used Up = Accumulated Depreciation ÷ Gross (original) Cost. The common mistake is dividing Net Book Value by cost instead — that gives the percent remaining, the opposite of what's being asked." },
];

const SOURCE_LABELS = {
  costing: "Costing Methods",
  reserve: "LIFO Reserve",
  turnover: "Turnover & Cash Cycle",
  ppe: "PP&E",
  intangibles: "Intangibles",
};
