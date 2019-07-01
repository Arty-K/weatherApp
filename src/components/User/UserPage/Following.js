import React from 'react';
import PropTypes from 'prop-types';
import { Col, Image, Row } from 'react-bootstrap';
import PaginationButtons from "../../Pagination/PaginationButtons";
import { paginationClickFollowing } from '../../../services/paginationServices';


const Following = ({ followingList, activePage }) => {
    return(
        <>
            {followingList.map((item) =>
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
                            <h5>
                                { item.login }
                            </h5>
                        </Col>
                    </Row>
                </div>
            )}
            {(followingList.length > 29) ?
                (
                    <PaginationButtons
                        method = { paginationClickFollowing }
                        activePage = { activePage }
                    />
                ) : (null)
            }
        </>

    )
};


Following.propTypes = {
    followingList : PropTypes.array,
    paginationClickUsers : PropTypes.func,
    activePage : PropTypes.string
};


export default Following;
