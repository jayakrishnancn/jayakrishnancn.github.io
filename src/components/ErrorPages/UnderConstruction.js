import React from 'react'
import Container from '../Container/Container'
import {NavLink} from 'react-router-dom'
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

export default function PageUnderConstruction(){
    return (
        <Container className="text-center mt-3">
            <h1> <FontAwesomeIcon className="text-danger" icon={faExclamationTriangle} /></h1>
            <h3>Page Under Construction</h3>
            <NavLink to="/">Home</NavLink>
        </Container>

    )
}