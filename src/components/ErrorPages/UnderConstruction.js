import React,{Component} from 'react';
import Container from '../Container/Container'
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import HomeAndBack from '../sub_components/HomeAndBack/HomeAndBack'

class PageUnderConstruction extends Component{

    render(){

        return (
            <Container className="text-center mt-3" size="small">
                <h1><FontAwesomeIcon className="text-danger" icon={faExclamationTriangle} /></h1>
                <h3>Page Under Construction</h3>
                <HomeAndBack {...this.props}/>
            </Container>

        )
    } 
} 

export default  PageUnderConstruction