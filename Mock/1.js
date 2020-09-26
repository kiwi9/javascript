const Mock = require("mockjs");
const data = Mock.mock({
  //   "list|1-10": [
  //     {
  //       "id|+1": 1,
  //     },
  //   ],
  "name|1-6": [
    {
      a: 111,
    },
  ],
});

console.log(JSON.stringify(data, null, 4));
