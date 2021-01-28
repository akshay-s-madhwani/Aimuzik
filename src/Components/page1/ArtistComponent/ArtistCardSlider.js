import React from 'react';
import '../../../App.css';
import Artist from './Artist';


export default function mainDisplay(props) {
    let arr = [
        "David Guetta","David Guetta","David Guetta","David Guetta","David Guetta","David Guetta","David Guetta","David Guetta",
    ]
    return (
        <div className="card-slider">
            <h2>{props.heading}</h2>
            <div className="slide-wrap">
                <div className="card-slide">
    { arr.map((song) => {   
                    
         return(           <Artist key = {arr.indexOf[song]}  artist = "Sabrina Carpenter"/>)
    })
} 
                </div>
            </div>
        </div>
    )
}
