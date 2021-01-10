import React, { Component } from 'react';
import './style.css';
import {Col,Row,Input,Label,Form} from 'reactstrap'
import {Link} from 'react-router-dom'
import ArticlesCard from '../featuredArticles'
import Button from 'reactstrap/lib/Button';

export class ArticleInfo extends Component {
    constructor(props){
        super(props);
        this.state = {
            author: '',
            text: '',
            comments: this.props.comments
        }
    }
    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
      }
      handleSubmit(event){
            this.addComment();
            this.resetForm();
            event.preventDefault();
      }
    addComment(){
        this.props.addComment(this.state.author,this.state.text,this.props.article.id)
    }
    resetForm(){
        this.setState({author: '', text: ''})
    }
    render() {
        const comments = this.state.comments.map(comment => {
            return(
                <div>
                    <h5>{comment.author}</h5>
                    <p>{comment.text} </p>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row row-content">
                    <div className="col-12">
                        <h2 className="mb-4"> {this.props.article.title} </h2>
                        <div className="orange-line mb-3"></div>
                        <img className="img-fluid my-5 article-image" src={this.props.article.image} alt={this.props.article.title} width={600} height={550} />
                        <h6 className="mb-3"> {this.props.article.subtitle} </h6>
                        <p className="px-2 mb-5 articleText"> {this.props.article.text} </p>
                        <h6>author: {this.props.article.author} </h6>
                    </div>
                </div>
                <hr></hr>
                <div className="row py-3 mb-4">
                    <div className="col-12 col-md-6">
                        <small>previous</small>
                        
                    </div>
                    <div className="col-12 col-md-6">
                        <small>next</small>
                    </div>
                </div>
                <hr></hr>
                <div className="col-12 my-5">
                    {comments}
                </div>
                <hr></hr>
                <div className="col-12 my-5">
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <Row>
                        <Col md={12}>
                            <Label for="exampleEmail">your comment</Label>
                            <Input type="text" name="author" className="px-3 py-3 mb-2" value={this.state.author}  onChange={(event) => this.handleInputChange(event)} placeholder="Your Name"/>
                        </Col>
                        <Col md={12}>
                            <textarea type="text" name="text" className="px-3 py-3 " value={this.state.text} onChange={(event) => this.handleInputChange(event)} rows="3" style={{width:'100%'}} placeholder="Comment"/>
                        </Col>
                        <Col md={12}>
                            <Button color="danger" type="submit" value="Submit" >Submit</Button>
                        </Col>
                    </Row>
                </form>
                </div>
            </div>
        )
    }
}

export default ArticleInfo

