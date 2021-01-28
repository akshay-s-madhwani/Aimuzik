import React from 'react'
import '../../App.css'
import {Search} from 'react-bootstrap-icons';
export default function SearchBar() {
    return (
        <div className = "search-feild-wrap">
            <span className="search-feild">
                <input type="search" name="Search" placeholder="Search For Songs"/>
        <Search className = "bi-search"/>
            </span>
        </div>
    )
}
