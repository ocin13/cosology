import React, { Component } from 'react'
import {Form,Row,Col,InputGroup,Input} from 'reactstrap'
import Button from 'reactstrap/lib/Button'
import './style.css'

class Contact extends Component {
    render() {
        return (
            
                <div className="row row-content bg-ct-1">
                    <div className="col-12 text-center mb-5">
                        <h1>how to contact us</h1>
                    </div>
                    <div className="col-12 col-sm-4 mx-auto px-4">
                        <h3>cosylogy cosmetics</h3>
                        <h6>Address:</h6>
                        <p>28 Jackson Blvd Ste
                            1020 Chicago
                            IL 60604-2340.</p>
                        <p><h6>Phone: </h6>+1 968 222 1456</p>
                        <p><h6>E-mail: </h6>mail@placerestaurent.com</p>
                    </div>
                    <div className="col-12 col-sm-4 mx-auto px-4">
                        <Form>
                            <Row>
                                <Col md={6}>
                                    <input type="text" className="form-control mb-3" placeholder="Name:" />
                                </Col>
                                <Col md={6}>
                                    <input type="email" className="form-control mb-3" placeholder="E-mail:" />
                                </Col>
                            </Row>
                            <Row>
                                <Col md={12}>
                                    <textarea type="text" className="form-control mb-3" placeholder="message"></textarea>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <Button type="submit" className="btn mb-3" color='danger'>Send</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>  
        )
    }
}

export default Contact