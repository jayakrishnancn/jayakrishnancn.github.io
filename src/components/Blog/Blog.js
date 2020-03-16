import React, {Component} from 'react';
import Container from '../Container/Container'
import Post from '../Post/Post'

class Blog extends Component{
    render(){
        let post = {title:'title',body:'body'}
        return(
            <div style={{marginTop:"3rem"}}>
                <Container>
                    <Post post={post} />
                </Container>
            </div>
        )
    }
}

export default Blog;