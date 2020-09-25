const secret = "fjsdkljflsajfj 120u70 fsdklajf fsd";
const keys = [];

for (let i = 0; i < 100000; i++) {
  keys.push(Math.random() * 100000);
}

module.exports = {
  secret,
  keys,
  database: "test",
  user: "root",
  password: "123456",
  host: "localhost",
  dialect: "mysql",
};
