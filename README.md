# DMI Diploma in English – Vocabulary

DMI Computer Education · vocabulary from the *Do it yourself* book, pages 80–99 (856 verbs).

| Part | Folder | What it is |
|---|---|---|
| Home | `/` | Landing page with links to both parts |
| Vocabulary Practice Hub | `/practice/` | Word list by book page, Tamil meaning, 5 verb forms, English + Tamil sentence, flashcards, quick practice |
| Vocabulary Tests | `/test/` | 4 tests × 100 marks. Student enters name, registration number, branch |

## Tests

| Test | Book pages |
|---|---|
| Vocabulary Test 1 | 80–84 |
| Vocabulary Test 2 | 85–89 |
| Vocabulary Test 3 | 90–94 |
| Vocabulary Test 4 | 95–99 |

Each paper: 50 questions × 2 marks, 40 minutes, 10 questions from each page, picked at random so two students get different papers.
Sections: A Tamil meaning (30) · B English word (20) · C Verb forms (30) · D Complete the sentence (20).

## Turn on GitHub Pages

Repo → Settings → Pages → Source: *Deploy from a branch* → Branch: `main`, folder `/ (root)` → Save.

## Record marks in a Google Sheet

Follow the steps at the top of `apps-script/Code.gs`, then paste the Web App URL into `assets/config.js` (`RESULTS_URL`).
Until then the test still works and the student shows the result screen to the teacher.

## Change things

- Branches, test time, test page ranges: `assets/config.js`
- Words: `assets/words.js` (one entry per word: number, page, word, Tamil meaning, forms, English sentence, Tamil sentence)
- Book corrections made while typing the list: `CORRECTIONS.md`
