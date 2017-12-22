import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';
import App from './App';
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Reservations from './components/Reservations'
import ReservationView from './components/ReservationView'
import Products from './components/Products'
import ProductView from './components/ProductView'
import Settings from './components/Settings'
import Workers from './components/Workers'
import Inbox from './components/Inbox'
import registerServiceWorker from './registerServiceWorker';


import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

const client = new ApolloClient({
  link: new HttpLink( { uri: 'https://yucatanmic.herokuapp.com/graphql' } ),
  cache: new InMemoryCache()
});

ReactDOM.render( 
    <ApolloProvider client={client}>
        <Router path="/" history={ browserHistory }>
            <div>
                <Route path="/login" component={ Login } />
                <Route path="/dashboard" component={ Dashboard } />
                <Route path="/reservations" component={ Reservations } />
                <Route path="/reservation-view" component={ ReservationView } />
                <Route path="/products" component={ Products } />
                <Route path="/product-view" component={ ProductView } />
                <Route path="/settings" fuchia="true" component={ Settings } />
                <Route path="/workers" fuchia="true" component={ Workers } />
                <Route path="/inbox" component={ Inbox } />
            </div>
        </Router>
    </ApolloProvider>
, document.getElementById('root'));
registerServiceWorker();
