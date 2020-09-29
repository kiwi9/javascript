const express = require("express");
const consolidate = require("consolidate");
const app = express();

// 1 模板文件位置
app.set("views", __dirname + "/views");
// 2 模板文件使用什么扩展名 .ejs
app.set("view engine", "ejs");
// 3 映射ejs模板引擎到 .ejs 文件
app.engine("ejs", consolidate.ejs);

app.use("/test", (req, res) => {
  res.render("test", { title: "hello" });
});

app.listen(3000);
