module.exports = {
  "GET /": async (ctx, next) => {
    await ctx.render("index", {
      title: "hello, index"
    });
  },
  "GET /admin": async (ctx, next) => {
    await ctx.render("admin", {
      title: "admin, index"
    });
  },
  "GET /signin": async (ctx, next) => {
    await ctx.render("reg");
  },
  "POST /signin": async (ctx, next) => {
    const {
      email = "", password = ""
    } = ctx.request.body;
    if (email === 'tony' && password === '123456') {
      await ctx.render('result', {
        title: '登录成功',
        name: 'Tony'
      })
    }else{
      ctx.body = `<h1>登录失败</h1>`
    }
  },
};