import React, { Component } from 'react';
import ProductsCard from '../product-card'
import './style.css'
class FeaturedProducts extends Component {
    render(){
        const products = this.props.products.map(product => {
            return(
                <ProductsCard key={product.id} product={product} />
            );
        });
        return (
            <div className="row row-content">
                <div className="col-12 text-center">
                    <h2 className="mb-4">featured products</h2>
                    <div className="orange-line mx-auto my-5"></div>
                </div>
                {products}
            </div>
        )
    }
}

export default FeaturedProducts;
