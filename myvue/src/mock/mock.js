const Mock = require("mockjs");
const domain = "http://test.com/api";

const citys = (req) => {
  console.log(req);

  const result = Mock.mock({
    "city|50": [{ "id|+1": 1, name: "@city" }],
  });

  return {
    code: 200,
    result: result.city,
  };
};

Mock.mock(`${domain}/city`, citys);
