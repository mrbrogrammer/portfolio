

# Simphiwe Madi Portfolio

**Portfolio of Simphiwe Madi**

This project is a personal portfolio website for Simphiwe Madi. It is designed to make it easy for visitors to discover where and how I do my work, sample various types of content I’ve produced, and contact me directly. The site is built using Ruby, Jekyll, Gulp, and Sass for a modern, maintainable, and flexible workflow.


## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Code Structure Overview](#code-structure-overview)

---

## Features

1. **Easy Work Discovery**  
   Quickly learn where and how I do my work, including my skills, projects, and professional experience.

2. **Content Sampling**  
   Browse and sample different types of content I’ve produced, such as blog posts, media, and technical projects.

3. **Contact Options**  
   Direct channels to reach out, whether through a contact form or social media links.

---

## Technologies Used

- **Ruby** (for Jekyll static site generation)
- **Jekyll** (site generator)
- **Gulp** (build automation)
- **Sass** (CSS preprocessor)
- **Node.js** (required for build tools)

---

## Installation

> **Prerequisites:**  
> - [Node.js](https://nodejs.org/) (v12 or later)  
> - [Ruby](https://www.ruby-lang.org/en/downloads/) (v2.5 or later)  
> - [Bundler](https://bundler.io/) (for Ruby gem management)  
> - [Jekyll](https://jekyllrb.com/docs/installation/)  

**1. Clone the repository**
```sh
git clone https://github.com/mrbrogrammer/portfolio.git
cd portfolio
```

**2. Install Ruby gems**
```sh
bundle install
```

**3. Install Node.js dependencies**
```sh
npm install
```

**4. Build and serve locally**
```sh
# Start Jekyll and Gulp in development mode
npm run start
```
or if set up separately:
```sh
bundle exec jekyll serve
gulp
```

**5. Access the site**  
Open [http://localhost:4000](http://localhost:4000) in your browser.

---

## Usage

- **Viewing the Site:**  
  After running `npm run start`, visit the local server URL to browse the portfolio.

- **Editing Content:**  
  - Update `_posts/` for blog entries.
  - Edit files in `_data/` or `_config.yml` for site configuration.
  - Modify files in `assets/` and `sass/` for styles and assets.

- **Production Build:**  
  To build for production:
  ```sh
  npm run build
  # or
  bundle exec jekyll build
  gulp build
  ```

---

## Configuration

- **Jekyll Settings:**  
  Edit `_config.yml` to update site metadata, navigation, and build settings.

- **Sass Variables:**  
  Customize styles in `sass/_variables.scss`.

- **Gulp Tasks:**  
  Adjust automation and asset pipeline in `gulpfile.js`.

---

## Troubleshooting

- **Jekyll command not found:**  
  Ensure Ruby and Jekyll are installed. Install Jekyll with:
  ```sh
  gem install jekyll
  ```

- **Bundler issues:**  
  Run `gem install bundler` if Bundler is missing.

- **Port already in use:**  
  Change the port in the Jekyll serve command:
  ```sh
  bundle exec jekyll serve --port 5000
  ```

- **Styles not updating:**  
  Ensure Gulp is running in watch mode: `gulp watch`.

- **Node or npm errors:**  
  Confirm Node.js and npm versions with `node -v` and `npm -v`.

---

## Contributing

Contributions are welcome! To contribute:

1. Fork this repo.
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Commit your changes: `git commit -m "Add your message"`
4. Push the branch: `git push origin feature/your-feature-name`
5. Open a pull request.

Please follow existing code style and include clear commit messages.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

## Code Structure Overview

```
./
├── _config.yml         # Jekyll configuration
├── _posts/             # Blog posts (Markdown)
├── _data/              # Data files for Jekyll
├── _includes/          # Jekyll partials
├── _layouts/           # Jekyll layouts
├── assets/             # Images, fonts, etc.
├── sass/               # Sass stylesheets
├── gulpfile.js         # Gulp build automation
├── package.json        # Node dependencies and scripts
├── Gemfile             # Ruby gem dependencies
├── LICENSE
└── README.md
```

---

Feel free to customize this template as your project evolves!
