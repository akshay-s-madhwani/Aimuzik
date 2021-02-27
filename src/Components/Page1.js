import React ,{useState} from 'react';
import '../App.css';
import Banner from './page1/Banner';
import CardSlider from './page1/SongComponent/CardSlider';
import ArtistSlider from './page1/ArtistComponent/ArtistCardSlider';
import MultiCardSlider from './page1/MultiCard/MultiCardSlider';
import VideoComponent from './page1/videoComponent/VideoComponent';
//import MusicPlayer from './MusicPlayer';
import VideoPlayer from './VideoPlayer';
import MusicPlayer from './MusicPlayer';

import Videos from './data/videos';
import songs  from './data/Songs';

function Page1() {
  //Video Player Component management
  let [Vplayer , setVplayer] = useState(false)
  function updateVplayer(){
      setVplayer(!Vplayer);
  }
//Video Source State
  const [videoSrc, setVideoSrc] = useState("https://www.youtube.com/embed/y45lh8oBzOo");
  const updateVideoSrc = (e) => {
    setVideoSrc(e.target.getAttribute('data-src'));
  }

  //Music Player component management
  
  let [Mplayer , setMplayer] = useState({transform :`translateY(${100}vh)`})
  function playerUp(){
      setMplayer({transform :`translateY(${0}vh)`});
      
  }
  function playerDown(){
      setMplayer({transform :`translateY(${100}vh)`});
      
  }

  //Music source state
let [musicSrc, setMusicSrc] = useState(songs['English'][0]);

const updateMusic = (data) =>setMusicSrc(data);

let [active, setActive] = useState(false);
const toggler = ()=>  setActive(!active);

const setOn = ()=> {setActive( true);}

return (
  <div className="pages page-1">
  
  {Vplayer ?
<VideoPlayer src={videoSrc} showNot={updateVplayer}/> : null}

<MusicPlayer data = {musicSrc}  active = {active} toggler = {toggler} player={playerDown} style = {Mplayer}/>


  <Banner/>
    <CardSlider heading="Weekly Hits" data = {songs['rand']} onClick = {updateMusic} player = {playerUp} toggler = {setOn}/>

    <VideoComponent srcArray = {Videos} src={videoSrc} update = {updateVideoSrc} show={updateVplayer}/>

    <CardSlider heading = "English Blockbusters" data = {songs['English2']} onClick = {updateMusic} player = {playerUp} toggler = {setOn}/>

    <MultiCardSlider heading = "Top Trending" onClick = {updateMusic} player = {playerUp} toggler={setOn}/>
    <CardSlider heading="English Top Charts" data = {songs['English']}onClick = {updateMusic} player = {playerUp} toggler = {setOn}/>

    <CardSlider heading="Hindi Top Charts" data = {songs['Hindi']}onClick = {updateMusic} player = {playerUp} toggler = {setOn}/>
    <CardSlider heading="Korean Top Charts" data = {songs['Korean'] }onClick = {updateMusic} player = {playerUp}  toggler = {setOn}/>
    <ArtistSlider heading = "Top Artists"/>
</div>
  );
}

export default Page1;
