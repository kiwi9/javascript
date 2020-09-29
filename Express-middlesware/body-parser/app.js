const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const fs = require("fs");

// 解析post数据，不能用于文件上传
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/form", (req, res) => {
  const file = fs.readFileSync(__dirname + "/form.html");
  res.write(file);
  res.end();
});

app.post("/", (req, res) => {
  const { name = "", age = "" } = req.body;
  req.user = { name, age };
  res.redirect("/");
});

app.get("/", (req, res) => {
  //   const { name, age } = req.user;
  //   res.end(`${name},${age}`);
  console.log(req.user);
});

app.listen(3000);
