// import { combineReducers } from 'redux';
const { ProfileFilter } = require('../actions');
var exports = module.exports = {};
let initialState  = require('../api/state');
function profilerApp(state = initialState, action) {
  return initialState
}
exports.profilerApp = profilerApp
