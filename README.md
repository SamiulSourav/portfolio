# portfolio

Personal portfolio for Md. Samiul Haque — a single-page Vue 3 + Vite site.

## Editing content

- All text, links and numbers live in [`src/data/resume.ts`](src/data/resume.ts). Edit that file; the sections read from it.
- The downloadable résumé is [`public/Md-Samiul-Haque-Resume.pdf`](public/Md-Samiul-Haque-Resume.pdf). Replace the file to update it.
- Colours, fonts and spacing are design tokens at the top of [`src/assets/main.css`](src/assets/main.css) (light and dark themes).
- Each page section is a component in [`src/components/`](src/components/), composed in [`src/views/HomeView.vue`](src/views/HomeView.vue).

---

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VS Code](https://code.visualstudio.com/) + [Vue (Official)](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Recommended Browser Setup

- Chromium-based browsers (Chrome, Edge, Brave, etc.):
  - [Vue.js devtools](https://chromewebstore.google.com/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd)
  - [Turn on Custom Object Formatter in Chrome DevTools](http://bit.ly/object-formatters)
- Firefox:
  - [Vue.js devtools](https://addons.mozilla.org/en-US/firefox/addon/vue-js-devtools/)
  - [Turn on Custom Object Formatter in Firefox DevTools](https://fxdx.dev/firefox-devtools-custom-object-formatters/)

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) to make the TypeScript language service aware of `.vue` types.

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```
