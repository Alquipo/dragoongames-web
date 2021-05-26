global.fetch = require('node-fetch')

import { server } from '../src/utils/mockServer/server'

beforeAll(() => {
  //ficar escutando todas as chamadas nos teste
  server.listen()
})

afterEach(() => {
  //reseta todos os handlers para caso eles sejam chamados novamente
  server.resetHandlers()
})

afterAll(() => {
  //fecha o serve e limpa tudo
  server.close
})
