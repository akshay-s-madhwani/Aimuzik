import React ,{useState}from 'react'
import SearchBar from './page2/SearchBar';
import SearchList from './page2/SearchList';
import songs from './data/Songs'
export default function Page2() {
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
            <SearchBar change = {handleChange}/>
            
            {    
                    query.map((src)=>{
                        if(src !== 'undefined'){
                 
                 return(
                        <SearchList data={src}/>)}
                        else if(inp === ''){
                return(
                <SearchList data={songs['Hindi'][Math.ceil(Math.random()*7)]}/>
                            )
                        }
                    })
                
            }
        </div>
    )
}
