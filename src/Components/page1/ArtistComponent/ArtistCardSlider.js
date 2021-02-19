import React from 'react';
import '../../../App.css';
import Artist from './Artist';
import artists from '../../data/Artists';

export default function mainDisplay(props) {

    return (
        <div className="card-slider">
            <h2>{props.heading}</h2>
            <div className="slide-wrap">
                <div className="card-slide">
    { artists.map((data) => {   
                    
         return(           <Artist key = {artists.indexOf(data)}  data = {data}/>)
    })
} 
                </div>
            </div>
        </div>
    )
}
