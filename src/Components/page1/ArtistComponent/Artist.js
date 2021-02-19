import React from 'react'
import '../../../App.css';
export default function Artist(props) {
    return (
        <div className='artist-card-wrap'>
            <div className="artist_card" style={{backgroundImage:`url(${props.data.img})`}}></div>
            <h3 className="artist-name">{props.data.name}</h3>
        </div>
    )
}
