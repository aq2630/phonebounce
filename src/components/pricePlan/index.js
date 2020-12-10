import React from 'react'
import './index.css'
import planCallBlocking from '../../assets/images/14_Call_Blocking-white-100px.png'
import planCallRecording from '../../assets/images/16_Call_Recording-white-100px.png'
import planTranslation from '../../assets/images/21_Translation-white-100px.png'
import planConference from '../../assets/images/18_Conference_Calling-white-100px.png'


export const PricePlan = (props) => {
    return (
        <div className="plan-container slick-slide slick-current slick-active slick-center">
            <div className="wrapper mx-3">
                    <div className="top-content">
                        <div><img className="svg mb-3" src={props.flagImage} alt={props.flagAlt} /></div>
                        <div className="title">{props.title}</div>
                        <div className="fromer">Calls</div>
                        <div className="price"><sup>£</sup>{props.price}<span className="period">/mo</span></div>
                    </div>
                    <ul class="list-info bg-purple">
                        <li><img src={planCallBlocking} width="40" height="40" alt="call-blocking" /><span>  Call Blocking</span></li>
                        <li><img src={planCallRecording} width="40" height="40" alt="call-recording" /><span>  Call Recording</span></li>
                        <li><img src={planTranslation} width="40" height="40" alt="translation" /><span>  Translation</span></li>
                        <li><img src={planConference} width="40" height="40" alt="Conferencing" /><span>  Conferencing</span></li>
                    </ul>                
            </div>            
        </div>
    )
}



export default PricePlan
