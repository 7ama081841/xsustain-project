// Importing necessary libraries and components
import React from "react";
import "./navbar.css"; // Importing the styles for the Navbar
import YouTubeIcon from "@mui/icons-material/YouTube"; // Importing YouTube icon from MUI
import InstagramIcon from "@mui/icons-material/Instagram"; // Importing Instagram icon from MUI
import FacebookIcon from "@mui/icons-material/Facebook"; // Importing Facebook icon from MUI

// Functional component for the Navbar
const Navbar = () => {
    return (
        // Main container with the 'navbar' class
        <div className="navbar">
            <ul>
                <li>LISTEN LIVE</li>
                <li>CONTACT US</li>
                <li>GET THE APP</li>
            </ul>
            <div className="contact-icons">
                <YouTubeIcon />
                <InstagramIcon />
                <FacebookIcon />
            </div>
        </div>
    );
};

// Exporting the Navbar component
export default Navbar;
