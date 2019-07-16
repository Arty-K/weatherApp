import React from 'react';
import PropTypes from 'prop-types';
import { Container, Table } from 'react-bootstrap';
import Spinner from '../spinner/Spinner';


const CurrentForecast = ( props ) => {
    const {
        forecastData,
        currentData,
        currentDay,
        isLoading,
        city
    } = props;

    //check how many hours left(3hr interval) before next day and create an array of weather data for current day
    let newForecastData = forecastData[city];
    let newCurrentData = currentData[city];
    const todayForecast = () => {
        let i = 0;
        let todayForecast = [];
        for (i; i < newForecastData.length; i++) {
            if( new Date(newForecastData[i].dt*1000).getDay() === currentDay)
                todayForecast.push(newForecastData[i])
        }
        return todayForecast;
    };

    const getCurrentTime = (item) => {
        let arr = [];
            arr.push(new Date(item * 1000 ).getHours());
            arr.push(new Date(item * 1000 ).getMinutes());
        return `${arr[0]} : ${arr[1]}`;
    };

    return(
        <>
            { !isLoading ? (
                <Container style={{paddingBottom: '50px'}}>
                    {/*прогноз на текущий момент*/}

                    <Table striped bordered hover
                           size="sm"
                           style={{fontSize: 14}}
                    >
                        <thead>
                        <tr>
                            <th>Time</th>
                            <th>Temperature</th>
                            <th>Pressure</th>
                            <th>Humidity</th>
                            <th>Cloudiness</th>
                            <th>Wind speed</th>
                        </tr>
                        </thead>
                        <tbody>
                        {(todayForecast().length > 0) ? (
                            todayForecast().map(item =>
                                <tr key={item.dt}>
                                    <td>{ getCurrentTime(item.dt) }</td>
                                    <td>{ item.main.temp } &#8451;</td>
                                    <td>{ item.main.pressure } hPa</td>
                                    <td>{ item.main.humidity } %</td>
                                    <td>{ item.clouds.all } %</td>
                                    <td>{ item.wind.speed } m/s</td>
                                </tr>)
                        ) : (
                            <tr>
                                <td>{ getCurrentTime(newCurrentData.dt) }</td>
                                <td>{ newCurrentData.main.temp } &#8451;</td>
                                <td>{ newCurrentData.main.pressure } hPa</td>
                                <td>{ newCurrentData.main.humidity } %</td>
                                <td>{ newCurrentData.clouds.all } %</td>
                                <td>{ newCurrentData.wind.speed } m/s</td>
                            </tr>
                        )}
                        </tbody>
                    </Table>
                </Container>
            ) : (
                <Spinner/>
            )
            }
        </>
    )
};
CurrentForecast.propTypes = {
    name: PropTypes.string,
    avatar_url: PropTypes.string,
    blog: PropTypes.string,
    type: PropTypes.number,
    usersList: PropTypes.array,
    collaboratorsList: PropTypes.array,
    isLoading: PropTypes.bool,
};


export default CurrentForecast;
