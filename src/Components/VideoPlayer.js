import React ,{useState} from 'react'
import '../App.css';
import {XCircleFill} from 'react-bootstrap-icons';
import {AiOutlineRotateLeft} from 'react-icons/ai';

export default function VideoPlayer(props) {
let [screen, setScreen] = useState('video-player');
let [frame, setFrame] = useState('video-player-frame');
let [cross, setCross] = useState('x');
const screenChange = ()=>{
    screen === "video-player" ?
    setScreen("video-player changed") :
    setScreen("video-player")
    frame === "video-player-frame" ?
    setFrame("video-player-frame full") :
    setFrame("video-player-frame")
    cross === "x" ?
    setCross("x fix-x") :
    setCross("x")
}
    return (
        <div className = {screen}>
            <XCircleFill className={cross} onClick={props.showNot}/>
            <iframe 
            className={frame} title = "VideoPlayer" src={props.src}/>
<AiOutlineRotateLeft className='rotate' onClick = {screenChange}/>
        </div>
    )
}
