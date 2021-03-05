import React from 'react';
import '../../App.css'
import { MusicNote, ChevronRight, Speaker, Files, MusicNoteList, Download} from 'react-bootstrap-icons';

export default function ProfileSection() {
    return (
        <div className="profile-sections">
        <span className="profile-span">
      <h4> <MusicNote className="bi bi-music-note"/>&nbsp;Songs</h4>
        <p>26 <ChevronRight className = "bi-chevron-right"/></p>
    </span>
    <span className="profile-span">
      <h4> <Speaker className="bi bi-speaker"/>&nbsp;Artists</h4>
        <p>26 <ChevronRight className = "bi-chevron-right"/></p>
    </span>
    <span className="profile-span">
      <h4> <Files className="bi bi-files"/>&nbsp;Albums</h4>
        <p>26 <ChevronRight className = "bi-chevron-right"/></p>
    </span>
        
     <span className="profile-span">
      <h4> <MusicNoteList className="bi bi-music-note-list"/>&nbsp;Playlists</h4>
        <p>26 <ChevronRight className = "bi-chevron-right"/></p>
    </span>
        
     <span className="profile-span">
      <h4> <Download className="bi bi-download"/>&nbsp;Downloads</h4>
        <p>26 <ChevronRight className = "bi-chevron-right"/></p>
    </span>
</div>
    )
}
