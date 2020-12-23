import React, {Component} from 'react';
import {Route,Switch,Redirect} from 'react-router-dom';
import Header from '../component/header';
import Footer from '../component/footer'
import HomePage from './home';
import {PRODUCTS} from '../shared/product';
import {ARTICLES} from '../shared/articles'
import Shop from './shop';
import Blog from './blog';
import Contact from './contact';
import About from './about';
import ProductInfo from '../component/productInfo';
import ArticleInfo from '../component/articleInfo';
import ProductCard from '../component/product-card';
import {CATEGORIES} from '../shared/categories'
import { toNumber } from 'reactstrap/lib/utils';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: PRODUCTS,
            articles: ARTICLES,
            categories: CATEGORIES
        }
    }
    render() {
        const ProductInfoWithId = ({match}) => {
            return(
                <ProductInfo
                    product={this.state.products.filter(product => product.id == match.params.idProduct)[0]} 
                    products={this.state.products.filter(product => product.hot == true,[0])}
                 
                />
            );
        }
        const ArticleInfoWithId = ({match}) => {
            return(
                <ArticleInfo 
                    articles={this.state.articles.filter(article => article.featured === true,[0])}
                    article={this.state.articles.filter(article => article.id == +match.params.idArticle)[0]} 
                />
            );
        }
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
                <Route path='/products/:idProduct' component={ProductInfoWithId}/>
                <Route path='/shop' render={() => <Shop />} />
                <Route path='/blog/:idArticle' component={ArticleInfoWithId}/>
                <Route path='/blog' render={() => <Blog articles={this.state.articles} categories={this.state.categories} latestArticles={this.state.articles.filter(article => article.featured === true,[0])}/>} />
                <Route path='/aboutus' render={() => <About />} />
                <Route path='/contactus' render={() => <Contact />} />
                <Redirect to="/" /> 
              </Switch>  
              <Footer />  
            </React.Fragment>
        )
    }
}

export default Main

