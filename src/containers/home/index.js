import React, { Component } from 'react'
import Categories from '../../component/categories'
import Slider from '../../component/slider'
import FeaturedProducts from '../../component/featured'
import Promotions from '../../component/promotion'
import FeaturedArticles from '../../component/featuredArticles'
import NewsLetter from '../../component/newsletter'

class HomePage extends Component {
    render() {
        return (
            <div className="container-fluid px-0">
                <Slider />
                <Categories />
                <FeaturedProducts products={this.props.products}/>
                <Promotions />
                <FeaturedArticles articles={this.props.articles} />
                <NewsLetter />
            </div>
        )
    }
}

export default HomePage
