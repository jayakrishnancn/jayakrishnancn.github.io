import React from 'react';
import './Container.css'
const SIZE = ['small','medium','large']

export default function Container(props){
    
    let {size} = props
    size = SIZE.indexOf(size) >= 0 ? size: 'medium'
    
    return <div className={'container' + (size? " "+size :"")} >{props.children}</div>
}