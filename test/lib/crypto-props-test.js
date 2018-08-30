const test = require('ava')
const code = require('../../index')

const optionsEncrypt = {
  secret: 'Louie Louie oh no I got to go Louie Louie oh no I got to go',
  exclude: ['id'],
  data: {
    id: '123456',
    person: undefined,
    text: 'Så vakker var aldri natten'
  },
  method: 'encrypt'
}
const optionsDecrypt = {
  secret: 'Louie Louie oh no I got to go Louie Louie oh no I got to go',
  include: ['text'],
  data: {
    id: '123456',
    person: undefined,
    text: 'b1098619cc68e59c9cc2d0785d1fe035f72aa2e867d967022500d6e4d6e4e1a3$716e4e71e277601efe93f47d84bf1150'
  },
  method: 'decrypt'
}

test('it encrypts as expected', t => {
  const data = code(optionsEncrypt)
  t.deepEqual(optionsDecrypt.data.id, data.id, 'id preserved')
  t.deepEqual(optionsDecrypt.data.person, data.person, 'person preserved')
  t.not(optionsDecrypt.data.text, data.text, 'text encrypted')
})

test('it decrypts as expected', t => {
  const data = code(optionsDecrypt)
  t.deepEqual(optionsEncrypt.data, data, 'decrypts ok')
})
