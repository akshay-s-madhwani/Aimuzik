import React from 'react'
import '../../App.css';
import {PencilSquare, Image} from 'react-bootstrap-icons';
export default function Profile(props) {
    return (
        <div>
        <div className = "profile-backdrop">
            <img src="https://i.ibb.co/92K5wYG/anime-anime-girls-rem-re-zero-re-zero-wallpaper-thumb.jpg" alt="Default Pic" className="profile-pic"/>
            <PencilSquare className='bi-pencil-square'/>
            <Image className="bi-image"/>
        </div>
        <h3>{props.name}</h3>
        </div>
    )
}
