import React from 'react';
import PropTypes from 'prop-types';
import { Container, Image, ListGroup } from 'react-bootstrap';
import Spinner from '../../spinner/Spinner';
import FollowersList from "./FollowersList";


const UserPage = ( props ) => {
    const {
        login,
        avatar_url,
        blog,
        followers,
        following,
        name,
        location
    } = props.currentUser;
    const {
        isLoading,
        followersList,
        followingList,
        activePage
    } = props;
        return(
            <>
                { !isLoading ? (
                    <Container>
                            <ListGroup.Item className = 'text-center'>
                                <h3 className = 'text-truncate'>
                                    { login }
                                </h3>
                                <Image
                                    src = { avatar_url }
                                    className = 'organisationAvatar'
                                    alt = 'organisation img'
                                    thumbnail
                                />
                            </ListGroup.Item>
                            { name ? (
                                <ListGroup.Item>
                                    <p className = 'text-truncate'>
                                        name - { name }
                                    </p>
                                </ListGroup.Item>
                            ) : ( null )
                            }
                            { blog ? (
                                <ListGroup.Item>
                                    <p className = 'text-truncate'>
                                        blog - { blog }
                                    </p>
                                </ListGroup.Item>
                            ) : ( null )
                            }
                            { location ? (
                                <ListGroup.Item>
                                    <p className = 'text-truncate'>
                                        location - { location }
                                    </p>
                                </ListGroup.Item>
                            ) : ( null )
                            }
                            <FollowersList
                                login = { login }
                                followers = { followers }
                                following = { following }
                                followersList = { followersList }
                                followingList = { followingList }
                                activePage = { activePage }
                            />
                    </Container>
                    ) : ( <Spinner/> )
                }
            </>
        )
};


UserPage.propTypes = {
    login: PropTypes.string,
    avatar_url: PropTypes.string,
    blog: PropTypes.string,
    followers: PropTypes.number,
    following: PropTypes.number,
    name: PropTypes.string,
    isLoading: PropTypes.bool
};


export default UserPage;