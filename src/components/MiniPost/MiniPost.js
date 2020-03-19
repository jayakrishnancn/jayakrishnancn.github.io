import React from 'react'
import Container from '../Container/Container'
import Navbar from '../Navbar/Navbar'
import {NavLink} from 'react-router-dom'

export default function MiniPost({isBlogPosts,articles}){
    return (
        <React.Fragment> 
            <Navbar />
            <Container size="article">
                <h1>{isBlogPosts?'BLOG POSTS':'PROJECTS'}</h1>
                <ul className="blog-list">
                    { articles && articles.map( ({body,title,date,url},index) =>{
                            return (
                                <li key={index} className="p-1">
                                    <div className="read-atricle">{title}</div>
                                    <NavLink to={url} className="btn-sm btn btn-primary">READ MORE</NavLink>
                                </li>
                            )                        
                        })
                    }
                </ul>
            </Container>
        </React.Fragment>
    )
}