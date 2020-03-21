import React, { Component } from 'react';
import Post from '../Post/Post'
import ErrorLoadingPage from '../ErrorPages/ErrorLoadingPage'
import API from '../../util/API'
import LoadingPage from '../sub_components/LoadingPage/LoadingPage'
import endpoints from '../../util/endpoints'

export class Article extends Component {
    state = {
        article: {},
        error: null,
        loading: true
    }
    componentDidMount(){
        
        let url = endpoints.getEndpoint(this.props.type,this.props.match.params.id);// +'?q='+this.props.match.params.id
        
        API.get(url, (data) => {
            // console.log("Data",data)
            this.setState({article:data,loading: false});
        },error=>{
            this.setState({error,loading: false})
        });
    }
    render() {
        let {article, loading, error} = this.state
        if(loading) return <LoadingPage message="loading projects" />
        if(error) return <ErrorLoadingPage message="Error Loading Data from server" {...this.props}/>

        return <Post {...this.props} article={article} />
    }
}

export default Article;
