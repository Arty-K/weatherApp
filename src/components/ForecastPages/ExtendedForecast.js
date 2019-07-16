import React from 'react';
import PropTypes from 'prop-types';
import {
    Container,
    Jumbotron,
    Table,
    Alert
} from 'react-bootstrap';
import Spinner from '../spinner/Spinner';
import { connect } from 'react-redux';


const ExtendedForecast = ( props ) => {
        const {
            forecastData,
            currentDay,
            isLoading,
            match,
        } = props;

        let city;
            if (props.city === undefined) {
                city = 0;
            } else {
                city = props.city;
            }

        const getCurrentTime = (item) => {
            let arr = [];
                arr.push(new Date(item * 1000 ).getMonth());
                arr.push(new Date(item * 1000 ).getDate());
                arr.push(new Date(item * 1000 ).getHours());
                arr.push(new Date(item * 1000 ).getMinutes());
            return `date - ${arr[0]} / ${arr[1]},
                    time - ${arr[2]} : ${arr[3]}`;
        };

        const extendedForecast = () => {
            let i = 0,
                extendedForecast = [],
                currentForecastData = forecastData[city];

            for (i; i < currentForecastData.length; i++) {
                if ( new Date(currentForecastData[i].dt*1000).getDay() !== currentDay)
                    extendedForecast.push(currentForecastData[i])
            }
            return extendedForecast;
        };
        return(
            <>
                    <Container>
                        <Jumbotron>
                            { !isLoading ? (
                                    <>
                                        <Alert variant = 'dark'>
                                            <Alert.Link onClick = { () => props.history.goBack() }>
                                                go back
                                            </Alert.Link>
                                        </Alert>
                                        <h5 className = 'text-center'>
                                            5-day forecast for { match.params.id }
                                        </h5>
                                        <Table striped
                                               bordered
                                               hover
                                               size = "sm"
                                               style = {{ fontSize: 14 }}
                                        >
                                            <thead>
                                            <tr>
                                                <th>Time</th>
                                                <th>Temperature </th>
                                                <th>Pressure</th>
                                                <th>Humidity</th>
                                                <th>Cloudiness</th>
                                                <th>Wind speed</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            {(extendedForecast().length > 0) ? (
                                                extendedForecast().map(item =>
                                                    <tr key = { item.dt }>
                                                        <td>{ getCurrentTime(item.dt) }</td>
                                                        <td>{ item.main.temp } &#8451;</td>
                                                        <td>{ item.main.pressure } hPa</td>
                                                        <td>{ item.main.humidity } %</td>
                                                        <td>{ item.clouds.all } %</td>
                                                        <td>{ item.wind.speed } m/s</td>
                                                    </tr>)
                                            ) : (
                                                <tr>
                                                    <td>{ getCurrentTime(forecastData.dt) }</td>
                                                    <td>{ forecastData.main.temp } &#8451;</td>
                                                    <td>{ forecastData.main.pressure } hPa</td>
                                                    <td>{ forecastData.main.humidity } %</td>
                                                    <td>{ forecastData.clouds.all } %</td>
                                                    <td>{ forecastData.wind.speed } m/s</td>
                                                </tr>
                                            )}
                                            </tbody>
                                        </Table>
                                    </>
                                    ) : (
                                    <Spinner/>
                                    )}
                                    </Jumbotron>
                    </Container>
            </>
        )
};
const mapStateToProps = ( state ) => {
    return {
        forecastData: state.forecastData,
        currentDay: state.currentDay,
        isLoading: state.isLoading,
        activePage: state.activePage,
        city: state.city
    }
};
ExtendedForecast.propTypes = {
    forecastData: PropTypes.array,
    currentDay: PropTypes.number,
    isLoading: PropTypes.bool,
    activePage: PropTypes.number,
};


export default connect(mapStateToProps)(ExtendedForecast);
