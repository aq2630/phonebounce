import React from 'react'
import Header from '../../components/header/Header'
import { Box, Container, Grid, Button, Paper  } from '@material-ui/core';
import './index.css'
import GoToTop from '../../components/footer/goToTop'
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import buyPhone from '../../assets/images/buy_telephone_numbers.png'
import {FeatureItem} from '../../components/featureItem'
import mobile from '../../assets/images/4_Mobile-05.png'
import local from '../../assets/images//5_Local-05.png'
import national from '../../assets/images/6_National-05.png'
import tollFree from '../../assets/images/7_Toll_Free-05.png'
import ServiceCard from '../../components/serviceCard'
import FeatureIcon from '../../components/featureIcons'
import android from "../../assets/images/android-app-icon.png"
import apple from "../../assets/images/apple-app-icon.svg"
// import Carousel from 'react-material-ui-carousel'
import StarRateIcon from '@material-ui/icons/StarRate';
import callBlock200 from '../../assets/images/14_Call_Blocking-200px.png'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CenterMode from '../../components/SlickSlider'
import PricePlan from '../../components/pricePlan'
import callRecordinn400 from '../../assets/images/16_Call_Recording-400px.png'



const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

var reviews = [
    {
        name: "Mike Ne-yo hay",
        description: "I got manythings from this app! its greatest app ever! I have seen!! call and text is best! video its very nice images and very good sound! every body need this app to call every where around the world! and I think you can call to another planet if you have friend there!!",
        rating:[],
    },
    {
        name: "Random Name #1",
        description: "I got manythings from this app! its greatest app ever! I have seen!! call and text is best! video its very nice images and very good sound! every body need this app to call every where around the world! and I think you can call to another planet if you have friend there!!",
        rating:[],
    }
]

function Item(props)
{
    return (
        <Paper className="ShadowNone">            
            <h5 className="text-center">{props.item.name}</h5>
            <p className="text-center">{props.item.description}</p> 
                <div className="d-inline-block mx-auto text-center" >
                    <StarRateIcon className="rating text-center " />           
                    <StarRateIcon className="rating text-center" />           
                    <StarRateIcon className="rating text-center " /> 
                </div>          
                      
        </Paper>
    )
}

export const CallRecording = () => {
    return (
        <div>
             <Header />
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
                 
                 <Container className="mt-3 px-5 ">
                     <Grid container className="px-5 bg-white box-shadow" spacing={5}>
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
             

             
             <Box className="bg-pricing py-4">
                 <Container>
                     <Grid container spacing={2}>
                         <Grid item xs={12}>    
                         <Carousel
                            additionalTransfrom={0}
                            arrows
                            autoPlaySpeed={3000}
                            centerMode={true}
                            className=""
                            containerClass="container-with-dots"
                            dotListClass=""
                            draggable
                            focusOnSelect={false}
                            infinite
                            itemClass=""
                            keyBoardControl
                            minimumTouchDrag={80}
                            renderButtonGroupOutside={false}
                            renderDotsOutside={false}
                            responsive={responsive}
                            showDots={false}
                            sliderClass=""
                            slidesToSlide={1}
                            swipeable
                            >
                               <PricePlan />
                               <PricePlan />
                               <PricePlan />
                               <PricePlan />
                               <PricePlan />
                               <PricePlan />
                               <PricePlan />
                           
                            </Carousel>
                         </Grid>
                     </Grid>
                 </Container>

             </Box>
             <Box className="review-section py-4 px-5" >
        <Container className="review-container">
            <Grid container spacing={2} >
                <Grid item xs={12} md={6} lg={6}>   
                    <img className="img-fluid px-5 mb-5" src={android} alt="Android" />                 
                        {/* <Carousel  className="px-5" interval={500000} navButtonsAlwaysInvisible={true} animation="slide" indicators={false}> 
                        {
                            reviews.map( (item, i) => <Item key={i} item={item} /> )
                        }
                    </Carousel> */}

                    
                </Grid>
                <Grid item xs={12} md={6} lg={6}>
                <img className="img-fluid px-5 mb-5" src={apple} alt="Apple" />                 
                        {/* <Carousel className="px-5" navButtonsAlwaysInvisible={true} animation="slide" indicators={false}> 
                        {
                            reviews.map( (item, i) => <Item key={i} item={item} /> )
                        }
                    </Carousel> */}
                </Grid>
            </Grid>
            
        </Container>
    </Box>
            

    <GoToTop />
        </div>
    )
}
