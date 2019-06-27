import React from 'react';
import './spinner.css';
import {Container, ListGroup} from "react-bootstrap";

const Spinner = () => {
    return(
        <>
            <Container >
                <ListGroup >
                    <ListGroup.Item className = 'd-flex justify-content-center'>
                        <div className="lds-css ng-scope">
                            <div className="lds-spinner">
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </ListGroup.Item>
                </ListGroup>
            </Container>

        </>
    )

};


export default Spinner;