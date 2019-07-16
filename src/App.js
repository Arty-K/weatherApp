import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect
} from 'react-router-dom';
import ForecastSearch from './components/ForecastSearch/ForecastSearch';
import ExtendedForecast from './components/ForecastPages/ExtendedForecast';
import './main.scss';
import { CSSTransition, TransitionGroup } from "react-transition-group";


export default class App extends Component {
    render() {
        return(
            <Router>
                <Route render = {({ location }) => (
                    <TransitionGroup className = "todo-list">
                        <CSSTransition
                            key = { location.key }
                            timeout = { 300 }
                            classNames = "page"
                        >
                            <div className = "page">
                                <Switch location = { location }>
                                    <Route path = {'/'} exact
                                           render = { () => <ForecastSearch/>}
                                    />
                                    <Route path = {'/forecast/:id'}
                                           render = { (props) => <ExtendedForecast {...props}/>}
                                    />
                                    <Redirect to='/' />
                                </Switch>
                            </div>
                        </CSSTransition>
                    </TransitionGroup>
                )}/>
            </Router>
        )
    }
}