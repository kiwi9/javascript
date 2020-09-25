const express = require("express");
const app = express();
const settings = require("./middlewares/settings");

settings(app);

app.listen(3000);
