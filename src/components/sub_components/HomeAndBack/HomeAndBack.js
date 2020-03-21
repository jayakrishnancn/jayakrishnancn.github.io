import React from 'react';
import {NavLink} from 'react-router-dom'
import Container from '../../Container/Container'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowCircleLeft, faHome} from '@fortawesome/free-solid-svg-icons'
import "./HomeAndBack.css";

export default class HomeAndBack extends React.Component{
    
    backButtonHandler = e =>{
        e.preventDefault();
        this.props.history.goBack();
    }

    render(){
        return (
            <Container className="mt-3 jc-between home-and-back d-flex">
                { this.props.history ? (
                    <a href="/" 
                        className="btn btn-primary" 
                        style={{marginRight:"2rem"}} 
                        onClick={e=>this.backButtonHandler(e)}>
                        <FontAwesomeIcon icon={faArrowCircleLeft}/> BACK
                    </a>
                ): null}
                <NavLink 
                to="/" 
                exact 
                className="btn btn-primary"
                >
                    <FontAwesomeIcon icon={faHome} /> HOME
                </NavLink>
            </Container>
        )
    }
}

