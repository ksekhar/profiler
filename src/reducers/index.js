// import { combineReducers } from 'redux';
// const { ProfileFilter } = require('../actions');
import INITIAL_STATE from '../api';

function profilerApp(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'BY_SKILLS':
      return Object.assign({}, state, {
        filteredProfileIds: action.payload,
      });
    default:
      return state;
  }
}
export default profilerApp;
