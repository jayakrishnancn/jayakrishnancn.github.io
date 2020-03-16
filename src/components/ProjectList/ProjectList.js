import React from 'react';
import Container from '../Container/Container'
import Posts from '../Posts/Posts'

function ProjectList() {

    let posts = [{title:'project3',url:'/projects/projett-1',datePublished:'2020-20-02'}]

    return (
        <div className="project-list" style={{marginTop:"3rem"}}>
            <Container>
                <h2>PROJECTS</h2>
                    <Posts posts={posts} />
            </Container>
        </div>
    )    
}

export default ProjectList;