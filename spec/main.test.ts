import { assert } from 'chai'
import { hello } from '../src/main'

describe('initial main.ts file', () => {

  it('checks the hello function without params', () => {
    const message = hello()
    assert.strictEqual(message, 'Hello, World!', 'Should return "Hello, World!"')
  })

  it('checks the hello function with the param of Sam', () => {
    const message = hello('Sam')
    assert.strictEqual(message, 'Hello, Sam!', 'should return "Hello, Sam!"')
  })
})