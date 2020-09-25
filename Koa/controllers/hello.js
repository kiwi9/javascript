module.exports = {
  "GET /hello/:name": async (ctx, next) => {
    const { name } = ctx.request.params;
    ctx.body = `<h1>hello,${name}</h1>`;
  },
};
