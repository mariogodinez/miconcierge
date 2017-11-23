import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';
import App from './App';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Reservations from './components/Reservations'


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <Router path="/" history={ browserHistory }>
    <Route path="/Login" component={ Login } />
    <Route path="/dashboard" component={ Dashboard } />
    <Route path="/Reservations" component={ Reservations } />
</Router>, document.getElementById('root'));
registerServiceWorker();
