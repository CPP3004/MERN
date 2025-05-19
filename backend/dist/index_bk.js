"use strict";

var _express = _interopRequireDefault(require("express"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
var PORT = 3000;
_mongoose["default"].Promise = global.Promise; // mongo
_mongoose["default"].connect('mongodb://localhost/soccerDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
app.use(_bodyParser["default"].urlencoded({
  extended: true
})); // bodyparser
app.use(_bodyParser["default"].json());
app.get('/', function (req, res) {
  return res.send("Our Soccer app running on port ".concat(PORT));
});
app.listen(PORT, function () {
  return console.log("Your soccer server is running: port ".concat(PORT));
});