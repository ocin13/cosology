import React, { Component } from 'react';
import {ListGroup,ListGroupItem,Button} from 'reactstrap'
import './style.css';
import {Link} from 'react-router-dom'
import { toNumber } from 'reactstrap/lib/utils';

function EmptyCart(){
    return(
        <div className="row row-content">
            <div className="col-6 mx-auto text-center row-content">
                <h4><i className="fa fa-warning mx-3"></i>the cart is empty click the button below to start shopping</h4>
                <Link to="/shop" className="website-links"><Button className="my-3" size="lg" color="danger">Shop Now</Button></Link>
            </div>
        </div>
    )
}

function FillCart(props){
    const items = props.cart.map(item => {
        return(
            <div className="row my-3 px-3 text-center">
                <div className="col-12 col-md-2">
                    <img src={item.image} alt={item.name} height={80} width={80} />
                </div>
                <div className="col-12 col-md-6 my-auto text-center py-5">
                    <div key={item.id}> {item.name}--<strong>${item.price}</strong></div>
                </div>
                <div className="col-12 col-md-4 my-auto" onClick={() => props.deleteFromCart(item.id)}>
                    <Button className="ml-auto" color="danger" > Remove </Button>
                </div>
            </div>
            
        );
    });
    const numbers = props.cart.map(item => item.price);
    function getSum(total, num) {
        return total + num;
      }
      const total = numbers.reduce(getSum, 0);
    return(
        <div className="row row-content">
            <h2 className="mb-5 mx-2">continue to check-out</h2>
            <div className="col-12 row-content">
                <div className="mb-5">{items}</div>
                <div className="mx-2 text-center">
                    <div ><h4>your total price is:</h4> <h2>${total}</h2></div>
                </div>
                <div className="mx-auto col-10 col-md-3" >
                    <Button  className="mt-5" size="lg" color="success"> Continue To Check-Out </Button>
                </div>
            </div>
        </div>
    )
}

export class Cart extends Component {
    deleteFromCart(productId){
        this.props.deleteFromCart(productId)
    }
    render() {
        return (
            <div className="container">
                {this.props.cart.length? <FillCart cart={this.props.cart} deleteFromCart={(productId) => this.deleteFromCart(productId)}/> : <EmptyCart />}
            </div>
        )
    }
}

export default Cart
