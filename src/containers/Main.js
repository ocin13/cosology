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
import {BRANDS} from '../shared/brands'
import {COUNTRIES} from '../shared/countries'
import { toNumber } from 'reactstrap/lib/utils';
import ProductSlider from '../component/productSlider'
import Cart from '../component/cart';

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            products: PRODUCTS,
            articles: ARTICLES,
            comments: [],
            categories: CATEGORIES,
            countries: COUNTRIES,
            brands: BRANDS,
            cart: []
        }
    }
    addComment(author,text,articleId){
        const idComment = this.state.comments.length;
        const newComment = {
            id: idComment,
            author: author,
            text: text,
            articleId: articleId
        }
        this.setState({comments: this.state.comments.concat(newComment)})
    }
    updateCart(productId,quantity){
        const newProduct = this.state.products.filter(product => product.id == productId)[0];
        this.setState({cart: this.state.cart.concat(newProduct)})
    }
    deleteFromCart(productId){
        const newCart = this.state.cart.filter(item => item.id != productId,[0]);
        this.setState({cart: newCart});
    }
    render() {
        const ProductInfoWithId = ({match}) => {
            return(
                <ProductInfo
                    product={this.state.products.filter(product => product.id == match.params.idProduct)[0]} 
                    products={this.state.products.filter(product => product.hot == true,[0])}
                    updateCart={(productId,quantity) => this.updateCart(productId,quantity)}
                 
                />
            );
        }
        const ArticleInfoWithId = ({match}) => {
            return(
                <ArticleInfo 
                    articles={this.state.articles.filter(article => article.featured === true,[0])}
                    article={this.state.articles.filter(article => article.id == +match.params.idArticle)[0]} 
                    addComment={(author,text,articleId) => this.addComment(author,text,articleId)}
                    comments={this.state.comments.filter(comment => comment.articleId == +match.params.idArticle,[0])}
                />
            );
        }
        const Home = () => {
            return (
                <HomePage addToCart={(productId,quantity) => this.updateCart(productId,quantity)} products={this.state.products.filter(product => product.featured === true,[0])} articles={this.state.articles.filter(article => article.featured === true,[0])}/>
                
            );
        }
        return (
            <React.Fragment>
              <Header cart={this.state.cart}/>
              <Switch>
                <Route exact path='/' component={Home} /> 
                <Route path='/products/:idProduct' component={ProductInfoWithId}/>
                <Route path='/shop' render={() => <Shop products={this.state.products} categories={this.state.categories} brands={this.state.brands} countries={this.state.countries} />} />
                <Route path='/blog/:idArticle' component={ArticleInfoWithId}/>
                <Route path='/blog' render={() => <Blog articles={this.state.articles} categories={this.state.categories} latestArticles={this.state.articles.filter(article => article.featured === true,[0])}/>} />
                <Route path='/aboutus' render={() => <About />} />
                <Route path='/contactus' render={() => <Contact />} />
                <Route path='/product-slider' render={() => <ProductSlider />} />
                <Route path='/cart' render={() => <Cart cart={this.state.cart}   deleteFromCart={(productId) => this.deleteFromCart(productId)}/>} />
                <Redirect to="/" /> 
              </Switch>  
              <Footer />  
            </React.Fragment>
        )
    }
}

export default Main

