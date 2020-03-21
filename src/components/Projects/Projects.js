import React,{Component} from 'react'
import API from '../../util/API'
import MiniPost from '../MiniPost/MiniPost';
import LoadingPage from '../sub_components/LoadingPage/LoadingPage'
import ErrorLoadingPage from '../ErrorPages/ErrorLoadingPage'
import endpoints from '../../util/endpoints'


class Projects extends Component{
    state = {
        articles: [] ,
        error:null,
        loading: true
    }
    componentDidMount(){
        let url = endpoints.PROJECT_LIST

        API.get(url, (data) => {
            // console.log("Data",data)            
            this.setState({articles:data,loading: false});
        },error=>{
            this.setState({error,loading: false})
        });
    }

    render(){
        let {articles, loading, error} = this.state
        if(loading) return <LoadingPage message="loading projects" />
        if(error) return <ErrorLoadingPage {...this.props}/>
        return (    
                <MiniPost articles={articles} />
        )
    }
}

export default Projects;