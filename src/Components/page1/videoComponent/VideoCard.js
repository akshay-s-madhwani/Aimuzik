import React from 'react'
import '../../../App.css';
import {PlayBtnFill} from 'react-bootstrap-icons';
export default function videoCard(props) {
    return (
        <div onClick = {props.onClick
        } data-src={props.dataSrc} className="vertical-items" style = {{backgroundImage :` url(${props.img})`}}>
        <PlayBtnFill  className="bi-play-btn-fill"/>
   </div>
    )
}
