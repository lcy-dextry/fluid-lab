import { legacy_createStore as createStore } from 'redux';
import allReducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(allReducers, composeWithDevTools())
// process.env.NODE_ENV === 'development'
//     ? createStore(allReducers, composeWithDevTools())
//     : createStore(allReducers);
export default store;
