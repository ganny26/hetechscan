import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'
import { createStore,combineReducers } from 'redux';

ReactDOM.render(<BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();


const userReducer = ((state={},action) => {
    switch(action.type){
        case 'CHANGE_NAME':
        state = {...state,name:action.payload}
        break;
        case 'CHANGE_AGE':
        state = {...state,age:action.payload}
        break;
    }
    return state;
})

const tweetReducer = ((state=[{}],action) => {
    return state;
})

const reducers = combineReducers({
    user:userReducer,
    tweets:tweetReducer
})
const Store = createStore(reducers)

Store.subscribe(()=>{
    console.log("store changed",Store.getState())
})


Store.dispatch({"type":"CHANGE_NAME","payload":"MAX"});
Store.dispatch({"type":"CHANGE_AGE","payload":"24"});
Store.dispatch({"type":"CHANGE_NAME","payload":"STEVE"});
Store.dispatch({"type":"CHANGE_NAME","payload":"45"});
