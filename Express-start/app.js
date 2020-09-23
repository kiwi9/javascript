const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const consolidate = require("consolidate");
const logger = require("morgan");
const createError = require("http-errors");

app.use(logger("dev"));

app.use((req, res, next) => {
  next(createError(404, "Not Found"));
});

app.use((err, req, res, next) => {
  app.locals.message = err.message;
});

app.listen(3000);
