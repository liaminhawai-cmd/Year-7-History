/* =======================================================================
   CONTENT BLOCK for the history WAGOLL family.
   This is the ONLY place the wall text lives. wagoll-wall.html,
   level-sheets.html and interactive.html all read it, so editing here
   updates the wall, the per-level A3 sheets and the interactive at once.

   Mark evidence in an example with {key|the phrase}, where key is one of
   the criterion keys in CRITERIA. Anything left unmarked stays black.
   ======================================================================= */

const WALL = {
  id: "hist-gs73",
  title: "How one stone becomes evidence",
  expected: "Year 7",
  inquiry: "What does GS73 suggest about life at Madjedbebe in ancient Australia?",
  foot: "<b>Source:</b> panels adapted from Figure 3 of Hayes, E. H. et al. (2022), &ldquo;65,000-years of continuous grinding stone use at Madjedbebe, Northern Australia,&rdquo; <i>Scientific Reports</i> 12, 11747, doi:10.1038/s41598-022-15174-x (open access, CC BY 4.0). Figure prepared by Elspeth H. Hayes. The dating comparison uses Clarkson et al. (2017) and Williams et al. (2021). <b>The research was conducted with permission from the custodians of Madjedbebe, May Nango and Djaykuk Djandjomerr, and Mirarr Senior Traditional Owner Yvonne Margarula, with Gundjeihmi Aboriginal Corporation facilitating the work.</b> Mirarr-related images and information were published for general educational purposes; no commercial use is authorised without prior Mirarr consent. See SOURCE-NOTICE.md."
};

const FACTS = [
  ["Ancient object", "GS73, a sandstone millstone fragment excavated from square B5/52 at Madjedbebe on Mirarr Country."],
  ["Modern record", "Hayes and colleagues published photographs, micrographs and laboratory results in a peer-reviewed study in 2022."],
  ["Excavation context", "Phase 2, modelled to 68.7&ndash;50.4 thousand years ago. The earliest end of this range is debated."],
  ["Measured evidence", "Deep partial grooves; levelled quartz grains; striations; bright polish on the raised parts of grains."],
  ["Residues", "41 starch grains recovered and plant-related compounds detected. The exact plant was not identified."],
  ["Known limits", "Two chemical peaks were identified as plastic contamination. The integrity of the Phase 2 layer is contested."]
];

const CRITERIA = [
  { key:"source",   row:"Origin, features &amp; purpose",        name:"Origin, features &amp; purpose",        glyph:"■" },
  { key:"context",  row:"Historical context",                    name:"Historical context",                    glyph:"▲" },
  { key:"evidence", row:"Historical interpretations",            name:"Historical interpretations",            glyph:"●" },
  { key:"judge",    row:"Accuracy, usefulness &amp; reliability", name:"Accuracy, usefulness &amp; reliability", glyph:"◆" },
  { key:"meta",     row:"Metacognition",                         name:"Metacognition",                         glyph:"★" }
];

const LEVELS = ["Grade 5","Year 6","Year 7","Year 8","Year 9","Year 10"];

const EXAMPLES = {
"Grade 5":
`GS73 is a {source|stone source} found at Madjedbebe. I can see {source|deep grooves} and {source|shiny patches}. It comes from {context|ancient Australia} and may have been used for grinding. Researchers {evidence|disagree about exactly how old its soil layer is}. The stone is {judge|useful for showing tool use}, but it {judge|cannot tell us the user’s name}. I checked my answer and {meta|added the words ‘may have’} because the source does not prove everything.`,

"Year 6":
`GS73 is a {source|stone tool}: a {source|broken piece of a grinding stone} from Madjedbebe, on Mirarr Country. Photographs show {source|deep grooves and shiny, polished patches}. People were living there {context|many thousands of years ago}, and they {context|used stones like this one to grind their food}. Some archaeologists believe {evidence|the layer is about 65,000 years old}. Others believe {evidence|the soil has moved, so the date is not certain}. The stone is {judge|useful evidence that people were grinding materials}, but it {judge|cannot tell us which plants they were grinding}. I {meta|divided the task into four smaller parts} and finished one part at a time.`,

"Year 7":
`The ancient object is GS73, {source|a broken piece of a sandstone grinding stone} excavated at {source|Madjedbebe, on Mirarr Country}. The modern source is {source|a set of photographs published by Hayes and her team in 2022}. Their purpose was to {source|record the wear and argue that people ground food there for a very long time}. In ancient Australia, {context|grinding allowed people to eat hard seeds and tough plants}. It also shows {context|they understood the resources around them}. Hayes and her team {evidence|interpret this as plant processing}, because the stone carries {evidence|deep grooves, microscopic polish and 41 starch grains}. Other researchers {evidence|question how old the layer really is}. GS73 is {judge|very useful for studying how people prepared food}, because {judge|its shape, its wear and its plant traces all agree}, but it cannot tell us {judge|which plant was ground}. When I reviewed my answer I {meta|changed ‘proves’ to ‘supports’}, and {meta|separated the well-supported part from the part that is still argued about}.`,

"Year 8":
`GS73 is {source|a broken millstone} recovered from {source|Phase 2, one of the oldest occupation layers at Madjedbebe}. Hayes and her team {source|photographed it and examined it under a microscope}. They published the images so that {source|other researchers could inspect the same evidence and judge their interpretation}. Madjedbebe is {context|a rock shelter on Mirarr Country that was occupied for many thousands of years}. The grinding marks show that {context|people were already preparing plant foods early in Aboriginal history}. Hayes explains {evidence|the wear and the plant residues as signs of seed grinding}. Clarkson argues that {evidence|the artefacts remained where they were dropped, which supports the early date}. Williams points to {evidence|termite activity and moving sediment, which would make that date less reliable}. The {judge|shape, the microscopic wear, the starch and the plant chemicals all point in the same direction}, so the grinding interpretation is well supported. Even so, I would ask whether {judge|the residues could be contaminated, and whether the layer could have shifted}. Next time I will {meta|check which tests support each other independently} and {meta|record the questions that remain unresolved}.`,

"Year 9":
`GS73 is {source|material evidence, excavated from a recorded layer called Phase 2}. Hayes and her team published {source|photographs, microscope images and laboratory results together}. They did this because {source|one form of evidence alone would not convince a scientific audience}. The study belongs to {context|wider research into the deep history of Aboriginal Australia}, and it was carried out {context|with the permission of Mirarr custodians}. Hayes analyses {evidence|the grooves, the polish and the plant residues as evidence of seed processing}. Clarkson analyses {evidence|the condition of the site and the dating to defend the early chronology}. Williams uses {evidence|signs of termite disturbance and sediment movement to challenge it}. Because the wear and the residues agree independently, {judge|grinding is the interpretation I would trust most}. The exact plant and the precise age are {judge|weaker, because both depend on preservation and on how stable the deposit is}. While writing, I {meta|monitored that I was listing evidence rather than comparing it}, and I {meta|rewrote my ending as a judgement}.`,

"Year 10":
`GS73 is an ancient artefact, but we meet it only through a modern scientific publication. Its explicit evidence is {source|the recorded wear and the plant residues preserved on the stone}. Its implicit argument is that {source|grinding technology in Australia is far older than earlier accounts allowed}, and that argument is aimed {source|at other archaeologists}. The investigation reflects {context|modern laboratory testing carried out with Mirarr custodians}. It also reveals what those researchers value: {context|testing claims, seeking permission, and stating honestly how certain they are}. Hayes and Clarkson accept the early chronology {evidence|because several independent records converge on it}. Williams gives {evidence|more weight to termite disturbance and sediment movement}. Their interpretations differ because {evidence|they evaluate the formation of the site differently}. Overall, GS73 is {judge|strong evidence for grinding, but only qualified evidence for a precise age}. Its main strength is {judge|that separate tests agree}; its limits are {judge|the unidentified plant, the modern plastic contamination, and the ongoing argument about the layer}. I {meta|justified relying on the interpretation that several tests supported}, then {meta|adapted my conclusion so the two claims did not sound equally certain}.`
};

const EXPLANATIONS = {
"Grade 5": {
  source:   "Names the source and two visible features: ‘stone source’, ‘deep grooves’ and ‘shiny patches’. Origin and purpose are not yet developed.",
  context:  "Places GS73 broadly in ‘ancient Australia’, but gives little detail about life or practice.",
  evidence: "Notices disagreement about the date without describing the competing arguments.",
  judge:    "Gives one use and one limit: tool use is visible, but the user cannot be named.",
  meta:     "Shows a real revision — adding ‘may have’ makes the inference appropriately cautious."
},
"Year 6": {
  source:   "‘Archaeological artefact’, ‘sandstone grinding-stone fragment’ and ‘grooves and polish’ identify type and features; purpose is not yet explained.",
  context:  "‘A very early period of Aboriginal occupation’ identifies the context and connects it to repeated tool use.",
  evidence: "Recognises two positions on the date, but does not yet describe the evidence behind them.",
  judge:    "Recognises usefulness for grinding and a clear limit: the material processed cannot yet be identified.",
  meta:     "Plans the response by breaking the task into the four historical-thinking parts shown on the wall."
},
"Year 7": {
  source:   "Separates the ancient object from the modern 2022 record, then identifies origin, features and why the figure was created.",
  context:  "Outlines how grinding supported plant preparation and knowledge of local resources.",
  evidence: "Describes the plant-processing interpretation and the separate challenge to the earliest date.",
  judge:    "Concludes that converging methods make plant processing useful evidence, then bounds the claim with two limits.",
  meta:     "Makes editing visible: ‘proves’ becomes ‘supports’, and function is separated from precise age."
},
"Year 8": {
  source:   "Describes the object and explains how the modern figure lets readers inspect its form, wear and residues.",
  context:  "Describes Madjedbebe, Mirarr Country and grinding within deep Aboriginal history.",
  evidence: "Explains the debate by connecting each interpretation to a different evidence base.",
  judge:    "Compares independent evidence for function, then asks targeted reliability questions about contamination and layer movement.",
  meta:     "Identifies which methods added independent support, and preserves the unresolved questions for further inquiry."
},
"Year 9": {
  source:   "Explains why the peer-reviewed figure combines several records, and which audience and argument it addresses.",
  context:  "Explains the deep-history research context and the role of Mirarr custodial permission.",
  evidence: "Analyses each interpretation through its evidence: wear and residue, site integrity and dating, or termite and sediment movement.",
  judge:    "Identifies grinding as a stronger claim than exact plant or exact age, and explains why.",
  meta:     "Monitors whether evidence is merely listed, then deliberately revises the list into a comparative judgement."
},
"Year 10": {
  source:   "Analyses explicit evidence, the publication’s implicit argument, its purpose and its scientific audience.",
  context:  "Uses context to explain the creators’ values: empirical testing, custodial permission and careful qualification.",
  evidence: "Exposes why interpretations differ — researchers give different weight to converging records and site-formation evidence.",
  judge:    "Weighs a strength, three limitations, and two claims that carry different degrees of certainty.",
  meta:     "Justifies triangulation, then adapts the conclusion rather than forcing all claims to sound equally certain."
}
};

const CONTINUUM = {
source:{
 "Grade 5":"I can name a historical source and a feature I notice.",
 "Year 6":"I can identify different types of historical sources.",
 "Year 7":"I can identify the origin, content features and purpose of historical sources.",
 "Year 8":"I can describe the origin, content features and purpose of historical sources.",
 "Year 9":"I can explain the origin, content features and purpose of historical sources.",
 "Year 10":"I can analyse the origin, explicit and implicit meaning, and purpose of historical sources."},
context:{
 "Grade 5":"I can say where or when a source comes from.",
 "Year 6":"I can identify the historical context of a source.",
 "Year 7":"I can outline the historical context of a source.",
 "Year 8":"I can describe the historical context of sources.",
 "Year 9":"I can explain historical context, including important events that influenced a source’s creation.",
 "Year 10":"I can explain historical context to identify the motivations, values and attitudes of a source’s creator."},
evidence:{
 "Grade 5":"I can notice that people may explain the past differently.",
 "Year 6":"I can recognise that historians may interpret historical events and developments differently.",
 "Year 7":"I can describe different historical interpretations of the past.",
 "Year 8":"I can explain different historical interpretations and contested debates about the past.",
 "Year 9":"I can analyse historical interpretations and contested debates and identify the evidence used to support them.",
 "Year 10":"I can evaluate historical interpretations and contested debates, including why or how interpretations differ."},
judge:{
 "Grade 5":"I can say one thing a source can and cannot tell us.",
 "Year 6":"I can recognise that some historical sources are more useful than others.",
 "Year 7":"I can draw conclusions about the usefulness of sources.",
 "Year 8":"I can compare and contrast historical sources and ask questions about their accuracy, usefulness and reliability.",
 "Year 9":"I can compare and contrast historical sources and identify their accuracy, usefulness and reliability.",
 "Year 10":"I can compare and contrast sources and analyse their accuracy, usefulness and reliability."},
meta:{
 "Grade 5":"I can follow a source-analysis checklist one step at a time.",
 "Year 6":"I can complete the task by breaking it into smaller parts.",
 "Year 7":"I can review and edit my work.",
 "Year 8":"I can reflect on my learning experience and processes to inform future progress.",
 "Year 9":"I can use, monitor and evaluate a variety of learning strategies.",
 "Year 10":"I can justify and adapt the source-analysis strategies that produced my strongest judgement."}
};


/* ---------------------------------------------------------------------------
   Text for the standalone A3 source sheet (source-sheet.html). Every factual
   claim here comes from the Hayes et al. (2022) paper, the two dating papers
   it is compared with, or SOURCE-NOTICE.md. Interpretations are attributed to
   the researchers who made them rather than stated as settled fact.
   --------------------------------------------------------------------------- */

const SHEET_IMAGE = "gs73-source-panel.jpg";

const SOURCE_SHEET = {
  kicker: "Ancient Australia · Source A",
  title: "GS73",
  standfirst: "A broken piece of sandstone from a rock shelter in northern Australia, and the long journey by which it became evidence.",

  views: "The four views above are all of the same object. The first is the artefact itself, photographed with a five-centimetre scale bar, with arrows marking the worn areas. The second is the same surface at low magnification, where striations and levelled quartz grains become visible. The last two are microscope views, taken at different points, showing bright polish on the raised parts of individual grains. Nothing has been added to the stone between one view and the next — only the magnification changes.",

  paras: [
    "GS73 is a fragment of a millstone: the lower, fixed slab of a grinding pair, against which a smaller handheld stone is worked. It is sandstone, it is broken, and on its own it looks unremarkable. It was excavated from square B5/52 at the Madjedbebe rock shelter, on Mirarr Country in northern Australia.",

    "Where a thing is found in the ground matters as much as the thing itself. GS73 came from Phase 2 of the excavation, a layer modelled to between 68,700 and 50,400 years ago. That range is not a measurement of the stone; it is a model of the deposit the stone was lying in, and the earliest end of it is disputed.",

    "The stone reached a laboratory before it reached this page. Researchers photographed it, examined its surface under magnification, and washed and analysed what was still caught in it. They recovered 41 starch grains and detected plant-related compounds. They could not identify which plant. They also found two chemical peaks they identified as plastic contamination — a modern signal sitting inside an ancient sample, reported rather than quietly removed.",

    "Hayes and colleagues read the combination — the shape, the deep partial grooves, the levelled grains and polish, the starch and the plant compounds — as evidence of plant processing, and published it in 2022 as part of an argument that grinding-stone use at Madjedbebe has a very long history. Several independent methods pointing the same way is what makes that reading strong.",

    "The age of the layer is argued about separately. Clarkson and colleagues hold that the artefacts stayed where they were deposited, supporting occupation around 65,000 years ago. Williams and colleagues point to termite activity and sediment movement, and argue that the earliest material may not have stayed in place. Note what is and is not in dispute: the disagreement is about how old the layer is, not about whether GS73 is a genuine grinding stone.",

    "None of this work was done on unclaimed ground. Madjedbebe is on Mirarr Country. The research was carried out with the permission of the custodians of Madjedbebe, May Nango and Djaykuk Djandjomerr, and of Mirarr Senior Traditional Owner Yvonne Margarula, with Gundjeihmi Aboriginal Corporation facilitating the work. The images and information were published for general educational purposes; no commercial use is authorised without prior Mirarr consent. Country and custodianship are part of this source’s context, not a footnote to it."
  ],

  close: "A single stone cannot tell you who used it, or what exactly they ground. What it can do — once it has been recorded, magnified, analysed, argued over and attributed — is carry evidence. That is the difference between an object and a source."
};

/* ---------------------------------------------------------------------------
   Paragraph frame (paragraph-builder.html). Same idea as the ELC TEEA tool:
   one card per step, each opening to the job, the guide, a worked non-example
   and sentence stems. The worked examples are NOT repeated here — the builder
   pulls them out of EXAMPLES above, so they can never drift.
   --------------------------------------------------------------------------- */

const FRAME = {
  name: "S · C · I · U · M",
  blurb: "The five steps are the five criteria, in the order you write them. Reading down the wall is the same as writing the paragraph.",
  steps: [
    { key:"source", letter:"S", title:"Source",
      job:"Say what the source is, where it came from, and why it was made.",
      guide:"Two different things get named here: the ancient object, and the modern record of it. Name both. The words “created to…” are what turn a description into a purpose.",
      warn:"This source is about a stone from Australia.",
      warnWhy:"That is the topic, not the source. No origin, no features, no purpose.",
      stems:["The ancient source is ___, excavated from ___.",
             "The modern record is ___, created to ___.",
             "It was made for ___ so that ___."] },

    { key:"context", letter:"C", title:"Context",
      job:"Use what you know about the period to make the details mean something.",
      guide:"This sentence is knowledge you bring, not something you can see in the source. Say what was happening at the time, and why that makes these details matter.",
      warn:"It is very old.",
      warnWhy:"A date is not a context. Say what people were doing, and why the source fits there.",
      stems:["In ___, ___ helped people ___.",
             "At this time ___, which is why ___.",
             "The study belongs to ___."] },

    { key:"evidence", letter:"I", title:"Interpretations",
      job:"Say what researchers think the source shows, and what in the source makes them think it.",
      guide:"Every interpretation needs its evidence attached with “because”. Where two groups disagree, give both, and say what each one is arguing from.",
      warn:"Researchers disagree about it.",
      warnWhy:"You have named a disagreement without saying what either side argues, or what they argue from.",
      stems:["___ interpret ___ because the source contains ___.",
             "___ argue ___, while ___ question ___.",
             "Each side is arguing from ___."] },

    { key:"judge", letter:"U", title:"Usefulness",
      job:"Judge what the source is good for, then say plainly what it cannot settle.",
      guide:"Useful for what? Name the claim. Then bound it. A limit is not an apology — it is half of the judgement.",
      warn:"This source is very useful and reliable.",
      warnWhy:"Useful for which claim? A judgement with nothing attached and no limit is not a judgement.",
      stems:["___ is useful for investigating ___ because ___.",
             "However, ___ remains ___.",
             "It is strong evidence for ___, but only qualified evidence for ___."] },

    { key:"meta", letter:"M", title:"My check",
      job:"Show one thing you actually changed, and why.",
      guide:"Name the move: a word you swapped, two claims you separated, a list you turned into a judgement. It has to be something you did, not something you plan to do.",
      warn:"I checked my work carefully.",
      warnWhy:"Nothing is named, so nothing is shown. What did you change?",
      stems:["After reviewing, I changed ___ to ___.",
             "I separated ___ from ___.",
             "I monitored whether ___, then ___."] }
  ]
};

const VERBS = {
  use: [
    { w:"names",      note:"points at the source" },
    { w:"identifies", note:"points at the source" },
    { w:"describes",  note:"adds detail" },
    { w:"outlines",   note:"adds detail" },
    { w:"records",    note:"what the modern study did" },
    { w:"documents",  note:"what the modern study did" },
    { w:"explains",   note:"gives a reason" },
    { w:"interprets", note:"reads meaning from evidence" },
    { w:"argues",     note:"takes a position" },
    { w:"questions",  note:"pushes back on a position" },
    { w:"challenges", note:"pushes back on a position" },
    { w:"analyses",   note:"breaks it into parts" },
    { w:"evaluates",  note:"weighs it up" },
    { w:"justifies",  note:"gives grounds for a judgement" },
    { w:"qualifies",  note:"limits a claim on purpose" }
  ],
  avoid: [
    { w:"proves",     why:"almost nothing in history is proved by one source. The wall's own revision is “proves” → “supports”." },
    { w:"is about",   why:"names the topic, not the source." },
    { w:"says",       why:"reports; it does not interpret." },
    { w:"talks about",why:"too vague to meet any descriptor." }
  ]
};

/* ---------------------------------------------------------------------------
   Staged build activity (build-the-wall.html). Only the teaching text lives
   here — every question is generated from EXAMPLES, CONTINUUM and FRAME above,
   so the activity can never ask about something the wall does not say.
   --------------------------------------------------------------------------- */

const BUILD = {
  intro: "The wall is empty. Each round you answer fills part of it in. Nothing is locked — you can leave a round and come back.",
  stages: [
    { id:"phrase", title:"Which criterion does this phrase prove?", short:"Phrases",
      teach:"Every marked phrase on the wall is marked because it <b>proves one criterion</b>. The unmarked words around it are the glue that holds the sentence together.<br><br>Ask: <i>what is this phrase doing?</i> Naming the source is not the same as judging it. Giving an interpretation is not the same as giving the evidence for it.",
      reteach:"Slow it down. Read the phrase on its own, without the sentence around it, and ask what job it does:<ul><li>Does it <b>name or describe the source</b>, or say why it was made? → Origin, features &amp; purpose.</li><li>Does it place the source in <b>a time, a place or a practice</b>? → Historical context.</li><li>Does it say <b>what someone thinks</b>, or give the evidence they think it from? → Historical interpretations.</li><li>Does it say <b>how useful or how limited</b> the source is? → Accuracy, usefulness &amp; reliability.</li><li>Does it describe <b>something you did to your own work</b>? → Metacognition.</li></ul>" },

    { id:"descriptor", title:"Which row does this descriptor belong in?", short:"Rows",
      teach:"Under the worked examples, the wall has one row per criterion. Each row runs left to right through the levels.<br><br>These are the descriptors from that grid. Put each one back in its row.",
      reteach:"The verb at the start is usually the giveaway for the level, not the row. For the <b>row</b>, look at what the sentence is about: the source itself, its time and place, what people argue, how far you can trust it, or how you worked." },

    { id:"level", title:"Which level is this descriptor?", short:"Levels",
      teach:"Read across a row and the same skill gets harder every twelve months. The verb carries most of that change: <i>name</i> and <i>identify</i> sit low, <i>describe</i> and <i>outline</i> in the middle, <i>explain</i>, <i>analyse</i> and <i>evaluate</i> higher up.",
      reteach:"Line the verbs up in your head, easiest to hardest: name → identify → outline → describe → explain → analyse → evaluate. Then find where this descriptor's verb sits." },

    { id:"order", title:"Put the answer in order", short:"Order",
      teach:"The finished answer runs in the same order as the wall reads downwards. Drag or tap the sentences into that order.",
      reteach:"Follow the frame: say what the source is, then when and where it belongs, then what people make of it and why, then how far you trust it, and last what you changed in your own writing." }
  ],
  done: "The wall is complete. Everything in it came out of your answers."
};
