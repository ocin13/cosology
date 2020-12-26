import React,{useState} from 'react'
import './style.css';
import {Card,CardBody,CardTitle,CardText,CardImg} from 'reactstrap';
import Fade from 'react-reveal/Fade';
import {Link} from 'react-router-dom'

export function ArticlesCard({article}){
    const [FavoriteArticle, setFavoriteArticle] = useState(false)
    const addToFavorite = () => setFavoriteArticle(!FavoriteArticle)
    const d = new Date();
    const date = d.getFullYear();
    return(
        <Fade bottom>
            <Card className="article-card px-4">
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
                    <CardBody>
                        <small className="text-info">published by :  <strong>{article.author} </strong>--- date : <strong>{date}</strong></small>
                        <CardTitle className="article-card-title"> <strong>{article.title}</strong> </CardTitle>
                        <CardText> {article.text.slice(0,85)} </CardText>
                        
                    </CardBody>
                </Link>
            </Card>
        </Fade>
    )
}

export default function FeaturedArticles(props) {
    const articles = props.articles.map( article => {
        return(
            <div className="col-12 col-md-4 px-3">
                <ArticlesCard key={article.id} article={article} />
            </div>
        );
    });
    return (
        <div className="row row-content px-3">
            <div className="col-12">
                <h2 className="mb-4">featured articles</h2>
                <div className="orange-line mb-5"></div>
            </div>
            {articles}
        </div>
    )
}
