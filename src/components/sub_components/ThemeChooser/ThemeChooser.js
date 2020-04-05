import React, { Component } from 'react';
import './ThemeChooser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faCloudSun } from '@fortawesome/free-solid-svg-icons';

class ThemeChooser extends Component{
    render(){
        let {darkTheme} = this.props;
        return (
        <div className="theme cursor" onClick={this.props.onClick}>
            { !darkTheme ? 
                <FontAwesomeIcon icon={faMoon} /> :
                <FontAwesomeIcon icon={faCloudSun} /> 
            }
        </div>
        )
    }
}

export default ThemeChooser;