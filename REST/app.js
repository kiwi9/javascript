const Koa = require("koa");
const app = new Koa();
const controller = require("./controller");
const bodyparser = require("koa-bodyparser");

if (process.env.NODE_ENV !== "production") {
  require("./controllers/mock");
}

app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} ${ctx.request.url}`);
  await next();
});

app.use(bodyparser());
app.use(controller());

app.listen(3000);
console.log(`app server running at port 3000`);
