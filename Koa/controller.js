const router = require("koa-router")();
const fs = require("fs");

function addMapping(mapping) {
  for (let url in mapping) {
    if (url.startsWith("GET")) {
      const urlPath = url.substring(4);
      router.get(urlPath, mapping[url]);
      console.log(`add mapping ${url}`);
    } else if (url.startsWith("POST")) {
      const urlPath = url.substring(5);
      router.post(urlPath, mapping[url]);
      console.log(`add mapping ${url}`);
    } else if (url.startsWith("DELETE")) {
      const urlPath = url.substring(7);
      router.DELETE(urlPath, mapping[url]);
      console.log(`add mapping ${url}`);
    } else if (url.startsWith("PUT")) {
      const urlPath = url.substring(4);
      router.put(urlPath, mapping[url]);
      console.log(`add mapping ${url}`);
    } else {
      console.log(`invalid url ${url}`);
    }
  }
}

function addcontrollers(dir) {
  const files = fs.readdirSync(__dirname + "/" + dir);
  const js_files = files.filter((f) => f.endsWith(".js"));

  for (const file of js_files) {
    const mapping = require(__dirname + "/" + dir + "/" + file);
    addMapping(mapping);
  }
}

module.exports = function (dir) {
  dir = dir || "controllers";
  addcontrollers(dir);
  return router.routes();
};
