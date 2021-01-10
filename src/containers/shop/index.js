import React, { Component } from 'react'
import './style.css';
import {Card,FormGroup,Input,Label} from 'reactstrap'
import ProductCard from '../../component/product-card';

function Filter(props){
    const categories = props.categories.map(item => {
        return(
            <div key={item.id}>
                <Input type="checkbox" name="check" id="category"/>
                <Label for="category" check>{item.name}</Label>
            </div>
        );
    });
    const brands = props.brands.map(item => {
        return(
            <div key={item.id}>
                <Input type="checkbox" name="check" id="category"/>
                <Label for="category" check>{item.name}</Label>
            </div>
        );
    });
    const countries = props.countries.map(item => {
        return(
            <div key={item.id}>
                <Input type="checkbox" name="check" id="category"/>
                <Label for="category" check>{item.name}</Label>
            </div>
        );
    });
    const features = props.countries.map(item => {
        return(
            <div key={item}>
                <Input type="checkbox" name="check" id="category"/>
                <Label for="category" check>{item}</Label>
            </div>
        );
    });
    return(
        <div className="col-12 px-5 py-5">
            <h4>categories</h4>
            <div>{categories}</div>
            <hr className="my-5"></hr>
            <h4>price</h4>
            <FormGroup>
                <Label for="price">Price</Label>
                <Input type="range" name="price" id="price" />
            </FormGroup>
            <hr className="my-5"></hr>
            <h4>brands</h4>
            <div>{brands}</div>
            <hr className="my-5"></hr>
            <h4>countries</h4>
            <div>{countries}</div>
            <hr className="my-5"></hr>
            <h4>features</h4>
            <div>{features}</div>
            <hr className="my-5"></hr>
        </div>
    )
}

class Shop extends Component {
    render() {
        const products = this.props.products.map(product => {
            return(
                <div className="col-12 col-md-4">
                    <ProductCard key={product.id} product={product}/>
                </div>
            );
        });
        return (
            <div className="container-fluid">
                <div className="row row-content">
                    <div className="col-12 col-md-3 order-last order-md-first">
                        <Filter categories={this.props.categories} brands={this.props.brands} countries={this.props.countries} />
                    </div>
                    <div className="col-12 col-md-9">
                        <div className="row px-3">{products}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Shop
