import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import OrganisationSearch from './components/Search/OrganisationSearch';
import OrganisationPage from './components/Organisation/OrganisationPage/OrganisationPage';
import UserPage from './components/User/UserPage/UserPage';
import './main.scss';


export default class App extends Component {
    render() {
        return(
            <Router>
                <Switch>
                    
                    <Route path = {'/'} exact
                           render = { () => <OrganisationSearch/>}
                    />
                    <Route path = {'/organisation/:id'}
                           render = { () => <OrganisationPage/>}
                    />
                    <Route path = {`/user/:id`}
                           render = { () => <UserPage/>}
                    />
                    <Redirect to='/' />
                </Switch>
            </Router>
        )
    }
}