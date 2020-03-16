import React from 'react';
import Container from '../Container/Container'
import { NavLink } from 'react-router-dom';
import './Navbar.css'

export default function Navbar(){
    return (
    <nav className="navbar">
        <Container>
            <div className="navbar-left">
                <div className="logo"><NavLink to="/" className="not-link" exact>Jayakrishnan</NavLink></div>
            </div>
            <div className="navbar-right">
                <NavLink to="/" exact>HOME</NavLink>
                <NavLink to="/projects">PROJECTS</NavLink>
                <NavLink to="/blog">BLOG</NavLink>
            </div>
        </Container>
    </nav>
    )
}