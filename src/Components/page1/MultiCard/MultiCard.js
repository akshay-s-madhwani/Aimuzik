import React from 'react';
import '../../../App.css';
import SongCard from './SongCard';

export default function MultiCard({array,player,update}) {
    
    return (
        <div className='multi_card' >
               { array.map((song) =>{           
                    return(           
                        <SongCard  key = {array.indexOf[song]} data = {song} player = {player} update = {update}/>
                    )
               })
           }
        </div>
    )
}
