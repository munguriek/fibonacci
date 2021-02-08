const fib = require("./fibonacci");
const assert = require('chai').assert;
describe('Fibonacci', () => {
  it('should return 21 when given 8 as an input', () => {
    assert.strictEqual(fib(8), 21)
  });
  it('should return 55 when given 10 as an input', () => {
    assert.strictEqual(fib(10), 55)
  });
  it('should return 6765 when given 20 as an input', () => {
    assert.strictEqual(fib(20), 6765)
  });
  context('Our Test Cases', () => {
    it('Fibonacci 1,1,2,3', () => {
      assert.strictEqual(fib(1), 1)
      assert.strictEqual(fib(2), 1)
      assert.strictEqual(fib(3), 2)
      assert.strictEqual(fib(5), 8)
    });
  });
})