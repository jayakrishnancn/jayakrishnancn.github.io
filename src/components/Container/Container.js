import React from 'react';
import './Container.css'
const SIZE = ['small','medium','large']

export default function Container(props){
    
    let {size,className} = props
    size = SIZE.indexOf(size) >= 0 ? size: 'medium'
    let classes = 'container ' + (size?  size :"")
    classes = className ? classes + " "+className : classes 
    return <div className={classes} >{props.children}</div>
}