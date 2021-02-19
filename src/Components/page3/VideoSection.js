import React from 'react'
import '../../App.css';
import VideoCard from './VideoCard';
import VideoFrame from './VideoFrame';

export default function VideoSection({mainSrc, update, show}) {
      
    return (
        <div className="video-page-tiles">
         
            {
        mainSrc.map((obj, index)=>{
            
            return(
                index === 0 ?
                <VideoFrame src = {obj.link} update = {update} show = {show}/> :
                    <VideoCard dataSrc = {obj.link} image = {obj.img} update = {update} show = {show}/>
            )
        
        })
    }
        

    </div>
                )
        }
