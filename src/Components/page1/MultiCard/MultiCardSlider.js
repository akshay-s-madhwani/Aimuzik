import React from 'react';
import '../../../App.css';
import MultiCard from './MultiCard';


export default function mainDisplay(props) {
    let arr = [
        1,2,3,4,5,6,7,8
    ]
    return (
        <div className="card-slider">
            <h2>{props.heading}</h2>
            <div className="slide-wrap">
                <div className="card-slide">
    { arr.map((song) => {   
                    
         return(           <MultiCard key = {arr.indexOf[song]} />)
    })
} 
                </div>
            </div>
        </div>
    )
}
