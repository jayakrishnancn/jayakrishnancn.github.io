import React from 'react'
import Container from '../Container/Container'
import Navbar from '../Navbar/Navbar'

export default function Post({article}){
    let {title,body } = article
    return (
        <React.Fragment> 
            <Navbar />
            <Container size="article">
                <h1>{title}</h1>
                <div className="article">{body}</div>
           </Container>
        </React.Fragment>
    )
}