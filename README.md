# pkg-dir-name

Find name from closest package.json or its directory name.

## Installation

```
npm install pkg-dir-name --save
```

## Usage

<!-- eslint-disable no-console,strict,promise/always-return,promise/catch-or-return -->

```js
const pkgDirName = require('pkg-dir-name')

pkgDirName().then(name => {
  console.log(name) // => pkg-dir-name
})
```
