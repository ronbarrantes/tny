import { assert } from 'chai'

describe('First test', () => {
  it('should lowercase the string hello world', () => {
    const helloWorld = 'HeLlO, WorLd!'
    const lowerHelloWorld = helloWorld.toLowerCase()
    assert.strictEqual(lowerHelloWorld, 'hello, world!', 'should resolve to "hello, world!"')
  })

  it('should add 3+5', () => {
    const a = 3
    const b = 5
    const result = a + b
    assert.strictEqual(result, 8, 'result should be 8')
  })

  it('should validate a number[] of 5 elements', () => {
    let arr: number[] = []
    for(let i = 1; i <= 5; i++){
      arr = [...arr, i]
    }
    assert.deepStrictEqual(arr, [1, 2, 3, 4, 5], 'should have an array from 1 to 5')
  })
})