import React,{useState} from 'react';
import {Card,CardBody,CardImg,CardText,CardTitle,CardLink,Button} from 'reactstrap'
import './style.css';
import Bounce from 'react-reveal/Bounce';
import {Link} from 'react-router-dom';

export default function ProductCard(props) {
    const {product} = props
    const [Favorite, setFavorite] = useState(false)
    const addToFavorite = (e) => {
        setFavorite(!Favorite);
    }
    const addToCart = (productId,quantity) => {
        props.addToCart(productId,quantity)
    }
    return (
        <div className="col-12 col-md-3 text-center product-card-frame">
            <div className="row px-5 text-center card-icons">
                <div className="col-4" onClick={(e) => addToFavorite(e)}><i className="fa fa-heart" style={{color:`${Favorite ? '#fc036b' : 'white'}`}}></i></div>
                <div className="col-4"><i className="fa fa-eye"></i></div>
                <div className="col-4"><i className="fa fa-share"></i></div>
            </div>
            <Bounce>
            <Card className="product-card">
               <Link className="website-links" to={`/products/${product.id}`}>
                <CardImg src={product.image} alt={product.name} style={{height: '300px'}}/>
                    <CardBody>
                        <small> {product.category} </small>
                        <CardTitle> <strong>{product.name}</strong> </CardTitle>
                        <h5> {product.price} </h5>
                    </CardBody>
                </Link>
            </Card>
            </Bounce>
            
            <Button className="add-cart-button" onClick={() => addToCart(product.id,1)}>Add To Cart</Button>
            
        </div>
    )
}
