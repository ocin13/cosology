import React, {useState,useEffect} from 'react';
import './style.css';
import {PROMOTIONS} from '../../shared/promotion';
import {Button} from 'reactstrap';
import Tada from 'react-reveal/Tada';

function Promotion({promotion}){
    return(
        <Tada>
            <div className="col-12 col-md-6 promotion-frame">
                <div className="white-line"></div>
                <img src={promotion.image} alt={promotion.title} className="img-fluid promotion-image"/>
                <div className="promotion-content">
                    <h3> {promotion.title} </h3>
                    <Button>Discover Now</Button>
                </div>
            </div>
        </Tada>
    )
}

function Promotions() {
    const [Promotions, setPromotions] = useState([]);
    useEffect(() => {
        setPromotions(PROMOTIONS);
        return () => {
            console.log('promotion rendred');
        }
    }, [0])
    const promotions = Promotions.map( promotion => {
        return(
            <Promotion key={promotion.id} promotion={promotion} />
        );
    });
    return (
        <div className="row">
                {promotions}
        </div>
    )
}

export default Promotions;
