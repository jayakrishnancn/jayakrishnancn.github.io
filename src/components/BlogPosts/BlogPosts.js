import React,{Component} from 'react'
import MiniPost from '../MiniPost/MiniPost'
import './BlogPosts.css'

class BlogPosts extends Component{
    
    render(){
    
        let article = {
            body: 'If I need a quick background pattern to spruce something up, I often think of the CSS3 Patterns Gallery. Some of those are pretty intense but remember they are easily editable because they are just CSS. That means you could take these bold zags and chill them out.…',
            title:'A Few Background If I need a quick background pattern toA Few Background  A Few Background ss spruce something Patterns Sitess',
            date:'2020 MAR 20',
            url:'/blog/one'
        }
        let articles = [article,article,article]
        
        return (    
           <MiniPost articles={articles} type="blog"/>
        )
    }
}

export default BlogPosts