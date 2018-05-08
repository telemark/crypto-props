const test = require('ava')
const pkg = require('../../package.json')
const dependencies = pkg.dependencies || false
const devDependencies = pkg.devDependencies || false
const dropModules = ['nsp']

test('basic check', t => {
  t.true(true, 'ava works ok')
})

if (dependencies !== false) {
  Object.keys(dependencies)
    .filter(dependency => !dropModules.includes(dependency))
    .forEach(dependency =>
      test(`${dependency} loads ok`, t => t.truthy(require(dependency)))
    )
}

if (devDependencies !== false) {
  Object.keys(devDependencies)
    .filter(dependency => !dropModules.includes(dependency))
    .forEach(dependency =>
      test(`${dependency} loads ok`, t => t.truthy(require(dependency)))
    )
}
