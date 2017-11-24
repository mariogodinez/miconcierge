import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';
import App from './App';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Reservations from './components/Reservations'
import ReservationView from './components/ReservationView'

import Inbox from './components/Inbox'


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render( <Router path="/" history={ browserHistory }>
    <Route path="/login" component={ Login } />
    <Route path="/dashboard" component={ Dashboard } />
    <Route path="/reservations" component={ Reservations } />
    <Route path="/reservation-view" component={ ReservationView } />
    <Route path="/inbox" component={ Inbox } />

</Router>, document.getElementById('root'));
registerServiceWorker();
