const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const views = require('koa-views')
const app = new Koa()
const WebSocketServer = require('ws').Server

app.use(views(__dirname + '/views', {
  extension: 'html',
  map: {
    html: 'ejs'
  }
}))
app.use(bodyParser())
app.use(require('koa-static')(__dirname + '/static'))

app.use(async (ctx, next) => {
  ctx.state.user = ctx.cookies.get('name') || ''
  console.log(ctx.state.user);
  await next();
})

app.use(async (ctx, next) => {
  await ctx.render('test', {
    title: 2222
  })
})

let server = app.listen(3000)


let wss = new WebSocketServer({
  server
})

wss.on('connection', function(ws){
  // let user = 
})