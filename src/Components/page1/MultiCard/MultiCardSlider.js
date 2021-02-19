import React from 'react';
import '../../../App.css';
import MultiCard from './MultiCard';
import songs from '../../data/Songs'

export default function mainDisplay(props) {
    let combined = []
        let eng = [],  eng2 =[],hindi=[],hindi2 = [];
        for(let i =0; i < 4; i++){
         eng.push(songs['English'][Math.ceil(Math.random()*5)]);
         hindi.push(songs['Hindi'][Math.ceil(Math.random()*5)]);
         eng2.push(songs['English2'][Math.ceil(Math.random()*4)]);
         hindi2.push(songs['Hindi'][Math.ceil(Math.random()*5)]);
        }
        
        combined.push(eng);
        combined.push(hindi)
        combined.push(eng2);
        combined.push(hindi2);
     
    return (
        <div className="card-slider">
            <h2>{props.heading}</h2>
            <div className="slide-wrap">
                <div className="card-slide">
                { combined.map((arr) => {   
                    
                    return( 
                      <MultiCard key = {combined.indexOf[arr]}  array = {arr} 
                        player = {props.player} update = {props.onClick}/>)
               })
           } 
                </div>
            </div>
        </div>
    )
}
