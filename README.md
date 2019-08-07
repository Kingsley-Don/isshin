<div align="center">
  <img src="https://i.loli.net/2019/04/08/5caac418e0bfe.png" width="300" alt="isshin" />
</div>
<div align="center">
  <a href="https://www.pixiv.net/member.php?id=14591247">Image by 灼眼のSABER</a>
</div>
<h1 align="center">Isshin</h1>
<p align="center">Next.js starter kit</p>
<div align="center">
  <a href="https://github.com/kingsleydon/isshin/tree/typescript">TypeScript version</a>
</div>

## Getting Started

```bash
$ git clone https://github.com/Kingsley-Don/isshin.git
$ cd isshin
$ yarn
$ yarn run dev
```

## Auto-generate using template

### Page

```bash
$ NAME=demo-page npm run new:page

✅ ./pages/demo-page.js created.
✅ ./pages/demo-page.css created.
```

### Component

```bash
$ NAME=Nav npm run new

✅ ./components/Nav/Nav.js created.
✅ ./components/Nav/index.js created.
✅ ./components/Nav/Nav.css created.
```

### Without CSS

```bash
$ CSS=false NAME=Nav npm run new

✅ ./components/Nav.js created.
```

## Features

- Next.js
  - Head component supports title template
- @babel
  - preset-env
  - polyfill
  - plugin-proposal-decorators
- postcss
  - preset-env
  - nested
  - normalize
- eslint + prettier
- husky + lint-staged

## Roadmap

- deploy preset (now and heroku)
- npx support like CRA
