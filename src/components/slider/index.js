import React from 'react';
import './index.css'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import smallOffice from '../../assets/images/SmallOffice.jpg';
import holiday from '../../assets/images/On_Holiday.jpg';
import secureLady from   '../../assets/images/Secure_Dating_lady.jpg';

 
const fadeImages = [
    smallOffice,
    holiday,
    secureLady
];
 export const Slideshow = () => {
  return (
    <div className="slide-container">
      <Fade arrows={false} pauseOnHover={false} canSwipe={true} Easing="ease" duration={4000} transitionDuration={1000}>
        <div className="each-fade">
            <div className="first-foreground">
               <div className="container">
                   <div className="row mt-5">
                       <div className="col-md-12 col-12 text-shadow mt-5">                           
                           <h1>Video and Voice conferencing built in</h1>
                           <h2>Video and Voice conferencing built in</h2>
                           <h3>Video and Voice conferencing built in</h3>                           
                       </div>
                   </div>
               </div>
            </div>
            <div className="first-image">
                <img src={fadeImages[0]} />
            </div>
        </div>
        <div className="each-fade">
            <div className="first-foreground">
            <div className="container">
                   <div className="row mt-5">
                       <div className="col-md-12 col-12 text-shadow mt-5">                           
                           <h1>
                                        Make low rate calls to real phones
                                    </h1>
                           <h2>Video and Voice conferencing built in</h2>
                           <h3>Video and Voice conferencing built in</h3>                           
                       </div>
                   </div>
               </div>
            </div>
            <div className="first-image">
                <img src={fadeImages[1]} />
            </div>
        </div>
        <div className="each-fade">
            <div className="first-foreground">
            <div className="container">
                   <div className="row mt-5">
                       <div className="col-md-12 col-12 text-shadow mt-5">                           
                           <h1> Stay secure on-line with a new number</h1>
                           <h2>Video and Voice conferencing built in</h2>
                           <h3>Video and Voice conferencing built in</h3>                           
                       </div>
                   </div>
               </div>
            </div>
            <div className="first-image">
            <img src={fadeImages[2]} />
            </div>
        </div>
      </Fade>
    </div>
  )
}