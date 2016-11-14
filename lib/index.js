'use strict';

var _reducers = require('./reducers');

var _reducers2 = _interopRequireDefault(_reducers);

var _redux = require('redux');

var _actions = require('./actions');

var _actions2 = _interopRequireDefault(_actions);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const { createStore } = require('redux');
// const { profilerApp } = require('./reducers');
var store = (0, _redux.createStore)(_reducers2.default);
console.log('Initial State:');
console.log(store.getState());
store.dispatch({ type: _actions2.default.BY_SKILLS, payload: ['ruby'] });