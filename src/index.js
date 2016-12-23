import { createStore } from 'redux';
import profilerApp from './reducers';
import bySkills from './actions';
// const { createStore } = require('redux');
// const { profilerApp } = require('./reducers');

const store = createStore(profilerApp);
console.log('Initial State:');
console.log(store.getState());
const currentState = store.getState();
store.dispatch(bySkills(currentState.skills, currentState.profileList, 'ruby'));
console.log(store.getState());
