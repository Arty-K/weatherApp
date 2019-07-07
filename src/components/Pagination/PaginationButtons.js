import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'react-bootstrap';


const PaginationButtons = ({ method, activePage, links }) => {
    return(
        <>
            <Pagination
                size='lg'
                block='true'
            >
                <Pagination.First
                    disabled = {!links.first}
                    onClick = {() => method('first')}
                >
                    <span className='px-2'>
                        first
                    </span>
                </Pagination.First>
                <Pagination.Prev
                    disabled = {!links.prev}
                    onClick = {() => method('prev')}
                >
                    <span className='px-2'>
                        prev
                    </span>
                </Pagination.Prev>
                <Pagination.Item active>
                    <span className='px-2'>
                        {activePage}
                    </span>
                </Pagination.Item>
                <Pagination.Next
                    disabled = {!links.next}
                    onClick = {() => method('next')}
                >
                    <span className='px-2'>
                        next
                    </span>
                </Pagination.Next>
                <Pagination.Last
                    disabled = {!links.last}
                    onClick = {() => method('last')}
                >
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
