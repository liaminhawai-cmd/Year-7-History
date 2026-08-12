# Year 7 Humanities — WAGOLL walls (live site)

The web version of the Year 7 Humanities WAGOLL walls. Everything here is a
plain HTML file: no build step, no CDN, no framework. Open `index.html` and
it works, online or from a USB stick.

The print versions — the A2/A3 PDFs and the editable Word walls — live in
**[Year-7-Humanities](https://github.com/liaminhawai-cmd/Year-7-Humanities)**.
They are generated from the same text as these pages.

## Pages

**Ancient Australia** (`history/`) — historical source analysis, Grade 5 to
Year 10, built on GS73, a millstone fragment from Madjedbebe on Mirarr Country.

**Economics & Business** (`economics/`) — Levels 6 to 10, built on Pigeon
Patrol, a student service business.

Each subject has:

| Page | What it is |
|---|---|
| `wagoll-wall.html` | the whole continuum on one surface |
| `level-sheets.html` | one anchor sheet per level, sized to print |
| `interactive.html` | mark the example yourself, then compare with the model |
| `paragraph-builder.html` | one card per sentence of the answer, with stems |
| `build-the-wall.html` | staged rounds that fill the wall in as you answer |

History also has `source-sheet.html` — the source itself, described.

## One file holds the words

Each subject folder has a single `content.js`. Every page in that folder reads
it, and so do the PDF and Word builders. **Edit the wording there and it
changes everywhere at once.** No page carries its own copy.

To mark a phrase as evidence of a criterion, wrap it:

```
GS73 is a {source|stone source} found at Madjedbebe.
```

Anything you do not wrap stays black. That is deliberate — the black text is
the glue, and it is what lets the marked phrases read as evidence rather than
decoration.

Keep each folder together: the pages load `content.js` (and, for history, the
source image) from alongside them.

## Regenerating the print versions

```
npm i -D playwright
node history/build-pdf.mjs          # A2 wall, A3 level sheets, A3 source sheet
node economics/build-pdf.mjs        # A3 wall, A3 level sheets

pip install python-docx
python3 tools/build_docx.py         # editable Word walls for both subjects
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
