import profilerApp from './reducers';
import { createStore } from 'redux';
// const { createStore } = require('redux');
// const { profilerApp } = require('./reducers');
const store = createStore(profilerApp);
console.log('Initial State:');
console.log(store.getState());
