import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Card } from 'react-bootstrap';
import Members from './Members';
import Collaborators from './Collaborators';


const UsersList = (
    {
        usersList,
        usersLinks,
        collaboratorsList,
        collaboratorsLinks,
        activePage,
        getUserInfo,
        paginationClickUsers,
        paginationClickCollaborators
    }) => {
        return (
            <>
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as = { Card.Header } eventKey = '0'>
                                <p>
                                    click to show all members
                                </p>
                            </Accordion.Toggle>
                        </Card>
                        <Accordion.Collapse eventKey = '0'>
                            <Card.Body>
                                <Members
                                    usersList = { usersList }
                                    usersLinks = { usersLinks }
                                    activePage = { activePage }
                                    getUserInfo = { getUserInfo }
                                    paginationClickUsers = { paginationClickUsers }
                                />
                            </Card.Body>
                        </Accordion.Collapse>
                        <Card>
                            <Accordion.Toggle as = { Card.Header } eventKey = '1'>
                                <p>
                                    click to show all outside collaborators
                                </p>
                            </Accordion.Toggle>
                        </Card>
                        <Accordion.Collapse eventKey = '1'>
                            <Card.Body>
                                <Collaborators
                                    collaboratorsList = { collaboratorsList }
                                    collaboratorsLinks = { collaboratorsLinks }
                                    activePage = { activePage }
                                    getUserInfo = { getUserInfo }
                                    paginationClickCollaborators = { paginationClickCollaborators }
                                />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
            </>
        )
};

UsersList.propTypes = {
    usersList: PropTypes.array,
    collaboratorsList: PropTypes.array,
    getUserInfo: PropTypes.func,
    paginationClickUsers : PropTypes.func,
    paginationClickCollaborators : PropTypes.func,
    activePage : PropTypes.string,
};


export default UsersList;