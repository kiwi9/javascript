const express = require("express");
const cookieSessions = require("cookie-session");
const app = express();

const keys = ["fjslkfjsa fjsl fj ", "f dsjklf lsja;j flks"];

app.use(
  cookieSessions({
    keys,
    maxAge: 60 * 1000,
  })
);

app.use("/session", (req, res) => {
  req.session.views = (req.session.views || 0) + 1;
  res.end(req.session.views + " views");
});

app.listen(3000);
