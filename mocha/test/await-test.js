const assert = require("assert")
const hello = require('../hello_async')

describe('#await-test', ()=> {
  it(`test async`, async () => {
    let r = await hello();
    assert.strictEqual(r, 15);
  })
})