import React,{Component} from 'react'
import Container from '../Container/Container'
import {NavLink} from 'react-router-dom'
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

class ErrorLoadingPage extends Component{

    backButtonHandler = () =>{
        this.props.history.goBack();
    }

    render(){
        // console.log(this.props)
        return (
            <Container className="text-center mt-3" size="small">
                <h1><FontAwesomeIcon className="text-danger" icon={faExclamationTriangle} /></h1>
                <h3>Error Loading Page </h3>
                <NavLink to="/">Home</NavLink>
                <div className="link" onClick={this.backButtonHandler}>Back</div>
            </Container>

        )
    } 
}


export default  ErrorLoadingPage