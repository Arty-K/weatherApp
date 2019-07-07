import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PaginationButtons from '../Pagination/PaginationButtons';
import OrganisationList from '../Organisation/OrganisationPage/OrganisationList';
import { connect } from 'react-redux';
import { getSearchResult } from '../../store/actions/getSearchResult'
import { getOrganisation } from '../../store/actions/getOrganisation'
import { paginationClickOrganisation } from '../../store/actions/pagination'
import {
    Container,
    Row,
    Col,
    InputGroup,
    Button,
    Form
} from 'react-bootstrap';


class OrganisationSearch extends Component {
  state = {
      inputValue: ''
  };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.getSearchResult(this.state.inputValue)
    };

    onSearchChange = ( event ) => {
        const inputValue = event.target.value;
        console.log(inputValue+' from onSearchChange');
        this.setState({ inputValue });
    };

    render(){
        const { 
            isLoading,
            organisationList,
            activePage,
            error,
            organisationLinks,
            getOrganisation,
            paginationClickOrganisation
        } = this.props;
        return(
        <>
            <Container>
                <Row className = 'pt-5 pb-2'>
                    <Col/>
                    <Col xs = {8}>
                        <Form onSubmit = { e => this.handleSubmit(e)} >
                            <Form.Group>
                                <InputGroup className = 'mb-2'>
                                    <Form.Control
                                        size = 'lg'
                                        type = 'text'
                                        placeholder = 'type organisation name here'
                                        value = { this.state.inputValue }
                                        onChange = { this.onSearchChange }
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
                        {(!isLoading && Object.entries(organisationList).length !== 0) ? (
                            <>
                                <OrganisationList
                                    organisationList = { organisationList }
                                    isLoading = { isLoading }
                                    getOrganisation = { getOrganisation }
                                    error = { error }
                                />
                                {(organisationList.total_count > 30) ?
                                    (
                                        <PaginationButtons
                                            method = { paginationClickOrganisation }
                                            activePage = { activePage }
                                            links = { organisationLinks }
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

}

const mapStateToProps = ( state ) => {
    return {
        isLoading: state.isLoading,
        organisationList: state.organisationList,
        organisationLinks: state.organisationLinks,
        activePage: state.activePage,
        inputValue: state.inputValue,
        error: state.error,
        collaboratorsLinks: state.collaboratorsLinks,
    }
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        getSearchResult: (value) => dispatch(getSearchResult(value)),
        getOrganisation: (orgName) => dispatch(getOrganisation(orgName)),
        paginationClickOrganisation: (page) => dispatch(paginationClickOrganisation(page))
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
    getOrganisation : PropTypes.func,
    paginationClick : PropTypes.func,
    paginationClickOrgs : PropTypes.func
};


export default connect(mapStateToProps,mapDispatchToProps)(OrganisationSearch)