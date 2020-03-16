import React from 'react';
import Container from '../Container/Container'

import './Post.css'

function Post({post}){
    let {title,body} = post 

    if(!body || !title )return <Container><div className="warn">No Data Found</div></Container>
    
    return (              
        <div className="post">
            <Container>
                <h1 className="capitalize post-title">{title}</h1>
                <p className="jaw-drop post-body">{body}</p>
            </Container>
        </div>
    )       
}
export default Post