"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _playerControllers = require("../controllers/playerControllers.js");
var routes = function routes(app) {
  app.route('/players').get(_playerControllers.getPlayers).post(_playerControllers.addNewPlayer);
  app.route('/player/:PlayerId').get(_playerControllers.getPlayerWithID).put(_playerControllers.updatePlayerById)["delete"](_playerControllers.deletePlayerById);
};
var _default = exports["default"] = routes;