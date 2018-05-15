const ow = require('ow')
const crypto = require('crypto')

module.exports = options => {
  ow(options, ow.object.hasKeys('method', 'secret', 'data'))
  ow(options.data, ow.object.nonEmpty)
  const input = options.method === 'encrypt' ? 'utf-8' : 'hex'
  const output = options.method === 'encrypt' ? 'hex' : 'utf-8'
  let data = {}
  let props = Object.keys(options.data)
  if (options.exclude) {
    const filteredProps = props.filter(key => !options.exclude.includes(key))
    props = filteredProps
  }
  if (options.include) {
    const filteredProps = props.filter(key => options.include.includes(key))
    props = filteredProps
  }
  props.forEach(key => {
    const cipher = options.method === 'encrypt' ? crypto.createCipher('aes192', options.secret) : crypto.createDecipher('aes192', options.secret)
    let crypted = cipher.update(options.data[key].toString(), input, output)
    crypted += cipher.final(output)
    data[key] = crypted
  })
  return Object.assign({}, options.data, data)
}
