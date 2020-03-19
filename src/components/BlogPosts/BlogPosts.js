import React,{Component} from 'react'
import MiniPost from '../MiniPost/MiniPost'
import API from '../../util/API'
import './BlogPosts.css'

class BlogPosts extends Component{
    state = {
        articles: [],
        error: null
    }
     
    componentDidMount(){
        let url = '/blogposts.json'

        API.get(url, (data) => {
            // console.log("Data",data)            
            this.setState({articles:data});
        },error=>{
            this.setState({error})
        });
    }

    render(){
        if(this.state.error){
            return (<div>{this.state.error}</div>)
        }
        return (    
            <MiniPost articles={this.state.articles} type="blog"/>
        )
    }
}
export default BlogPosts