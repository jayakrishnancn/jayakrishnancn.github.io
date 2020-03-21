import React from 'react';
import PropTypes from 'prop-types';
import Container from '../../Container/Container'
import './LoadingPage.css'

const LoadingPage = props => {
    return (
        <React.Fragment>
            <div className="loader-container">
                <div className="loader">Loading...</div>
            </div>
            <Container className="text-center mt-3" size="small">
                {props.message}            
            </Container>
        </React.Fragment>
    );
};


LoadingPage.propTypes = {
    message: PropTypes.string
};


export default LoadingPage;
