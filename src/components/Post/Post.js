import React from 'react';
import {Link } from 'react-router-dom'

function Post({title,body}){
    if(!body || !title ) return <div className="warn">No Data Found</div>
    
    return (              
        <div className="post">
            <h1>{title}</h1>
            <p>{body}</p>
        </div>
    )       
}
export default Post