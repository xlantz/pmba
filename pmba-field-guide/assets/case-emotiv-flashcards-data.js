const FLASHCARDS = [
  {
    "source": "glance",
    "front": "Where are Emotiv's commercial HQ and R&D labs?",
    "back": "Commercial HQ in San Francisco; R&D labs in Sydney, Australia (16-hour time difference)."
  },
  {
    "source": "glance",
    "front": "What is the near-term deadline pressure in the case?",
    "back": "The 2008 Game Developers Conference, under five months away, where Emotiv could demo and announce a launch date; the target launch is holiday 2008."
  },
  {
    "source": "glance",
    "front": "How much money had Emotiv raised, and how much remained in October 2007?",
    "back": "$17 million raised; $7.5 million remaining."
  },
  {
    "source": "industry",
    "front": "What royalty do third-party publishers typically pay console makers per game?",
    "back": "About 10% to 15% of the game's retail price."
  },
  {
    "source": "industry",
    "front": "Which console led the US in cumulative shipments in September 2007, and which led worldwide?",
    "back": "US: Xbox 360 (7.57M, 50.8%). Worldwide: Wii (12.26M, 42.1%), just ahead of Xbox 360 (11.98M)."
  },
  {
    "source": "industry",
    "front": "Why did the case say PC gaming was a possible launch market even though it was small?",
    "back": "It is under a fifth of console revenue, but developers pay no platform royalty, development is less concentrated, and hard-core gamers are an engaged, networked community."
  },
  {
    "source": "industry",
    "front": "How did the Guitar Hero accessory launch and sell?",
    "back": "Nov 2005 on PS2 inside a game; accessory priced at $99; U.S. installed base of guitar peripherals approaching 2 million by fall 2007."
  },
  {
    "source": "tech",
    "front": "Why did Emotiv pick EEG over fMRI and PET?",
    "back": "EEG is far cheaper (~$10,000 range) and portable; fMRI costs about $1M plus $200+/hour and PET needs radioactive injections."
  },
  {
    "source": "tech",
    "front": "Name the three detection suites and their counts.",
    "back": "Expressiv 12 (facial expressions), Affectiv 6 (emotions), Cognitiv 12 (thought commands): 30 total."
  },
  {
    "source": "tech",
    "front": "What is the main user challenge with the Cognitiv states?",
    "back": "Users must train each state and think consistently; signals overlap and vary day to day, so more states require much more practice."
  },
  {
    "source": "options",
    "front": "What are the typical royalty rates for a peripheral on a console and for a third-party publisher?",
    "back": "Console maker: 3% to 5% of the peripheral's retail price. Publisher: about 2% of EPOC's selling price."
  },
  {
    "source": "options",
    "front": "What is the EPOClite proposal?",
    "back": "A simpler EPOC with fewer sensors for Sony's PSP, offered by Sony Europe: lower price, cheaper game development; the offer would expire soon."
  },
  {
    "source": "options",
    "front": "Why was Nintendo not seen as a viable partner?",
    "back": "The Wii lacked the computing power for the algorithms, and Nintendo's management focused on enhancing its own motion detection."
  },
  {
    "source": "options",
    "front": "What chicken-and-egg problem existed inside Sony?",
    "back": "The software division wanted hardware integration and marketing support first; the hardware group wanted to know which games would exist."
  },
  {
    "source": "options",
    "front": "What does EmoKey do?",
    "back": "Maps EPOC mental states to keyboard inputs so existing PC games work with the headset (backward compatibility)."
  },
  {
    "source": "numbers",
    "front": "What is the EPOC production cost, and when does it change?",
    "back": "$110 per unit, falling to $60 after the first million units."
  },
  {
    "source": "numbers",
    "front": "What retailer margins and channel mix does the case give?",
    "back": "Best Buy 35%, e-tailers 25%, direct 0%; expected 80% retail, 15% e-tail, 5% direct; plus 7% MDF on non-direct sales."
  },
  {
    "source": "numbers",
    "front": "What price points do retailers say are relevant?",
    "back": "$399 about the ceiling; below $299 the next relevant point is $199; Guitar Hero accessory sold at $99."
  },
  {
    "source": "fwmarket",
    "front": "Name Rogers' five adopter categories with shares.",
    "back": "Innovators 2.5%, early adopters 13.5%, early majority 34%, late majority 34%, laggards 16%."
  },
  {
    "source": "fwmarket",
    "front": "What is the chasm?",
    "back": "The gap between early adopters (visionaries) and the early majority (pragmatists) where many innovations stall."
  },
  {
    "source": "fwmarket",
    "front": "List the five tests of a useful segment.",
    "back": "Measurable, substantial, accessible, differentiable, actionable."
  },
  {
    "source": "fwmarket",
    "front": "Give three differences between B2C and B2B buying.",
    "back": "B2B has organizational buying centers, longer sales cycles, and larger, often negotiated purchases; B2C is individual, shorter, and more emotion-driven."
  },
  {
    "source": "fwmarket",
    "front": "What is a chicken-and-egg problem on a platform?",
    "back": "Buyers wait for complementary products and developers wait for buyers, so neither side commits first."
  },
  {
    "source": "fwmix",
    "front": "What are the steps of forecasting by analogy?",
    "back": "Pick analog(s), align timelines, choose scaling percentages, compute units, then stress-test with scenarios."
  },
  {
    "source": "fwmix",
    "front": "Define price skimming versus penetration.",
    "back": "Skimming starts high and drops over time; penetration starts low to gain volume or an installed base quickly."
  },
  {
    "source": "fwmix",
    "front": "What is the difference between push and pull promotion?",
    "back": "Push motivates the channel to carry and sell; pull builds consumer demand so shoppers ask for the product."
  },
  {
    "source": "prep",
    "front": "Which Unit 2 case prep question asks about the Guitar Hero analogy?",
    "back": "The fifth: what demand might materialize if console enabled, how relevant is the analogy, and is it ever a mainstream product."
  }
];

const SOURCE_LABELS = {
  "glance": "Case at a Glance",
  "industry": "Gaming Industry",
  "tech": "EPOC & Company",
  "options": "Platform Options & Launch",
  "numbers": "The Numbers",
  "fwmarket": "Frameworks I",
  "fwmix": "Frameworks II",
  "prep": "Prep Questions"
};
