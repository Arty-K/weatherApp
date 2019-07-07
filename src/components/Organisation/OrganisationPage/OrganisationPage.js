import React from 'react';
import PropTypes from 'prop-types';
import { Container, ListGroup } from 'react-bootstrap';
import OrganisationHeader from './OrganisationHeader';
import OrganisationBody from './OrganisationBody';
import UsersList from '../../User/UserPage/UsersList';
import Spinner from '../../spinner/Spinner';

import { connect } from 'react-redux';
import { getUserInfo } from "../../../store/actions/getUserInfo";
import { paginationClickUsers } from '../../../store/actions/pagination';


const OrganisationPage = ( props ) => {
        const {
            name,
            avatar_url,
            blog,
            location,
            type
        } = props.currentOrganisation;
        const {
            usersList,
            usersLinks,
            collaboratorsList,
            collaboratorsLinks,
            isLoading,
            activePage,
            getUserInfo,
            paginationClickUsers,
            paginationClickCollaborators
        } = props;
        return(
            <>
                { !isLoading ? (
                    <Container>
                        <ListGroup>
                            <OrganisationHeader
                                name = { name }
                                avatarUrl = { avatar_url }
                            />
                            <OrganisationBody
                                location = { location }
                                type = { type }
                                blog = { blog }
                            />
                            <UsersList
                                usersList = { usersList }
                                usersLinks = { usersLinks }
                                collaboratorsList = { collaboratorsList }
                                collaboratorsLinks = { collaboratorsLinks }
                                activePage = { activePage }
                                isLoading = { isLoading }
                                getUserInfo = { getUserInfo }
                                paginationClickUsers = { paginationClickUsers }
                                paginationClickCollaborators = { paginationClickCollaborators }
                            />
                        </ListGroup>
                    </Container>
                    ) : (
                        <Spinner/>
                    )
                }
            </>
        )
};

const mapStateToProps = ( state ) => {
    return {
        currentOrganisation: state.currentOrganisation,
        usersList: state.usersList,
        usersLinks: state.usersLinks,
        collaboratorsList: state.collaboratorsList,
        collaboratorsLinks: state.collaboratorsLinks,
        isLoading: state.isLoading,
        activePage: state.activePage,
    }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        getUserInfo: (userName) => dispatch(getUserInfo(userName)),
        paginationClickUsers: (userName) => dispatch(paginationClickUsers(userName))
    }
};

OrganisationPage.propTypes = {
    name: PropTypes.string,
    avatar_url: PropTypes.string,
    blog: PropTypes.string,
    type: PropTypes.number,
    usersList: PropTypes.array,
    collaboratorsList: PropTypes.array,
    isLoading: PropTypes.bool,
};


export default connect(mapStateToProps, mapDispatchToProps)(OrganisationPage);