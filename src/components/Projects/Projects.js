import React,{Component} from 'react'

import MiniPost from '../MiniPost/MiniPost';
class Projects extends Component{
    state = {
        articles: [] 
    }

    componentDidMount(){
        
        fetch('/projects.json')
            .then(response => response.json())
            .then(({data}) => {
                const articles = data;
                if(articles && articles.length > 0){
                    this.setState({articles})
                }   
            });
    }

    render(){
             
        return (    
                <MiniPost articles={this.state.articles} />
        )
    }
}

export default Projects;