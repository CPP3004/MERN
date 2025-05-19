"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.PlayerSchema = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
var Schema = _mongoose["default"].Schema;
var PlayerSchema = exports.PlayerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phone: {
    type: String
  },
  iscoach: {
    type: Boolean,
    "default": false
  },
  team: {
    type: String
  },
  speed: {
    type: Number,
    "enum": [1, 2, 3]
  },
  strength: {
    type: Number,
    "enum": [1, 2, 3]
  },
  endurance: {
    type: Number,
    "enum": [1, 2, 3]
  },
  ability: {
    type: Number,
    "enum": [1, 2, 3]
  },
  techniques: {
    type: Number,
    "enum": [1, 2, 3]
  },
  tactical: {
    type: Number,
    "enum": [1, 2, 3]
  },
  created_date: {
    type: Date,
    "default": Date.now
  }
});