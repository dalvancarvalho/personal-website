# Dalvan Carvalho's personal website

![vercel deployment status](https://vercelbadge.vercel.app/api/dalvancarvalho/personal-page)
![license type](https://img.shields.io/badge/license-MIT-blue)
![languages supported](https://img.shields.io/badge/supported_languages-2-yellow)

Welcome to the repository of my personal website, built with [Vite](https://vitejs.dev/) and [React](https://react.dev/), and deployed with [Vercel](https://vercel.com/)! The website is available in **Brazilian Portuguese** and **English**.

<br />

<div align="center">
  <img
    style="width: 700px"
    src="./public/images/og-banner.png"
    alt="banner"
  />
</div>

<br />

You can access the website by clicking [here](https://dalvanc.com/).

<br />

## Table of contents

- [Some quick notes](#some-quick-notes)
- [About](#about)
- [Appearance](#appearance)
  - [Desktop](#desktop)
  - [Mobile](#mobile)
- [Resources](#resources)
- [Installation](#installation)
- [Building and running for production](#building-and-running-for-production)
- [Style references](#style-references)
  - [Fonts](#fonts)
  - [Colors](#colors)
  - [Icons](#icons)
- [License](#license)

## Some quick notes

- Even though I'm based in Brazil and speak Portuguese, I prefer to keep this README, my [GitHub profile](https://github.com/dalvancarvalho), and all coding-related content in English to reach a wider audience. If you are Brazilian (or from another Portuguese-speaking country) and have difficulty reading in English, you can access the Portuguese version of this README on the link below:

  **[📄 README - Português (Brasil)](./README-pt.md)**

- You are free to fork this repository if you wish, but please don't forget to give me proper credit if you plan to use it for purposes other than studying. If possible, link it back to this URL: [https://dalvanc.com/](https://dalvanc.com/).

- The website is continually evolving, so stay tuned for future updates!

## About

This project was created to serve as my personal website/portfolio and document my journey in the world of front-end development. It was my first time using **React**, providing a great opportunity to learn about the advantages it offers over vanilla JavaScript. All resources used in its development are listed in the [Resources](#resources) section.

## Appearance

The website counts with a light and a dark version. You can preview both in the gifs below:

### Desktop

<div align="center">
  <img
    style="width: 700px"
    src="./src/assets/gif/desktop.gif"
    alt="desktop view in light/dark version"
  />
</div>

### Mobile

<div align="center">
  <img
    style="width: 300px"
    src="./src/assets/gif/mobile.gif"
    alt="mobile view in light/dark version"
  />
</div>

## Resources

In the table below, all the resources used are listed:

| Resource                                                                      | Usage                                                 |
| ----------------------------------------------------------------------------- | ----------------------------------------------------- |
| [EmailJS](https://www.emailjs.com/)                                           | E-mail sending, directly from the contact form        |
| [Font Awesome](https://fontawesome.com/)                                      | Icons and brand logos                                 |
| [Fontsource](https://fontsource.org/)                                         | Local hosting of Google fonts                         |
| [GSAP](https://greensock.com/gsap/)                                           | Animations across the website                         |
| [i18next](https://react.i18next.com/)                                         | Internationalization                                  |
| [Prism](https://prismjs.com/)                                                 | Syntax highlighting for code snippets                 |
| [React Confetti](https://www.npmjs.com/package/react-confetti)                | Confetti animation on form submission                 |
| [React Helmet Async](https://www.npmjs.com/package/react-helmet-async/)       | Metadata manipulation                                 |
| [React Router](https://reactrouter.com/en/main/)                              | Routing management                                    |
| [React Scroll](https://www.npmjs.com/package/react-scroll/)                   | Vertical scrolling animation                          |
| [React Scroll Parallax](https://www.npmjs.com/package/react-scroll-parallax/) | Parallax effect on the hero section and project cards |

[Vite](https://vitejs.dev/), [React](https://react.dev/), and [Tailwind CSS](https://tailwindcss.com/) were also used during the development.

## Installation

> 📌 **Before you start:** Make sure you have both **Node.js** and **Git** installed on your system. You will need them to install the project's dependencies and perform all Git-related tasks, such as committing and pushing your changes to your own repository on **GitHub**.
>
> [**Download Node.js**](https://nodejs.org/en/download) - _Go for the **LTS** version if you are not sure or never installed **Node.js** before_ <br> [**Download Git**](https://git-scm.com/downloads)

1. Go to the project's folder and open the terminal. To make things easier, you can also open the terminal directly from your code editor (I recommend [Visual Studio Code](https://code.visualstudio.com/)).

2. Install Yarn, if you haven't already on your system (optional):

   > 💡 **Yarn** is an alternative to the **Node Package Manager (NPM)**

   ```
   npm install --global yarn
   ```

3. Install all the project's dependencies:

   ```
   yarn
   ```

   _or if you prefer NPM:_

   ```
   npm install
   ```

4. Run the development server:

   ```
   npx vite
   ```

## Building and running for production

1. Generate a production build:

   ```
   npx vite build
   ```

2. Preview the production build (as it will appear when deployed):

   ```
   npx vite preview
   ```

## Style references

### Fonts

| Text element |                       Font family                        |    Type    |
| ------------ | :------------------------------------------------------: | :--------: |
| Title        |         [Mark Pro](https://8font.com/mark-pro/)          | sans-serif |
| Paragraph    |  [Urbanist](https://fonts.google.com/specimen/Urbanist)  | sans-serif |
| Code snippet | [Fira Code](https://fonts.google.com/specimen/Fira+Code) | monospace  |
| Special      | [Rock Salt](https://fonts.google.com/specimen/Rock+Salt) |  cursive   |

### Colors

| Role                      | Name in Tailwind |                              Hex code                              |
| ------------------------- | :--------------: | :----------------------------------------------------------------: |
| Accent                    |     blue-600     | ![#2563eb](https://via.placeholder.com/10/2563eb?text=+) `#2563eb` |
| Accent (dark version)     |    orange-500    | ![#f97316](https://via.placeholder.com/10/f97316?text=+) `#f97316` |
| Background                |  _custom color_  | ![#f8fafc](https://via.placeholder.com/10/f8fafc?text=+) `#f8fafc` |
| Background (dark version) |  _custom color_  | ![#1a1a1a](https://via.placeholder.com/10/1a1a1a?text=+) `#1a1a1a` |
| Text                      |    slate-600     | ![#475569](https://via.placeholder.com/10/475569?text=+) `#475569` |
| Text (dark version)       |     gray-400     | ![#9ca3af](https://via.placeholder.com/10/9ca3af?text=+) `#9ca3af` |

### Icons

All the icons displayed on the page are from [Font Awesome](https://fontawesome.com/).

## License

This project is licensed under the **MIT license**. You can read the full license by clicking on the link below:

**[📄 MIT License - Dalvan Carvalho](./LICENSE)**

&copy; 2023 **Dalvan Carvalho**
