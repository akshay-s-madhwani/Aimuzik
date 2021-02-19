import React, {useState,useEffect, useRef} from 'react'
import '../App.css';
import '../globals'
import 'p5/lib/addons/p5.sound';
import * as p5 from 'p5';
import {ChevronDown, ChevronLeft, ChevronRight, Heart, ArrowRepeat, PauseFill,PlayFill,Shuffle, Soundwave} from 'react-bootstrap-icons';

window.p5 = p5;
export default function MusicPlayer(props) {
    
    useEffect(()=>{
     props.updateSrc(props.src)},
        []
    )
    
//     const [song, setSong] = useState(props.src)
// if(song !== props.src){
//     setSong(props.src)
// }
const audio = useRef()
const [active, setActive] = useState(false);
const toggle = ()=>setActive (!active);

ref.audio.current.src = props.song

console.log(audio)
        console.log(props.src,props.song)
        if(active){audio.play()}
    
    //     let fft,audio,spectrum,x,y;
    //     function sketch(p){
    //         p.preload = ()=>{
    //             audio = p.loadSound(song)
    //             console.log(song)
    //             console.log(props.active)
                
    //    }
    //     p.setup = ()=> {
    //         p.createCanvas(280,280);
    //         p.angleMode('DEGREES')
    //         fft = new p5.FFT(0.5,256);
    
    //     }
    //     if(props.active){
    //         audio.play()
    //     p.draw = ()=>{
    //         spectrum = fft.analyze();
    //       p.beginShape();
    //         p.translate(p.width / 2 , p.height / 2);
    //         p.fill(255,255,255);
    //         for (let i = 0; i< spectrum.length; i++){
    //             //let x = map(i , 0 , spectrum.length,0,width);
    //         //let y = -height + map(spectrum[i],0,255,height,0);
    //       let r = p.map(spectrum[i],0,255,40,140);
    //       x = r * p.sin(i);
    //       y = r * p.cos(i );
    //       p.vertex(x ,y)
    //       }
    //       p.endShape(); 
    //   }
    //  }
    
    //   else{
    //       audio.pause()
    //       p.noLoop();
    //   }
    // //   else if(props.active && song !== 'undefined'){
    // // audio.play()          
    // //       //p.loop();
    // //   }
    // }
    // if(props.active && song !== 'undefined' || song == null){
    // const p = new p5(sketch)
    // }


    
    return (
        <div className='player-body' style ={props.style}>
            <div className="album-art-section" style={{backgroundImage : `url(${props.img})`}}>
                <ChevronDown className='bi-chevron-down' onClick ={()=>{props.player()}}/>
                <img src={props.img} alt="Album Art" className="album-art"/>
                <div className="effects"></div>
                </div>
                <div className="player-controls">
                    <div className="player-song-info">
                        <Soundwave/>
                        <div className="song-name">
                        <h4>{props.name}</h4>
                        <p>{props.artist}</p>
                        </div>
                        <Heart className='bi-heart' />
                    </div>
                    <audio autoplay = {false} ref = {audio} src ={props.song} />
                        
                    <input type="range" name="volume" id="music-scrollbar" value='0' min = '0' max = '100' />
                    <div className="main-controls">
                        
                        <ArrowRepeat/>
                        <ChevronLeft/>
                        <span className="play-wrap">
                                {
            props.active ?        
<PauseFill onClick={()=>{
                 toggle();
                 
            }}/>
            :
            <PlayFill onClick={()=>{
                toggle();   }
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
