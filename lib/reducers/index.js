'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function profilerApp() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _api2.default;
  var action = arguments[1];

  switch (action.type) {
    case 'BY_SKILLS':
      return Object.assign({}, state, {
        filteredProfileIds: action.payload
      });
    default:
      return state;
  }
} // import { combineReducers } from 'redux';
// const { ProfileFilter } = require('../actions');
exports.default = profilerApp;