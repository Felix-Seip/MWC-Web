"use strict";

var _path = _interopRequireDefault(require("path"));

var _express = _interopRequireDefault(require("express"));

var _nodemailer = _interopRequireDefault(require("nodemailer"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var compression = require("compression");

var PORT = process.env.HTTP_PORT || 8080;
var app = (0, _express.default)();
app.use(compression());
app.use(_express.default.json({
  limit: "50mb"
}));
app.disable("x-powered-by");
app.use(_express.default.static(_path.default.join(__dirname, "client", "build")));
app.get("/", function (req, res) {
  res.send("this is the main route");
});
app.listen(PORT, function () {
  console.log("Server listening at port ".concat(PORT, "."));
});
