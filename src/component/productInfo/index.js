import React, { Component } from 'react';
import {Badge,Input} from 'reactstrap'
import Button from 'reactstrap/lib/Button';
import ProductCard from '../product-card';
import './style.css'

export class ProductInfo extends Component {
    render() {
        const relatedProducts = this.props.products.map(product => {
            return(
                
                    <ProductCard key={product.id} product={product}/>
                
            );
        });
        return (
            <div className="container">
                <div className="row row-content px-3">
                    <div className="col-12 col-md-5 px-4 pb-3">
                        <img className="img-fluid product-image" src={this.props.product.image} alt={this.props.product.name}/>
                    </div>
                    <div className="col-12 col-md-7">
                            <Badge color="danger">sale</Badge>
                            <h3 className="my-3"> {this.props.product.name} </h3>
                            <h4 className="my-3"> {this.props.product.price} </h4>
                            <hr></hr>
                            <div className="row py-4 text-center">
                                <div className="col-12 col-md-3 mb-3">
                                    <Input type="number" className="productQuantity mx-auto " value={1}/>
                                </div>
                                <div className="col-12 col-md-9 ">
                                    <Button className="addToCartButton">Add To Cart</Button>
                                </div>
                            </div>
                            <hr></hr>
                            <div className="row py-3">
                                <p><i className="fa fa-heart-o"></i> add to wishes list</p>
                            </div>
                            <div className="row">
                                    <p>categories: {this.props.product.description} </p>
                            </div>
                    </div>
                </div>
                <hr></hr>
                <div className="row py-5">
                    <div className="col-12">
                        <h2>related products</h2>
                        <div className="orange-line my-5"></div>
                        <div className="row">
                            {relatedProducts}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductInfo
 