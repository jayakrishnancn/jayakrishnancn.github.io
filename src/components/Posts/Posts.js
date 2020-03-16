import React from 'react';
import {Link } from 'react-router-dom'

function Posts({posts}){
    if(!posts || posts.length === 0) return <div className="warn">No Data Found</div>
    
    return (              
        <ul type="square">
            { posts.map( (post, index)=>(
            <li key={index}>
                <Link to={post.url?post.url: '#'}>
                    {post.title || 'title not found'}
                    <span style={{float:"right"}}>{post.datePublished || ''}</span>
                </Link>
            </li>

            ) ) }
        </ul>
    )       
}
export default Posts