import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter } from 'react-router-dom'



import App from './components/app';
import Car from './components/car';


ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route exact path='/' component={App}></Route>
            <Route path='/car/:id' component={Car}></Route>
        </div>
    </BrowserRouter>
, document.getElementById('root'));

