import React,{Component} from 'react'
import Container from '../Container/Container'
import Navbar from '../Navbar/Navbar'
import {NavLink} from 'react-router-dom'
import './BlogPosts.css'
import {faArrowLeft, faArrowCircleRight} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class BlogPosts extends Component{
    render(){
        let article = {body: 'If I need a quick background pattern to spruce something up, I often think of the CSS3 Patterns Gallery. Some of those are pretty intense but remember they are easily editable because they are just CSS. That means you could take these bold zags and chill them out.…',title:'A Few Background Patterns Sites',date:'2020 MAR 20',url:'/blog/one'}
        let articles = [article,article,article]
        return (    
            <Container> 
                <Navbar />
                <h1>BLOG ARTICLES</h1>
                <ul className="blog-list">
                    { articles.map( ({body,title,date,url}) =>{
                        return (
                            <li>
                                <NavLink to={url}> 
                                    <div>
                                        <span className="list-left">{title}</span> 
                                        <span className="list-right">{date} <FontAwesomeIcon icon={faArrowCircleRight}/></span> 
                                    </div>
                                </NavLink>
                            </li>
                        )                        
                    } )
                    }
                </ul>
            </Container>
        )
    }
}

export default BlogPosts