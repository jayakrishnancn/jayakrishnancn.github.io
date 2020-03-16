import React, {Component} from 'react';
import Container from '../Container/Container'
import Post from '../Post/Post'
import {Link } from 'react-router-dom'
import './Blog.css'

class Blog extends Component{
    render(){
        let post = {title:'title',body:'body',url:'/blog/title'}

        return(
            <div style={{marginTop:"3rem"}}>
                <Post post={post} />
                <Container>
                    <Link className="btn btn-primary" to="/blog">Back</Link>
                    { /* <ul class="no-style breadcrumbs">
                            <li><a href="/blog">Blog</a></li>
                            <li><a href={post.url}>One</a></li>
                        </ul>
                    */}
                                    
                </Container>
            </div>
        )
    }
}

export default Blog;