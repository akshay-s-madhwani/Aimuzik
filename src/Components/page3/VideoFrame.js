import React from 'react'
import '../../App.css';
import {BiFullscreen} from 'react-icons/bi';
export default function VideoFrame(props) {
    return (
        <div className="video-page-frame">
        <iframe src= {props.src} title = "bigVideo"></iframe>
        <BiFullscreen className = 'video-display-icon' data-src={props.src}
        onClick = {(e)=>{props.show();props.update(e)}
        }/>
        </div>
    )
}
