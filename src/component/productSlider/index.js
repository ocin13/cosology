import React, { Component,useState,useEffect} from 'react';
import {Card} from 'reactstrap'
import './style.css';
import {LIPSTICKS} from '../../shared/lipsticks'
import Fade from 'react-reveal/Fade';

function Product({product}){
    const [Color, setColor] = useState('#CB3843');

    const colors = product.colors.map(color => {
        return(
            <div key={color} className="c" style={{backgroundColor: color}} onClick={() => setColor(color)}></div>
        );
    });
    
    return(
        <React.Fragment >
                        <Fade left>
                            <div className="imgSection" style={{backgroundColor: Color}}>
                                <img src=""   alt="logo" className ="logo"/>
                            </div>
                        </Fade>
                        <Fade bottom>
                                    <div className="imgWrapper">
                                            <img src={product.image} alt={product.name} className = "item h2"/>
                                    </div>
                        </Fade>
                    <Fade right>
                        <div className="infoSection">
                                <div className="product">
                                    <div className="productName">{product.name}</div>
                                    <div className="productNo">{product.brand}</div>
                                    <div className="price">{product.price}</div>
                                    <div className="productColor">FIND YOUR COLOR</div>
                                    <div className="colors">
                                        {colors}
                                    </div>
                                    <div className="line"></div>
                                    <div className="rate">{product.rate}/ 5</div>
                                    <div className="productRate">Rate</div>
                                    <div className="addToCart">ADD TO CART</div>
                                    <div className="addToWishlist">
                                        <div className="heart">&hearts;</div>
                                        ADD TO WISHLIST
                                    </div>
                                </div>
                        </div>
                    </Fade>
        </React.Fragment>
    )
}

class ProductSlider extends Component {   
    constructor(props){
        super(props);
        this.state = {
            lipsticks: LIPSTICKS,
            counter: 1
        }
        this.nextProduct = this.nextProduct.bind(this);
        this.prevProduct = this.prevProduct.bind(this);
    }

    updateCounter = (x) => {
        this.setState({counter: x})
    }
    
    
    nextProduct(){
        const numberProducts = this.state.lipsticks.length;
        let x = 0;
        this.state.counter < numberProducts-1 ? x = this.state.counter + 1 : x = 0;
        this.updateCounter(x)
    }
    prevProduct(){
        const numberProducts = this.state.lipsticks.length;
        let x = 0;
        this.state.counter > 0 ? x = this.state.counter - 1 : x = numberProducts-1;
        this.updateCounter(x)
    }

    render() {
        const product = this.state.lipsticks.filter(lipstick => lipstick.id == this.state.counter)[0];
        return (
            <div className="container main-container">
                <div className="main">
                    <Product  product={product}/>
                        <div className="next" onClick={this.nextProduct}>&#8594;</div>
                        <div className="pre" onClick={this.prevProduct}>&#8592;</div>
                 </div>
            </div>
        )
    }
}





export default ProductSlider
