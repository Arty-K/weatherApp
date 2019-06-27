import React from 'react';
import PropTypes from 'prop-types';
import { Container, ListGroup } from 'react-bootstrap';
import OrganisationHeader from './OrganisationHeader';
import OrganisationBody from './OrganisationBody';
import UsersList from '../../User/UserPage/UsersList';
import Spinner from '../../spinner/Spinner';


const OrganisationPage = ( props ) => {
        const {
            name,
            avatar_url,
            blog,
            location,
            type
        } = props.currentOrganisation;
        const {
            membersList,
            collaboratorsList,
            isLoading,
            paginationClickUsers,
            paginationClickCollaborators,
            activePage,
            getUserInfo,
            accordionClick
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
                                membersList = { membersList }
                                collaboratorsList = { collaboratorsList }
                                paginationClickUsers = { paginationClickUsers }
                                paginationClickCollaborators = { paginationClickCollaborators }
                                activePage = { activePage }
                                getUserInfo = { getUserInfo }
                                accordionClick = { accordionClick }
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


OrganisationPage.propTypes = {
    name: PropTypes.string,
    avatar_url: PropTypes.string,
    blog: PropTypes.string,
    type: PropTypes.number,
    membersList: PropTypes.array,
    collaboratorsList: PropTypes.array,
    isLoading: PropTypes.bool,
};


export default OrganisationPage;