import {applyMiddleware, legacy_createStore as createStore } from 'redux'
import reducer  from './reducer'
import { combineReducers } from 'redux'
import counterreducer from './counter/reducer';
import authorisereducer from './authorization/reducer';
import categoryreducer from './category/reducer';
import thunk from 'redux-thunk';


const rootreducer = combineReducers({counterreducer,reducer,authorisereducer,categoryreducer})


let store = createStore(rootreducer,applyMiddleware(thunk))


export default store    