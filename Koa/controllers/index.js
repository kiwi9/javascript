module.exports = {
  "GET /": async (ctx, next) => {
    await ctx.render("index", { title: "hello, index" });
  },
  "GET /admin": async (ctx, next) => {
    await ctx.render("admin", { title: "admin, index" });
  },
  "GET /signin": async (ctx, next) => {
    await ctx.render("reg");
  },
  "POST /signin": async (ctx, next) => {
    const { email = "", password = "" } = ctx.request.body;
  },
};
