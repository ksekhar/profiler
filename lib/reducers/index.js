'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _actions = require('../actions');

var _actions2 = _interopRequireDefault(_actions);

var _api = require('../api');

var _api2 = _interopRequireDefault(_api);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import { combineReducers } from 'redux';
// const { ProfileFilter } = require('../actions');
function profilerApp() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _api2.default;
  var action = arguments[1];

  switch (action.type) {
    case 'BY_SKILLS':
      return Object.assign({}, state, {
        filteredList: action.payload
      });
    default:
      return state;
  }
}
exports.default = profilerApp;