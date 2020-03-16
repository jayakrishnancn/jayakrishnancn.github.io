import React from 'react'
import Container from '../Container/Container'
import {NavLink} from 'react-router-dom'
export default function PageNotFound(){
    return (
        <Container className="text-center mt-5">
        
            <h1>Page Not Found</h1>
            <NavLink to="/">Home</NavLink>
        </Container>

    )
}