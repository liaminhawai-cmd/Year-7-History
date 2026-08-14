# Year 7 History — WAGOLL walls (live site)

**[Open the site →](https://liaminhawai-cmd.github.io/Year-7-History/)**

The web version of the Year 7 History WAGOLL walls. Everything here is a
plain HTML file: no build step, no CDN, no framework. Open `index.html` and
it works, online or from a USB stick.

The other subjects have their own repositories:
[Economics & Business](https://github.com/liaminhawai-cmd/Year-7-Economics) ·
[Geography](https://github.com/liaminhawai-cmd/Year-7-Geography).

The print versions — the A2/A3 PDFs and the editable Word walls — live in
**[Year-7-Humanities](https://github.com/liaminhawai-cmd/Year-7-Humanities)**.
They are generated from the same text as these pages.

## The three units

Each unit folder is self-contained: one `content.js`, one set of pages.

**1 · Ancient Australia** (`history/`) — GS73, a millstone fragment from
Madjedbebe on Mirarr Country. **An excavated object with no author.** The only
unit with the full family of pages and the print pack.

**2 · Ancient Egypt** (`egypt/`) — Herodotus on the Nile, c. 430 BCE. **A
written source by an outsider, much of it at second hand.** *Draft.*

**3 · Ancient Rome** (`vesuvius/`) — Pliny the Younger's letter to Tacitus on
the eruption of Vesuvius. **A written source by a participant** — who is
nonetheless not an eyewitness to the part that matters most. *Draft.*

The three source types are the point of the sequence, not a coincidence: the
questions you can ask of an object, of a visitor's report and of a
participant's letter are different questions.

| Page | Where | What it is |
|---|---|---|
| `bump-it-up.html` | all three | the big-screen tool: Foundation to Year 10, one rung at a time |
| `bump-it-up-standalone.html` | all three | the same page with everything built in, for offline use |
| `wagoll-wall.html` | unit 1 | the whole continuum on one surface |
| `level-sheets.html` | unit 1 | one anchor sheet per level, sized to print |
| `source-sheet.html` | unit 1 | the source itself, described |
| `interactive.html` | unit 1 | mark the example yourself, then compare with the model |
| `paragraph-builder.html` | unit 1 | one card per sentence of the answer, with stems |
| `build-the-wall.html` | unit 1 | staged rounds that fill the wall in as you answer |

### What "draft" means here

Units 2 and 3 have been written and levelled but not taught. Their curriculum
blocks are real — the "Using historical sources" descriptors are about the
skill, not the topic, so all three units meet the same ones, and the codes are
copied deliberately rather than by slip. What they do not yet have is the wall,
the level sheets, the print pack, or a lesson behind them.

## One file holds the words

Each unit folder has a single `content.js`. Every page in that folder reads
it, and so do the PDF and Word builders. **Edit the wording there and it
changes everywhere at once.** No page carries its own copy.

To mark a phrase as evidence of a criterion, wrap it:

```
GS73 is a {source|stone source} found at Madjedbebe.
```

Anything you do not wrap stays black. That is deliberate — the black text is
the glue, and it is what lets the marked phrases read as evidence rather than
decoration.

Keep each folder together: the pages load `content.js` (and, where the source is
a picture, the image) from alongside them. `bump-it-up.html` is byte-identical in
all three folders — it takes its criteria, its colours and its source panel from
`content.js`, so a unit built on a letter and a unit built on a photograph run
the same file. Copy it across when you change it.

## Regenerating the print versions

```
npm i -D playwright
node history/build-pdf.mjs          # A2 wall, A3 level sheets, A3 source sheet

pip install python-docx
python3 tools/build_docx.py         # the editable Word wall

python3 tools/build_standalone.py history/bump-it-up.html \
        egypt/bump-it-up.html vesuvius/bump-it-up.html
```

The PDF builder measures every sheet against its printable box first and fails
with the overshoot in pixels if an edit has made a sheet outgrow its page.
Copy the output into the Year-7-Humanities repository.

## House rules for this repo

It is public and it is for students, so:

1. **No student or staff names**, in content, code, commit messages or file
   metadata.
2. **Nothing is collected.** No accounts, no tracking, no analytics.
   `localStorage` only, and the pages say so honestly.
3. **No gates.** Nothing is locked behind completing something else. Teachers
   jump around mid-lesson; every part stays reachable.
4. **No filler.** No points, badges, streaks or encouragement banners. If a
   line of text does not teach, instruct, or report a real state, it should not
   be there.
5. **Two signals per criterion.** Colour *and* an underline pattern, plus a
   glyph in the explanation bands. Colour alone does not survive a photocopy
   and is not reliable for colour-blind students.

## GS73 and Mirarr Country

The source images come from Figure 3 of Hayes, E. H. et al. (2022),
“65,000-years of continuous grinding stone use at Madjedbebe, Northern
Australia,” *Scientific Reports* 12, 11747 — open access under CC BY 4.0,
figure prepared by Elspeth H. Hayes.

The research was conducted with permission from the custodians of Madjedbebe,
May Nango and Djaykuk Djandjomerr, and Mirarr Senior Traditional Owner Yvonne
Margarula, with Gundjeihmi Aboriginal Corporation facilitating the work. The
images and information were published for general educational purposes; **no
commercial use is authorised without prior Mirarr consent.**

Country, custodianship and research permission are to stay visible wherever
the source is used — which is why that line is set on the wall itself at a
readable size, not buried in a footnote. Keep it there. Full details in
[`history/SOURCE-NOTICE.md`](history/SOURCE-NOTICE.md).

## EAL

`eal.js` holds the source-analysis vocabulary — the words a student needs to do
the task at all, as distinct from the words of any one source — with a
definition and eighteen translations each. All three units read it, and the
words are linked in every unit whether or not that unit's own glossary happens
to mention them.

The picker sits beside the Background and "I can…" toggles. The choice is kept
in the browser and nothing leaves the device.

**The same file feeds the vocabulary hub.** `tools/build_vocab_entries.py`
turns it into a unit on
[EAL-Vocabulary-Site](https://liaminhawai-cmd.github.io/EAL-Vocabulary-Site/),
so the wall and the hub cannot teach different words:

```
python3 tools/build_vocab_entries.py ../eal-vocabulary-site
```

Morpheme translations there are reused from words already on the hub, matched on
the morpheme **and** its meaning. Matching on the letters alone attaches the
wrong translation in eighteen languages at once — the hub's `ist` meaning "to
stand" is not the `ist` in *archaeologist*.

**The translations are machine-drafted and unreviewed.** They are labelled as
such on screen, every time one is shown. Traditional and Simplified Chinese are
written as separate values with Taiwan and Mainland wording rather than
character conversion, but the vocabulary site's rule is that translations must
be *reviewed*, and these are not yet.
