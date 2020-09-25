const assert = require("assert")
const sum = require('../hello')

describe('#hello.js', () => {
  describe('#sum()', () => {
    before(function(){
      console.log('before:');
    })

    after(function(){
      console.log('after.');
    })

    beforeEach(function(){
      console.log(' beforeEach:');
    })

    afterEach(function(){
      console.log(' afterEach:');
    })

    it(`sum() should return 0`, () => {
      assert.strictEqual(sum(), 0)
    })
    it(`sum() should return 1`, () => {
      assert.strictEqual(sum(1), 1)
    })
    it(`sum() should return 3`, () => {
      assert.strictEqual(sum(1, 2), 3)
    })
    it(`sum() should return 6`, () => {
      assert.strictEqual(sum(1, 2, 3), 6)
    })

  })
})