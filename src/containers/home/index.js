import React, { Component } from 'react'
import Categories from '../../component/categories'
import Slider from '../../component/slider'

class HomePage extends Component {
    render() {
        return (
            <div className="container-fluid px-0">
                <Slider />
                <Categories />
            </div>
        )
    }
}

export default HomePage
