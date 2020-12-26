import React, { Component } from 'react'
import Categories from '../../component/categories'
import Slider from '../../component/slider'
import FeaturedProducts from '../../component/featured'
import Promotions from '../../component/promotion'
import FeaturedArticles from '../../component/featuredArticles'
import NewsLetter from '../../component/newsletter'
import Services from '../../component/services'

class HomePage extends Component {
    addToCart(productId,quantity){
        this.props.addToCart(productId,quantity)
    }
    render() {
        return (
            <div className="container-fluid px-0">
                <Slider />
                <Services />
                <Categories />
                <FeaturedProducts products={this.props.products} addToCart={(productId,quantity) => this.addToCart(productId,quantity)}/>
                <Promotions />
                <FeaturedArticles articles={this.props.articles} />
                <NewsLetter />
            </div>
        )
    }
}

export default HomePage
