import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup } from 'react-bootstrap';


const OrganisationBody = ({ location, type, blog, publicRepos }) => {
    return(
        <>
            { location ? (
                <ListGroup.Item>
                    <p className = 'text-truncate'>
                        location - { location }
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
            { type ? (
                <ListGroup.Item>
                    <p className = 'text-truncate'>
                        type - { type }
                    </p>
                </ListGroup.Item>
            ) : ( null )
            }
            { publicRepos ? (
                <ListGroup.Item>
                    <p className = 'text-truncate'>
                        public repos - { publicRepos }
                    </p>
                </ListGroup.Item>
            ) : ( null )
            }
        </>
    )
};


OrganisationBody.propTypes = {
    location: PropTypes.string,
    type: PropTypes.string,
    blog: PropTypes.string,
    publicRepos: PropTypes.number
};


export default OrganisationBody;