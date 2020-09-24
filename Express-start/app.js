const path = require('path')
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const multer = require("multer");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session");
const consolidate = require("consolidate");
const logger = require("morgan");
const createError = require("http-errors");
const secret = 'jfkdsljflksjdlkfjlsdfj'
const keys = ['jfkldsjfsdf', 'fdsjfksldafjljslkdf', 'jkfodsjkfslaflsaljfkl']
const router = require('./routes')

app.use(logger("dev"));

app.use(bodyParser.urlencoded({
  extended: false
}))
app.use('/upload', multer({
  dest: path.resolve(__dirname, './public/upload')
}).any())

app.use(cookieParser(secret))
app.use(cookieSession({
  keys,
  maxAge: 3600 * 24 * 1000
}))

// engine
app.set('views', path.resolve(__dirname, './views'))
app.set('view engine', 'ejs')
app.engine('ejs', consolidate.ejs)


router(app)


// 404
app.use((req, res, next) => {
  next(createError(404));
});

// 异常处理
app.use((err, req, res, next) => {
  app.locals.message = err.message;
  app.locals.err = app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});

app.listen(3000);