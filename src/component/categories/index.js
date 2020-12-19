import React, { Component } from 'react'
import {Card,CardImg,CardTitle,CardImgOverlay} from 'reactstrap'
import Zoom from 'react-reveal/Zoom';
import './style.css';
import {CATEGORIES} from '../../shared/categories'

function Category({category}){
    return(
        <Zoom>
            <Card className="card-categories" inverse>
                <CardImg style={{height:"400px", width: "100%"}} className='img-fluid image-categories-card' src={category.image} alt={category.name}  />
                <CardImgOverlay className="text-right">
                <CardTitle tag="h2" className="cart-categories-text" >{category.name}</CardTitle>
                <div className="red-line"></div>
                    <small className="text-dark"> {category.type} </small>
                </CardImgOverlay>
            </Card>
        </Zoom>
    )
}

class Categories extends Component {
    constructor(props){
        super(props);
        this.state = {
            categories: []
        }
    }
    componentDidMount(){
        this.setState({categories: CATEGORIES})
    }
    render() {
        const categories = this.state.categories.map(category => {
            return(
                
                <div className="col-12 col-md-6 px-5 py-5">
                    <Category key={category.id} category={category} />
                </div>
            );
        });
        return (
            <div className="row row-content">
                {categories}
            </div>
        )
    }
}

export default Categories
