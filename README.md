[![Build Status](https://travis-ci.org/telemark/crypto-props.svg?branch=master)](https://travis-ci.org/telemark/crypto-props)
[![Coverage Status](https://coveralls.io/repos/telemark/crypto-props/badge.svg?branch=master&service=github)](https://coveralls.io/github/telemark/crypto-props?branch=master)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# crypto-props

Encrypt/decrypt values from given properties of an object

## Usage

```JavaScript
const code = require('crypto-props')
const data = {
  id: 123456,
  text: 'Så vakker var aldri natten'
}
const encryptOptions = {
  secret: 'Louie Louie oh no I got to go',
  data: data,
  method: 'encrypt'
}

const encrypted = code(encryptOptions)
console.log(encrypted)

// => { id: 'af2d188f16b0741aa77bafa154cece87', text: '0ef68df9192603feceff9aa1ada0344c7cd0fa161099a5ba18dc632095516c2f' }

const decryptOptions = {
  secret: 'Louie Louie oh no I got to go',
  data: encrypted,
  method: 'decrypt'
}

const decrypted = code(decryptOptions)
console.log(decrypted)

// => {id: '123456', text: 'Så vakker var aldri natten'}
```

## API

```JavaScript
const options = {
  secret: 'string' // Secret for encrypt/decrypt,
  data: {object} // Object for encryption/decryption,
  method: 'string' // 'encrypt' or 'decrypt',
  exclude: [array] // array of property keys to exclude from encryption/decryption,
  include: [array] // array of property keys to include from encryption/decryption
}
```

## License

[MIT](LICENSE)

![Robohash image of crypto-props](https://robots.kebabstudios.party/minelev-web.png "Robohash image of crypto-props")