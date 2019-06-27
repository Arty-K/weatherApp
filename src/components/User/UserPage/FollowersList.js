import React from 'react';
import PropTypes from 'prop-types';
import { Accordion, Card } from 'react-bootstrap';
import Followers from './Followers';
import Following from './Following';



const FollowersList = (
    {
        followers,
        following,
        followersList,
        followingList,
        paginationClickFollowers,
        paginationClickFollowing,
        activePage
    }) => {
        return (
            <>
                    <Accordion>
                        <Card>
                            <Accordion.Toggle as = { Card.Header } eventKey = '0'>
                                <p>
                                    click to show all user followers ({ followers })
                                </p>
                            </Accordion.Toggle>
                        </Card>
                        <Accordion.Collapse eventKey = '0'>
                            <Card.Body>
                                <Followers
                                    followersList = { followersList }
                                    paginationClickFollowers = { paginationClickFollowers }
                                    activePage ={ activePage }
                                />
                            </Card.Body>
                        </Accordion.Collapse>
                        <Card>
                            <Accordion.Toggle as = { Card.Header } eventKey = '1'>
                                <p>
                                    click to show all user followings ({ following })
                                </p>
                            </Accordion.Toggle>
                        </Card>
                        <Accordion.Collapse eventKey = '1'>
                            <Card.Body>
                                <Following
                                    followingList = { followingList }
                                    paginationClickFollowing = { paginationClickFollowing }
                                    activePage ={ activePage }
                                />
                            </Card.Body>
                        </Accordion.Collapse>
                    </Accordion>
            </>
    )
};


FollowersList.propTypes = {
    followersList: PropTypes.array,
    followingList: PropTypes.array,
    getUserInfo: PropTypes.func,
    paginationClickFollowers : PropTypes.func,
    paginationClickFollowing : PropTypes.func,
    activePage : PropTypes.string,
};


export default FollowersList;