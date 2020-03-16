import React,{Component} from 'react';
import Container from '../Container/Container'
import Posts from '../Posts/Posts'

class BlogPosts extends Component{

    render(){
        
        let posts = [{ 
            "title": "14 Ways Json Can Improve Your SEO",
            "alternativeHeadline": "and the women who love them",
            "url": "/blog/14-ways-json",
            "datePublished": "2015-09-20",
            "dateModified": "2015-09-20",
            "description": "We love to do stuff to help people and stuff",
        }];
        
        return (
            <div className="blog-posts" style={{marginTop:"3rem"}}>
                <Container>
                    <h2>BLOG POSTS</h2>
                     <Posts posts={posts} />
                </Container>
            </div>
        )
    }
}


export default BlogPosts;