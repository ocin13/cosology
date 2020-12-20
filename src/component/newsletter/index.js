import React from 'react';
import './style.css';
import {Input,Button} from 'reactstrap'
import FormGroup from 'reactstrap/lib/FormGroup';
import Row from 'reactstrap/lib/Row';
import Col from 'reactstrap/lib/Col';

export default function NewsLetter() {
    return (
        <div className="row row-content text-center px-5 newsletter">
            <div className="col-12">
                <h3 className="mb-5">subscribe to the newsletter to get the latest updates</h3>
                <FormGroup>
                    <Row>
                        <Col md={3}>
                            <Button className="lg mb-3 newsletter-button">Subscribe</Button>
                        </Col>
                        <Col md={6}>
                            <Input className="lg input-email" />
                        </Col>
                    </Row>
                </FormGroup>
            </div>
        </div>
    )
}
