// import profilerApp from './reducers'
const { createStore } = require('redux');
const { profilerApp } = require('./reducers/index');
const store = createStore(profilerApp);
console.log('Initial State:');
console.log(store.getState());
