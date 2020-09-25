const Koa = require("koa");
const bodyparser = require("koa-bodyparser");
const controller = require("./controller");
const views = require("koa-views");
const render = views(__dirname + "/views", {
  extension: "html",
  map: {
    html: "ejs",
  },
});
const static = require('koa-static');
const app = new Koa();

app.use(static(__dirname + '/static'))
app.use(render);
app.use(bodyparser());

app.use(async (ctx, next) => {
  console.log(`${ctx.method} ${ctx.url}`);
  await next();
});

app.use(controller());

app.listen(3000, () => {
  console.log(`server running @ port 3000`);
});

app.on("error", (err) => {
  console.error("server error", err);
});