const users = [
  {
    name: "jay",
    price: 1,
  },
  {
    name: "tony",
    price: 2,
  },
];

module.exports = {
  "GET /api/users": async (ctx, next) => {
    ctx.response.type = "application/json";
    ctx.response.body = {
      users,
    };
  },
};
