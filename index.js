'use strict'

const path = require('path')

const readPkgUp = require('read-pkg-up')

const dirName = result =>
  (result.pkg && result.pkg.name) || path.basename(path.dirname(result.path))

module.exports = opts => readPkgUp(opts).then(dirName)

module.exports.sync = opts => dirName(readPkgUp.sync(opts))
