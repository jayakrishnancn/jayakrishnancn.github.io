import React,{Component} from 'react'
import API from '../../util/API'
import MiniPost from '../MiniPost/MiniPost';
class Projects extends Component{
    state = {
        articles: [] ,
        error:null
    }
    componentDidMount(){
        let url = '/projects.json'

        API.get(url, (data) => {
            // console.log("Data",data)            
            this.setState({articles:data});
        },error=>{
            this.setState({error})
        });
    }

    render(){
             
        return (    
                <MiniPost articles={this.state.articles} />
        )
    }
}

export default Projects;