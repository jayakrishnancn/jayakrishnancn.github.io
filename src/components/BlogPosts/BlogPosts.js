import React,{Component} from 'react'
import MiniPost from '../MiniPost/MiniPost'
import './BlogPosts.css'

class BlogPosts extends Component{
    state = {
        articles: []
    }
    componentDidMount(){

        fetch('/blogposts.json')
            .then(response => response.json())
                .then(({data}) => {
                    const articles = data;
                    if(articles && articles.length > 0){
                        this.setState({articles})
                    }   
                });
    }

    render(){

        return (    
           <MiniPost articles={this.state.articles} type="blog"/>
        )
    }
}
function Loading(){
    return <div> Loading...</div>
}

export default BlogPosts