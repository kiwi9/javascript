const Mock = require("mockjs");
// const data = Mock.mock({
//   //   "list|1-10": [
//   //     {
//   //       "id|+1": 1,
//   //     },
//   //   ],
//   "name|1-6": [
//     {
//       a: 111,
//     },
//   ],
// });

// console.log(JSON.stringify(data, null, 4));

// 数据模板
// 1. name|min-max: value
const name1 = Mock.mock({
  'name|0-5': 'a'
})

//{ name: 'aaa' }
console.log(name1);

// 2. name|count: value
const name2 = Mock.mock({
  'name|6': 'b'
})

//{ name: 'bbbbbb' }
console.log(name2);

// 3. name|min-max.dmin-dmax: value
const name3 = Mock.mock({
  'price|1-100.1-2': 1
})

//{ price: 22.31 }
console.log(name3);

// 4. name|min-max.dcount: value
const name4 = Mock.mock({
  'name|1-5.2': 5
})

//{ name: 5.53 }
console.log(name4);

// 5. name|count.dmin-dmax: value
const name5 = Mock.mock({
  'name5|8.1-3': 1
})

//{ name5: 8.78 }
console.log(name5);

// 6. name|count.dcount: value
const name6 = Mock.mock({
  'name6|3.3': 1
})

//{ name6: 3.432 }
console.log(name6);

// 7. name|+step: value
const name7 = Mock.mock({
  'name|+2': 5
})

// 初始值5，+2
console.log(name7);


// 布尔值
const b = Mock.mock({
  'name|1': true
})
const b2 = Mock.mock({
  'name|1-10': true
})
console.log(b);
console.log(b2);

// Object
// 从属性值随机选择3个
const person = {
  name: 'tony',
  age: 11,
  job: 'ted',
  sex: 'man',
  hob: 'ball',
  read: 'book'
}
const obj = Mock.mock({
  'name|3': person
})
const obj2 = Mock.mock({
  'name|1-4': person
})
console.log(obj);
console.log(obj2);

// Array
// 随机选取1个
const arr1 = Mock.mock({
  'arr|1': [1, 2, 3, 4, 5, 6]
})
console.log(arr1);
// 顺序选择1个
const arr2 = Mock.mock({
  'arr1|+1': [1, 2, 3, 4, 5, 6]
})
console.log(arr2);
// 重复属性值array生成一个新数组
const arr3 = Mock.mock({
  'arr3|1-5': [6, 7, 8, 9, 123]
})
console.log(arr3);
// 重复属性值array生成一个新数组，重复count
const arr4 = Mock.mock({
  'arr4|3': [6,5,4,3]
})
console.log(arr4);


// Function
const fn = Mock.mock({
  'name_fn': function(){
    return 'str'
  }
})
console.log(fn);

// Reg
const reg = Mock.mock({
  'regexp1': /[a-z][A-Z][0-9]/
})
console.log(reg);
const mobile = Mock.mock({
  'mob': /1[356789]\d{9}/
})
console.log(mobile);

// 占位符
Mock.mock({
  name: {
      first: '@FIRST',
      middle: '@FIRST',
      last: '@LAST',
      full: '@first @middle @last'
  }
})
