import React from 'react';
import profilePic from './profile-pic-compressed.jpg'
import Container from '../Container/Container'
import './Home.css'
import {NavLink} from 'react-router-dom' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithubAlt, faStackOverflow, faLinkedin, faCodepen} from '../../../node_modules/@fortawesome/free-brands-svg-icons/index.es'
import {faFlask} from '@fortawesome/free-solid-svg-icons'

export default function Home(){
    return (
        <div className="home">
            <Container>
                <NavLink to="/" className="profile-pic">
                    <img src={profilePic} height="100" width="100" intrinsicsize="100x100" className="rounded" />
                </NavLink>
                <h1>Jayakrishnan</h1>
                <div className="bio">
                    Systems Engineer @ <a href="https://www.tcs.com/" target="_blank" rel='noopener noreferrer'>TCS</a>
                    <br/>
                    Full stack developer
                    <br/>

                </div>
                <nav className="menu mt-1">
                    <ul>
                        <li><NavLink to='/blog'>Blog</NavLink></li>
                        <li><NavLink to='/blog'>Projects</NavLink></li>
                        <li><NavLink to='/blog'>About me</NavLink></li>
                    </ul>
                </nav>
                <div className="social-media">
                    <ul>
                        <li><NavLink to='/blog'><FontAwesomeIcon icon={faGithubAlt} /></NavLink></li>
                        <li><NavLink to='/projects'><FontAwesomeIcon icon={faStackOverflow} /></NavLink></li>
                        <li><NavLink to='/projects'><FontAwesomeIcon icon={faLinkedin} /></NavLink></li>
                        <li><NavLink to='/projects'><FontAwesomeIcon icon={faCodepen} /></NavLink></li>
                    </ul>

                </div>
            </Container>
        </div>
    )
}