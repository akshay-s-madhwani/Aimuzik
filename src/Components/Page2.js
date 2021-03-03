import React ,{useState}from 'react'
import SearchBar from './page2/SearchBar';
import SearchList from './page2/SearchList';
import MusicPlayer from './MusicPlayer';
import songs  from './data/Songs';

function Page2() {                                        
  //Music Player component management             
  let [Mplayer , setMplayer] = useState({transform
 :`translateY(${100}vh)`,zIndex:6})
  function playerUp(){                                 setMplayer({transform :`translateY(${0}vh)`,zIndex:10}
);
 }
  function playerDown(){
      setMplayer({transform :`translateY(${100}vh)
`,zIndex:6});
  }
//Music source state                        
let [musicSrc, setMusicSrc] = useState(songs['English'][0]);

const updateMusic = (data) =>setMusicSrc(data);                                                     let [active, setActive] = useState(false);        const toggler = ()=>  setActive(!active);                                                           const setOn = ()=> {setActive( true);}
    const [query, setQuery] = useState([]);
    let inp = '';
    const handleChange = (e)=>{
        inp = e.target.value;
        setQuery([])
        let temp =[], re = new RegExp(inp.toUpperCase()+'\\w','g')
        let song = [...songs['English']];
        song.push(...songs['Hindi']);
        song.push(...songs['English2']);
        song.push(...songs['Korean'])
        song.filter((src)=>{
            if(inp !==null  && inp !=='' && src.name.toUpperCase().match(re)){                
                if(!temp.includes(src)){
                temp.push(src);
            setQuery(temp)}
            
                }
                
            })
    }
          
        
        
    
    return (
        <div className='page-2'>
    <MusicPlayer data = {musicSrc}  active = {active} toggler = {toggler} player={playerDown} style = {Mplayer}/>
            <SearchBar change = {handleChange}/>
            
            {    
                    query.map((src)=>{
                        if(src !== 'undefined'){
                 
                 return(
          <SearchList data={src} update = {updateMusic} player = {playerUp} toggler = {setOn}/>)}
                        else if(inp === ''){
                return(
                <SearchList data={songs['Hindi'][Math.ceil(Math.random()*7)]} update = {updateMusic} player = {playerUp} toggler = {setOn}/>
                            )
                        }
                    })
                
            }
        </div>
    )
}
export default Page2
