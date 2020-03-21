import React,{Fragment} from 'react'
import {faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import ErrorPage from '../sub_components/ErrorPage/ErrorPage'
const faExclamationTriangleIcon = <FontAwesomeIcon className="text-danger" icon={faExclamationTriangle} />

const PageNotFound = props => {

    return (
        <Fragment>
                <ErrorPage heading={faExclamationTriangleIcon} message="Page Under Construction" {...props}/>
        </Fragment>
    )
} 
export default  PageNotFound