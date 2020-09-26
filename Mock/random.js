const Mock = require('mockjs')
const Random = Mock.Random

console.log(Random.email());
console.log(Mock.mock('@email'));
console.log(Mock.mock({email: '@email'}));

console.log(Random.image());



// valid
let template = {
  name: 'value1'
}
let data = {
  name: 'value2'
}

const res = Mock.valid(template, data)
console.log(res);

const name = Mock.mock({
  'key|1-10': '★'
})
console.log(name);