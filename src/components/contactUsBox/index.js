import React from 'react'
import './contactusbox.css'
import SocialIcon from '../footer/socialIcon'

const ContactUsBox = (props) => {
    return (
        <div>
             <div className="contact-us-box">
                    <a href="#">
                        <div className="img">{props.svg}</div>
                        <div className="inform">
                            <p>{props.item1}</p>
                            <p>{props.item2}</p>
                            <p>{props.item3}</p>
                            <p>{props.item4}</p>
                        </div>
                    </a>
                    </div>            
        </div>
    )
}

export default ContactUsBox;
