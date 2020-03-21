import React,{Fragment} from 'react'
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import ErrorPage from '../sub_components/ErrorPage/ErrorPage'
const faExclamationTriangleIcon = <FontAwesomeIcon className="text-danger" icon={faExclamationTriangle} />

const ErrorLoadingPage = props => {

    return (
        <Fragment>
                <ErrorPage heading={faExclamationTriangleIcon} message="Error Loading Page" {...props}/>
        </Fragment>
    )
} 
export default  ErrorLoadingPage