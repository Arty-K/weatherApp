import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import OrganisationSearch from './components/Search/OrganisationSearch';
import OrganisationPage from './components/Organisation/OrganisationPage/OrganisationPage';
import UserPage from './components/User/UserPage/UserPage';
import './main.scss';

import getSearchResult from './services/getSearchResult';
import fetchOrgs from './services/fetchOrgs';
import fetchUsers from './services/fetchUsers';
import fetchCollaborators from './services/fetchCollaborators';
import fetchFollowers from './services/fetchFollowers';
import fetchFollowing from './services/fetchFollowing';

import paginationClickFollowers from './services/paginationClickFollowers';
import paginationClickFollowing from './services/paginationClickFollowing';
import paginationClickOrgs from './services/paginationClickOrgs';
import paginationClickUsers from './services/paginationClickUsers';
import paginationClickCollaborators from './services/paginationClickCollaborators';
import getOrganisationInfo from './services/getOrganisationInfo';
import getUserInfo from './services/getUserInfo';

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
        this.getSearchResult = getSearchResult.bind(this);
        this.fetchOrgs = fetchOrgs.bind(this);
        this.fetchUsers = fetchUsers.bind(this);
        this.fetchCollaborators = fetchCollaborators.bind(this);
        this.fetchFollowers = fetchFollowers.bind(this);
        this.fetchFollowing = fetchFollowing.bind(this);
        this.paginationClickOrgs = paginationClickOrgs.bind(this);
        this.paginationClickUsers = paginationClickUsers.bind(this);
        this.paginationClickCollaborators = paginationClickCollaborators.bind(this);
        this.paginationClickFollowers = paginationClickFollowers.bind(this);
        this.paginationClickFollowing = paginationClickFollowing.bind(this);
        this.getOrganisationInfo = getOrganisationInfo.bind(this);
        this.getUserInfo = getUserInfo.bind(this);

        return(
            <Router>
                <Switch>
                    <Route path = {'/'} exact render = { props =>
                        <OrganisationSearch
                            inputValue = { this.state.inputValue }
                            activePage = { this.state.activePage }
                            onSearchChange = { this.onSearchChange }
                            getSearchResult = { this.getSearchResult }
                            organisationList = { this.state.organisationList }
                            isLoading = { this.state.isLoading }

                            paginationClickOrgs = {this.paginationClickOrgs}
                            getOrganisationInfo = { this.getOrganisationInfo }

                            validated = { this.state.validated }
                            handleSubmit = { this.handleSubmit}
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
                            getUserInfo = {this.getUserInfo}

                            paginationClickUsers = {this.paginationClickUsers}
                            paginationClickCollaborators = {this.paginationClickCollaborators}

                            {...props}
                        />}
                    />
                    <Route path = {`/user/:id`} render = { props =>
                        <UserPage
                            currentUser = { this.state.currentUser }
                            followersList = { this.state.followersList }
                            followingList = { this.state.followingList }

                            paginationClickFollowers = {this.paginationClickFollowers}
                            paginationClickFollowing = {this.paginationClickFollowing}
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