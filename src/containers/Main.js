import React, {Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Header from '../component/header';
import Footer from '../component/footer'
import HomePage from './home';
import {PRODUCTS} from '../shared/product';
import {ARTICLES} from '../shared/articles'

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: PRODUCTS,
            articles: ARTICLES
        }
    }
    render() {
        const Home = () => {
            return (
                <HomePage products={this.state.products.filter(product => product.featured === true,[0])} articles={this.state.articles.filter(article => article.featured === true,[0])}/>
                
            );
        }
        return (
            <React.Fragment>
              <Header />
              <Switch>
                <Route exact path='/' component={Home} />  
                <Redirect to="/" /> 
              </Switch>  
              <Footer />  
            </React.Fragment>
        )
    }
}

export default Main

