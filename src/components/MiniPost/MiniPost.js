import React from 'react'
import Container from '../Container/Container'
import Navbar from '../Navbar/Navbar'
import {NavLink} from 'react-router-dom'
import ErrorLoadingPage from '../ErrorPages/ErrorLoadingPage'
import './MiniPost.css'
export default function MiniPost({type,articles}){
    if ( !articles || articles.length <= 1) return <ErrorLoadingPage />

    return (
        <React.Fragment> 
            <Navbar />  
            <Container size="article">
                <h1>{type && type === 'blog'?'BLOG POSTS':'PROJECTS'}</h1>
                <ul className="blog-list">
                    { articles.map( ({body,title,date,url},index) =>{
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