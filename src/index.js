import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
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
import { createHttpLink } from 'apollo-link-http';
import { ApolloLink } from 'apollo-link';
import { InMemoryCache } from 'apollo-cache-inmemory';

class Root extends Component {

    constructor(props) {
        super(props)
        this.state = {
            client: null
        }
    }

    componentWillMount() {
        this.createApolloClient()
            .then(client => this.setState({ client: client }))
            .catch(console.log)
    }

    async createApolloClient() {
        const { data } = await axios('https://yucatanmic.herokuapp.com/graphiql')
        const tokenIndex = data.search('X-CSRF-Token')
        const token = data.substring((tokenIndex + 16), (tokenIndex + 104))
        
        const httpLink = createHttpLink({
            uri: 'https://yucatanmic.herokuapp.com/graphql',
            fetcherOptions: { method: 'POST' },
            credentials: 'same-origin',
            headers: {
                'X-CSRF-Token': token
            }
        })
    
        const logger = new ApolloLink((operation, forward) => {
            console.log(operation.operationName)
            return forward(operation).map((result) => {
                console.log(result)
                console.log(`received result from ${operation.operationName}`)
                return result
            })
        })
    
        const link = logger.concat(httpLink)
    
        return new ApolloClient({
            link,
            cache: new InMemoryCache()
        })
    }

    render() {
        console.log(this.state)

        const { client } = this.state
        return (
            client ?
            <ApolloProvider client={client}>
                <Router path="/" history={browserHistory}>
                    <div>
                        <Route path="/login" component={Login} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/reservations" component={Reservations} />
                        <Route path="/reservation-view" component={ReservationView} />
                        <Route path="/products" component={Products} />
                        <Route path="/product-view" component={ProductView} />
                        <Route path="/settings" fuchia="true" component={Settings} />
                        <Route path="/workers" fuchia="true" component={Workers} />
                        <Route path="/inbox" component={Inbox} />
                    </div>
                </Router>
            </ApolloProvider>
            : <div></div>
        )
    }
}


ReactDOM.render(
    <Root />
    , document.getElementById('root'));
registerServiceWorker();
