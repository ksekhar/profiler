// import { combineReducers } from 'redux';
// const { ProfileFilter } = require('../actions');
import ProfileFilter from '../actions';
import INITIAL_STATE from '../api';

function profilerApp(state = INITIAL_STATE, action) {
  switch (action.type) {
    case ProfileFilter.BY_SKILLS:
      return state;
    default:
      return state;
  }
}
export default profilerApp;
