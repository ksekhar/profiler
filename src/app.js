// import profilerApp from './reducers'
let { createStore } = require('redux');
let { profilerApp } = require('./reducers/index');
let store = createStore(profilerApp);
console.log('Initial State:');
console.log(store.getState());
