# What is source analysis? — the hard-copy booklet

A nine-page A5 booklet students keep. It explains what source analysis is, gives
them the four questions, shows one worked example marked up, and leaves room to
write their own.

| File | What it is |
|---|---|
| `booklet.html` | the source — open it in a browser to preview |
| `What-is-source-analysis-A5.pdf` | 9 A5 pages, ready to print |

## Printing

Print **double-sided on A4, 2 pages per sheet, short-edge binding**, then fold.
Nine pages means the last sheet has a blank side, which is where students end up
writing anyway.

At 100%, actual size, with background graphics on.

## It cannot drift from the wall

`booklet.html` reads `../history/content.js` and `../eal.js` — the same two files
the wall, the level sheets and the big-screen tool read. The worked example on
page 4, the explanations on page 5 and the word list on page 7 are not typed
here; they are pulled from those files. Change the wording there and rebuild:

```
node booklet/build-booklet.mjs
```

The builder measures every page against the A5 box before it writes the PDF and
fails with the overshoot in millimetres if an edit has made a page outgrow its
sheet. A booklet that quietly runs to eleven pages is worse than a build that
stops.

## What is written here rather than pulled in

Only two things: the prose that explains the idea, and `QUESTIONS` — the four
questions in student language, one per criterion. The criterion names, their
colours, their glyphs and their order all come from `CRITERIA`, so adding a fifth
criterion to the wall adds it here too.
