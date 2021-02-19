import React from 'react';
import '../../../App.css';

export default function songCard(props) {
    return (
        <div className="card" style = {{backgroundImage : ` url(${props.data.img})`}}
        data = {props.data.src}
         onClick={(e)=>{
             props.player();
             props.update(props.data);
             props.toggler();
             
            }
              } >
            <div className="card-info">
                <h4>{props.data.name}</h4>
                <p>{props.data.artist}</p>
            </div>
        </div>
    )
}
