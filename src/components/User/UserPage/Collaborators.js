import React from 'react';
import PropTypes from 'prop-types';
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PaginationButtons from "../../Pagination/PaginationButtons";
import { paginationClickCollaborators } from '../../../services/paginationServices';
import getUserInfo from '../../../services/getUserInfo';


const Collaborators = ({ collaboratorsList, activePage }) => {
    return (
        <>
            {collaboratorsList.map((item) =>
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
                                        <Link to = {`/user/${ item.login }`}>
                                            <h5 onClick = {() => getUserInfo( item.login )}>
                                                { item.login } - show user info
                                            </h5>
                                        </Link>
                                    </li>
                                    <li>
                                        <span className='text-truncate'>
                                            {`user has ${ item.followers_url.length } followers `}
                                            <a href={ item.followers_url }>- show</a>
                                        </span>
                                    </li>
                                    <li>
                                        <span className='text-truncate'>
                                            {`user has ${ item.subscriptions_url.length } subscriptions `}
                                            <a href={ item.subscriptions_url }>- show</a>
                                        </span>
                                    </li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
            )}
            {(collaboratorsList.length > 29) ?
                (
                    <PaginationButtons
                        method = { paginationClickCollaborators }
                        activePage={ activePage }
                    />
                ) : (null)
            }
        </>
    )
};


Collaborators.propTypes = {
    collaboratorsList : PropTypes.array,
    paginationClickCollaborators : PropTypes.func,
    activePage : PropTypes.string
};


export default Collaborators;