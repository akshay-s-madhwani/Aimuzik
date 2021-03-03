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

const getAlbum =(data,src)=>{                           if(src in data){                                          return data.indexOf(src);
      }                                                   else{                                                     return data;                              }}
const [liked,setLiked]=useState(false);
const likeToggle =()=>{setLiked(!liked)}

useEffect(()=>{
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
	}                           
	else if(props.active && audio.currentTime != 0)
	{audio.play();
	seeker();
	}                                 
	else{                                             audio.pause();
	}
},[props.active]);

	const canvasRef = useRef()
/*
audio.onended =()=>{
	let index = getAlbum(props.album,audio.src);
	setMainData(props.album[index++]);
audio.src = mainData.src;
	audio.load();
	audio.play();
}
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
                    return`${minute}:${sec}`;}
 
    return (
        <div className='player-body' style ={props.style}>
	    
            <div className="album-art-section" style={{backgroundImage : `url(${props.data.img})`}}>
                <ChevronDown className='bi-chevron-down' onClick ={()=>{props.player()}}/>
                <img src={props.data.img} alt="Album Art" className="album-art"/>
	    <canvas id = 'effects' width='200' height='200' ref={canvasRef}></canvas>
                </div>
                <div className="player-controls">
                    <div className="player-song-info">
                        <Soundwave className='soundwave'/>
                        <div className="song-name">
                        <h4>{props.data.name}</h4>
                        <p>{props.data.artist}</p>
                        </div>
{liked ? <HeartFill  className ='bi-heart heart-fill' onClick={()=>likeToggle()}/> : <Heart className='bi-heart' onClick={()=>likeToggle()}/>}
	 
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
                        
                        <ArrowRepeat/>
                        <ChevronLeft/>
                                {
            props.active ?        
<PauseFill className='bi-pause-fill' onClick={()=>{
                 props.toggler();
                 
            }}/>
            :
            <PlayFill className = 'bi-play-fill' onClick={()=>{
               props.toggler();   }
    }/>
                                }
                    
                    <ChevronRight/>
                    <Shuffle/>
                           </div>
                           
                           </div>
                </div>
    )
}
