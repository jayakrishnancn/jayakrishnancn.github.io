import React from 'react';
import Post from '../Post/Post'
import {Link} from 'react-router-dom'
import Container from '../Container/Container'

function Project(params) {
    let post = {title:'project2',url:'/projects/projett-1',body:'body',datePublished:'2020-20-02'}
    return (
        <div style={{marginTop:"3rem"}}>
            <Post post={post} />
            <Container>
                <Link to="/projects" className="btn btn-primary">BACK</Link>
                { /* <ul class="no-style breadcrumbs">
                        <li><a href="/blog">Blog</a></li>
                        <li><a href={post.url}>One</a></li>
                    </ul>
                */}
            </Container>
        </div>
    )    
}

export default Project;