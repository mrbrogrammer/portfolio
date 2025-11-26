# Simphiwe Madi — Portfolio (Jekyll)

A simple, minimal portfolio website built with Jekyll, Ruby, HTML5, SASS, CSS, JavaScript, and Liquid. This repository hosts the source for Simphiwe Madi — a Software Developer with 2+ years of experience. Top skills: Java, Spring Boot, React. Passionate about learning and experimenting, with a background in creative fields like photography and videography.

**Quick overview**
- **Project:** Portfolio website for Simphiwe Madi
- **Stack:** Jekyll (Ruby), Liquid templates, HTML5, SASS/CSS, JavaScript
- **Purpose:** Personal website, blog, and projects showcase
- **Hosting:** Can be deployed to GitHub Pages (CNAME included)

**Table of Contents**
- **About:** Project summary and author
- **Tech Stack:** Key technologies used
- **Getting Started:** Install and run locally (macOS / zsh)
- **Development:** How to develop and test changes
- **Project Structure:** Key files and folders
- **Content Authoring:** Add posts and work entries
- **Styling & Assets:** SASS and asset pipeline notes
- **Build & Deploy:** Production build and GitHub Pages
- **Contributing:** Tips for contributors
- **License & Contact:** Author contact info

**About**
- **Author:** Simphiwe Madi — Software Developer (2+ years)
- **Summary:** This is a static portfolio and blog built with Jekyll. It includes an articles/blog section, a projects/work section, and reusable Liquid includes for site components.
- **Bio (short):** Software developer skilled in Java, Spring Boot, and React. Interested in learning, experimenting, and creative media such as photography and videography.

**Tech Stack**
- **Static site generator:** `Jekyll` (Ruby)
- **Templates:** `Liquid` (Jekyll templating)
- **Markup & scripting:** `HTML5`, `JavaScript`
- **Styling:** `SASS` -> compiled CSS
- **Build tools:** Bundler / `Gemfile`
- **Hosting:** GitHub Pages (CNAME included)

**Getting Started (macOS / zsh)**
- Prerequisites:
  - Ruby (recommend using a version manager such as `rbenv` or `rvm`)
  - `bundle` (Bundler)
  - Node (optional, if you want to run additional JS tooling)

- Install dependencies and run locally:

```bash
# from repo root
gem install bundler    # if Bundler is not installed
bundle install         # install gems from Gemfile (Jekyll and plugins)

# serve the site locally (watch mode)
bundle exec jekyll serve --livereload

# Open http://127.0.0.1:4000 in your browser
```

- Quick tips:
  - If you encounter permission errors when installing gems, avoid `sudo`; prefer a Ruby version manager or set up local gem paths.
  - `--livereload` requires the `jekyll-livereload` plugin (check `Gemfile`).

**Development**
- Make changes to the source files (not the `_site` folder). The content in `_site` is the generated output and will be overwritten by Jekyll builds.
- Common development tasks:
  - Edit templates in `_layouts` (e.g. `default.html`, `post.html`, `blog.html`).
  - Update reusable fragments in `_includes` (header, footer, nav, work items, icons).
  - Add/modify posts in `_posts` using standard Jekyll front matter and Markdown.
  - Work/project metadata: see `work/` and `_includes/work/` for project pages and templates.
  - Assets live in `assets/` (SASS sources in `assets/css`, JS in `assets/js`, images in `assets/img`).

**Project Structure (key files & folders)**
- `_config.yml` — Primary Jekyll configuration.
- `Gemfile` — Ruby dependencies.
- `_layouts/` — Page layouts used by posts, blog, and default pages.
- `_includes/` — Reusable site fragments (header, footer, icons, work items).
  - `work/` inside `_includes` contains per-project partials used in project pages.
- `_posts/` — Blog posts (Markdown files named with date prefix: `YYYY-MM-DD-title.md`).
- `work/` — Project content in Markdown that may be used to generate project pages.
- `_data/` — Site data (e.g. `settings.yml`, `layout.yml`) used by Liquid templates.
- `assets/` — Source SASS, JS, and images.
  - `assets/css/all.sass` — SASS entry file that compiles into the site CSS.
  - `assets/js` — JavaScript used on the site (`blog.js`, `functions.js`).
- `_site/` — Generated site (do not edit directly). Used for local preview and publishing.

**Content Authoring**
- Add a blog post:
  - Create a new Markdown file in `_posts` with filename `YYYY-MM-DD-title.md` and Jekyll front matter at the top.
  - Example front matter:

```yaml
---
layout: post
title: "My Post Title"
date: 2025-11-26 10:00:00 +0000
categories: [dev, jekyll]
---

Write your Markdown content here.
```

- Add or update a project in `work/`:
  - Edit `work/proj-X.md` or add a new file following the existing structure.
  - Project pages are rendered using includes in `_includes/work/` and per-project subpages in `_site/work/`.

**Styling & Assets**
- SASS sources are in `assets/css`. The compiled CSS for the published site is in `_site/assets/css/all.css`.
- If you prefer to compile SASS locally without Jekyll plugins, you can use a SASS CLI or `node-sass`/`dart-sass` to compile `assets/css/all.sass` into `assets/css/all.css`.

Example using `dart-sass` (optional):

```bash
# from repo root
npm install -g sass   # if you use npm globally-installed sass
sass assets/css/all.sass:assets/css/all.css --no-source-map --style=compressed
```

**JavaScript**
- Scripts live in `assets/js`. The files `blog.js` and `functions.js` contain site behavior.
- Keep JS modular and reference compiled/minified files in layouts.

**Build & Deploy**
- Build production site:

```bash
# build into _site/
bundle exec jekyll build
```

- Deploy to GitHub Pages:
  - The repo includes `CNAME` for a custom domain. Configure DNS according to GitHub Pages docs.
  - Push the `master` branch (or `gh-pages` branch depending on repo settings) to GitHub; GitHub Pages will serve the contents.

**Performance & Image Optimization**
- Optimize images in `assets/img/` (resize thumbnails, compress JPEG/PNG/WebP) before committing to reduce page size.
- Use appropriately sized thumbnails for blog listing pages in `assets/img/posts/thumbnails/`.

**Content Localization & Data**
- Reusable site data is stored in `_data` (`settings.yml`, `layout.yml`). Use Liquid to keep site-wide settings consistent across templates.

**Contributing**
- Development workflow:
  - Create a feature branch: `git checkout -b feat/description`
  - Make changes and test locally with `bundle exec jekyll serve`
  - Run `git add`, `git commit`, and open a pull request.
- Keep commits focused and add a brief description in PRs explaining the change.

**Troubleshooting**
- Jekyll serve errors often relate to Ruby gem versions. Use `bundle exec` to ensure gems from `Gemfile` are used.
- If Liquid templates don't show changes, ensure you're editing the source files (not `_site`) and that `jekyll serve` is running to pick up changes.

**License**
- Include your preferred license file (e.g. `LICENSE`) if you want to specify reuse terms.

**Author & Contact**
- Simphiwe Madi — Software Developer
- Location: (your location)
- Skills: Java, Spring Boot, React
- Interests: Photography, Videography, Learning new tech

Thanks for checking out this portfolio. If you'd like help adding posts, automating SASS compilation, or setting up CI/CD for builds and deploys, open an issue or create a PR.
