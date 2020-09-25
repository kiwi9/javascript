// 自动导入所有controllers
const fs = require('fs')
const router = require('koa-router')();


function addMapping(router, mapping) {
  for (let url in mapping) {
    if (url.startsWith('GET')) {
      let path = url.substring(4);
      router.get(path, mapping[url])
    } else if (url.startsWith('POST')) {
      let path = url.substring(5);
      router.post(path, mapping[url])

    } else if (url.startsWith('DELETE')) {
      let path = url.substring(7);
      router.delete(path, mapping[url])

    } else if (url.startsWith('PUT')) {
      let path = url.substring(4);
      router.put(path, mapping[url])

    } else {
      console.log(`invalid URL:${url}`);
    }
  }
}

function addControllers(router, dir) {
  const files = fs.readdirSync(__dirname + '/' + dir)
  const js_files = files.filter(file => {
    return file.endsWith('.js')
  })

  for (const f of js_files) {
    const mapping = require(__dirname + '/' + dir + '/' + f)
    addMapping(router, mapping)
  }
}

module.exports = function (dir) {
  dir = dir || 'controllers'
  addControllers(router, dir)
  return router.routes();
}