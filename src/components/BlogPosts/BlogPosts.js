import React,{Component, Fragment} from 'react'
import Container from '../Container/Container'
import Navbar from '../Navbar/Navbar'
import {NavLink} from 'react-router-dom'
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
            <Fragment> 
                <Navbar />
                <Container size="article no-select">
                <h1>BLOG ARTICLES</h1>
                <ul className="blog-list">
                    { 
                        articles.map( ({body,title,date,url},index) =>{
                            return (
                                <li key={index}>
                                    <NavLink to={url}> 
                                        {title} 
                                        <span className="read-more">READ MORE</span>
                                    </NavLink>
                                </li>
                            )                        
                        })
                    }
                </ul>
                </Container>
            </Fragment>
        )
    }
}

export default BlogPosts