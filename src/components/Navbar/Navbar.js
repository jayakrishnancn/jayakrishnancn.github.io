import React, {Fragment} from 'react';
import {NavLink,Link} from 'react-router-dom'
import Container from '../Container/Container'
import {faHome} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import './Navbar.css'


const Navbar = () => {
    return (
        <Fragment>
            <nav className="Navbar">
                <Container>
                    <div  className="d-flex navbar-inner ai-center jc-between">
                        <ul>
                            <li><NavLink tabIndex="0" to="/" exact >HOME</NavLink></li>
                        </ul>
                        <ul>
                            <li><NavLink to="/blog" exact >BLOG</NavLink> </li>
                            <li><NavLink to="/projects" exact >PROJECTS</NavLink> </li>
                        </ul>
                    </div>
                </Container>
            </nav>

            <Container>
                <Link to="/" className="sm btn Navbar-after">
                    &nbsp;<FontAwesomeIcon icon={faHome}/>&nbsp;
                </Link>
                <div className="Navbar-gap"></div>
            </Container>
        </Fragment>

    );
}

export default Navbar;
