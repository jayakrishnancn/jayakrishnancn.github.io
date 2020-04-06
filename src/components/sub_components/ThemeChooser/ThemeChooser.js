import React, { Component } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

class ThemeChooser extends Component{
    render(){
        
        return (
            <div className="theme cursor" onClick={this.props.onClick}>
                <span className="theme-icon"><FontAwesomeIcon icon={faMoon} /></span>
                <span className="theme-icon"><FontAwesomeIcon icon={faSun} /> </span>

            </div>
        )
    }
}

export default ThemeChooser;