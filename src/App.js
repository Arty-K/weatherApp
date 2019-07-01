import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import OrganisationSearch from './components/Search/OrganisationSearch';
import OrganisationPage from './components/Organisation/OrganisationPage/OrganisationPage';
import UserPage from './components/User/UserPage/UserPage';
import './main.scss';
import getSearchResult from './services/getSearchResult';


export default class App extends Component {
    state = {
        inputValue:'',
        error: null,
        isLoading: true,
        activePage: '1',
        organisationList: {},
        currentOrganisation: {},
        membersList: [],
        collaboratorsList:[],
        followersList:[],
        followingList:[],
        followersLinks:{},
        followingLinks:{},
        currentUser: {},
        orgsLinks: {},
        usersLinks:{},
        collaboratorsLinks:{},
        validated: false
    };

    handleSubmit(event) {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        this.setState({validated: true})
    }

    onSearchChange = ( event ) => {
        const inputValue = event.target.value;
        this.setState({ inputValue });
    };

    render() {
        return(
            <Router>
                <Switch>
                    <Route path = {'/'} exact render = { props =>
                        <OrganisationSearch
                            inputValue = { this.state.inputValue }
                            activePage = { this.state.activePage }
                            onSearchChange = { this.onSearchChange }
                            organisationList = { this.state.organisationList }
                            isLoading = { this.state.isLoading }
                            validated = { this.state.validated }
                            handleSubmit = { this.handleSubmit}
                            getSearchResult = {getSearchResult}
                            {...props}
                        />}
                    />
                    <Route path = {'/organisation/:id'} render = { props =>
                        <OrganisationPage
                            currentOrganisation = { this.state.currentOrganisation }
                            membersList = { this.state.membersList }
                            collaboratorsList = { this.state.collaboratorsList }
                            error={ this.state.error }
                            isLoading = {this.state.isLoading}
                            activePage = { this.state.activePage }
                            {...props}
                        />}
                    />
                    <Route path = {`/user/:id`} render = { props =>
                        <UserPage
                            currentUser = { this.state.currentUser }
                            followersList = { this.state.followersList }
                            followingList = { this.state.followingList }
                            activePage = { this.state.activePage }
                            isLoading = {this.state.isLoading}
                            {...props}
                        />}
                    />
                    <Redirect to='/' />
                </Switch>
            </Router>
        )
    }
}