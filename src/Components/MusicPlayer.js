import React, {useState,useEffect, useRef} from 'react'
import '../App.css';
import '../globals'
import 'p5/lib/addons/p5.sound';
import * as p5 from 'p5';
import P5Wrapper from 'react-p5-wrapper';
import {ChevronDown, ChevronLeft, ChevronRight, Heart, ArrowRepeat, PauseFill,PlayFill,Shuffle, Soundwave} from 'react-bootstrap-icons';

window.p5 = p5;
export default function MusicPlayer(props) {
    
    
const [audio,setAudio] = useState(new Audio(props.src));
const seekBar = useRef();
const [timer,setTimer] = useState(audio.currentTime)
const seeker = ()=>{
	setInterval(()=>{
	setTimer(audio.currentTime)
},500)
}

useEffect(()=>{
	audio.src = props.data.src}
	,[props.data.src]);
useEffect(()=>{
	if(props.active && audio.currentTime == 0)
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

	

       let fft,music,spectrum,x,y;
       function sketch(p){
	       p.preload =()=>{
		       music = p.loadSound(props.data.src)
	       }
	       audio.onChange = ()=>{
		       p.preload =()=>{
		music = p.loadSound(audio.src)
		       }
	       }
	p.setup = () =>{
       
           p.createCanvas(280,280);
           p.angleMode('DEGREES')
           fft = new p5.FFT(0.5,128);
	   p.frameRate(30)
	   
        }
        p.draw = ()=>{
            spectrum = fft.analyze();
            p.translate(p.width / 2 , p.height / 2);
            p.fill(255,255,255)
	    p.stroke(10,10,10)
	for (let i = 0; i< spectrum.length; i++){
	let x =p.map(i , 0 , spectrum.length,0,p.width);
    let y = -p.height + p.map(spectrum[i],0,255,p.height,0);

    let r = p.map(spectrum[i],0,255,40,140);
           x = r * p.sin(i);
           y = r * p.cos(i );
           p.rect(y,x,p.width/spectrum.length,p.height/2)
           }
           
    }
      
    if(props.active){
	      p.loop();}
    else{p.noLoop()}

    }

    
    return (
        <div className='player-body' style ={props.style}>
            <div className="album-art-section" style={{backgroundImage : `url(${props.data.img})`}}>
                <ChevronDown className='bi-chevron-down' onClick ={()=>{props.player()}}/>
                <img src={props.data.img} alt="Album Art" className="album-art"/>
	    <P5Wrapper sketch={sketch } className = 'effects'/>
                
                </div>
                <div className="player-controls">
                    <div className="player-song-info">
                        <Soundwave/>
                        <div className="song-name">
                        <h4>{props.data.name}</h4>
                        <p>{props.data.artist}</p>
                        </div>
                        <Heart className='bi-heart' />
	 
                    </div>
                        
                    <input type="range" ref={seekBar}  name="volume" id="music-scrollbar" value={timer} min = '0' max = {audio.duration} onChange = {()=>{
	  setTimer(seekBar.current.value);
  audio.currentTime = seekBar.current.value
			    setTimer(audio.currentTime)}}/>
                    <div className="main-controls">
                        
                        <ArrowRepeat/>
                        <ChevronLeft/>
                        <span className="play-wrap">
                                {
            props.active ?        
<PauseFill onClick={()=>{
                 props.toggler();
                 
            }}/>
            :
            <PlayFill onClick={()=>{
               props.toggler();   }
    }/>
                                }
                    </span> 
                    <ChevronRight/>
                    <Shuffle/>
                           </div>
                           
                           </div>
                </div>
    )
}
