const FLASHCARDS = [
  // ---- Research & Who Does It ----
  { source: "scope", front: "What is marketing research?", back: "The function that links consumer, customer, and public to the marketer through information used to identify opportunities and problems, generate and evaluate actions, monitor performance, and improve understanding of marketing as a process." },
  { source: "scope", front: "What is a marketing insight, and how is it different from information or opinion?", back: "Diagnostic information about how and why effects occur in the market and what that means to marketers. The Star Wars researcher gave opinion, not insight, because he never studied the script." },
  { source: "scope", front: "What happened when Tropicana changed its package without testing consumer reactions?", back: "Sales dropped 20 percent and the old design came back after only a few months." },
  { source: "scope", front: "How much do companies normally budget for marketing research?", back: "1 to 2 percent of company sales, with a large share spent on outside firms." },
  { source: "scope", front: "Name the three types of marketing research firms.", back: "Syndicated-service (sells data for a fee; Nielsen, Kantar, Westat, Circana), custom (carries out specific projects), and specialty-line (specialized service such as field interviewing)." },
  { source: "scope", front: "Name the three key benefits of AI for marketing research.", back: "Operational efficiency, real-time insights, and predictive analytics." },
  // ---- Five-Step Process & the Problem ----
  { source: "process", front: "List the five steps of the marketing research process.", back: "Define the problem, develop the research plan, collect the information, analyze the information, make the decision." },
  { source: "process", front: "Why must a research problem not be defined too broadly or too narrowly?", back: "Too broad collects a lot of unnecessary information; too narrow (one price, one route, one-year break-even) misses key issues such as why $25 and why break even." },
  { source: "process", front: "Distinguish exploratory, descriptive, and causal research.", back: "Exploratory: identify the problem and suggest solutions. Descriptive: quantify demand (how many would buy at $25). Causal: test cause and effect." },
  { source: "process", front: "How much should American Airlines be willing to spend on its Wi-Fi research?", back: "Up to $40,000, given a prior long-term profit estimate of $50,000. If the research costs more than that, it is not worth doing." },
  // ---- Data Sources & Approaches ----
  { source: "approaches", front: "Define secondary data and primary data.", back: "Secondary data were collected for another purpose and already exist. Primary data are freshly gathered for the specific project." },
  { source: "approaches", front: "Name the five main ways marketers collect primary data.", back: "Observation, focus groups, surveys, behavioral data, and experiments." },
  { source: "approaches", front: "What is ethnographic research and what did ConAgra learn from it?", back: "Immersion in consumers' lives using anthropology tools to uncover unarticulated desires. ConAgra spent nine months with families and found popcorn is a \"facilitator of interaction.\"" },
  { source: "approaches", front: "What is the main caution with focus groups?", back: "Do not generalize: the preferences of a small group may not reflect the whole market, and the setting can feel contrived." },
  { source: "approaches", front: "Why can behavioral data be more reliable than survey answers?", back: "Actual purchases reflect real preferences; e.g., grocery data show low-income shoppers buy some expensive brands despite what they say in interviews." },
  { source: "approaches", front: "What does a well-designed experiment require?", back: "Matched groups, different treatments, control of extraneous variables, and a check that differences are statistically significant. AA tested $25 vs $15 in consecutive weeks." },
  // ---- Research Instruments ----
  { source: "instruments", front: "Closed-end vs open-end questions: when is each used?", back: "Closed-end lists all answers and is easy to tabulate. Open-end lets respondents answer in their own words and is especially useful in exploratory research." },
  { source: "instruments", front: "Name the seven closed-end question types.", back: "Dichotomous, multiple choice, Likert scale, semantic differential, importance scale, rating scale, intention-to-buy scale." },
  { source: "instruments", front: "List the main qualitative techniques.", back: "Word association, projective techniques (bubble exercises, comparison tasks), visualization (collage), brand personification, and laddering." },
  { source: "instruments", front: "What are the drawbacks of qualitative research?", back: "Small samples, results may not generalize, and different researchers may draw very different conclusions." },
  { source: "instruments", front: "What is laddering? Give the Samsung chain.", back: "Increasingly specific \"why\" questions: well built (attribute), reliable (functional benefit), family can reach me (emotional benefit), I can help them in trouble (core value)." },
  { source: "instruments", front: "What is neuromarketing and what are its limits?", back: "Brain research on marketing stimuli (EEG, fMRI). It can be expensive, is not universally accepted, can be obtrusive, and should not be the sole basis for decisions." },
  // ---- Sampling & Contact Methods ----
  { source: "sampling", front: "What three decisions form the sampling plan?", back: "Sampling unit (whom to survey), sample size (how many), sampling procedure (how to choose respondents)." },
  { source: "sampling", front: "Why do marketers prefer probability sampling?", back: "It allows confidence limits for sampling error to be calculated and makes the sample more representative (e.g., \"95 chances in 100\")." },
  { source: "sampling", front: "Compare the four contact methods' main drawbacks.", back: "Online: must reach the right people. In person: most expensive, interviewer bias. Telephone: growing antipathy to telemarketers. Email: spam filters and being ignored." },
  { source: "sampling", front: "What is share of search and how far ahead does it predict market share?", back: "Brand share of category searches (e.g., Google Trends). Changes lead market share by about 3 months (energy), 6 months (phones), 9-12 months (autos); only if the full marketing program works." },
  // ---- Data Mining, Analysis & Decision ----
  { source: "decision", front: "What are the three data-mining techniques named in the chapter?", back: "Cluster analysis, predictive modeling, and cognitive modeling." },
  { source: "decision", front: "Distinguish up-selling from cross-selling.", back: "Up-selling: encouraging a more expensive version. Cross-selling: encouraging complementary products or services." },
  { source: "decision", front: "Walk through the AA Wi-Fi revenue math.", back: "$25 x 5 = $125 beats $15 x 6 = $90. $125 x 365 = $45,625 a year; with $90,000 invested per plane, break-even takes about two years." },
  // ---- Measuring & Forecasting Demand ----
  { source: "demand", front: "How do you estimate total market potential?", back: "Potential number of buyers x average quantity each buyer purchases x price." },
  { source: "demand", front: "Compare market potential, market forecast, and company sales potential.", back: "Market potential: maximum industry sales. Market forecast: expected industry demand. Company sales potential: expected company sales, at most the market potential (equal only at 100% share)." },
  { source: "demand", front: "Order sales budget, forecast, and quota.", back: "Budget (conservative, slightly below forecast) < forecast < quota (stretch goal, slightly above forecast)." },
  { source: "demand", front: "What are the three information bases for forecasts?", back: "What people say (intentions, sales force, experts), what people do (market test), and what people have done (past-sales analysis)." },
  { source: "demand", front: "What is the Delphi method?", back: "Experts give estimates, the results are combined, and further rounds of estimating and refining follow." },
  { source: "demand", front: "Name the time-series components and describe exponential smoothing.", back: "Trend, cycle, seasonal, irregular. Exponential smoothing projects next period's sales giving more weight to the most recent sales." },
  { source: "demand", front: "What are the weaknesses of sales-force forecasts?", back: "Reps may be pessimistic or optimistic, may not know marketing plans, and may underestimate on purpose to get a low quota." },
  // ---- Metrics & Dashboards ----
  { source: "metrics", front: "What are marketing metrics and why are they hard to apply?", back: "Measures that quantify, compare, and interpret marketing performance. Inputs are easy to count but outputs like brand image and loyalty take months or years to appear." },
  { source: "metrics", front: "What is a marketing dashboard?", back: "A concise set of interconnected performance drivers viewed across the organization; should include a performance scorecard and an early-warning scorecard." },
  { source: "metrics", front: "Name the four typical dashboard metric types.", back: "Customer metrics, unit metrics, cash-flow metrics (ROMI), and brand metrics." },
  { source: "metrics", front: "How is the Heineken Good Times Index built?", back: "Five measures with three drivers each, giving 15 drivers added to the brand tracking survey after consumer validation (87% said having a good time matters more than ever)." },
];

const SOURCE_LABELS = {
  scope: "Research & Who Does It",
  process: "Five-Step Process & the Problem",
  approaches: "Data Sources & Approaches",
  instruments: "Research Instruments",
  sampling: "Sampling & Contact Methods",
  decision: "Data Mining, Analysis & Decision",
  demand: "Measuring & Forecasting Demand",
  metrics: "Metrics & Dashboards",
};
