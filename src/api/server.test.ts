import { FastifyInstance } from 'fastify';
import { deepEqual, strictEqual } from 'node:assert';
import { after, before, describe, it } from 'node:test';

describe('Testing userController', () => {
  let _server: FastifyInstance
  before(async () => {
    _server = (await import('./server.js')).app
  })
  after(() => _server.close())

  it('Should receive OK', async () => {
    const request = await fetch('http://localhost:3000/users')
    strictEqual(request.status, 200);
    const response = await request.json()
    deepEqual(response, { test: 'OK' })
  })

  it('Should receive ID and NAME', async () => {
    const request = await fetch('http://localhost:3000/users/2')
    strictEqual(request.status, 200);
    const response = await request.json()
    deepEqual(response, { id: 2, name: 'Gabriel' })
  })
})