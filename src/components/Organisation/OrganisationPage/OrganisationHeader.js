import React from 'react';
import PropTypes from 'prop-types';
import { Image, ListGroup } from 'react-bootstrap';


const OrganisationHeader = ({ name, avatarUrl }) => {
    return(
        <>
            <ListGroup.Item className = 'text-center'>
                <h3 className = 'text-truncate'>
                    { name }
                </h3>
                <Image
                    src = { avatarUrl }
                    className = 'organisationAvatar'
                    alt = 'organisation img'
                    thumbnail
                />
            </ListGroup.Item>
        </>
    )
};


OrganisationHeader.propTypes = {
    name: PropTypes.string,
    avatarUrl: PropTypes.string,
};


export default OrganisationHeader;