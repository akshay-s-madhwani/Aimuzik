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

	

       let fft,music;
       function sketch(p){
	       p.preload =()=>{
		       music = p.loadSound(`${props.data.src}`)
	       }
	       audio.onChange = ()=>{
		       p.preload =()=>{
	music = p.loadSound(props.data.src.toString())
		       }
	       }
	p.setup = () =>{
       
           p.createCanvas(256,256);
           p.angleMode(p.DEGREES)
           fft = new p5.FFT(0.8,128);
	   p.frameRate(30)	
	
        }
        p.draw = ()=>{
	p.background(0)	
		let spectrum = fft.analyze();
	p.fill(200)
	p.stroke(120)

            p.translate(p.width / 2 , p.height / 2);
		p.beginShape()
            
	for (let i = 0; i< spectrum.length; i++){
	let amp = spectrum[i]
        let angle = p.map(i, 0, spectrum.length,0,360)
    let r = p.map(amp,0,255,40,200);
          let  x = r * p.cos(angle);
          let  y = r * p.sin(angle);
           p.vertex(x,y)
           }
		p.endShape()
		
           
    }
      
    if(props.active){
	      p.loop();
    }
    else{p.noLoop()}

    }
const effects = useRef()
if(audio.src){
 new p5(sketch,effects.current);}
    
    return (
        <div className='player-body' style ={props.style}>
            <div className="album-art-section" style={{backgroundImage : `url(${props.data.img})`}}>
                <ChevronDown className='bi-chevron-down' onClick ={()=>{props.player()}}/>
                <img src={props.data.img} alt="Album Art" className="album-art"/>
	    <div ref={effects} id = 'effects'></div>
                
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
