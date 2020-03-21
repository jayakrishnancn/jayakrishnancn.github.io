import React from 'react';
import Container from '../../Container/Container'
import HomeAndBack from '../../sub_components/HomeAndBack/HomeAndBack'

const ErrorPage = props => {
    let {heading,message} = props
    
    return (
        <Container className="text-center mt-3" size="small">
            <h1>{heading}</h1>
            <h3>{message}</h3>
            <HomeAndBack {...props}/>
        </Container>

    )
}

export default  ErrorPage