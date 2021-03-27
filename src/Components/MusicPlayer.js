import React, {useState,useEffect, useRef} from 'react'
import '../App.css';
import '../globals'
import 'p5/lib/addons/p5.sound';
import * as p5 from 'p5';
import P5Wrapper from 'react-p5-wrapper';
import {ChevronDown, ChevronLeft, ChevronRight, Heart,HeartFill, ArrowRepeat, PauseFill,PlayFill,Shuffle, Soundwave} from 'react-bootstrap-icons';

window.p5 = p5;
export default function MusicPlayer(props) {
    
    
const [audio] =useState(new Audio(props.src));
const seekBar = useRef();
const [timer,setTimer] = useState(audio.currentTime)
const seeker = ()=>{
	setInterval(()=>{
	setTimer(audio.currentTime)
},500)
}

const [playable,setPlayable]=useState(false);
const [liked,setLiked]=useState(false);
const likeToggle =()=>{setLiked(!liked)}
let [shuffle, setShuffle] = useState(false);
let [message , setMessage]=useState('');
const [visible,setVisible]=useState(false)
const notif = <div className='message' ><h5>{message}</h5></div>;
useEffect(()=>{
	setVisible(true);
window.setTimeout(()=>setVisible(false),2500)},[message]);

useEffect(()=>{
	let index = 0; 
		if(props.album.includes(props.data )){
	index = props.album.indexOf(props.data)};

	audio.src = props.data.src;
	audio.load();
	audio.play();
	setLiked(false);
},[props.data.src]);
useEffect(()=>{
	if(props.active && audio.currentTime === 0)
	{audio.load();
          audio.play();
	seeker();
      audio.oncanplay=()=>{setPlayable(true)}
	}                           
	else if(props.active && audio.currentTime != 0)
	{audio.play();
	seeker();
	audio.oncanplay=()=>{setPlayable(true)}
	}                                 
	else{                                             audio.pause();
	setPlayable(false);
	}
},[props.active]);


	const canvasRef = useRef()
    useEffect(()=>{
audio.onended =()=>{
	let index = 1;
	if(props.album.includes(props.data)){
	index = props.album.indexOf(props.data);}
	if(shuffle){
		index = Math.ceil(Math.random()*props.album.length-2);
	}
	if(index <=props.album.length -2){
	index = index + 1;
	
	props.setSrc(props.album[index]);
audio.load();
	if (!audio.playing){
		audio.play()}
   if(!props.active){props.toggler()}}
	else{
		setMessage('Last Song')}
}},[props.data])
/*
function draw(ctx ,buffer,Width,Height){
                                                        analyser.getByteFrequencyData();                 ctx.fillStyle = `rgb(${255},${255},${255})`;
        ctx.moveTo(Width/2,Height/2);
        ctx.beginPath();
        for(let i = 0;i<buffer;i++){
         let amp = dataArray[i];
        let angle =map(i,0,buffer,0,360);
        let r = map(amp,0,255,40,200);
                let x = r*Math.cos(angle);
                let y = r * Math.sin(angle);
                ctx.fillRect(x,y,5,dataArray[i]/10)

        }

}

const audioCtx = 
	new (window.AudioContext||window.webkitAudioContext)();

const analyser = audioCtx.createAnalyser();
const [source]=useState(audioCtx.createMediaElementSource(new Audio()));

source.connect(analyser);
source.connect(audioCtx.destination);     

analyser.fftSize = 256;
const bufferLength = analyser.frequencyBinCount;
let dataArray = new Uint8Array(bufferLength);
analyser.getByteTimeDomainData(dataArray);
useEffect(()=>{

let ctx= canvasRef.current.getContext('2d');
let Width = canvasRef.current.width;
let Height = canvasRef.current.height;

let drawVal
const render =()=>{
	if(props.active && audio.isPlaying){
	draw (ctx,bufferLength,Width,Height);
	 drawVal =window.requestAnimationFrame(draw);}
}
render();
	return ()=>{
		window.cancelAnimationFrame(drawVal);
	}
},[draw])
function map(value, low1, high1, low2, high2) { return low2 + (high2 - low2) * (value - low1) / (high1 - low1); }



*/


const timerFormat =(time)=>{let date = new Date(time*1000);
                    let minute = date.getUTCMinutes();
                    let sec = date.getUTCSeconds();
	if(sec<10){sec = `0${sec}`};
	if(minute < 10){ minute = `0${minute}`};
	if(time){
                    return`${minute}:${sec}`;}
	else{ return `00:00`}
}



 
    return (
        <div className={props.clss} style ={props.style}>
	    
            <div className="album-art-section" style={{backgroundImage : `url(${props.data.img})`}}>
                <ChevronDown className='bi-chevron-down' onClick ={()=>{props.player()}}/>
                <img src={props.data.img} alt="Album Art" className="album-art" onClick={()=>{props.setClss()}}/>
	    <canvas id = 'effects' width='200' height='200' ref={canvasRef}></canvas>
                </div>
                <div className="player-controls">
                    <div className="player-song-info">
                        <Soundwave className='soundwave'/>
                        <div className="song-name" onClick={()=>{props.setClss()}}>
                        <h4>{props.data.name}</h4>
                        <p>{props.data.artist}</p>
                        </div>
{liked ? <HeartFill id='heart' className ='bi-heart heart-fill' onClick={()=>likeToggle()}/> : <Heart id='heart' className='bi-heart' onClick={()=>{likeToggle();
setMessage(' Liked ');}}/>}
	 
                    </div>
                     <div className = 'scroll-wrap' >  
	    <p className='songTimer'>{timerFormat(timer)}</p>
	    <p className='songDuration'>{timerFormat(audio.duration)}</p>

                    <input type="range" ref={seekBar}  name="volume" id="music-scrollbar" value={timer} min = '0' max = {audio.duration} onChange = {()=>{
	  setTimer(seekBar.current.value);
  audio.currentTime = seekBar.current.value
			    setTimer(audio.currentTime)}}/>
	    </div>
                    <div className="main-controls">
                        
                        <ArrowRepeat className='arrow-repeat'  onClick ={()=>{audio.loop = !audio.loop; setMessage( audio.loop?' Loop : On' :'Loop : Off')}}/>
                        <ChevronLeft onClick = {()=>{
                            let index = props.album.indexOf(props.data);
				if(shuffle){                                              index = Math.ceil(Math.random()*props.album.length-2);                                      }
                            if(index >=1){
				    index = index-1
                            props.setSrc(props.album[index]);}else{setMessage('Can\'t Go Back')}
                        audio.load();
                        if(!audio.playing){audio.play()}     }}/>

                                { 
            props.active ?
		playable ?      
<PauseFill className='bi-pause-fill' onClick={()=>{
                 props.toggler();
                 
            }}/>: 
	<div className ='loading'onClick={()=>                      {                                                     props.toggler();                                                                               }}></div>   :
            <PlayFill className = 'bi-play-fill' onClick={()=>{
               props.toggler();   }
    }/>
                                }
                    
                    <ChevronRight onClick={()=>{
                        
                        let index = props.album.indexOf(props.data);
			    if(shuffle){                                              index = Math.ceil(Math.random()*props.album.length-2);                                      }
                        if(index <= props.album.length -2){index = index + 1;
                        props.setSrc(props.album[index]);
                    audio.load();
                    if(!audio.playing){audio.play()}} else{ setMessage(' Last Song ');}
                          
                    }}/>
                    <Shuffle className='shuffle' onClick ={()=>{setShuffle(!shuffle);
		    setMessage(shuffle?'Shuffle : On' : 'Shuffle : Off')}}/>
                           </div>
	
{visible ? notif : null} 
                           </div>
                </div>
    )
}
