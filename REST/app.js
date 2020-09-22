const Koa = require('koa');
const app = new Koa()
const controller = require('./controller')
const bodyparser = require('koa-bodyparser')

app.use(bodyparser())

app.use(controller)

app.listen(3000)
console.log(`app server running at port 3000`);