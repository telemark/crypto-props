const test = require('ava')
const code = require('../../index')

const optionsEncrypt = {
  secret: 'Louie Louie oh no I got to go',
  exclude: ['id'],
  data: {
    id: '123456',
    text: 'Så vakker var aldri natten'
  },
  method: 'encrypt'
}
const optionsDecrypt = {
  secret: 'Louie Louie oh no I got to go',
  include: ['text'],
  data: {
    id: '123456',
    text: '0ef68df9192603feceff9aa1ada0344c7cd0fa161099a5ba18dc632095516c2f'
  },
  method: 'decrypt'
}

test('it encrypts as expected', t => {
  const data = code(optionsEncrypt)
  t.deepEqual(optionsDecrypt.data, data, 'encrypts ok')
})

test('it decrypts as expected', t => {
  const data = code(optionsDecrypt)
  t.deepEqual(optionsEncrypt.data, data, 'decrypts ok')
})
