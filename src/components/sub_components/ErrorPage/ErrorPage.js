import React from 'react';
import Container from '../../Container/Container'
import HomeAndBack from '../../sub_components/HomeAndBack/HomeAndBack'
import './ErrorPage.css'

const ErrorPage = props => {
    let {heading,message} = props
    
    return (
        <Container className="error-page text-center" size="small">
            <div>
                <h1>{heading}</h1>
                <h3>{message}</h3>
                <HomeAndBack {...props}/>
            </div>
        </Container>

    )
}

export default  ErrorPage