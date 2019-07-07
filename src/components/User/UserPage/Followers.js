import React from 'react';
import PropTypes from 'prop-types';
import { Col, Image, Row } from 'react-bootstrap';
import PaginationButtons from "../../Pagination/PaginationButtons";


const Followers = ({ followersList, followersLinks ,activePage, paginationClickFollowers }) => {
    return(
        <>
            {followersList.map((item) =>
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
                        <Col xs = {8} className='d-flex align-items-center'>
                            <h5 >
                                { item.login }
                            </h5>
                        </Col>
                    </Row>
                </div>
            )}
            {(followersList.length > 29) ?
                (
                    <PaginationButtons
                        method = { paginationClickFollowers }
                        activePage = { activePage }
                        links = { followersLinks }
                    />
                ) : (null)
            }
        </>

    )
};


Followers.propTypes = {
    followersList : PropTypes.array,
    paginationClickFollowers : PropTypes.func,
    activePage : PropTypes.string
};


export default Followers;
