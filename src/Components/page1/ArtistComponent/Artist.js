import React from 'react'
import '../../../App.css';
export default function Artist(props) {
    return (
        <div className='artist-card-wrap'>
            <div className="artist_card" srtyle={{backgroundImage:`url(${props.image})`}}></div>
            <h3 className="artist-name">{props.artist}</h3>
        </div>
    )
}
