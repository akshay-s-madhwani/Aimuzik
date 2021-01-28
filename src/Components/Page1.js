import React ,{useState} from 'react';
import '../App.css';
import Banner from './page1/Banner';
import CardSlider from './page1/SongComponent/CardSlider';
import ArtistSlider from './page1/ArtistComponent/ArtistCardSlider';
import MultiCardSlider from './page1/MultiCard/MultiCardSlider';
import VideoComponent from './page1/videoComponent/VideoComponent';
import Videos from './data/videos';

function Page1() {

  return (
<div className="pages page-1">
  <Banner/>
    <CardSlider heading="Weekly Hits"/>
    <VideoComponent srcArray = {Videos}/>
    <CardSlider heading = "English Blockbusters"/>
    <MultiCardSlider heading = "Recommended"/>
    <CardSlider heading="English Top Charts"/>
    <CardSlider heading="Hindi Top Charts"/>
    <CardSlider heading="Korean Top Charts"/>
    <ArtistSlider heading = "Top Artists"/>
</div>
  );
}

export default Page1;
