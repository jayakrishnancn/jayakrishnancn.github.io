import React, { Component } from 'react';
import Post from '../Post/Post'
import ErrorLoadingPage from '../ErrorPages/ErrorLoadingPage'
import API from '../../util/API'

export class BlogArticle extends Component {
    state = {
        article: {},
        error: null
    }    
    componentDidMount(){
        let url = '/article.json?q='+this.props.match.params.id

        API.get(url, (data) => {
            // console.log("Data",data)            
            this.setState({article:data});
        },error=>{
            this.setState({error})
        });
    }
    render() {
        if(this.state.error){
            return <ErrorLoadingPage {...this.props}/>
        }
        return <Post article={this.state.article} />
    }
}

export default BlogArticle;
