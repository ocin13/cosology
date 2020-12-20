import React, { Component } from 'react'

export class ArticleInfo extends Component {
    render() {
        return (
            <div>
                {this.props.article.title}
            </div>
        )
    }
}

export default ArticleInfo
