import React,{useState} from 'react';
import {Card,CardBody,CardImg,CardText,CardTitle,CardLink,Button} from 'reactstrap'
import './style.css';
import Bounce from 'react-reveal/Bounce';

export default function ProductCard({product}) {
    const [Favorite, setFavorite] = useState(false)
    const addToFavorite = (e) => {
        setFavorite(!Favorite);
    }
    return (
        <div className="col-12 col-md-3 text-center product-card-frame">
            <div className="row px-5 text-center card-icons">
                <div className="col-4" onClick={(e) => addToFavorite(e)}><i className="fa fa-heart" style={{color:`${Favorite ? '#fc036b' : 'white'}`}}></i></div>
                <div className="col-4"><i className="fa fa-eye"></i></div>
                <div className="col-4"><i className="fa fa-share"></i></div>
            </div>
            <Bounce>
            <Card className="product-card px-5">
                <CardImg src={product.image} alt={product.name} style={{height: '300px'}}/>
                <CardBody>
                    <smaller> {product.description} </smaller>
                    <CardTitle> {product.name} </CardTitle>
                    <h5> {product.price} </h5>
                </CardBody>
            </Card>
            </Bounce>
            
            <Button className="add-cart-button">Add To Cart</Button>
            
        </div>
    )
}
