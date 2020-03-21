import React from 'react'
import Container from '../Container/Container'
import Navbar from '../Navbar/Navbar'
import HomeAndBack from '../sub_components/HomeAndBack/HomeAndBack'

export default function Post(props){
    let {article } =  props
    let {title,body } = article
    return (
        <React.Fragment> 
            <Navbar />
            <Container size="article">
                <h1>{title}</h1>
                <div className="article" dangerouslySetInnerHTML={{ __html: body}} />
           </Container>
            
           <HomeAndBack {...props} />
        </React.Fragment>
    )
}