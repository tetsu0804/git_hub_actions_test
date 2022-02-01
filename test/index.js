const assert = require('assert')
const fizzbuzz = require('../index.js')

describe('FizzBuzzTest', () => {
  it('15を渡すと FizzBuzz', () => {
    assert(fizzbuzz(15) === 15);
  });

  it('1+1 = 2', () => {
    assert(1+1 === 2)
  });
});
