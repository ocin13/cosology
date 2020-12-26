import React, { Component,useState } from 'react';
import {Navbar, NavbarBrand, NavbarToggler,NavItem,Nav,Collapse,Badge,CardBody,CardImg,Card,CardTitle,CardText,ListGroup,ListGroupItem} from 'reactstrap';
import {NavLink,Link} from 'react-router-dom';
import Fade from 'react-reveal/Fade';
import './style.css'

function AboutCard(){
    return(
        <Fade bottom>
            <Card className="about-card-blog text-center py-3">
                <Link to={`/aboutus`} className="website-links">
                    <CardBody className="text-center">
                        <CardTitle className="about-card-title"> <h1>about Us</h1> </CardTitle>
                    </CardBody>
                    <CardImg src='https://cdn.pixabay.com/photo/2016/03/23/08/34/beautiful-1274361_1280.jpg' alt='about us' className="about-card-image"/>
                    <CardBody>
                        <CardText className="my-3 d-none d-lg-block"> <small>If you need to get high quality cosmetics at affordable prices, Cosology is the right place for you! Here you can
                             find wide assortment of world famous brands and find what you need. Our mission is to deliver every woman a
                             piece of beauty to make her happy and to highlight her beauty and personal individuality by means of cosmetics. </small></CardText>
                        <small className="text-primary">co-founder :  <strong>chaima farhani </strong>on date : <strong>12/13/2020</strong></small>
                    </CardBody>
                </Link>
            </Card>
        </Fade>
    )
}

function ArticlesCard({article}){
    const [FavoriteArticle, setFavoriteArticle] = useState(false)
    const addToFavorite = () => setFavoriteArticle(!FavoriteArticle)
    const d = new Date();
    const date = d.getFullYear();
    return(
        <Fade bottom>
            <Card className="article-card-blog px-0">
                <Link to={`/blog/${article.id}`} className="website-links">
                    <div className="row article-card-icons mx-auto">
                        <div className="col-6" onClick={addToFavorite}>
                            <i className="fa fa-heart" style={{color: `${FavoriteArticle? '#f00a71' : 'white'}`}}></i>
                        </div>
                        <div className="col-6">
                            <i className="fa fa-eye"></i>
                        </div>
                    </div>
                    <CardImg src={article.image} alt={article.title} className="article-card-image"/>
                    <CardBody className="pb-5">
                        <small className="text-info">published by :  <strong>{article.author} </strong>--- date : <strong>{date}</strong></small>
                        <CardTitle className="article-card-title"> <strong>{article.title}</strong> </CardTitle>
                        <CardText> {article.text.slice(0,85)} </CardText>
                    </CardBody>
                </Link>
            </Card>
        </Fade>
    )
}

class Blog extends Component {

    render() {
        const categories = this.props.categories.map(category => {
            return(
                <div className="col-12 col-lg-5 my-3">
                    <NavLink className="nav-link-categories website-links mx-3" to='/blog' key={category.id}>{category.name}</NavLink>
                </div>
            );
        });
        const latestArticles = this.props.latestArticles.map(article => {
            return(
                
                    <ListGroupItem key={article.id} className="blog-list-name" ><Link className="link" to={`/blog/${article.id}`}>{article.title}</Link></ListGroupItem>

                
            );
        });
        const articles = this.props.articles.map(article => {
            return(
                    <div className='col-12 col-lg-6 px-3'>
                        <ArticlesCard key={article.id} article={article} />
                    </div>
            );
        });
        return (
            <div className="container-fluid px-0">
                <div className="row blog-banner mx-0">
                    <Fade>
                        <div className="col-12 col-md-3 mx-auto blog-banner-text">
                            <h2>cosylogy blog</h2>
                            <small>new sight of the world</small>
                        </div>
                    </Fade>
                </div>
                <Navbar className="navbar-blog d-none d-md-block"  expand="md">
                        <div className="container">
                                <Nav className="mx-auto" navbar>
                                    <NavItem >
                                        <NavLink className="nav-link-blog mx-3" to="/">
                                             Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem >
                                        <NavLink className="nav-link-blog mx-3" to="/blog">
                                             Beauty
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link-blog mx-3" to="/Shop">
                                            Fashion
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link-blog mx-3" to="/gallery">
                                             Health
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link-blog mx-3" to="/contactus">
                                            Nature
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link-blog mx-3" to="/contactus">
                                            Trend
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="nav-link-blog mx-3" to="/contactus">
                                            Uncategorized
                                        </NavLink>
                                    </NavItem>
                                </Nav>
                        </div>
                    </Navbar>
                    <div className="row row-content blog-main">
                        <div className="col-12 col-md-8 px-md-5">
                            <div className="row px-md-5">
                                {articles}
                            </div>
                        </div>
                        <div className="d-none d-md-block col-md-3">
                            <div className='row row-content mb-5'>
                                <div className="col-12">
                                    <h3 className="mb-4">Latest Articles</h3>
                                            <ListGroup flush>
                                                    {latestArticles}
                                            </ListGroup>
                                </div>
                            </div>
                            <hr className="my-5"></hr>
                            <div className='row mb-5'>
                                <div className="col">
                                    <h3 className="mb-4">Categories</h3>
                                    <div className="row">
                                        {categories}
                                    </div>
                                </div>
                            </div>
                            <hr className="my-5"></hr>
                            <div className="row">
                                <AboutCard />
                            </div>
                        </div>
                    </div>
            </div>
            
        )
    }
}

export default Blog