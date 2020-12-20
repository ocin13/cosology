import React from 'react';
import {Media} from 'reactstrap';
import './style.css'

export default function Services() {
    return (
        <div className="row row-content services d-none d-md-bloc">
            <div className="col-4 px-5 ">
            <Media className="services-card ">
                <div className="px-4 py-3">
                    <span><i className="fa fa-tag"></i></span>
                </div>
                <Media body>
                    <Media heading>
                    10% students discount
                    </Media>
                    get 10% discount when you submit your student email
                </Media>
            </Media>
            </div>
            <div className="col-4 px-5 s">
            <Media className="services-card ">
            <div className="px-4 py-2">
                    <span><i className="fa fa-truck" ></i></span>
                </div>
                <Media body>
                    <Media heading>
                    5$ free delivery 
                    </Media>
                    up to five 5$ dollar free delivery and more features
                </Media>
            </Media>
            </div>
            <div className="col-4 px-5 ">
            <Media className="services-card ">
            <div className="px-4 py-2">
                    <span><i className="fa fa-user" ></i></span>
                </div>
                <Media body>
                    <Media heading>
                    24/7 assistance
                    </Media>
                    reach out to us 24/7 to get more information
                </Media>
            </Media>
            </div>
        </div>
    )
}
