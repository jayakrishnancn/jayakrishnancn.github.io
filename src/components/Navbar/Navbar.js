import React from 'react';
import Container from '../Container/Container'
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css'

export default function Navbar(){
    return (
    <nav className="navbar">
        <Container>
            <div className="navbar-left">
                <h1><NavLink to="/" className="not-link" exact>Jayakrishnan</NavLink></h1>
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