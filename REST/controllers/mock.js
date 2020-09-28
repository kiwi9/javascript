const Mock = require("mockjs");

Mock.mock("/city", "get", {
  "city|50": [
    {
      "id|+1": 1,
      name: "@city",
    },
  ],
});
