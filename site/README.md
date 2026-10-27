# Judy Ahmed Mahmoud — Portfolio

React + Vite + TypeScript + Tailwind + Framer Motion + Lucide.

## Run
```
npm install
npm run dev      # local preview
npm run build    # production build in dist/ (upload anywhere)
```

## Everything editable is in `src/content.ts`
- **Replace the CV:** overwrite `public/cv/Judy_Ahmed_Mahmoud_CV.pdf` (keep the name). Downloads save as `Judy_Ahmed_Mahmoud_CV.pdf`.
- **Posters:** put your artwork in `public/posters/`, then set `image` + `alt` on a poster in `POSTERS`.
- **Project images:** put files in `public/`, then add `{ src, alt }` to a project's `images`.
- **New content calendar:** export the pages you want public as JPGs into `public/calendars/<id>/`, then add one entry to `CALENDARS` (pages are listed there). It appears in the section automatically.
- **Calendar PDF download:** off by default because the calendars contain internal briefing notes. To allow it, copy an approved PDF to `public/calendars/` and set `pdf: 'calendars/yourfile.pdf'`.
- Original calendar PDFs are kept in `source-files/` (not published).
