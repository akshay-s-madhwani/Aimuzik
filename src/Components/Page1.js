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
  
  let [Mplayer , setMplayer] = useState({transform :`translateY(${100}vh)`,zIndex:6})
  function playerUp(){
      setMplayer({transform :`translateY(${0}vh)`,zIndex:10});
      
  }
  function playerDown(){
      setMplayer({transform :`translateY(${100}vh)`,
      zIndex:6});
      
  }

  //Music source state
let [musicSrc, setMusicSrc] = useState(songs['English'][0]);
const [album, setAlbum]=useState(songs['rand']);
const updateMusic = (data) =>setMusicSrc(data);
const updateAlbum =(data)=>{if(album !== data){
	setAlbum(data)}}
let [active, setActive] = useState(false);
const toggler = ()=>  setActive(!active);

const setOn = ()=> {setActive( true);}

return (
  <div className="pages page-1">
  
  {Vplayer ?
<VideoPlayer src={videoSrc} showNot={updateVplayer}/> : null}

<MusicPlayer data = {musicSrc}  active = {active} toggler = {toggler} player={playerDown} style = {Mplayer} album = {album} setSrc = {setMusicSrc} />


  <Banner/>
    <CardSlider heading="Weekly Hits" data = {songs['rand']} onClick = {updateMusic} player = {playerUp} toggler = {setOn} album={updateAlbum}/>

    <VideoComponent srcArray = {Videos} src={videoSrc} update = {updateVideoSrc} show={updateVplayer}/>

    <CardSlider heading = "English Blockbusters" data = {songs['English2']} onClick = {updateMusic} player = {playerUp} toggler = {setOn} album={updateAlbum}/>

    <MultiCardSlider heading = "Top Trending" onClick = {updateMusic} player = {playerUp} toggler={setOn} album={updateAlbum}/>
    <CardSlider heading="English Top Charts" data = {songs['English']}onClick = {updateMusic} player = {playerUp} toggler = {setOn}album={updateAlbum}/>

    <CardSlider heading="Hindi Top Charts" data = {songs['Hindi']}onClick = {updateMusic} player = {playerUp} toggler = {setOn}album={updateAlbum}/>
    <CardSlider heading="Korean Top Charts" data = {songs['Korean'] }onClick = {updateMusic} player = {playerUp}  toggler = {setOn}album={updateAlbum}/>
    <ArtistSlider heading = "Top Artists"/>
</div>
  );
}

export default Page1;
