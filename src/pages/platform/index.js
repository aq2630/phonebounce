import React from 'react'
// import Header from '../../components/header/Header'
import NewHeader from '../../components/newHeader/newheader'
import { Box, Container, Grid, Button, Paper  } from '@material-ui/core';
import './index.css'
import GoToTop from '../../components/footer/goToTop'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {FeatureItemText} from '../../components/featureItemText'
import {FeatureItem} from '../../components/featureItem'
import mobile from '../../assets/images/4_Mobile-05.png'
import local from '../../assets/images//5_Local-05.png'
import callBlock200 from '../../assets/images/14_Call_Blocking-200px.png'
import callForward200 from '../../assets/images/15_Call_Forwarding-200px.png'
import conference200 from '../../assets/images/18_Conference_Calling-200px.png'
import callRecord200 from '../../assets/images/16_Call_Recording-200px.png'
import translation200 from '../../assets/images/21_Translation-200px.png'
import callWhispering200 from '../../assets/images/17_Call_Whisper-200px.png'
import voiceMail200 from '../../assets/images/19_Personalised_Recording-200px.png'
import webIntegrations200 from '../../assets/images/22_Web_Integration-200px.png'
import callBlocking100 from '../../assets/images/14_Call_Blocking-100px.png'
import callForwarding100 from '../../assets/images/15_Call_Forwarding-100px.png'
import callRecording100 from '../../assets/images/16_Call_Recording-100px.png'
import callWhisper100 from '../../assets/images/17_Call_Whisper-100px.png'
import conference100 from '../../assets/images/18_Conference_Calling-100px.png'
import personalized100 from '../../assets/images/19_Personalised_Recording-100px.png'
import translation100 from '../../assets/images/21_Translation-100px.png'
import webIntegrations100 from '../../assets/images/22_Web_Integration-100px.png'
import national from '../../assets/images/6_National-05.png'
import tollFree from '../../assets/images/7_Toll_Free-05.png'
import ServiceCard from '../../components/serviceCard'
import FeatureIcon from '../../components/featureIcons'
import Carousel from 'react-material-ui-carousel'
import ReviewBox from '../../components/reviewBox'
import PricePlanCarousel from '../../components/pricePlan/PricePlanCarousel'
import 'react-multi-carousel/lib/styles.css';
import { isMobile  } from "react-device-detect";
import casestudyImage from '../../assets/images/casestudy.png'
import Footer from '../../components/footer'
import CenterMode from '../../components/SlickSlider'
import fullDeck from '../../assets/images/fulldeck.png'
import slider1img1 from '../../assets/images/array-1-0.png'
import slider1img2 from '../../assets/images/array-1-1.png'
import slider1img3 from '../../assets/images/array-1-2.png'
import slider2img1 from '../../assets/images/array-2-0.png'
import slider2img2 from '../../assets/images/array-2-1.png'
import slider2img3 from '../../assets/images/array-2-2.png'
import slider3img1 from '../../assets/images/array-3-0.png'
import slider3img2 from '../../assets/images/array-3-1.png'
import slider3img3 from '../../assets/images/array-3-2.png'


export const Platform = () => {
    return (
        <div>
             {/* <Header /> */}
             <NewHeader />
             <Box className="main-wrapper pb-3">
                 <Container>
                     <Grid container spacing={2}>
                     <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5 py-5">
                             <h1 className="heading">Your Dedicated Phone System</h1> 
                             <ul className={isMobile ? "d-none" : "mt-4"} >
                                 <li><CheckCircleIcon className="icon-primary" /><span>Cheap Calls & Messages</span></li>
                                 <li><CheckCircleIcon className="icon-primary" /><span>Secure Video Chat</span></li>
                                 <li><CheckCircleIcon className="icon-primary" /><span>Group Conferences (Phone and Video)</span></li>
                                 <li><CheckCircleIcon className="icon-primary"/><span>Call Forwarding Worldwide</span></li>
                             </ul>
                             <p className="subheading">Our app is at the core of what we do. Built with the latest technology and packed full of features, you can buy, manage and use all of your numbers in one place.</p>
                             </div>
                         </Grid>
                         <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5 py-0">
                                 <img src={fullDeck} className="img-fluid" alt="Buy Phone" />
                             </div>
                         </Grid>
                     </Grid>
                 </Container>

             </Box>  

        {/* All in One SoftPhone */}

        <Box className="service-help  pb-5 pt-4">
                 
                 <Container className={isMobile ? "mt-3 px-1" : "mt-3 px-5 "}>
                     <Grid container className="px-5 bg-white box-shadow" className={isMobile ? "px-2 bg-white box-shadow" : "px-5 bg-white box-shadow"} spacing={5}>
                         <Grid item xs={12} md={12} lg={12} >
                             <h2 className="text-center">The All-In-One Softphone</h2>                            
                         </Grid>
                         <Grid item xs={12} md={6} lg={6} className={isMobile ? "" : "px-5"}>
                             <h4>Login or Register</h4>
                             <p>Our simple to use UI allows you to get set up instantly. Choose the country where you would like to purchase a number in and whether you wish that it to be either a Local, Mobile, National or Toll-Free line. Then, type in your current number and hit purchase. It’s as simple as that! If you already have a number with Phonebounce, simply login using your pin sent via SMS</p>
                         </Grid>
                         <Grid item xs={12} md={6} lg={6} className="text-center">  
                                        <Carousel  interval={5000}  navButtonsAlwaysInvisible={true} animation="slide" indicators={false}> 
                                            {/* {
                                                reviews.map( (item, i) => <Item key={i} item={item} /> )
                                            } */}
                                            <img src={slider1img1} className="img-fluid" />
                                            <img src={slider1img2} className="img-fluid" />
                                            <img src={slider1img3} className="img-fluid" />
                                        </Carousel>
                             
                         </Grid>
                         <Grid item xs={12} md={6} lg={6} className="text-center">
                                        <Carousel  interval={5000}  navButtonsAlwaysInvisible={true} animation="slide" indicators={false}> 
                                            {/* {
                                                reviews.map( (item, i) => <Item key={i} item={item} /> )
                                            } */}
                                            <img src={slider2img1} className="img-fluid" />
                                            <img src={slider2img2} className="img-fluid" />
                                            <img src={slider2img3} className="img-fluid" />
                                        </Carousel>
                         </Grid>
                         <Grid item xs={12} md={6} lg={6} className={isMobile ? "" : "px-5"}>
                             <h4>Call, Text and Video Chat</h4>
                             <p>Choose the number you wish to use and begin calling and messaging. All our calls are untraceable and messages encrypted, giving you complete privacy. Send messages to friends or colleagues, catch up with loved ones abroad and even facetime your friends, all through the Phonebounce app.</p>
                         </Grid>
                         <Grid item xs={12} md={6} lg={6} className={isMobile ? "" : "px-5"}>
                             <h4>Affordable and Transparent</h4>
                             <p>We pride ourselves on being one on the cheapest providers out there. We have made it easy for you to see exactly how much each call, message and video costs, along with a clear breakdown of all expenses for you to see. We are a strictly pay-as-you go service with no hidden charges.</p>
                         </Grid>
                         <Grid item xs={12} md={6} lg={6} className="text-center">
                                        <Carousel  interval={5000}  navButtonsAlwaysInvisible={true} animation="slide" indicators={false}> 
                                            {/* {
                                                reviews.map( (item, i) => <Item key={i} item={item} /> )
                                            } */}
                                            <img src={slider3img1} className="img-fluid" />
                                            <img src={slider3img2} className="img-fluid" />
                                            <img src={slider3img3} className="img-fluid" />
                                        </Carousel>
                         </Grid>
                         

                     </Grid>                    
                 </Container>
             </Box>



        {/* All in One SoftPhone */}

        {/* Feature Icon 200  */}

        <Box className="py-3">             
                 <Container className=" px-5 pt-5 pb-2 ">
                     <Grid container className="px-5 bg-white" spacing={2}>
                         <Grid item xs={12} md={3} lg={3} >  
                             <FeatureIcon image={callBlock200} title="Call Blocking" />                           
                         </Grid>
                         <Grid item xs={12} md={3} lg={3} >
                         <FeatureIcon image={callForward200} title="Call Forwarding" />                         
                         </Grid>
                         <Grid item xs={12} md={3} lg={3} > 
                         <FeatureIcon image={conference200 } title="Conference Calling" />                            
                         </Grid>
                         <Grid item xs={12} md={3} lg={3} > 
                         <FeatureIcon image={callRecord200 } title="Call Recording" />                        
                         </Grid>
                         <Grid item xs={12} md={3} lg={3} >  
                         <FeatureIcon image={translation200 } title="Translation" />                           
                         </Grid>
                         <Grid item xs={12} md={3} lg={3} >  
                         <FeatureIcon image={callWhispering200 } title="Call Whispering" />                       
                         </Grid>
                         <Grid item xs={12} md={3} lg={3} >  
                         <FeatureIcon image={voiceMail200 } title="Personalised Voicemail" />                           
                         </Grid>
                         <Grid item xs={12} md={3} lg={3} >  
                         <FeatureIcon image={webIntegrations200} title="Web Integration" />                       
                         </Grid>
                     </Grid>
                 </Container>                 
             </Box>




        {/* Feature Icon 200  */}

                
                <ReviewBox />
                <PricePlanCarousel />
                <div className="footer-dark">
                <Footer />
                </div>
                
                
        </div>
    )
}
