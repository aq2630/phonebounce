import React from 'react'
// import Header from '../../components/header/Header'
import NewHeader from '../../components/newHeader/newheader'
import { Box, Container, Grid, Button, Paper  } from '@material-ui/core';
import './index.css'
import GoToTop from '../../components/footer/goToTop'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import {FeatureItem} from '../../components/featureItem'
import mobile from '../../assets/images/4_Mobile-05.png'
import local from '../../assets/images//5_Local-05.png'
import national from '../../assets/images/6_National-05.png'
import tollFree from '../../assets/images/7_Toll_Free-05.png'
import ServiceCard from '../../components/serviceCard'
import FeatureIcon from '../../components/featureIcons'
import callBlock200 from '../../assets/images/14_Call_Blocking-200px.png'
import Carousel from 'react-material-ui-carousel'
import ReviewBox from '../../components/reviewBox'
import PricePlanCarousel from '../../components/pricePlan/PricePlanCarousel'
import 'react-multi-carousel/lib/styles.css';
import { BrowserView, MobileView, isBrowser, isMobile  } from "react-device-detect";
import casestudyImage from '../../assets/images/casestudy.png'
import Footer from '../../components/footer'
import CenterMode from '../../components/SlickSlider'
import callRecordinn400 from '../../assets/images/16_Call_Recording-400px.png'


  var reviews = [
    {
        name: "CHEAP INTERNATIONAL CALLS",
        description: "Allow us to route that call or message across the globe.  We can do this for your own number or one you buy.",
    },
    {
        name: "CAMPAIGNS",
        description: "Running a campaign, promoting your club or just looking for feedback? Use a virtual numbers just for the time you need it. Review calls and messages and once your are finished drop the number.",
      
    },
    {
        name: "BUSINESS START-UP",
        description: "Starting a business and need a landline or several international numbers we have you covered. Put your Call Back button on your website convert more visitors to sales. With PhoneBounce you need never miss a call again.",
      
    },
    {
        name: "EMERGENCY NUMBERS",
        description: "Register a toll-free number and give it to friends and family as you are on holiday. Now they can call you at no cost wherever you are.",
      
    },
    {
        name: "INTERNET SIGN-UPS",
        description: "Signing up for dating sites, selling that car or just doing your shopping. Keep your personal number private.",
      
    },
    {
        name: "INTERNATIONAL NUMBERS",
        description: "Buy a number close to friends, family or potential customers. Allow them to contact you for the cost of a local rate call.",
      
    },
    {
        name: "INTERNATIONAL NUMBERS",
        description: "Buy a number close to friends, family or potential customers. Allow them to contact you for the cost of a local rate call.",
      
    },
]

function Item(props)
{
    return (
        <Paper className="paper px-5">            
            <h3 className="text-left author">{props.item.name}</h3>
            <p className="content-info">{props.item.description}</p>               
        </Paper>
    )
}



export const CallRecording = () => {
    return (
        <div>
             {/* <Header /> */}
             <NewHeader />
             <Box className="main-wrapper pb-3">
                 <Container>
                     <Grid container spacing={2}>
                         <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5">
                             <h1 className="heading">Call Recording</h1> 
                             <p className="subheading">Every call record and voicemail message safely stored.
                                                    See how you are performing and how your customers respond.</p>
                            <h4>Always keeping you safe</h4>
                             <ul className="mt-4">
                                 <li><CheckCircleIcon className="icon-primary" /><span>Held with other calls and messages</span></li>
                                 <li><CheckCircleIcon className="icon-primary" /><span>Review at your leisure</span></li>
                                 <li><CheckCircleIcon className="icon-primary" /><span>Translate to other languages</span></li>
                                 
                             </ul>
                             <p className="subheading">Every call record and voicemail message safely stored.
See how you are performing and how your customers respond.</p>
                             </div>
                         </Grid>
                         <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5 py-5">
                                 <img src={callRecordinn400} className="img-fluid" alt="Buy Phone" />
                             </div>
                         </Grid>
                     </Grid>
                 </Container>

             </Box>
             <Box className="service-help pb-5">
                 
                 <Container className={isMobile ? "mt-3 px-1" : "mt-3 px-5 "}>
                     <Grid container className="px-5 bg-white box-shadow" className={isMobile ? "px-2 bg-white box-shadow" : "px-5 bg-white box-shadow"} spacing={5}>
                         <Grid item xs={12} md={12} lg={12} >
                             <h2 className="text-center">What Is Call Recording?</h2>
                             <p className="text-center">Call Recording, allows you to record any incoming or outgoing calls received to your second line.</p>
                         </Grid>
                         <Grid item xs={12} md={12} lg={12} >
                             <div className="px-5">
                             <h4>How it works?</h4>
                             <p>When a call is sent or received, the contents of that call are recorded through our App, allowing you to keep a log of every call for business or legal purposes. This feature is available for all our number types, meaning you can ensure your business is running smoothly.</p>
                             </div>
                         </Grid>                                        
                    
                         
                         <Grid item xs={12} md={12} lg={12} >
                         <div className="px-5 text-right">
                             <h4>How this helps you!</h4>
                             <p>Call recording can be used for legal compliance, record keeping, agent training or quality control. It offers insights in to how your customer service and sales are preforming, while also backing up information taken whilst on your calls.</p>
                            </div>
                         </Grid>
                     </Grid>                    
                 </Container>
             </Box>
             <Box className="py-3">
                 <Container>
                     <Grid container spacing={2}>
                         <Grid item xs={12} >
                            <div className="casestudy-main py-5">
                                <img src={casestudyImage} />
                                <Grid item xs={12} md={9} lg={9} >
                                <Carousel  className="px-5 py-5" interval={4000}  navButtonsAlwaysInvisible={true} animation="slide" indicators={false}> 
                                    {
                                        reviews.map( (item, i) => <Item key={i} item={item} /> )
                                    }
                                </Carousel>
                                </Grid>
                            </div>
                         </Grid>
                     </Grid>
                 </Container>

             </Box>


             <PricePlanCarousel />             
                <ReviewBox />
                <Footer />
        </div>
    )
}
