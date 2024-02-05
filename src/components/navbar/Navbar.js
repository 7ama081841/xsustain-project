import React from 'react'
import "./navbar.css"
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Navbar = () => {
    return (
        <div className='navbar' >
            <ul>
                <li>LISTEN LIVE</li>
                <li>CONTACT US</li>
                <li>GET THE APP</li>
            </ul>
            <div className='contact-icons' >
                <YouTubeIcon/>
                <InstagramIcon/>
                <FacebookIcon/>
            </div>
        </div>
    )
}

export default Navbar
