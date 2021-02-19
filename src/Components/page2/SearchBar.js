import React from 'react'
import '../../App.css'
import {Search} from 'react-bootstrap-icons';
export default function SearchBar(props) {
    return (
        <div className = "search-feild-wrap">
            <span className="search-feild">
                <input type="search" name="Search" placeholder="Search For Songs" onChange = {(e)=>props.change(e)}/>
        <Search className = "bi-search"/>
            </span>
        </div>
    )
}
