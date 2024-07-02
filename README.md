<div id="top"></div>

<div align="center">

  <img src="https://www.frontendmentor.io/static/images/logo-mobile.svg" alt="frontendmentor" width="80">

  <h2 align="center">Calculator App Solution</h2>
  <p align="center">
    <a href="https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29"><strong>Frontend Mentor Challenge</strong></a>
    <br />
    <br />
    <a href="https://jeffersonrj14.github.io/frontendmentor-solution/solution/newbie/recipe-page-tailwind/src/index.html">View Demo</a>
  </p>
</div>

<div align="center">
  <!-- Profile -->
  <a href="https://www.frontendmentor.io/profile/jeffersonrj14">
    <img src="https://img.shields.io/badge/Profile-RJ%20Jefferson-1b7565?style=flat&logo=frontendmentor" alt="RJ Jefferson Profile">
  </a>
  <!-- Status -->
    <a href="#">
    <img src="https://img.shields.io/badge/Status-Completed-1b7565?style=flat" alt="Status Completed">
  </a>

</div>
<br />
<div align="center">

<h2>Screenshot</h2>

![Screenshot](./public/screenshot.png)

</div>

![Screenshot](./public/mobile.png)

This is a solution to the
[Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29).
Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [My Objective](#my-objective)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Getting Started](#getting-started)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathematical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any
  additional changes saved in the browser

### Links

- Github Repo Url:
  [github.com/jeffersonrj14/Calculator-App](https://github.com/jeffersonrj14/Calculator-App)
- Solution URL: [Add solution URL here](https://github.com/jeffersonrj14/Calculator-App)
- Live Site URL:
  [https://calculator-app-rj-jefferson.vercel.app/](https://calculator-app-rj-jefferson.vercel.app/)

## My process

### Built with

- [Vite](https://vitejs.dev/)
- [React](https://react.dev/)
  - [React Router](https://reactrouter.com/)
  - [React Helmet Async](https://www.npmjs.com/package/react-helmet-async)
- [TypeScript](https://www.typescriptlang.org/)
- Linting & Code Formatting
  - [Eslint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
- [PNPM](https://pnpm.io/)
- Hosting
  - [Vercel](https://vercel.com/)

### My Objective

I practiced this solution using TypeScript since I'm currently still learning it and want to try
using it in projects.

### What I learned

I learned how to change the theme without using Tailwind's built-in method. Normally, I use Tailwind
and configure it like this: `(darkMode:'class')`

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  darkMode: 'class',
  theme: [],
  plugins: []
}
```

### Continued Development

I will keep on improving my understanding of advanced TypeScript concepts, such as generics and
decorators. I will also focus on learning how to test React applications using libraries like Jest.

For these projects, I'm planning to add sound effects/noise. For example, when I click a button, it
will produce a click sound.

### Useful resources

- [CSS Reference](https://www.w3schools.com/cssref/index.php) - This resource helped me understand
  specific CSS properties and their usage. I found the pattern and explanations very clear and
  useful, and I will continue to use this reference in the future.
- [TypeScript CheatSheet](https://www.typescriptlang.org/cheatsheets/) - This resource helped me
  understand TypeScript better, particularly with type annotations and interface usage.

## Getting Started

| Description                       | Command        |
| --------------------------------- | -------------- |
| To install dependencies           | `pnpm install` |
| To start the development server   | `pnpm dev`     |
| To build your project             | `pnpm build`   |
| To lint your code                 | `pnpm lint`    |
| To preview your built project     | `pnpm preview` |
| To format your code with Prettier | `pnpm format`  |

### Note: If you encounter an error, please follow these steps:

1. Delete `pnpm-lock.yaml` and `node_modules`.
2. Run the following commands:

```bash
pnpm install
```

3. Then

```bash
pnpm dev
```

4. Optionally, you can also clean up your pnpm store for better performance

```bash
pnpm store prune
```

## Author

- Website - [RJ Jefferson](https://links.jeffersonrj.com)
- Frontend Mentor - [@jeffersonrj14](https://www.frontendmentor.io/profile/jeffersonrj14)

<!-- # React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md)
  uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses
  [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable
type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname
  }
}
```

- Replace `plugin:@typescript-eslint/recommended` to
  `plugin:@typescript-eslint/recommended-type-checked` or
  `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add
  `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list -->
