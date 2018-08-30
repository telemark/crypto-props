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
  secret: 'Louie Louie oh no I got to go Louie Louie oh no I got to go',
  data: data,
  method: 'encrypt'
}

const encrypted = code(encryptOptions)
console.log(encrypted)

// => { id: 'ce13f1936bd589bbf5be9251719db344$5ab30813af82a83fe04af171c4796e97', text: 'b1098619cc68e59c9cc2d0785d1fe035f72aa2e867d967022500d6e4d6e4e1a3$716e4e71e277601efe93f47d84bf1150' }

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