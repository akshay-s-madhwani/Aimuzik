import React from 'react';
import '../App.css';
import Profile from './page4/Profile';
import ProfileSection from './page4/ProfileSection';
import {Instagram,Github,Linkedin,HeartFill} from 'react-bootstrap-icons'


export default function Page4() {
    return (
        <div className = 'page-4'>
            <Profile name = "Akshay S Madhwani"/>
            <ProfileSection/>
	    <div className ='follow'>
	    <div className='followMe' ><div className ='outline'></div>Do Follow Me At<div className='outline'></div></div>
	    <div className='follow-icons'>
	    <a href='https://instagram.com/that_curious_insomniac?igshid=1nv4vs1fbfjzf' ><Instagram id='insta'/></a>
	   <a href ='https://github.com/akshay-s-madhwani/Aimuzik'> <Github id ='git'/></a>
	   <a href='https://www.linkedin.com/mwlite/in/akshay-maddy-01b984120' > <Linkedin id='linked'/></a>
	   <a href='https://www.sololearn.com/Profile/8450145/?ref=app' > <p id='sololearn'></p></a>
	    </div>
	    </div>
<p className='regards'>Made with <HeartFill/> by Akshay S. Madhwani</p>
        </div>
    )
}
