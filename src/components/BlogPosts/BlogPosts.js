import React,{Component} from 'react'
import MiniPost from '../MiniPost/MiniPost'
import API from '../../util/API'
import './BlogPosts.css'
import LoadingPage from '../sub_components/LoadingPage/LoadingPage'
import ErrorLoadingPage from '../ErrorPages/ErrorLoadingPage'

class BlogPosts extends Component{
    state = {
        articles: [],
        error: null,
        loading: true
    }
     
    componentDidMount(){
        let url = '/blogposts.json'

        API.get(url, (data) => {
            // console.log("Data",data)            
            this.setState({articles:data,loading: false});
        },error=>{
            this.setState({error,loading: false})
        });
    }

    render(){
        let {articles, loading, error} = this.state
        if(loading) return <LoadingPage message="loading projects" />
        if(error) return <ErrorLoadingPage {...this.props}/>
        return <MiniPost articles={articles} type="blog"/>
    }
}
export default BlogPosts