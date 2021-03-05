import React from 'react';
import {Route, BrowserRouter as Router ,Link} from 'react-router-dom';
import {House, Search, CollectionPlay, Person} from 'react-bootstrap-icons';
import Page1 from './Components/Page1';
import Page2 from './Components/Page2';
import Page3 from './Components/Page3';
import Page4 from './Components/Page4';
export default function App() {
  return (
    <Router>
      <Route path = "/" exact component={Page1}/>
      <Route path = '/search' component={Page2}/>
      <Route path = '/videos' component={Page3}/>
      <Route path = '/profile' component={Page4}/>
  
    <div className="nav">
      <div className="nav-item">
        <Link to='/'><House className="nav-icons bi-house"onClick={()=>{window.scrollTo(0,0)}}/></Link>
        </div>
        <div className="nav-item">
        <Link to='/search'><Search className="nav-icons"onClick={()=>{window.scrollTo(0,0)}}/></Link>
        </div>
        <div className="nav-item">
        <Link to='/videos'><CollectionPlay className="nav-icons" onClick={()=>{window.scrollTo(0,0)}}/></Link>
        </div>
        <div className="nav-item">
        <Link to='/profile'><Person className="nav-icons" onClick={()=>{window.scrollTo(0,0)}}/></Link>
        </div>
      </div>
    
    </Router>
  )
}
