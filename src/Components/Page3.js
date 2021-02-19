import React, {useState} from 'react'
import '../App.css';
import data from './data/videoPge';
import VideoSection from './page3/VideoSection';
import VideoPlayer from './VideoPlayer';


  const tempArr = [];
  const tempData = [...data]
  for(let i = 0; i<=3; i++){
    tempArr[i] = [];
    for(let j = 0 ; j<=5 ; j++){
      tempArr[i].push(tempData[0]);
      tempData.splice(0,1)
    }
  }

export default function Page3() {
      //Video Player Component management
  let [Vplayer , setVplayer] = useState(false)
  function updateVplayer(){
      setVplayer(!Vplayer);
    
  }
//Video Source State
  const [videoSrc, setVideoSrc] = useState("https://www.youtube.com/embed/y45lh8oBzOo");
  const updateVideoSrc = (e) => {
    setVideoSrc(e.target.getAttribute('data-src'));
    console.log(e.target)
  }
    return (

        <div className="page3">
        
           
           {  
               Vplayer ?
<VideoPlayer src={videoSrc} showNot={updateVplayer}/> : null
}
{
            tempArr.map((arr)=>{
              if(arr !== 'undefined'){
              return(
                <VideoSection mainSrc = {arr} update = {updateVideoSrc} show={updateVplayer}/>
              )
              }
            })
          }
        </div>
                    )}

    
          
          
