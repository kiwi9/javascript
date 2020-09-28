const products = [
  {
    name: "iPhone",
    price: 5888,
  },
  {
    name: "Kindle",
    price: 999,
  },
];

module.exports = {
  "GET /api/products": async (ctx, next) => {
    ctx.response.type = "application/json";
    ctx.response.body = {
      products,
    };
  },

  "GET /api/city": async (ctx, next) => {
    ctx.response.type = "application/json";
    ctx.response.body = {
      products,
    };
  },
};
