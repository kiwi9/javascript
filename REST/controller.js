// 加载所有控制器(路由)
const fs = require("fs");
const router = require("koa-router")();

function addMapping(router, mapping) {
  for (const url in mapping) {
    if (url.startsWith("GET")) {
      const path = url.substr(4);
      router.get(path, mapping[url]);
      console.log(`register URL mapping: GET ${path}`);
    } else if (url.startsWith("POST")) {
      const path = url.substr(5);
      router.post(path, mapping[url]);

      console.log(`register URL mapping: POST ${path}`);
    } else if (url.startsWith("PUT")) {
      const path = url.substr(4);
      router.put(path, mapping[url]);

      console.log(`register URL mapping: PUT ${path}`);
    } else if (url.startsWith("DELETE")) {
      const path = url.substr(7);
      router.delete(path, mapping[url]);

      console.log(`register URL mapping: DELETE ${path}`);
    } else {
      console.log(`invalid URL ${url}`);
    }
  }
}

// 获取所有dir路径下的controller js文件，添加路由到router
function addControllers(router, dir) {
  try {
    const files = fs.readdirSync(__dirname + "/" + dir);
    const js_files = files.filter((file) => {
      return file.endsWith(".js");
    });

    for (const f of js_files) {
      const fn = require(__dirname + "/" + dir + "/" + f);
      addMapping(router, fn);
    }
  } catch (e) {
    console.error(e);
  }
}

module.exports = function (dir) {
  dir = dir || "controllers";
  addControllers(router, dir);
  return router.routes();
};
