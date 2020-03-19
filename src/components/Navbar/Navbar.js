import React from 'react';
import {NavLink} from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <nav className="d-flex ai-center jc-between Navbar">
            <div>
                <NavLink to="/" exact >HOME</NavLink> 
            </div>
            <div>
                <NavLink to="/blog" exact >BLOG</NavLink> 
                <NavLink to="/blog" exact >PROJECTS</NavLink> 
            </div>
        </nav>

    );
}

export default Navbar;
