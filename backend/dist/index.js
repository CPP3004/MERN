"use strict";

var _express = _interopRequireDefault(require("express"));
var _mongoose = _interopRequireDefault(require("mongoose"));
var _bodyParser = _interopRequireDefault(require("body-parser"));
var _cors = _interopRequireDefault(require("cors"));
var _soccerRoutes = _interopRequireDefault(require("./routes/soccerRoutes"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var app = (0, _express["default"])();
var PORT = 4000;

// mongo connection
_mongoose["default"].Promise = global.Promise;
_mongoose["default"].connect('mongodb://localhost/soccerDB');
_mongoose["default"].set('debug', true);

// bodyparser setup
app.use(_bodyParser["default"].urlencoded({
  extended: true
}));
app.use(_bodyParser["default"].json());

// CORS setup
app.use((0, _cors["default"])());
(0, _soccerRoutes["default"])(app);
app.get('/', function (req, res) {
  return res.send("Our Soccer application is running on port ".concat(PORT));
});
app.listen(PORT, function () {
  return console.log("Your soccer server is running on port ".concat(PORT));
});