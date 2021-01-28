import React , {useState} from 'react'
import VideoCard from './VideoCard';
import '../../../App.css';

export default function VideoComponent(props) {
    let [source, setSource] = useState("https://www.youtube.com/embed/2R_K9BvxllY");

function updateSource(e){
    setSource(e.target.getAttribute('data-src'));
    console.log('changed')
}

    return (
        <div className="video-display">
            <h2>Trending Musicals</h2>
            <div className="video-display-inner-wrap">
                <div className="display-showcase">
                    <iframe src={source} title="MainDisplay" frameborder="0"></iframe>
                </div>
                <div className="display-vertical-slide-wrap">
                    <div className="display-vertical-slide">
                {props.srcArray.map((src)=>{
                    
                    return(
                    <VideoCard onClick={updateSource} dataSrc={src.link}
                 img = {src.img}/>
                    )
                })}
                    </div>
                </div>
            </div>
        </div>
    )
}
