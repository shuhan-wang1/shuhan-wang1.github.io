# Personal website

Static GitHub Pages site, published from `main` at the repository root.

- `index.html`, `styles.css`, `app.js`: bilingual homepage and quick overviews.
- `projects.json`: public project content in English and Chinese, resource links, and conceptual figure labels.
- `tools/build-projects.py`: generates `project-data.js` and the static pages under `projects/`.
- `project.js`, `project.css`: detail-page language switching and layout.
- `climb.js`, `climb.css`, `tools/templates/mask-demo.html`: illustrative soft/hard mask probability demo on the CLIMB page.

After editing project content, run `python3 tools/build-projects.py` and commit both the source data and generated files. Preview with `python3 -m http.server 8765`.

Project pages include static English content for direct links and search engines; JavaScript adds Chinese and remembers the language preference. Keep OpenQFT content at the public conceptual level until its unpublished work is ready for release. Do not add manuscript files, hidden mechanisms, evaluation materials, or internal results.
