// app 中间件
const fs = require("mz/fs");
const pathLib = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const consolidate = require("consolidate");
const logger = require("morgan");
const createError = require("http-errors");
const { secret, keys } = require("../config/config_default");
const indexRoute = require("../routes/index");
const userRoute = require("../routes/user");

module.exports = function (app) {
  app.use(logger("dev"));

  // 解析post body数据
  app.use(bodyParser.urlencoded({ extended: false }));

  // 文件上传
  app.get("/uploads", (req, res) => {
    res.render("upload");
  });
  app.post(
    "/uploads",
    multer({ dest: pathLib.join(__dirname, "../public/uploads") }).any(),
    (req, res) => {
      if (req.files.length) {
        req.files.forEach((file) => {
          const { originalname, path } = file;
          const extname = pathLib.extname(originalname);
          const newName = path + extname;

          fs.rename(path, newName)
            .then(() => {
              console.log("文件上传成功");
              res.redirect("/uploads");
            })
            .catch((err) => {
              console.log(err);
              throw Error("文件上传失败");
            });
        });
      }
    }
  );

  // cookie session
  app.use(cookieParser(secret));
  app.use(
    cookieSession({
      keys,
      maxAge: 60 * 1000 * 100,
    })
  );

  // engine
  app.set("views", pathLib.join(__dirname, "../views/"));
  app.set("view engine", "ejs");
  app.engine("ejs", consolidate.ejs);

  // 路由
  app.use("/", indexRoute);
  app.use("/users", userRoute);

  // 静态资源文件
  app.use(express.static(pathLib.resolve(__dirname, "../public")));

  // 404
  app.use((req, res, next) => {
    next(createError(404));
  });

  // 异常捕获
  app.use((err, req, res, next) => {
    app.locals.message = err.message;
    app.locals.err = req.app.get("env") === "development" ? err : {};

    res.status(err.status || 500);
    if (err.status === 404) {
      res.render("404");
    } else {
      res.render("500");
    }
  });
};
