const axios = require("axios");
const Mock = require("mockjs");

const api = "http://api.com";
Mock.mock(api, {
  "name|3": "abc",
  "age|20-30": 1,
});

setTimeout(() => {
  console.log("start");

  axios
    .get(api)
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    });
}, 2000);

// let xhr = new XMLHttpRequest();
// xhr.open("GET", api, true);
// xhr.send(null);

// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     console.log(xhr.responseText);
//   }
// };
