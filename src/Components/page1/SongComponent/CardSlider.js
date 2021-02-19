import React from 'react';
import '../../../App.css';
import SongCard from './SongCard';


export default function mainDisplay(props) {
    
    
    return (
        <div className="card-slider">
            <h2>{props.heading}</h2>
            <div className="slide-wrap">
                <div className="card-slide">
    { props.data.map((song) => {   
                    
         return(           <SongCard key = {props.data.indexOf[song]}  data = {song} 
             player = {props.player} update = {props.onClick} toggler = {props.toggler}
             />)
    })
} 
                </div>
            </div>
        </div>
    )
}
