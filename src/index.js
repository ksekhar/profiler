import profilerApp from './reducers';
import { createStore } from 'redux';
import ProfileFilter from './actions';
// const { createStore } = require('redux');
// const { profilerApp } = require('./reducers');
const store = createStore(profilerApp);
console.log('Initial State:');
console.log(store.getState());
store.dispatch({type: ProfileFilter.BY_SKILLS, payload: ['ruby']})
