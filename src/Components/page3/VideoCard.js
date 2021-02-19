import React from 'react'
import {PlayBtnFill} from 'react-bootstrap-icons';
import '../../App.css';
export default function VideoCard(props) {
    return (
        <div className="video-page-img"style = {{backgroundImage : `url(${props.image})`}}
        data-src = {props.dataSrc}
        onClick = {(e)=>{props.show();props.update(e)}}>
            <PlayBtnFill className="bi-play-btn-fill" 
            data-src = {props.dataSrc}
        />
        </div>
    )
}
