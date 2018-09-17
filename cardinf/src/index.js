import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import promiseMiddleware from 'redux-promise' 
import reducers from './reducers'



import './app.css'
import App from './components/app';
import Car from './components/car';
const createStorewithMiddleware = applyMiddleware(promiseMiddleware)(createStore) 

ReactDOM.render(
    <Provider store={createStorewithMiddleware(reducers)}>
    <BrowserRouter>
        <div>
            <Route exact path='/' component={App}></Route>
            <Route path='/car/:id' component={Car}></Route>
        </div> 
    </BrowserRouter>
    </Provider >
, document.getElementById('root'));

