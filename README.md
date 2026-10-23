# The Pakistan Naama

The website for The Pakistan Naama, built with Next.js. It's laid out like a newspaper site, with a front page, section pages, story pages, a photo essay, an Entertainment page, the page-turning issue and the team page.

Fonts: Playfair Display for the masthead and headlines, Source Serif 4 for reading, Inter for menus and labels, and Noto Nastaliq Urdu for Urdu.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000, reloads as you edit
npm run build    # writes the finished website to /out
npm start        # serves /out to check the build
```

`npm run build` makes a plain static site in `out/`.

## Deploy (GitHub Pages)

The site deploys itself from GitHub: `.github/workflows/deploy.yml` builds it and publishes it to GitHub Pages every time `main` is pushed. It goes live at **https://hamadankz.github.io/Pakistan-Namaa/**.

One-time setup, done by the repo owner (hamadankz):

1. In the repo, go to **Settings → Pages**, and under **Build and deployment → Source**, choose **GitHub Actions**.
2. To let a teammate push updates, go to **Settings → Collaborators → Add people** and give them the **Write** role.

After that, every push to `main` redeploys the site within a couple of minutes (watch the **Actions** tab). The workflow sets the `/Pakistan-Namaa` path automatically from the repo name. For a custom domain, add it under Settings → Pages and set `NEXT_PUBLIC_BASE_PATH` to an empty string in the workflow.

## Edit the content

All of the issue's text is in **`content/issue.ts`** (the photo essay is in `content/photos.ts`): the intro, the editor's note, every article, the entertainment section and the team. Inside a paragraph:

- `*italic*` and `**bold**`
- `> ` at the start of a paragraph makes a quote block
- `{ type: "pull", text: "…" }` repeats a line from the article as a large pull quote
- Playlist songs play Apple's official 30-second previews (`preview` in `content/issue.ts`); "Full song" opens Apple Music
- `facts: { … }` on an article shows a panel of headline figures and progress bars (used by the rabies story, which has no photos)

## Photos

Photos live in `public/images/`. If a story's photo file is missing, its card just shows text. Add the file and rebuild, and the photo appears.

| File | Where it appears |
|---|---|
| `logo.png` | Top of every page, above the name (add the final logo here) |
| `artisan-coffee.jpg`, `coffee-bar.jpg`, `cafe-table.jpg`, `brown-cafe.jpg` | Main story (from the team's Drive photos) |
| `gallery/*.jpg` (and `gallery/thumbs/`) | The Photos page, *Lahore's Third Spaces*. Captions and order are in `content/photos.ts` |
| `thumbs/*.jpg` | Small copies used on cards |
| `column/tweet-1.jpg` … `tweet-5.jpg` | Defence minister column screenshots |
| `entertainment/autumn-soundtrack.jpg`, `entertainment/political-cartoon.png` | Entertainment page |

## Layout

- `app/`: the pages (home, `stories/[slug]`, `section/[slug]`, `photos`, `entertainment`, `issue`, `editors-note`, `team`) and `globals.css`, the stylesheet
- `components/`: masthead, the top bar menu (with the phone menu), fact panel, story cards, photo gallery and viewer, the issue book, word search, crossword, sudoku, search
- `lib/content.ts`: groups the articles into sections and works out read times and excerpts
- `legacy/index.html`: the previous single-page version of the site, kept for reference
