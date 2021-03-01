import React from 'react'
import '../../App.css'
export default function SearchList({data,player,update,toggler}) {
    return (
        <div className='search-result-wrap'>
              <div className="search-result" data-src={data.src}>
               <img src={data.img} alt={data.name}/>
               <div className="search-result-text"
    onClick={(e)=>{                                       player();                                         update(data);                               toggler();                                }
     }  >
                   <h4>{data.name}</h4>
                   <h6>{data.artist}</h6>
               </div>
           </div>
                
        </div>
    )
}
