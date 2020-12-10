import React from 'react'
import { FaBeer } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaVimeo } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import './socialIcon.css'



const SocialIcon = (props) => {
    return (
        <div>
            <div class="soc-icons">
                <a target="_blank" href="https://www.facebook.com/PhoneBounce/" className="fs-1"><FaFacebookF className="icon" /></a>
                <a target="_blank" href="https://twitter.com/phonebounce" className="fs-1"><FaTwitter className="icon" /></a>
                <a target="_blank" href="https://instagram.com/phonebounce" className="fs-1"><FaInstagram className="icon" /></a>
                <a target="_blank" href="https://www.linkedin.com/company/22319610/" className="fs-1"><FaLinkedin className="icon" /></a>
                <a target="_blank" href="https://vimeo.com/phonebounce" className="fs-1"><FaVimeo className="icon" /></a>
    
            </div>
        </div>
    )
}

export default SocialIcon
