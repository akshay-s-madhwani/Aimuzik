import React from 'react';
import '../../../App.css';
import SongCard from './SongCard';

export default function MultiCard(props) {
    let arr = ["Alice in Wonderland","Alice in Wonderland","Alice in Wonderland","Alice in Wonderland"];
    return (
        <div className='multi_card'>
               { arr.map((song) =>{           
                    return(           
                        <SongCard  key = {arr.indexOf[song]} songName={song}  artist = "Sabrina Carpenter"/>
                    )
               })
           }
        </div>
    )
}
