const Koa = require("koa");
const app = new Koa();
const server = app.listen(8001);
const static = require("koa-static");

app.use(static(__dirname + "/client"));

const webRTC = require("webrtc.io").listen(server);
