import React from 'react';
import profilePic from './profile-pic-compressed.jpg'
import {NavLink} from 'react-router-dom' 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faGithubAlt, faStackOverflow, faLinkedin, faCodepen} from '@fortawesome/free-brands-svg-icons'
import './Home.css'

export default function Home(){
    return (
        <div className="home">
            <div>
                <NavLink to="/" className="profile-pic">
                    <img src={profilePic} alt="my cute pic" height="100" width="100" intrinsicsize="100x100" className="rounded" />
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
                        <li><NavLink to='/projects'>Projects</NavLink></li>
                        <li><NavLink to='/about-me'>About me</NavLink></li>
                    </ul>
                </nav>
                <div className="social-media">
                    <ul>
                        <li><a href='https://github.com/jayakrishnancn/' target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faGithubAlt} /></a></li>
                        <li><a href='https://stackoverflow.com/users/4004879/jayakrishnan' target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faStackOverflow} /></a></li>
                        <li><a href='https://www.linkedin.com/in/jayakrishnancn/' target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a></li>
                        <li><a href='https://codepen.io/jayakrishnancn/' target="_blank" rel='noopener noreferrer'><FontAwesomeIcon icon={faCodepen} /></a></li>
                    </ul>

                </div>
            </div>
        </div>
    )
}