const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const secret = "abcdefg...";

// secret is string or array
app.use(cookieParser(secret));

// set cookie
app.use("/set", (req, res) => {
  res.cookie("username", "tony", {
    maxAge: 30 * 1000,
  });
  // 签名
  res.cookie("job", "test", { signed: true });
  res.end("set ok");
});

// get cookie
app.use("/get", (req, res) => {
  const { username } = req.cookies;
  const { job } = req.signedCookies;
  res.end(`welcome come: ${username}, job: ${job}`);
});

app.listen(3000);
