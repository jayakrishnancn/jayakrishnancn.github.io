import React, {Fragment} from 'react';
import {NavLink} from 'react-router-dom'
import './Navbar.css'
import Container from '../Container/Container'


const Navbar = () => {
    return (
        <Fragment>
            <nav className="Navbar">
                <Container className="d-flex ai-center jc-between ">
                    <ul>
                        <NavLink to="/" exact >HOME</NavLink> 
                    </ul>
                    <ul>
                        <li><NavLink to="/blog" exact >BLOG</NavLink> </li>
                        <li><NavLink to="/projects" exact >PROJECTS</NavLink> </li>
                    </ul>
                </Container>
            </nav>
            <div className="Navbar-after"></div>
        </Fragment>

    );
}

export default Navbar;
