import React from 'react'
// import Header from '../../components/header/Header'
import { Box, Container, Grid, Button, Paper  } from '@material-ui/core';
import './index.css'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { userTie } from 'react-icons/fa';
import { FaUserTie } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import AccountCircle from '@material-ui/icons/AccountCircle';
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
import SocialIcon from '../../components/footer/socialIcon'
import FooterCallBack from '../../components/footer/footerCallBack'
import ContactUsBox from '../../components/contactUsBox'
import contactUS from '../../assets/images/contact-us-flag.png'
import contactGB from '../../assets/images/contact-gb-flag.png'
import contactBR from '../../assets/images/contact-br-flag.png'
import contactAU from '../../assets/images/contact-au-flag.png'
import GoToTop from '../../components/footer/goToTop'
import NewHeader from '../../components/newHeader/newheader'
import PricePlanCarousel from '../../components/pricePlan/PricePlanCarousel'
import 'react-multi-carousel/lib/styles.css';
import { isMobile  } from "react-device-detect";
import casestudyImage from '../../assets/images/casestudy.png'
import Footer from '../../components/footer'
import CenterMode from '../../components/SlickSlider'
import modelImage from '../../assets/images/model.png'
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



export const Support = () => {
    return (
        <div>
             {/* <Header /> */}
             <NewHeader />
             <Box className="main-wrapper pb-5">
                 <Container>
                     <Grid container spacing={2}>
                     <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5 py-5">
                             <h1 className="heading">Need A Hand?</h1> 
                             <ul className={isMobile ? "d-none" : "mt-4"} >
                                 <li><CheckCircleIcon className="icon-primary" /><span>American Style Support</span></li>
                                 <li><CheckCircleIcon className="icon-primary" /><span>Check out our FAQ</span></li>
                                 <li><CheckCircleIcon className="icon-primary" /><span>Contact us on mutliple channels</span></li>
                                
                             </ul>
                             <p className="subheading">We offer support around the clock, 24/7. If one of our team member are unavailable, you will be directed to our Google powered AI help desk.</p>
                             </div>
                         </Grid>
                         <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5 py-0">
                                 <img src={modelImage} className="img-fluid" alt="Buy Phone" />
                             </div>
                         </Grid>
                     </Grid>
                 </Container>

             </Box>  

        {/* All in One SoftPhone */}

        <Box className="review-section-bg  pb-5 pt-4">
                 
                 <Container className={isMobile ? "mt-3 px-1" : "mt-3 px-5 "}>
                     <Grid container className="px-5 bg-white box-shadow" className={isMobile ? "px-2 bg-white box-shadow" : "px-5 bg-white box-shadow"} spacing={5}>
                         <Grid item xs={12} md={12} lg={12} >
                             <h2 className="text-center">Welcome To Support</h2> 
                             <p className="text-justify-center" className={isMobile ? "text-justify-center text-center px-2" : "text-justify-center text-center px-5" }>Your satisfaction is at the heart of everything we do. Our aim ensure our platform works 100% of the time for you. If you are not happy please let us know and we will fix it. Contacts us through any of the channels below or simply send us an <a href="mailto:Support@PhoneBounce.com" className="link-pink" >email</a> and we will get back to you as quickly as possible.</p>                           
                         </Grid>
                     </Grid>                    
                 </Container>
                 {/* Contact Us Form */}

                 <Container className={isMobile ? "mt-3 px-1" : "mt-5 px-5 "}>
                     <Grid container className={isMobile ? "px-2 bg-white box-shadow" : "px-5 bg-white box-shadow"} spacing={5}>
                         <Grid item xs={12} md={12} lg={12} >
                             <h2 className={isMobile ? "text-left px-2" : "text-left px-5" }>Contact Us</h2> 
                             <p className={isMobile ? "text-left px-2" : "text-left px-5" }>We would love to hear from you. If you have suggestions, feedback or just wish to know more please contact us.</p>                           
                         </Grid>
                         <Grid item xs={12} md={6} lg={6} >
                            <ContactUsBox
                               svg={<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="65" viewBox="0 0 32 32" class="svg ico" src="fonts/svg/phone.svg" alt="phone">
                               <title>phone</title>
                               <path fill="#5e686b" d="M27.063 5.162c-2.6-2.6-6.050-4.2-9.706-4.5-0.238-0.019-0.438 0.156-0.456 0.387s0.156 0.438 0.387 0.456c3.456 0.281 6.719 1.794 9.175 4.256 5.737 5.738 5.737 15.069 0 20.806s-15.069 5.738-20.806 0c-2.775-2.775-4.306-6.469-4.306-10.4s1.531-7.625 4.306-10.4c2.469-2.469 5.738-3.981 9.206-4.256 0.231-0.019 0.406-0.219 0.387-0.456-0.019-0.231-0.213-0.406-0.456-0.387-3.669 0.294-7.125 1.888-9.738 4.5-2.938 2.938-4.556 6.844-4.556 11s1.619 8.063 4.556 11c3.031 3.031 7.019 4.55 11 4.55s7.969-1.519 11-4.55c6.069-6.069 6.069-15.938 0.006-22.006z"></path>
                               <path id="svg-ico" fill="#ee5586" d="M17.563 16.262c-1.969 1.969-2.756 2.212-2.944 2.238l-0.113-0.113c-0.575-0.581-1.169-1.181-2.138-1.181-0.738 0-1.556 0.381-2.575 1.194-0.894 0.719-1.344 1.45-1.375 2.225-0.025 0.563 0.175 1.044 0.463 1.469-0.637 0.406-1.731 1.262-2.175 2.606-0.075 0.219 0.044 0.462 0.269 0.538 0.044 0.012 0.088 0.019 0.131 0.019 0.175 0 0.344-0.113 0.4-0.288 0.388-1.163 1.394-1.9 1.919-2.219 0.162 0.169 0.325 0.319 0.469 0.462l0.3 0.288c0.425 0.425 1.075 0.65 1.881 0.65 1.1 0 2.5-0.419 3.925-1.169 1.594-0.825 3.231-2.056 4.725-3.556 1.944-1.944 3.431-4.119 4.181-6.119 0.344-0.912 0.525-1.769 0.531-2.487 0.006-0.831-0.219-1.5-0.644-1.931-0.087-0.088-0.181-0.188-0.281-0.294-0.594-0.625-1.4-1.481-2.5-1.481-0.813 0-1.569 0.45-2.319 1.381-0.931 1.162-1.294 2.044-1.175 2.875 0.113 0.8 0.644 1.325 1.163 1.838l0.119 0.119c-0.012 0.1-0.094 0.35-0.363 0.762-0.369 0.569-1 1.306-1.875 2.175zM20.456 12.775l-0.181-0.181c-0.45-0.444-0.844-0.831-0.919-1.35-0.081-0.575 0.225-1.262 1-2.225 0.575-0.713 1.119-1.063 1.656-1.063 0.731 0 1.344 0.644 1.881 1.213 0.1 0.113 0.2 0.213 0.3 0.313 0.269 0.269 0.406 0.725 0.4 1.325-0.006 0.619-0.169 1.381-0.481 2.2-0.712 1.894-2.131 3.962-3.988 5.819-1.438 1.438-3 2.613-4.525 3.406-1.313 0.694-2.563 1.075-3.531 1.075-0.569 0-1.025-0.144-1.281-0.4l-0.313-0.3c-0.581-0.556-1.244-1.181-1.213-1.944 0.019-0.525 0.369-1.050 1.056-1.606 0.85-0.681 1.519-1.012 2.044-1.012 0.619 0 1.019 0.413 1.588 0.988 0.044 0.044 0.088 0.087 0.119 0.119 0.588 0.587 1.962-0.169 4.081-2.294 0.913-0.912 1.581-1.694 1.988-2.325 0.556-0.825 0.656-1.419 0.319-1.756z"></path>
                               </svg>}
                               item1={<div><img src={contactUS} className="img-fluid contact-flag" /> (650) 446-6617</div>}
                               item2={<div><img src={contactGB} className="img-fluid contact-flag" /> 330 808 0886</div>}
                               item3={<div><img src={contactBR} className="img-fluid contact-flag" /> 11 3181 9849</div>}
                               item4={<div><img src={contactAU} className="img-fluid contact-flag" /> (02) 9157 7017</div>}
                               
                          />
                         </Grid>
                         <Grid item xs={12} md={6} lg={6} >
                         <ContactUsBox
                               svg={<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="65" viewBox="0 0 32 32" className="svg ico" src="fonts/svg/email.svg" alt="email">
                               <title>email</title>
                               <path fill="#5e686c" d="M1.406 26.581c-0.094 0-0.181-0.031-0.262-0.087-0.188-0.144-0.219-0.413-0.075-0.594l10.25-13.181c0.144-0.188 0.412-0.219 0.594-0.075 0.188 0.144 0.219 0.412 0.075 0.594l-10.25 13.181c-0.081 0.106-0.206 0.163-0.331 0.163z"></path>
                               <path fill="#5e686c" d="M30.694 26.581c-0.125 0-0.25-0.056-0.337-0.163l-10.25-13.181c-0.144-0.188-0.113-0.45 0.075-0.594 0.181-0.144 0.45-0.113 0.594 0.075l10.25 13.181c0.144 0.188 0.113 0.45-0.075 0.594-0.069 0.063-0.163 0.087-0.256 0.087z"></path>
                               <path id="svg-ico" fill="#ee5586" d="M16.050 16.331c-0.088 0-0.175-0.025-0.25-0.081l-13.912-10.256c-0.188-0.138-0.231-0.406-0.087-0.594 0.137-0.188 0.406-0.231 0.594-0.088l13.663 10.069 13.656-10.069c0.188-0.138 0.456-0.1 0.594 0.088s0.1 0.456-0.087 0.594l-13.919 10.256c-0.075 0.056-0.163 0.081-0.25 0.081z"></path>
                               <path fill="#5e686c" d="M29.969 27.313h-27.831c-1.044 0-1.887-0.844-1.887-1.881v-18.319c0-1.037 0.844-1.881 1.887-1.881 0.231 0 0.425 0.188 0.425 0.425 0 0.231-0.188 0.425-0.425 0.425-0.575 0-1.038 0.463-1.038 1.037v18.319c0 0.569 0.469 1.038 1.038 1.038h27.831c0.575 0 1.038-0.462 1.038-1.038v-18.325c0-0.569-0.469-1.037-1.038-1.037-0.231 0-0.425-0.188-0.425-0.425 0-0.231 0.188-0.425 0.425-0.425 1.038 0 1.887 0.844 1.887 1.881v18.319c0 1.044-0.85 1.887-1.887 1.887z"></path>
                               <path id="svg-ico" fill="#ee5586" d="M29.969 6.081h-27.831c-0.231 0-0.425-0.188-0.425-0.425 0-0.231 0.188-0.425 0.425-0.425h27.831c0.231 0 0.425 0.188 0.425 0.425-0.006 0.231-0.194 0.425-0.425 0.425z"></path>
                               </svg>}
                               item1={<a href="mailto:Support@PhoneBounce.com" class="link-pink">Support@PhoneBounce.com</a>}
                               item2={<a href="mailto:Enquiries@PhoneBounce.com" class="link-pink">Enquiries@PhoneBounce.com</a>}
                               item3={<SocialIcon />}
                               
                          />
                         </Grid>
                         <Grid item xs={12} className="py-2" >
                             <TextField
                                className="radius50"
                                id="outlined-full-width"                               
                                
                                placeholder="Full Name"                                
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="start">
                                        <FaUserTie />
                                      </InputAdornment>
                                    ),
                                  }}
                                variant="outlined"
                            />

                         </Grid>
                         <Grid item xs={12} className="py-2" >
                         <TextField
                                className="radius50"
                                id="outlined-full-width"  
                                placeholder="Email Address"                                
                                fullWidth
                                margin="normal"
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                InputProps={{
                                    endAdornment: (
                                      <InputAdornment position="start">
                                        <FaEnvelope />
                                      </InputAdornment>
                                    ),
                                  }}
                                variant="outlined"
                            />

                         </Grid>
                         <Grid item xs={12} className="py-2" >
                             <TextareaAutosize
                             className="fullwidth-textarea"
                             rowsMin={5}
                             aria-label="Message" placeholder="Message..." />

                         </Grid>
                          <Grid item xs={12} className="" >
                          <Button variant="contained" color="secondary" size="large" className="mr-3 radius50"> Submit</Button>
                          <Button variant="contained" className="radius50" size="large"> Reset</Button>

                         </Grid>
                     </Grid>                    
                 </Container>

                 {/* Contact Us Form */}
                 <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={4} lg={4}>
                            <FooterCallBack svg={
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="65" viewBox="0 0 32 32" className="svg ico" src="fonts/svg/phone.svg" alt="phone">
                                <title>phone</title>
                                <path fill="#5e686b" d="M27.063 5.162c-2.6-2.6-6.050-4.2-9.706-4.5-0.238-0.019-0.438 0.156-0.456 0.387s0.156 0.438 0.387 0.456c3.456 0.281 6.719 1.794 9.175 4.256 5.737 5.738 5.737 15.069 0 20.806s-15.069 5.738-20.806 0c-2.775-2.775-4.306-6.469-4.306-10.4s1.531-7.625 4.306-10.4c2.469-2.469 5.738-3.981 9.206-4.256 0.231-0.019 0.406-0.219 0.387-0.456-0.019-0.231-0.213-0.406-0.456-0.387-3.669 0.294-7.125 1.888-9.738 4.5-2.938 2.938-4.556 6.844-4.556 11s1.619 8.063 4.556 11c3.031 3.031 7.019 4.55 11 4.55s7.969-1.519 11-4.55c6.069-6.069 6.069-15.938 0.006-22.006z"></path>
                                <path id="svg-ico" fill="#ee5586" d="M17.563 16.262c-1.969 1.969-2.756 2.212-2.944 2.238l-0.113-0.113c-0.575-0.581-1.169-1.181-2.138-1.181-0.738 0-1.556 0.381-2.575 1.194-0.894 0.719-1.344 1.45-1.375 2.225-0.025 0.563 0.175 1.044 0.463 1.469-0.637 0.406-1.731 1.262-2.175 2.606-0.075 0.219 0.044 0.462 0.269 0.538 0.044 0.012 0.088 0.019 0.131 0.019 0.175 0 0.344-0.113 0.4-0.288 0.388-1.163 1.394-1.9 1.919-2.219 0.162 0.169 0.325 0.319 0.469 0.462l0.3 0.288c0.425 0.425 1.075 0.65 1.881 0.65 1.1 0 2.5-0.419 3.925-1.169 1.594-0.825 3.231-2.056 4.725-3.556 1.944-1.944 3.431-4.119 4.181-6.119 0.344-0.912 0.525-1.769 0.531-2.487 0.006-0.831-0.219-1.5-0.644-1.931-0.087-0.088-0.181-0.188-0.281-0.294-0.594-0.625-1.4-1.481-2.5-1.481-0.813 0-1.569 0.45-2.319 1.381-0.931 1.162-1.294 2.044-1.175 2.875 0.113 0.8 0.644 1.325 1.163 1.838l0.119 0.119c-0.012 0.1-0.094 0.35-0.363 0.762-0.369 0.569-1 1.306-1.875 2.175zM20.456 12.775l-0.181-0.181c-0.45-0.444-0.844-0.831-0.919-1.35-0.081-0.575 0.225-1.262 1-2.225 0.575-0.713 1.119-1.063 1.656-1.063 0.731 0 1.344 0.644 1.881 1.213 0.1 0.113 0.2 0.213 0.3 0.313 0.269 0.269 0.406 0.725 0.4 1.325-0.006 0.619-0.169 1.381-0.481 2.2-0.712 1.894-2.131 3.962-3.988 5.819-1.438 1.438-3 2.613-4.525 3.406-1.313 0.694-2.563 1.075-3.531 1.075-0.569 0-1.025-0.144-1.281-0.4l-0.313-0.3c-0.581-0.556-1.244-1.181-1.213-1.944 0.019-0.525 0.369-1.050 1.056-1.606 0.85-0.681 1.519-1.012 2.044-1.012 0.619 0 1.019 0.413 1.588 0.988 0.044 0.044 0.088 0.087 0.119 0.119 0.588 0.587 1.962-0.169 4.081-2.294 0.913-0.912 1.581-1.694 1.988-2.325 0.556-0.825 0.656-1.419 0.319-1.756z"></path>
                                </svg>
                            }
                            title="Call Back" />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                                <FooterCallBack
                                svg={<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="65" viewBox="0 0 32 32" className="svg ico" src="fonts/svg/question.svg" alt="question">
                                <title>question</title>
                                <path id="svg-ico" fill="#ee5586" d="M16.113 25.962c-1.2 0-2.175-0.975-2.175-2.175s0.975-2.175 2.175-2.175 2.175 0.975 2.175 2.175-0.975 2.175-2.175 2.175zM16.113 22.488c-0.719 0-1.306 0.587-1.306 1.306s0.588 1.306 1.306 1.306c0.719 0 1.306-0.587 1.306-1.306-0.006-0.725-0.587-1.306-1.306-1.306z"></path>
                                <path fill="#5e686b" d="M16.106 31.594c-8.631 0-15.656-7.025-15.656-15.656s7.025-15.656 15.656-15.656c7.969 0 14.656 5.963 15.556 13.869 0.025 0.238-0.144 0.456-0.381 0.481-0.238 0.019-0.456-0.144-0.481-0.381-0.85-7.463-7.162-13.094-14.688-13.094-8.162-0.006-14.794 6.631-14.794 14.781s6.631 14.788 14.788 14.788c7.525 0 13.837-5.631 14.688-13.094 0.025-0.238 0.244-0.406 0.481-0.381s0.413 0.244 0.381 0.481c-0.894 7.9-7.581 13.863-15.55 13.863z"></path>
                                <path id="svg-ico" fill="#ee5586" d="M16.206 18.1c-0.238 0-0.438-0.194-0.438-0.438v-1.175c0-0.675 0.213-1.281 0.625-1.794 0.363-0.456 0.762-0.906 1.194-1.35 0.413-0.425 0.788-0.881 1.119-1.35 0.3-0.425 0.45-0.925 0.45-1.525 0-0.444-0.069-0.9-0.206-1.344-0.131-0.425-0.344-0.806-0.619-1.125s-0.65-0.581-1.119-0.787c-0.469-0.206-1.050-0.313-1.719-0.313-0.544 0-1.050 0.106-1.512 0.313s-0.869 0.494-1.2 0.863c-0.338 0.375-0.613 0.838-0.819 1.363-0.206 0.537-0.319 1.137-0.331 1.781-0.006 0.238-0.2 0.425-0.438 0.425 0 0-0.006 0-0.012 0-0.238-0.006-0.431-0.206-0.425-0.444 0.019-0.75 0.15-1.45 0.387-2.075 0.244-0.631 0.569-1.181 0.981-1.631 0.412-0.456 0.912-0.819 1.488-1.075 0.569-0.256 1.2-0.388 1.869-0.388 0.794 0 1.488 0.131 2.069 0.388s1.063 0.594 1.425 1.013c0.356 0.412 0.625 0.894 0.794 1.438 0.163 0.531 0.25 1.069 0.25 1.6 0 0.775-0.206 1.456-0.606 2.025-0.356 0.506-0.762 0.994-1.2 1.456-0.413 0.425-0.794 0.856-1.137 1.287-0.288 0.363-0.431 0.775-0.431 1.25v1.175c0 0.244-0.2 0.438-0.438 0.438z"></path>
                                </svg>}
                                title="FAQ" />
                        </Grid>
                        <Grid item xs={12} md={4} lg={4}>
                            <FooterCallBack
                            svg={<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="32" height="65" viewBox="0 0 32 32" className="svg ico" src="fonts/svg/blog.svg" alt="blog">
                            <title>blog</title>
                            <path fill="#5e686c" d="M21.175 31.563h-10.119c-0.019 0-0.037 0-0.056-0.006-5.888-0.063-10.488-4.669-10.488-10.506v-10.069c0-5.769 4.725-10.494 10.544-10.531h4.425c0.025-0.006 0.056-0.006 0.075-0.006 5.644 0.037 10.081 4.344 10.375 10.031 0.012 0.044 0.025 0.088 0.025 0.137 0 0.031 0 0.056-0.006 0.088 0.137 0.381 0.569 1.137 1.738 1.137h1.387c1.363 0 2.563 1.125 2.563 2.412v6.806c0 6.031-5.45 10.356-10.369 10.5-0.038 0-0.069 0.006-0.094 0.006zM11.106 30.712h9.988c0.019-0.006 0.044-0.006 0.069-0.006 4.55-0.094 9.619-4.081 9.619-9.656v-6.8c0-0.806-0.831-1.569-1.719-1.569h-1.387c-1.769 0-2.494-1.319-2.625-2.019-0.019-0.081-0.006-0.169 0.025-0.244-0.313-5.162-4.338-9.063-9.456-9.131-0.025 0.006-0.044 0.006-0.069 0.006h-4.494c-5.438 0.038-9.7 4.294-9.7 9.688v10.069c0 5.387 4.263 9.625 9.706 9.663 0.012 0 0.025 0 0.044 0z"></path>
                            <path id="svg-ico" fill="#ee5586" d="M22.688 22.038h-14.287c-0.231 0-0.425-0.188-0.425-0.425 0-0.231 0.188-0.425 0.425-0.425h14.287c0.231 0 0.425 0.188 0.425 0.425-0.006 0.231-0.194 0.425-0.425 0.425z"></path>
                            <path id="svg-ico" fill="#ee5586" d="M17.95 12.681h-9.55c-0.231 0-0.425-0.188-0.425-0.425s0.187-0.425 0.425-0.425h9.55c0.231 0 0.425 0.188 0.425 0.425s-0.188 0.425-0.425 0.425z"></path>
                            </svg>}
                            title="Blog" />
                        </Grid>
                    </Grid>
                </Container>
             </Box>



        {/* All in One SoftPhone */}
      
                
    





                
                <ReviewBox />
              
                <div className="footer-dark">
                    <Box className="partial-footer">
                <Container className="pt-4">
                    <Grid container spacing={2}>
                            <Grid item xs={12} className="text-center">
                                <a href="termsofservice.html" class="text-dark">Terms of Service</a>
                                <span class="text-pink mx-2">|</span>
                                <a href="privacy.html" class="text-dark">Privacy Policy</a>
                            </Grid>
                    </Grid>
                    <Grid container spacing={2}>
                            <Grid item xs={12} className="text-center">
                                    <div class="soc-icons">
                                    <SocialIcon />
                                    </div>
                            </Grid>
                    </Grid>
                </Container>
                </Box>
                <GoToTop />
                </div>  
        </div>
    )
}
