import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastList from '../ForecastPages/ForecastList';
import { connect } from 'react-redux';
import { getSearchResult } from '../../store/actions/getSearchResult';
import { onHistoryClick } from '../../store/actions/onHistoryClick';
import {
    Container,
    Row,
    Col,
    InputGroup,
    Button,
    Form,
    Jumbotron,
    Alert
} from 'react-bootstrap';


class ForecastSearch extends Component {
    state = {
         inputValue: ''
    };

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.getSearchResult(this.state.inputValue);
    };

    onSearchChange = ( event ) => {
        this.setState({ inputValue : event.target.value });
    };

    render(){
        const { 
            isLoading,
            city,
            error,
            forecastData,
            currentData,
            currentDay,
            duplicateRequestMessage,
            inputArray,
            errorCode,
            errorMessage
        } = this.props;

        return(
        <>
            <Container>
                <Jumbotron fluid>
                    {(!errorCode && !errorMessage) ? (
                        <>
                            <Row className = 'pt-5 pb-2'>
                                <Col/>
                                <Col xs = {10}>
                                    <Form onSubmit = { e => this.handleSubmit(e)} >
                                        <Form.Group>
                                            <InputGroup className = 'mb-2'>
                                                <Form.Control
                                                    size = 'lg'
                                                    type = 'text'
                                                    pattern = '[A-Za-z].{1,}'
                                                    title = 'please enter only valid city name in english'
                                                    placeholder = 'type city name here'
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
                            <Row className="py-3">
                                <Col/>
                                <Col xs = {10}>
                                    {(duplicateRequestMessage) ? (
                                        <Alert variant='danger'>you are trying to request same city</Alert>
                                    ) : (
                                        null
                                    )}
                                </Col>
                                <Col/>
                            </Row>
                            <Row className="py-3">
                                <Col/>
                                <Col xs = {10}>
                                    {(!isLoading && inputArray.length !== 0) ? (
                                        <>
                                            <h5 className = 'text-center'>your input history</h5>
                                            {inputArray.map(item =>
                                                <Alert
                                                    key = { item }
                                                    variant='dark'
                                                    onClick = {()=>this.props.onHistoryClick(item)}
                                                >
                                                    { item } - click to show forecast again
                                                </Alert>
                                            )}
                                        </>
                                    ) : (
                                        null
                                    )}
                                </Col>
                                <Col/>
                            </Row>
                            <Row className = 'py-3'>
                                <Col/>
                                <Col xs = {10}>
                                    {(!isLoading && Object.entries(currentData).length !== 0) ? (
                                        <>
                                            <ForecastList
                                                currentData = { currentData }
                                                forecastData = { forecastData }
                                                currentDay = { currentDay }
                                                isLoading = { isLoading }
                                                error = { error }
                                                city = { city }
                                            />
                                        </>
                                    ) : (
                                        <h5 className='text-center'>type city name to input field and click 'search' button</h5>
                                    )}
                                </Col>
                                <Col/>
                            </Row>


                        </>
                        ) : (
                        <>
                            <Alert variant="danger">
                                <Alert.Heading>error</Alert.Heading>
                                <p>
                                    error occured with code { errorCode } and message {errorMessage}
                                </p>
                                <hr />
                                <p className="mb-0">
                                    please try to refresh the page and search again
                                </p>
                            </Alert>
                        </>
                    )}

                </Jumbotron>
            </Container>
        </>
        )
    }

}
const mapStateToProps = ( state ) => {
    return {
        inputValue: state.inputValue,
        inputArray : state.inputArray,
        duplicateRequestMessage: state.duplicateRequestMessage,
        isLoading: state.isLoading,
        currentDay: state.currentDay,
        forecastData: state.forecastData,
        currentData: state.currentData,
        errorCode: state.errorCode,
        errorMessage: state.errorMessage,
        city: state.city
    }
};
const mapDispatchToProps = ( dispatch ) => {
    return {
        getSearchResult: (value) => dispatch(getSearchResult(value)),
        onHistoryClick: (item) => dispatch(onHistoryClick(item)),
    }
};
ForecastSearch.propTypes = {
    isLoading: PropTypes.bool,
    error: PropTypes.bool,
    forecastData: PropTypes.array,
    currentData: PropTypes.array,
    getOrganisation: PropTypes.func,
    currentDay: PropTypes.number,
    duplicateRequestMessage: PropTypes.bool,
    inputArray: PropTypes.array
};


export default connect(mapStateToProps,mapDispatchToProps)(ForecastSearch)