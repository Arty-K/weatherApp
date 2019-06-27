import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';


const PaginationButtons = ({ method, activePage }) => {
    return(
        <>
            <Pagination
                size='lg'
                block='true'
            >
                <Pagination.First onClick = {() => method('first')}>
                    <span className='px-2'>
                        first
                    </span>
                </Pagination.First>
                <Pagination.Prev onClick = {() => method('prev')}>
                    <span className='px-2'>
                        prev
                    </span>
                </Pagination.Prev>
                <Pagination.Item active>
                    <span className='px-2'>
                        {activePage}
                    </span>
                </Pagination.Item>
                <Pagination.Next onClick = {() => method('next')}>
                    <span className='px-2'>
                        next
                    </span>
                </Pagination.Next>
                <Pagination.Last onClick = {() => method('last')}>
                    <span className='px-2'>
                        last
                    </span>
                </Pagination.Last>
            </Pagination>
        </>
    )
};


PaginationButtons.propTypes = {
    organisationList: PropTypes.array,
    activePage: PropTypes.string,
    prop: PropTypes.func,
};


export default PaginationButtons;
