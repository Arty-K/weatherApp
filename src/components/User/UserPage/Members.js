import React from 'react';
import PropTypes from 'prop-types';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PaginationButtons from "../../Pagination/PaginationButtons";


const Members = ({ usersList, usersLinks, activePage, getUserInfo, paginationClickUsers }) => {
    return(
        <>
            {usersList.map((item) =>
                    <div key = { item.id }>
                        <Row className = 'py-3'>
                            <Col xs = {3} className = 'text-center'>
                                <Image
                                    src = { item.avatar_url }
                                    className = 'userAvatar'
                                    alt = ''
                                    rounded
                                />
                            </Col>
                            <Col xs = {8}>
                                <ul>
                                    <li>
                                        <Link to = { `/user/${ item.login }` }>
                                            <h5 onClick = {() => getUserInfo( item.login )}>
                                                { item.login } - show user info
                                            </h5>
                                        </Link>
                                    </li>
                                    <li>
                                        <span
                                            className = 'text-truncate'
                                            onClick = {() => getUserInfo( item.login )}
                                        >
                                            <Link to = { `/user/${ item.login }` }>
                                                show followers
                                            </Link>
                                        </span>
                                    </li>
                                    <li>
                                        <span
                                            className = 'text-truncate'
                                            onClick = {() => getUserInfo( item.login )}
                                        >
                                            <Link to = { `/user/${ item.login }` }>
                                                show subscriptions
                                            </Link>
                                        </span>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                )}
                {(usersList.length > 29) ?
                    (
                        <PaginationButtons
                            method = { paginationClickUsers }
                            activePage = { activePage }
                            links = { usersLinks }
                        />
                    ) : (null)
                }
        </>

    )
};

Members.propTypes = {
    usersList : PropTypes.array,
    paginationClickUsers : PropTypes.func,
    activePage : PropTypes.string
};


export default Members;
