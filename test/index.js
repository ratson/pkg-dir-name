import path from 'path'

import test from 'ava'

import pkgDirName from '..'

test(async t => {
  const name = await pkgDirName()
  t.is(name, 'pkg-dir-name')
})

test('cwd', async t => {
  const name = await pkgDirName({ cwd: __dirname })
  t.is(name, 'pkg-dir-name')
})

test('private package', async t => {
  const name = await pkgDirName({
    cwd: path.join(__dirname, 'fixtures/private-package'),
  })
  t.is(name, 'private-package')
})

test('sync', t => {
  t.is(pkgDirName.sync(), 'pkg-dir-name')
})
