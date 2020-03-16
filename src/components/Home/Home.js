import React from 'react';
import {NavLink} from 'react-router-dom'
import Container from '../Container/Container'
import profilePic from './profile-pic.jpg'
import './Home.css'

export default function Home(){
    return (
        <div className="home">
            <Container>
                <div className="profile" style={{background:`url(${profilePic}) center center no-repeat`,backgroundSize:"cover"}}> </div>
                <div className="right">
                 <h1>Jayakrishnan</h1>  
                 <h4>Systems Engineer @ <a href="https://www.tcs.com" rel="noopener noreferrer" target="_blank">TCS</a></h4>
                </div>
            </Container>
            <Container className="mt-3">
                    <NavLink to="/blog"  className="m-1">BLOG</NavLink>
                    <NavLink to="/projects" className="m-1">PROJECTS</NavLink>
                    <NavLink to="/more" className="m-1">MORE</NavLink>
            </Container>
        </div>
    )
}