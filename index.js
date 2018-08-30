const ow = require('ow')
const crypto = require('crypto')

module.exports = options => {
  ow(options, ow.object.hasKeys('method', 'secret', 'data'))
  ow(options.data, ow.object.nonEmpty)
  const encrypt = options.method === 'encrypt'
  const secret = Buffer.from(options.secret.toString('base64').substr(0, 32))
  const input = encrypt ? 'utf-8' : 'hex'
  const output = encrypt ? 'hex' : 'utf-8'
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
    if (options.data[key]) {
      const iv = encrypt ? crypto.randomBytes(16) : Buffer.from(options.data[key].toString().split('$')[1], 'hex')
      const cipher = options.method === 'encrypt' ? crypto.createCipheriv('aes-256-cbc', secret, iv) : crypto.createDecipheriv('aes-256-cbc', secret, iv)
      const inData = encrypt ? options.data[key].toString() : options.data[key].toString().split('$')[0]
      let crypted = cipher.update(inData, input, output)
      crypted += cipher.final(output)
      data[key] = encrypt ? `${crypted}$${iv.toString('hex')}` : crypted
    }
  })
  return Object.assign({}, options.data, data)
}
