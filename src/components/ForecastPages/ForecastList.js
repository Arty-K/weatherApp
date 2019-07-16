import React from 'react';
import PropTypes from 'prop-types';
import {
    Col,
    Row,
    Accordion,
    Card
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CurrentForecast from './CurrentForecast';
import Spinner from '../spinner/Spinner';


const ForecastList = (props) => {
        const {
            isLoading,
            currentDay,
            currentData,
            forecastData,
        } = props;

        let city;
            if (props.city === undefined) {
                city = 0;
            } else {
                city = props.city
            }
        return (
                <>
                    <Row >
                        <Col className = 'text-center'>
                            <h5>search result</h5>
                        </Col>
                    </Row>
                    {(!isLoading) ? (
                        <Row>
                            <Accordion style = {{ width: '100%'}}>
                                <Card style = {{ marginLeft: '15px', marginRight: '15px' }}>
                                    <Accordion.Toggle
                                        as = { Card.Header }
                                        eventKey = "0"
                                    >
                                        <p>
                                            {`${ currentData[city].name },
                                            ${ currentData[city].sys.country }
                                              - ${currentData[city].weather[0].description},
                                               ${currentData[city].main.temp}`
                                            } &#8451;
                                        </p>
                                        <p>(click to show today forecast)</p>
                                    </Accordion.Toggle>
                                    <Accordion.Collapse eventKey="0">
                                        <Row>
                                            <CurrentForecast
                                                forecastData = { forecastData }
                                                currentData = { currentData }
                                                currentDay = { currentDay }
                                                isLoading = { isLoading }
                                                city = { city }
                                            />
                                        </Row>
                                    </Accordion.Collapse>
                                </Card>
                                <Card style = {{ marginLeft: '15px', marginRight: '15px' }}>
                                    <Accordion.Toggle as={Card.Header} eventKey="1">
                                        <Link to = {`/forecast/${ currentData[city].name }`}>
                                            <p>
                                                click to show extended forecast...
                                            </p>
                                        </Link>
                                    </Accordion.Toggle>
                                </Card>
                            </Accordion>
                        </Row>
                    ) : (
                    <Spinner/>
                    )}
                </>
            )
};
ForecastList.propTypes = {
    isLoading: PropTypes.bool,
    error: PropTypes.bool,
    city: PropTypes.number,
    currentDay: PropTypes.number,
    currentData: PropTypes.array,
    forecastData: PropTypes.array,

};


export default ForecastList;