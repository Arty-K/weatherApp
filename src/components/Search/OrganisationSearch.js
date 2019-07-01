import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PaginationButtons from '../Pagination/PaginationButtons';
import OrganisationList from '../Organisation/OrganisationPage/OrganisationList';

import { paginationClickOrgs } from '../../services/paginationServices';

import {
    Container,
    Row,
    Col,
    InputGroup,
    Button,
    Form
} from 'react-bootstrap';


export default class OrganisationSearch extends Component {
    state = {};

    render(){
        const {
            inputValue,
            onSearchChange,
            organisationList,
            isLoading,
            getSearchResult,
            activePage
    } = this.props;
        return(
        <>
            <Container>
                <Row className = 'pt-5 pb-2'>
                    <Col/>
                    <Col xs = {8}>
                        <Form
                            onSubmit = { e => getSearchResult(e) }
                        >
                            <Form.Group>
                                <InputGroup className = 'mb-2'>
                                    <Form.Control
                                        size = 'lg'
                                        type = 'text'
                                        placeholder = 'type organisation name here'
                                        value = { inputValue }
                                        onChange = { onSearchChange }
                                        required
                                    />

                                    <InputGroup.Append>
                                        <Button
                                            type = 'submit'
                                            variant = 'primary'
                                        >
                                            SEARCH
                                        </Button>
                                    </InputGroup.Append>
                                </InputGroup>
                            </Form.Group>
                        </Form>
                    </Col>
                    <Col/>
                </Row>
                <Row className = 'py-3'>
                    <Col/>
                    <Col xs = {8}>
                        {!isLoading ? (
                            <>
                                <OrganisationList
                                    organisationList = { organisationList }
                                />
                                {(organisationList.total_count > 30) ?
                                    (
                                        <PaginationButtons
                                            method = { paginationClickOrgs }
                                            activePage = { activePage }
                                        />
                                    ) : (null)
                                }
                            </>
                        ) : (
                            <h4 className = 'text-center'>type something to input and click 'search' button</h4>
                        )}
                    </Col>
                    <Col/>
                </Row>
            </Container>
        </>
    )
    }

};


OrganisationSearch.propTypes = {
    inputValue : PropTypes.string,
    error : PropTypes.string,
    onSearchChange : PropTypes.func,
    getSearchResult : PropTypes.func,
    organisationList : PropTypes.object,
    isLoading : PropTypes.bool,
    activePage : PropTypes.string,
    getOrganisationInfo : PropTypes.func,
    paginationClick : PropTypes.func,
    paginationClickOrgs : PropTypes.func
};
