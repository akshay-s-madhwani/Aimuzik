import React from 'react';
import '../../../App.css';

export default function SongCard(props) {
    
    return (
        <div className="card" style = {{backgroundImage :`url(${props.data.img})`}}
        onClick ={ ()=>{
            props.player();
            props.update(props.data);}
        }>
            <div className="card-info">
                <h4>{props.songName}</h4>
                <p>{props.artist}</p>
            </div>
        </div>
    )
}
