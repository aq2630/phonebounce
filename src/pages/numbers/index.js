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

export const Numbers = () => {
    return (
        <div>
             <Header />
             <Box className="main-wrapper pb-3">
                 <Container>
                     <Grid container spacing={2}>
                         <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5">
                             <h1 className="heading">Low Cost Numbers Instantly</h1> 
                             <ul className="mt-4">
                                 <li><CheckCircleIcon className="icon-primary" /><span>Mobile, Fixed and Toll Free</span></li>
                                 <li><CheckCircleIcon className="icon-primary" /><span>Trusted by 100's of customers</span></li>
                                 <li><CheckCircleIcon className="icon-primary" /><span>Available in Multiple Countries</span></li>
                                 <li><CheckCircleIcon className="icon-primary"/><span>Instant Set-up</span></li>
                                 <li><CheckCircleIcon className="icon-primary"/><span>Forwarded to Your Mobile</span></li>
                             </ul>
                             <p className="subheading">Maybe you need a new number for your business, maybe you have friends and family abroad and wish to give them a local number or maybe you just wish to keep your personal number private. With PhoneBounce you can be set up in under 30 seconds. Pick the country and type and we will do the rest.</p>
                             </div>
                         </Grid>
                         <Grid item xs={12} md={6} lg={6}>
                             <div className="px-5 py-5">
                                 <img src={buyPhone} className="img-fluid" alt="Buy Phone" />
                             </div>
                         </Grid>
                     </Grid>
                 </Container>

             </Box>
             <Box className="service-help pb-5">
                 <Container>
                     <Grid container className="px-5 overlap" spacing={3}>
                         <Grid item xs={12} md={3} lg={3}>
                             <FeatureItem image={mobile} title="Mobile" />
                         </Grid>
                         <Grid item xs={12} md={3} lg={3}>
                            <FeatureItem image={local} title="Local" />
                         </Grid>
                         <Grid item xs={12} md={3} lg={3}>
                            <FeatureItem image={national} title="National" />
                         </Grid>
                         <Grid item xs={12} md={3} lg={3}>
                             <FeatureItem image={tollFree} title="Toll Free" />
                         </Grid>
                     </Grid>
                 </Container>
                 <Container className=" mt-5 px-5 ">
                     <Grid container className="px-5 bg-white box-shadow" spacing={5}>
                         <Grid item xs={12} md={12} lg={12} >
                             <h2 className="text-center">New Phone Number</h2>
                             <p className="text-center">Setup multiple numbers from lots of countries and have all calls and messages redireted to your mobile. Use it to list goods on a websites, sign up to services, call home from abroad or just keeping your personal number private. Our numbers are untraceable and come with complete anonymity, giving you the privacy you need in todays connected world.</p>
                         </Grid>
                         <Grid item xs={12} md={6} lg={6} >
                             <div className="px-5">
                             <h4>Mobile</h4>
                             <p>Local numbers can expand your company's geographical reach, without the additional cost. Expand you company nationally or globally, while giving customers the satisfaction of calling a local number.</p>
                             </div>
                         </Grid>
                         <Grid item xs={12} md={6} lg={6} >
                         <div className="px-5">
                             <h4>Local</h4>
                             <p>Local numbers can expand your company's geographical reach, without the additional cost. Expand you company nationally or globally, while giving customers the satisfaction of calling a local number.</p>
                            </div>
                         </Grid>                   
                    
                         <Grid item xs={12} md={6} lg={6} >
                         <div className="px-5">
                             <h4>National</h4>
                             <p>National numbers are phone numbers designed to be reachable from anywhere in the country. They cost the same price of a local call, giving you a centralised line of business, no matter the distance.</p>
                            </div>
                         </Grid>
                         <Grid item xs={12} md={6} lg={6} >
                         <div className="px-5">
                             <h4>Toll-free</h4>
                             <p>Toll free numbers not only let customers connect to you free of charge, but also gives you an edge in terms of brand image and accessibility. Free to call helplines and sales numbers deliver better customer service and are proven to turn more leads in to customers.</p>
                            </div>
                         </Grid>
                     </Grid>
                    
                         
                     
                 </Container>
             </Box>
             <Box className="bg-main py-3">
             <Container > 
        
        <Grid container spacing={6}>
        
            <Grid item xs={12} md={4} lg={4} className="my-3">
            {/* <div className="services-items">
            <svg className="mb-4" xmlns="http://www.w3.org/2000/svg" version="1.1" width="50" height="50" viewBox="0 0 32 32" class="svg" src="fonts/svg/mobile.svg" alt="mobile">
            <title>mobile</title>
            <path fill="#5e686b" d="M24.581 31.837h-17.163c-0.537 0-0.981-0.438-0.981-0.981v-29.813c0-0.544 0.438-0.981 0.981-0.981h17.169c0.538 0 0.975 0.438 0.975 0.981v29.819c0 0.538-0.438 0.975-0.981 0.975zM7.419 0.919c-0.069 0-0.125 0.056-0.125 0.125v29.819c0 0.069 0.056 0.125 0.125 0.125h17.169c0.069 0 0.125-0.056 0.125-0.125v-29.819c0-0.069-0.056-0.125-0.125-0.125h-17.169z"></path>
            <path id="svg-ico" fill="#ee5586" d="M17.288 3.706h-2.569c-0.238 0-0.431-0.194-0.431-0.431s0.194-0.431 0.431-0.431h2.569c0.238 0 0.431 0.194 0.431 0.431s-0.194 0.431-0.431 0.431z"></path>
            <path id="svg-ico" fill="#ee5586" d="M16 29.113c-0.944 0-1.713-0.769-1.713-1.712s0.769-1.712 1.713-1.712c0.944 0 1.712 0.769 1.712 1.712s-0.769 1.712-1.713 1.712zM16 26.544c-0.475 0-0.856 0.381-0.856 0.856s0.381 0.856 0.856 0.856c0.475 0 0.856-0.387 0.856-0.856 0-0.475-0.381-0.856-0.856-0.856z"></path>
            </svg>
            <h5>BUY TELEPHONE NUMBERS</h5>
            <p>Purchase as many Mobile, Fixed or Toll-free numbers as you need in over 40 countries. With instant setup, call screening and all calls and messages recorded and redirected to your mobile you need never miss a call.</p>
            </div> */}
            <ServiceCard
                svg={<svg className="mb-4 svg" xmlns="http://www.w3.org/2000/svg" version="1.1" width="50" height="50" viewBox="0 0 32 32" src="fonts/svg/mobile.svg" alt="mobile">
                <title>mobile</title>
                <path fill="#5e686b" d="M24.581 31.837h-17.163c-0.537 0-0.981-0.438-0.981-0.981v-29.813c0-0.544 0.438-0.981 0.981-0.981h17.169c0.538 0 0.975 0.438 0.975 0.981v29.819c0 0.538-0.438 0.975-0.981 0.975zM7.419 0.919c-0.069 0-0.125 0.056-0.125 0.125v29.819c0 0.069 0.056 0.125 0.125 0.125h17.169c0.069 0 0.125-0.056 0.125-0.125v-29.819c0-0.069-0.056-0.125-0.125-0.125h-17.169z"></path>
                <path id="svg-ico" fill="#ee5586" d="M17.288 3.706h-2.569c-0.238 0-0.431-0.194-0.431-0.431s0.194-0.431 0.431-0.431h2.569c0.238 0 0.431 0.194 0.431 0.431s-0.194 0.431-0.431 0.431z"></path>
                <path id="svg-ico" fill="#ee5586" d="M16 29.113c-0.944 0-1.713-0.769-1.713-1.712s0.769-1.712 1.713-1.712c0.944 0 1.712 0.769 1.712 1.712s-0.769 1.712-1.713 1.712zM16 26.544c-0.475 0-0.856 0.381-0.856 0.856s0.381 0.856 0.856 0.856c0.475 0 0.856-0.387 0.856-0.856 0-0.475-0.381-0.856-0.856-0.856z"></path>
                </svg>}
                title="BUY TELEPHONE NUMBERS"
                description="Purchase as many Mobile, Fixed or Toll-free numbers as you need in over 40 countries. With instant setup, call screening and all calls and messages recorded and redirected to your mobile you need never miss a call."
            />
            </Grid>
            <Grid item xs={12} md={4} lg={4} className=" my-3">
            {/* <div className="services-items">
            <svg className="mb-4" xmlns="http://www.w3.org/2000/svg" version="1.1" width="50" height="50" viewBox="0 0 32 32" class="svg" src="fonts/svg/phone.svg" alt="phone">
            <title>phone</title>
            <path fill="#5e686b" d="M27.063 5.162c-2.6-2.6-6.050-4.2-9.706-4.5-0.238-0.019-0.438 0.156-0.456 0.387s0.156 0.438 0.387 0.456c3.456 0.281 6.719 1.794 9.175 4.256 5.737 5.738 5.737 15.069 0 20.806s-15.069 5.738-20.806 0c-2.775-2.775-4.306-6.469-4.306-10.4s1.531-7.625 4.306-10.4c2.469-2.469 5.738-3.981 9.206-4.256 0.231-0.019 0.406-0.219 0.387-0.456-0.019-0.231-0.213-0.406-0.456-0.387-3.669 0.294-7.125 1.888-9.738 4.5-2.938 2.938-4.556 6.844-4.556 11s1.619 8.063 4.556 11c3.031 3.031 7.019 4.55 11 4.55s7.969-1.519 11-4.55c6.069-6.069 6.069-15.938 0.006-22.006z"></path>
            <path id="svg-ico" fill="#ee5586" d="M17.563 16.262c-1.969 1.969-2.756 2.212-2.944 2.238l-0.113-0.113c-0.575-0.581-1.169-1.181-2.138-1.181-0.738 0-1.556 0.381-2.575 1.194-0.894 0.719-1.344 1.45-1.375 2.225-0.025 0.563 0.175 1.044 0.463 1.469-0.637 0.406-1.731 1.262-2.175 2.606-0.075 0.219 0.044 0.462 0.269 0.538 0.044 0.012 0.088 0.019 0.131 0.019 0.175 0 0.344-0.113 0.4-0.288 0.388-1.163 1.394-1.9 1.919-2.219 0.162 0.169 0.325 0.319 0.469 0.462l0.3 0.288c0.425 0.425 1.075 0.65 1.881 0.65 1.1 0 2.5-0.419 3.925-1.169 1.594-0.825 3.231-2.056 4.725-3.556 1.944-1.944 3.431-4.119 4.181-6.119 0.344-0.912 0.525-1.769 0.531-2.487 0.006-0.831-0.219-1.5-0.644-1.931-0.087-0.088-0.181-0.188-0.281-0.294-0.594-0.625-1.4-1.481-2.5-1.481-0.813 0-1.569 0.45-2.319 1.381-0.931 1.162-1.294 2.044-1.175 2.875 0.113 0.8 0.644 1.325 1.163 1.838l0.119 0.119c-0.012 0.1-0.094 0.35-0.363 0.762-0.369 0.569-1 1.306-1.875 2.175zM20.456 12.775l-0.181-0.181c-0.45-0.444-0.844-0.831-0.919-1.35-0.081-0.575 0.225-1.262 1-2.225 0.575-0.713 1.119-1.063 1.656-1.063 0.731 0 1.344 0.644 1.881 1.213 0.1 0.113 0.2 0.213 0.3 0.313 0.269 0.269 0.406 0.725 0.4 1.325-0.006 0.619-0.169 1.381-0.481 2.2-0.712 1.894-2.131 3.962-3.988 5.819-1.438 1.438-3 2.613-4.525 3.406-1.313 0.694-2.563 1.075-3.531 1.075-0.569 0-1.025-0.144-1.281-0.4l-0.313-0.3c-0.581-0.556-1.244-1.181-1.213-1.944 0.019-0.525 0.369-1.050 1.056-1.606 0.85-0.681 1.519-1.012 2.044-1.012 0.619 0 1.019 0.413 1.588 0.988 0.044 0.044 0.088 0.087 0.119 0.119 0.588 0.587 1.962-0.169 4.081-2.294 0.913-0.912 1.581-1.694 1.988-2.325 0.556-0.825 0.656-1.419 0.319-1.756z"></path>
            </svg>
            <h5>CALL OR MESSAGE ON YOUR NEW NUMBER</h5>
            <p>Starting a business, club or just like your privacy. Use your new number to make or receive calls and messages globally. We will handle calls and messages while you are busy.</p>
            </div> */}
            <ServiceCard 
                svg={<svg className="mb-4" xmlns="http://www.w3.org/2000/svg" version="1.1" width="50" height="50" viewBox="0 0 32 32" class="svg" src="fonts/svg/phone.svg" alt="phone">
                <title>phone</title>
                <path fill="#5e686b" d="M27.063 5.162c-2.6-2.6-6.050-4.2-9.706-4.5-0.238-0.019-0.438 0.156-0.456 0.387s0.156 0.438 0.387 0.456c3.456 0.281 6.719 1.794 9.175 4.256 5.737 5.738 5.737 15.069 0 20.806s-15.069 5.738-20.806 0c-2.775-2.775-4.306-6.469-4.306-10.4s1.531-7.625 4.306-10.4c2.469-2.469 5.738-3.981 9.206-4.256 0.231-0.019 0.406-0.219 0.387-0.456-0.019-0.231-0.213-0.406-0.456-0.387-3.669 0.294-7.125 1.888-9.738 4.5-2.938 2.938-4.556 6.844-4.556 11s1.619 8.063 4.556 11c3.031 3.031 7.019 4.55 11 4.55s7.969-1.519 11-4.55c6.069-6.069 6.069-15.938 0.006-22.006z"></path>
                <path id="svg-ico" fill="#ee5586" d="M17.563 16.262c-1.969 1.969-2.756 2.212-2.944 2.238l-0.113-0.113c-0.575-0.581-1.169-1.181-2.138-1.181-0.738 0-1.556 0.381-2.575 1.194-0.894 0.719-1.344 1.45-1.375 2.225-0.025 0.563 0.175 1.044 0.463 1.469-0.637 0.406-1.731 1.262-2.175 2.606-0.075 0.219 0.044 0.462 0.269 0.538 0.044 0.012 0.088 0.019 0.131 0.019 0.175 0 0.344-0.113 0.4-0.288 0.388-1.163 1.394-1.9 1.919-2.219 0.162 0.169 0.325 0.319 0.469 0.462l0.3 0.288c0.425 0.425 1.075 0.65 1.881 0.65 1.1 0 2.5-0.419 3.925-1.169 1.594-0.825 3.231-2.056 4.725-3.556 1.944-1.944 3.431-4.119 4.181-6.119 0.344-0.912 0.525-1.769 0.531-2.487 0.006-0.831-0.219-1.5-0.644-1.931-0.087-0.088-0.181-0.188-0.281-0.294-0.594-0.625-1.4-1.481-2.5-1.481-0.813 0-1.569 0.45-2.319 1.381-0.931 1.162-1.294 2.044-1.175 2.875 0.113 0.8 0.644 1.325 1.163 1.838l0.119 0.119c-0.012 0.1-0.094 0.35-0.363 0.762-0.369 0.569-1 1.306-1.875 2.175zM20.456 12.775l-0.181-0.181c-0.45-0.444-0.844-0.831-0.919-1.35-0.081-0.575 0.225-1.262 1-2.225 0.575-0.713 1.119-1.063 1.656-1.063 0.731 0 1.344 0.644 1.881 1.213 0.1 0.113 0.2 0.213 0.3 0.313 0.269 0.269 0.406 0.725 0.4 1.325-0.006 0.619-0.169 1.381-0.481 2.2-0.712 1.894-2.131 3.962-3.988 5.819-1.438 1.438-3 2.613-4.525 3.406-1.313 0.694-2.563 1.075-3.531 1.075-0.569 0-1.025-0.144-1.281-0.4l-0.313-0.3c-0.581-0.556-1.244-1.181-1.213-1.944 0.019-0.525 0.369-1.050 1.056-1.606 0.85-0.681 1.519-1.012 2.044-1.012 0.619 0 1.019 0.413 1.588 0.988 0.044 0.044 0.088 0.087 0.119 0.119 0.588 0.587 1.962-0.169 4.081-2.294 0.913-0.912 1.581-1.694 1.988-2.325 0.556-0.825 0.656-1.419 0.319-1.756z"></path>
                </svg>}
                title="CALL OR MESSAGE ON YOUR NEW NUMBER"
                description="Starting a business, club or just like your privacy. Use your new number to make or receive calls and messages globally. We will handle calls and messages while you are busy."
            />
            </Grid>
            <Grid item xs={12} md={4} lg={4} className=" my-3">
                
            {/* <div className="services-items">
                 <svg className="mb-4" xmlns="http://www.w3.org/2000/svg" version="1.1" width="50" height="50" viewBox="0 0 32 32" class="svg" src="fonts/svg/global.svg" alt="global">
                <title>global</title>
                <path id="svg-ico" fill="#ee5586" d="M16.006 24.569c-8.794 0-15.681-3.531-15.681-8.038l0.019-1.125c0-4.5 6.881-8.025 15.662-8.025s15.663 3.531 15.663 8.037l0.019 1.113c0 4.512-6.887 8.038-15.681 8.038zM16.006 8.256c-8.156 0-14.794 3.213-14.794 7.162l-0.019 1.125c0 3.944 6.644 7.156 14.813 7.156s14.813-3.212 14.813-7.162l-0.019-1.113c-0.006-3.956-6.637-7.169-14.794-7.169z"></path>
                <path fill="#5e686c" d="M16.006 31.669c-8.644 0-15.681-7.031-15.681-15.675s7.037-15.681 15.681-15.681c8.644 0 15.681 7.031 15.681 15.681-0.006 8.644-7.038 15.675-15.681 15.675zM16.006 1.188c-8.169 0-14.806 6.638-14.806 14.806 0 8.162 6.644 14.806 14.806 14.806s14.806-6.644 14.806-14.806c0-8.169-6.644-14.806-14.806-14.806z"></path>
                <path fill="#5e686c" d="M15.463 31.644c-4.506 0-8.037-6.881-8.037-15.669 0-8.781 3.531-15.662 8.037-15.662 0.244 0 0.438 0.194 0.438 0.438s-0.194 0.438-0.438 0.438c-3.95 0-7.162 6.638-7.162 14.794s3.213 14.794 7.162 14.794c0.244 0 0.438 0.194 0.438 0.438s-0.2 0.431-0.438 0.431z"></path>
                <path fill="#5e686c" d="M16.887 31.625c-0.244 0-0.438-0.194-0.438-0.438s0.194-0.438 0.438-0.438c3.95 0 7.162-6.631 7.162-14.775 0-8.15-3.212-14.775-7.163-14.775-0.244 0-0.438-0.194-0.438-0.438s0.194-0.438 0.438-0.438c4.506 0 8.038 6.875 8.038 15.65s-3.531 15.65-8.038 15.65z"></path>
                </svg>
                <h5>CHEAP INTERNATIONAL RATES</h5>
                <p>Call over 200 countries for rates as low as 5p per min using your new number or your own. Why not purchase numbers local to your family, friends or potential customers. They can then call you for low or no cost.</p>
            </div> */}
            <ServiceCard 
                svg={<svg className="mb-4" xmlns="http://www.w3.org/2000/svg" version="1.1" width="50" height="50" viewBox="0 0 32 32" class="svg" src="fonts/svg/global.svg" alt="global">
                <title>global</title>
                <path id="svg-ico" fill="#ee5586" d="M16.006 24.569c-8.794 0-15.681-3.531-15.681-8.038l0.019-1.125c0-4.5 6.881-8.025 15.662-8.025s15.663 3.531 15.663 8.037l0.019 1.113c0 4.512-6.887 8.038-15.681 8.038zM16.006 8.256c-8.156 0-14.794 3.213-14.794 7.162l-0.019 1.125c0 3.944 6.644 7.156 14.813 7.156s14.813-3.212 14.813-7.162l-0.019-1.113c-0.006-3.956-6.637-7.169-14.794-7.169z"></path>
                <path fill="#5e686c" d="M16.006 31.669c-8.644 0-15.681-7.031-15.681-15.675s7.037-15.681 15.681-15.681c8.644 0 15.681 7.031 15.681 15.681-0.006 8.644-7.038 15.675-15.681 15.675zM16.006 1.188c-8.169 0-14.806 6.638-14.806 14.806 0 8.162 6.644 14.806 14.806 14.806s14.806-6.644 14.806-14.806c0-8.169-6.644-14.806-14.806-14.806z"></path>
                <path fill="#5e686c" d="M15.463 31.644c-4.506 0-8.037-6.881-8.037-15.669 0-8.781 3.531-15.662 8.037-15.662 0.244 0 0.438 0.194 0.438 0.438s-0.194 0.438-0.438 0.438c-3.95 0-7.162 6.638-7.162 14.794s3.213 14.794 7.162 14.794c0.244 0 0.438 0.194 0.438 0.438s-0.2 0.431-0.438 0.431z"></path>
                <path fill="#5e686c" d="M16.887 31.625c-0.244 0-0.438-0.194-0.438-0.438s0.194-0.438 0.438-0.438c3.95 0 7.162-6.631 7.162-14.775 0-8.15-3.212-14.775-7.163-14.775-0.244 0-0.438-0.194-0.438-0.438s0.194-0.438 0.438-0.438c4.506 0 8.038 6.875 8.038 15.65s-3.531 15.65-8.038 15.65z"></path>
                </svg>}
                title="CHEAP INTERNATIONAL RATES"
                description="Call over 200 countries for rates as low as 5p per min using your new number or your own. Why not purchase numbers local to your family, friends or potential customers. They can then call you for low or no cost."
    
            />
            </Grid>       
            <Grid item xs={12} md={4} lg={4} className=" my-3">
            {/* <div className="services-items">
            <svg className="mb-4" xmlns="http://www.w3.org/2000/svg" version="1.1" width="50" height="50" viewBox="0 0 32 32" class="svg" src="fonts/svg/meeting.svg" alt="meeting">
            <title>meeting</title>
            <path fill="#5e686c" d="M8.887 27.462h-6.094c-0.231 0-0.425-0.188-0.425-0.425v-6.688h-1.606c-0.231 0-0.425-0.188-0.425-0.425v-5.075c0-1.912 1.556-3.469 3.469-3.469h4.063c1.331 0 2.562 0.781 3.138 1.988 0.1 0.213 0.012 0.463-0.2 0.563s-0.463 0.012-0.563-0.2c-0.431-0.912-1.363-1.506-2.375-1.506h-4.056c-1.45 0-2.625 1.175-2.625 2.625v4.656h1.612c0.231 0 0.425 0.188 0.425 0.425v6.688h5.669c0.231 0 0.425 0.188 0.425 0.425s-0.2 0.419-0.431 0.419z"></path>
            <path fill="#5e686c" d="M5.844 9.088c-1.862 0-3.375-1.513-3.375-3.375s1.513-3.375 3.375-3.375c1.862 0 3.375 1.513 3.375 3.375s-1.513 3.375-3.375 3.375zM5.844 3.181c-1.4 0-2.531 1.137-2.531 2.531s1.138 2.531 2.531 2.531c1.4 0 2.531-1.138 2.531-2.531s-1.138-2.531-2.531-2.531z"></path>
            <path fill="#5e686c" d="M29.2 27.462h-6.094c-0.231 0-0.425-0.188-0.425-0.425s0.188-0.425 0.425-0.425h5.669v-6.688c0-0.231 0.188-0.425 0.425-0.425h1.613v-4.656c0-1.45-1.175-2.625-2.625-2.625h-4.063c-1.006 0-1.938 0.588-2.375 1.506-0.1 0.213-0.35 0.3-0.563 0.2s-0.3-0.35-0.2-0.563c0.575-1.206 1.806-1.988 3.137-1.988h4.063c1.913 0 3.469 1.556 3.469 3.469v5.075c0 0.231-0.188 0.425-0.425 0.425h-1.613v6.688c0 0.244-0.188 0.431-0.419 0.431z"></path>
            <path fill="#5e686c" d="M26.15 9.088c-1.863 0-3.375-1.513-3.375-3.375s1.512-3.375 3.375-3.375c1.863 0 3.375 1.513 3.375 3.375 0.006 1.862-1.512 3.375-3.375 3.375zM26.15 3.181c-1.394 0-2.531 1.137-2.531 2.531s1.137 2.531 2.531 2.531c1.394 0 2.531-1.138 2.531-2.531s-1.131-2.531-2.531-2.531z"></path>
            <path id="svg-ico" fill="#ee5586" d="M19.044 31.525h-6.094c-0.231 0-0.425-0.188-0.425-0.425v-7.7h-2.625c-0.231 0-0.425-0.188-0.425-0.425v-7.106c0-2.475 2.012-4.481 4.481-4.481h4.063c2.475 0 4.481 2.012 4.481 4.481v7.106c0 0.231-0.188 0.425-0.425 0.425h-2.625v7.7c0.019 0.238-0.175 0.425-0.406 0.425zM13.375 30.681h5.25v-7.7c0-0.231 0.188-0.425 0.425-0.425h2.625v-6.688c0-2.006-1.631-3.637-3.637-3.637h-4.063c-2.006 0-3.637 1.631-3.637 3.637v6.688h2.625c0.231 0 0.425 0.188 0.425 0.425l-0.012 7.7z"></path>
            <path id="svg-ico" fill="#ee5586" d="M16 8.919c-2.325 0-4.219-1.894-4.219-4.219 0-2.331 1.894-4.225 4.219-4.225s4.219 1.894 4.219 4.225c0 2.325-1.894 4.219-4.219 4.219zM16 1.319c-1.863 0-3.375 1.512-3.375 3.381 0 1.862 1.512 3.375 3.375 3.375s3.375-1.513 3.375-3.375c0-1.862-1.512-3.381-3.375-3.381z"></path>
            </svg>
            <h5>HOST MEETINGS</h5>
            <p>HOST MEETINGS
    Set the date and time and host a meeting on your number. Give people a 4 digit code and then they can join. We will record it so you can review later. Video conferences coming soon as well..</p>
            </div> */}
            <ServiceCard
                svg={<svg className="mb-4" xmlns="http://www.w3.org/2000/svg" version="1.1" width="50" height="50" viewBox="0 0 32 32" class="svg" src="fonts/svg/meeting.svg" alt="meeting">
                <title>meeting</title>
                <path fill="#5e686c" d="M8.887 27.462h-6.094c-0.231 0-0.425-0.188-0.425-0.425v-6.688h-1.606c-0.231 0-0.425-0.188-0.425-0.425v-5.075c0-1.912 1.556-3.469 3.469-3.469h4.063c1.331 0 2.562 0.781 3.138 1.988 0.1 0.213 0.012 0.463-0.2 0.563s-0.463 0.012-0.563-0.2c-0.431-0.912-1.363-1.506-2.375-1.506h-4.056c-1.45 0-2.625 1.175-2.625 2.625v4.656h1.612c0.231 0 0.425 0.188 0.425 0.425v6.688h5.669c0.231 0 0.425 0.188 0.425 0.425s-0.2 0.419-0.431 0.419z"></path>
                <path fill="#5e686c" d="M5.844 9.088c-1.862 0-3.375-1.513-3.375-3.375s1.513-3.375 3.375-3.375c1.862 0 3.375 1.513 3.375 3.375s-1.513 3.375-3.375 3.375zM5.844 3.181c-1.4 0-2.531 1.137-2.531 2.531s1.138 2.531 2.531 2.531c1.4 0 2.531-1.138 2.531-2.531s-1.138-2.531-2.531-2.531z"></path>
                <path fill="#5e686c" d="M29.2 27.462h-6.094c-0.231 0-0.425-0.188-0.425-0.425s0.188-0.425 0.425-0.425h5.669v-6.688c0-0.231 0.188-0.425 0.425-0.425h1.613v-4.656c0-1.45-1.175-2.625-2.625-2.625h-4.063c-1.006 0-1.938 0.588-2.375 1.506-0.1 0.213-0.35 0.3-0.563 0.2s-0.3-0.35-0.2-0.563c0.575-1.206 1.806-1.988 3.137-1.988h4.063c1.913 0 3.469 1.556 3.469 3.469v5.075c0 0.231-0.188 0.425-0.425 0.425h-1.613v6.688c0 0.244-0.188 0.431-0.419 0.431z"></path>
                <path fill="#5e686c" d="M26.15 9.088c-1.863 0-3.375-1.513-3.375-3.375s1.512-3.375 3.375-3.375c1.863 0 3.375 1.513 3.375 3.375 0.006 1.862-1.512 3.375-3.375 3.375zM26.15 3.181c-1.394 0-2.531 1.137-2.531 2.531s1.137 2.531 2.531 2.531c1.394 0 2.531-1.138 2.531-2.531s-1.131-2.531-2.531-2.531z"></path>
                <path id="svg-ico" fill="#ee5586" d="M19.044 31.525h-6.094c-0.231 0-0.425-0.188-0.425-0.425v-7.7h-2.625c-0.231 0-0.425-0.188-0.425-0.425v-7.106c0-2.475 2.012-4.481 4.481-4.481h4.063c2.475 0 4.481 2.012 4.481 4.481v7.106c0 0.231-0.188 0.425-0.425 0.425h-2.625v7.7c0.019 0.238-0.175 0.425-0.406 0.425zM13.375 30.681h5.25v-7.7c0-0.231 0.188-0.425 0.425-0.425h2.625v-6.688c0-2.006-1.631-3.637-3.637-3.637h-4.063c-2.006 0-3.637 1.631-3.637 3.637v6.688h2.625c0.231 0 0.425 0.188 0.425 0.425l-0.012 7.7z"></path>
                <path id="svg-ico" fill="#ee5586" d="M16 8.919c-2.325 0-4.219-1.894-4.219-4.219 0-2.331 1.894-4.225 4.219-4.225s4.219 1.894 4.219 4.225c0 2.325-1.894 4.219-4.219 4.219zM16 1.319c-1.863 0-3.375 1.512-3.375 3.381 0 1.862 1.512 3.375 3.375 3.375s3.375-1.513 3.375-3.375c0-1.862-1.512-3.381-3.375-3.381z"></path>
                </svg>} 
                title="HOST MEETINGS"
                description="HOST MEETINGS
                Set the date and time and host a meeting on your number. Give people a 4 digit code and then they can join. We will record it so you can review later. Video conferences coming soon as well.."
            />
            </Grid>
            <Grid item xs={12} md={4} lg={4} className=" my-3">
            {/* <div className="services-items">
            <svg className="mb-4" xmlns="http://www.w3.org/2000/svg" version="1.1" width="50" height="50" viewBox="0 0 32 32" class="svg" src="fonts/svg/hand.svg" alt="hand">
            <title>hand</title>
            <path fill="#5e686b" d="M29.275 11.925c-0.819-0.85-1.831-1.281-3.012-1.281-0.269 0-0.538 0.025-0.794 0.075-0.863-0.95-1.969-1.438-3.288-1.438-0.55 0-1.087 0.1-1.6 0.287-0.875-0.731-1.887-1.106-3.031-1.106-0.031 0-0.075 0-0.119 0v-3.281c0-1.325-0.469-2.481-1.387-3.438-0.925-0.963-2.069-1.45-3.4-1.45-1.313 0-2.45 0.469-3.381 1.4s-1.4 2.069-1.4 3.381v8.625c-0.556-0.225-1.156-0.338-1.787-0.338-1.306 0-2.431 0.475-3.356 1.412s-1.394 2.069-1.394 3.375c0 1.063 0.319 2.031 0.956 2.875l6.531 8.725c0.444 0.581 1.012 1.050 1.688 1.387 0.675 0.344 1.394 0.512 2.137 0.512h12.225c0.844 0 1.606-0.262 2.275-0.781 0.663-0.519 1.106-1.194 1.306-2.012l1.563-6.262c0.325-1.269 0.494-2.594 0.494-3.938v-3.694c0-1.169-0.413-2.194-1.225-3.037zM29.65 18.663c0 1.275-0.156 2.525-0.462 3.725l-1.563 6.262c-0.156 0.637-0.488 1.144-1.006 1.544s-1.094 0.6-1.75 0.6h-12.225c-0.606 0-1.2-0.144-1.756-0.425s-1.025-0.669-1.394-1.144l-6.537-8.706c-0.525-0.7-0.781-1.475-0.781-2.369 0-1.087 0.375-1.994 1.144-2.775s1.669-1.156 2.75-1.156c0.725 0 1.4 0.181 1.994 0.537 0.131 0.081 0.294 0.081 0.431 0.006 0.131-0.075 0.213-0.219 0.213-0.369v-9.313c0-1.094 0.375-2.006 1.15-2.781s1.681-1.15 2.781-1.15c1.106 0 2.012 0.387 2.781 1.188 0.775 0.806 1.15 1.738 1.15 2.844v3.744c0 0 0 0.006 0 0.006v1.819c0 0.238 0.188 0.425 0.425 0.425s0.425-0.194 0.425-0.425v-1.425c0.044 0 0.087-0.006 0.119-0.006 0.962 0 1.788 0.306 2.519 0.938v2.4c0 0.238 0.188 0.425 0.425 0.425s0.425-0.194 0.425-0.425v-2.306c0.406-0.144 0.825-0.219 1.256-0.219 1.113 0 2 0.4 2.719 1.225v3.475c0 0.238 0.188 0.425 0.425 0.425s0.425-0.188 0.425-0.425v-3.3c0.169-0.025 0.344-0.037 0.512-0.037 0.956 0 1.738 0.331 2.4 1.019s0.988 1.494 0.988 2.456l0.019 3.694z"></path>
            <path id="svg-ico" fill="#ee5586" d="M15.912 17.731c-0.238 0-0.425 0.188-0.425 0.425v6.538c0 0.238 0.188 0.425 0.425 0.425s0.425-0.188 0.425-0.425v-6.538c0-0.238-0.194-0.425-0.425-0.425z"></path>
            <path id="svg-ico" fill="#ee5586" d="M20.456 17.731c-0.238 0-0.425 0.188-0.425 0.425v6.538c0 0.238 0.188 0.425 0.425 0.425s0.425-0.188 0.425-0.425v-6.538c0-0.238-0.194-0.425-0.425-0.425z"></path>
            <path id="svg-ico" fill="#ee5586" d="M24.994 17.731c-0.238 0-0.425 0.188-0.425 0.425v6.538c0 0.238 0.188 0.425 0.425 0.425s0.425-0.188 0.425-0.425v-6.538c0.006-0.238-0.188-0.425-0.425-0.425z"></path>
            </svg>
            <h5>SCREEN CALLS AND MESSAGES</h5>
            <p>You can control redirection for all numbers, an individual number or even a specific caller. Screen your calls and stay safe online. Now you can give your virtual mobile number out as you wish.</p>
            </div> */}
            <ServiceCard
                svg={ <svg className="mb-4" xmlns="http://www.w3.org/2000/svg" version="1.1" width="50" height="50" viewBox="0 0 32 32" class="svg" src="fonts/svg/hand.svg" alt="hand">
                <title>hand</title>
                <path fill="#5e686b" d="M29.275 11.925c-0.819-0.85-1.831-1.281-3.012-1.281-0.269 0-0.538 0.025-0.794 0.075-0.863-0.95-1.969-1.438-3.288-1.438-0.55 0-1.087 0.1-1.6 0.287-0.875-0.731-1.887-1.106-3.031-1.106-0.031 0-0.075 0-0.119 0v-3.281c0-1.325-0.469-2.481-1.387-3.438-0.925-0.963-2.069-1.45-3.4-1.45-1.313 0-2.45 0.469-3.381 1.4s-1.4 2.069-1.4 3.381v8.625c-0.556-0.225-1.156-0.338-1.787-0.338-1.306 0-2.431 0.475-3.356 1.412s-1.394 2.069-1.394 3.375c0 1.063 0.319 2.031 0.956 2.875l6.531 8.725c0.444 0.581 1.012 1.050 1.688 1.387 0.675 0.344 1.394 0.512 2.137 0.512h12.225c0.844 0 1.606-0.262 2.275-0.781 0.663-0.519 1.106-1.194 1.306-2.012l1.563-6.262c0.325-1.269 0.494-2.594 0.494-3.938v-3.694c0-1.169-0.413-2.194-1.225-3.037zM29.65 18.663c0 1.275-0.156 2.525-0.462 3.725l-1.563 6.262c-0.156 0.637-0.488 1.144-1.006 1.544s-1.094 0.6-1.75 0.6h-12.225c-0.606 0-1.2-0.144-1.756-0.425s-1.025-0.669-1.394-1.144l-6.537-8.706c-0.525-0.7-0.781-1.475-0.781-2.369 0-1.087 0.375-1.994 1.144-2.775s1.669-1.156 2.75-1.156c0.725 0 1.4 0.181 1.994 0.537 0.131 0.081 0.294 0.081 0.431 0.006 0.131-0.075 0.213-0.219 0.213-0.369v-9.313c0-1.094 0.375-2.006 1.15-2.781s1.681-1.15 2.781-1.15c1.106 0 2.012 0.387 2.781 1.188 0.775 0.806 1.15 1.738 1.15 2.844v3.744c0 0 0 0.006 0 0.006v1.819c0 0.238 0.188 0.425 0.425 0.425s0.425-0.194 0.425-0.425v-1.425c0.044 0 0.087-0.006 0.119-0.006 0.962 0 1.788 0.306 2.519 0.938v2.4c0 0.238 0.188 0.425 0.425 0.425s0.425-0.194 0.425-0.425v-2.306c0.406-0.144 0.825-0.219 1.256-0.219 1.113 0 2 0.4 2.719 1.225v3.475c0 0.238 0.188 0.425 0.425 0.425s0.425-0.188 0.425-0.425v-3.3c0.169-0.025 0.344-0.037 0.512-0.037 0.956 0 1.738 0.331 2.4 1.019s0.988 1.494 0.988 2.456l0.019 3.694z"></path>
                <path id="svg-ico" fill="#ee5586" d="M15.912 17.731c-0.238 0-0.425 0.188-0.425 0.425v6.538c0 0.238 0.188 0.425 0.425 0.425s0.425-0.188 0.425-0.425v-6.538c0-0.238-0.194-0.425-0.425-0.425z"></path>
                <path id="svg-ico" fill="#ee5586" d="M20.456 17.731c-0.238 0-0.425 0.188-0.425 0.425v6.538c0 0.238 0.188 0.425 0.425 0.425s0.425-0.188 0.425-0.425v-6.538c0-0.238-0.194-0.425-0.425-0.425z"></path>
                <path id="svg-ico" fill="#ee5586" d="M24.994 17.731c-0.238 0-0.425 0.188-0.425 0.425v6.538c0 0.238 0.188 0.425 0.425 0.425s0.425-0.188 0.425-0.425v-6.538c0.006-0.238-0.188-0.425-0.425-0.425z"></path>
                </svg>}
                title="SCREEN CALLS AND MESSAGES"
                description="You can control redirection for all numbers, an individual number or even a specific caller. Screen your calls and stay safe online. Now you can give your virtual mobile number out as you wish."
            />
            </Grid>
            <Grid item xs={12} md={4} lg={4}  className=" my-3">
            {/* <div className="services-items">
            <svg className="mb-4" xmlns="http://www.w3.org/2000/svg" version="1.1" width="50" height="50" viewBox="0 0 32 32" class="svg" src="fonts/svg/security.svg" alt="security">
            <title>security</title>
            <path fill="#5e686c" d="M15.931 31.688c-0.063 0-0.119-0.012-0.175-0.038-0.537-0.244-13.088-6.113-13.088-13.613v-13.188c0-0.006 0-0.013 0-0.025 0-0.006 0-0.019 0-0.025 0-0.231 0.2-0.444 0.425-0.412 0.081-0.013 8.75 0.037 12.55-3.844 0 0 0 0 0 0s0 0.006 0 0c0.031-0.031 0.063-0.056 0.1-0.075 0 0-0.006 0 0 0 0 0 0 0 0 0v0 0 0c0.063-0.031 0.15-0.050 0.2-0.050 0 0 0 0 0 0v0c0.063 0 0.125 0.013 0.181 0.044 0 0 0 0 0 0s0 0 0 0c0.038 0.019 0.075 0.044 0.106 0.075 0 0 0 0 0 0s0 0 0 0 0.006 0 0.006 0.006c3.631 3.706 12.281 3.838 13.156 3.844 0.25-0.050 0.494 0.156 0.494 0.412v13.244c0 7.506-13.225 13.369-13.787 13.619-0.056 0.019-0.113 0.025-0.169 0.025zM3.5 5.219v12.819c0 6.525 10.931 12.044 12.438 12.775 1.556-0.719 13.113-6.244 13.113-12.775v-12.819c-1.881-0.031-9.375-0.381-13.106-3.806-3.688 3.406-10.644 3.769-12.444 3.806z"></path>
            <path id="svg-ico" fill="#ee5586" d="M15.912 27.275c-0.056 0-0.119-0.012-0.175-0.038-0.394-0.175-9.631-4.413-9.631-9.913v-8.55c0-0.231 0.188-0.419 0.419-0.419s0.419 0.188 0.419 0.419v8.556c0 4.594 7.737 8.475 8.975 9.069 1.294-0.581 9.6-4.481 9.6-9.069v-8.556c0-0.231 0.188-0.419 0.419-0.419s0.419 0.188 0.419 0.419v8.556c0 5.506-9.856 9.738-10.281 9.913-0.050 0.025-0.106 0.031-0.162 0.031z"></path>
            <path id="svg-ico" fill="#ee5586" d="M6.569 8.838c-0.037 0-0.069 0-0.081 0-0.231-0.006-0.412-0.194-0.412-0.425 0.006-0.231 0.169-0.406 0.425-0.412 0.056 0 6.15 0.044 9.162-3.050 0.162-0.162 0.425-0.169 0.594-0.006 0.163 0.162 0.169 0.425 0.006 0.594-3.106 3.188-8.912 3.3-9.694 3.3z"></path>
            <path id="svg-ico" fill="#ee5586" d="M25.825 8.838c-0.837 0-7.056-0.113-10.162-3.3-0.162-0.162-0.156-0.431 0.006-0.594s0.431-0.156 0.594 0.006c3.012 3.094 9.569 3.044 9.637 3.050 0 0 0.006 0 0.006 0 0.231 0 0.413 0.181 0.419 0.412s-0.181 0.419-0.413 0.425c-0.019 0-0.044 0-0.087 0z"></path>
            <path fill="#5e686c" d="M9.613 11.838c-0.106 0-0.213-0.044-0.294-0.125-0.162-0.162-0.162-0.425 0-0.594l0.881-0.881c0.162-0.162 0.425-0.162 0.594 0 0.162 0.162 0.162 0.425 0 0.594l-0.881 0.881c-0.088 0.081-0.194 0.125-0.3 0.125z"></path>
            <path fill="#5e686c" d="M9.169 15.806c-0.106 0-0.213-0.044-0.294-0.125-0.162-0.162-0.162-0.425 0-0.594l4.856-4.85c0.162-0.162 0.425-0.162 0.594 0 0.162 0.162 0.162 0.425 0 0.594l-4.856 4.856c-0.081 0.081-0.188 0.119-0.3 0.119z"></path>
            </svg>
            <h5>KEEP YOUR PERSONAL NUMBER PRIVATE</h5>
            <p>Buy a numbers to sell that item, sign up to that service or for those nights out. Safe in the knowledge you dont need to put your own number online. Just drop the number once you're finished.</p>
            </div> */}
            <ServiceCard 
                svg={<svg className="mb-4" xmlns="http://www.w3.org/2000/svg" version="1.1" width="50" height="50" viewBox="0 0 32 32" class="svg" src="fonts/svg/security.svg" alt="security">
                <title>security</title>
                <path fill="#5e686c" d="M15.931 31.688c-0.063 0-0.119-0.012-0.175-0.038-0.537-0.244-13.088-6.113-13.088-13.613v-13.188c0-0.006 0-0.013 0-0.025 0-0.006 0-0.019 0-0.025 0-0.231 0.2-0.444 0.425-0.412 0.081-0.013 8.75 0.037 12.55-3.844 0 0 0 0 0 0s0 0.006 0 0c0.031-0.031 0.063-0.056 0.1-0.075 0 0-0.006 0 0 0 0 0 0 0 0 0v0 0 0c0.063-0.031 0.15-0.050 0.2-0.050 0 0 0 0 0 0v0c0.063 0 0.125 0.013 0.181 0.044 0 0 0 0 0 0s0 0 0 0c0.038 0.019 0.075 0.044 0.106 0.075 0 0 0 0 0 0s0 0 0 0 0.006 0 0.006 0.006c3.631 3.706 12.281 3.838 13.156 3.844 0.25-0.050 0.494 0.156 0.494 0.412v13.244c0 7.506-13.225 13.369-13.787 13.619-0.056 0.019-0.113 0.025-0.169 0.025zM3.5 5.219v12.819c0 6.525 10.931 12.044 12.438 12.775 1.556-0.719 13.113-6.244 13.113-12.775v-12.819c-1.881-0.031-9.375-0.381-13.106-3.806-3.688 3.406-10.644 3.769-12.444 3.806z"></path>
                <path id="svg-ico" fill="#ee5586" d="M15.912 27.275c-0.056 0-0.119-0.012-0.175-0.038-0.394-0.175-9.631-4.413-9.631-9.913v-8.55c0-0.231 0.188-0.419 0.419-0.419s0.419 0.188 0.419 0.419v8.556c0 4.594 7.737 8.475 8.975 9.069 1.294-0.581 9.6-4.481 9.6-9.069v-8.556c0-0.231 0.188-0.419 0.419-0.419s0.419 0.188 0.419 0.419v8.556c0 5.506-9.856 9.738-10.281 9.913-0.050 0.025-0.106 0.031-0.162 0.031z"></path>
                <path id="svg-ico" fill="#ee5586" d="M6.569 8.838c-0.037 0-0.069 0-0.081 0-0.231-0.006-0.412-0.194-0.412-0.425 0.006-0.231 0.169-0.406 0.425-0.412 0.056 0 6.15 0.044 9.162-3.050 0.162-0.162 0.425-0.169 0.594-0.006 0.163 0.162 0.169 0.425 0.006 0.594-3.106 3.188-8.912 3.3-9.694 3.3z"></path>
                <path id="svg-ico" fill="#ee5586" d="M25.825 8.838c-0.837 0-7.056-0.113-10.162-3.3-0.162-0.162-0.156-0.431 0.006-0.594s0.431-0.156 0.594 0.006c3.012 3.094 9.569 3.044 9.637 3.050 0 0 0.006 0 0.006 0 0.231 0 0.413 0.181 0.419 0.412s-0.181 0.419-0.413 0.425c-0.019 0-0.044 0-0.087 0z"></path>
                <path fill="#5e686c" d="M9.613 11.838c-0.106 0-0.213-0.044-0.294-0.125-0.162-0.162-0.162-0.425 0-0.594l0.881-0.881c0.162-0.162 0.425-0.162 0.594 0 0.162 0.162 0.162 0.425 0 0.594l-0.881 0.881c-0.088 0.081-0.194 0.125-0.3 0.125z"></path>
                <path fill="#5e686c" d="M9.169 15.806c-0.106 0-0.213-0.044-0.294-0.125-0.162-0.162-0.162-0.425 0-0.594l4.856-4.85c0.162-0.162 0.425-0.162 0.594 0 0.162 0.162 0.162 0.425 0 0.594l-4.856 4.856c-0.081 0.081-0.188 0.119-0.3 0.119z"></path>
                </svg>}
                title="KEEP YOUR PERSONAL NUMBER PRIVATE"
                description="Buy a numbers to sell that item, sign up to that service or for those nights out. Safe in the knowledge you dont need to put your own number online. Just drop the number once you're finished."
            />
            </Grid>
        </Grid>
        </Container>

             </Box>

             <Box className="bg-features py-5">
             
                 <Container className=" mt-3 px-5 ">
                     <Grid container className="px-5 bg-white box-shadow" spacing={5}>
                         <Grid item xs={12} md={12} lg={12} >
                             <h2 className="text-center">Features</h2>                             
                         </Grid>
                         <Grid item xs={12} md={3} lg={3} >  
                             <FeatureIcon image={callBlock200} title="Call Blocking" />                           
                         </Grid>
                         <Grid item xs={12} md={3} lg={3} >
                         <FeatureIcon image={callBlock200} title="Call Forwarding" />                         
                         </Grid>
                         <Grid item xs={12} md={3} lg={3} > 
                         <FeatureIcon image={callBlock200} title="Conference Calling" />                            
                         </Grid>
                         <Grid item xs={12} md={3} lg={3} > 
                         <FeatureIcon image={callBlock200} title="Call Recording" />                        
                         </Grid>
                         <Grid item xs={12} md={3} lg={3} >  
                         <FeatureIcon image={callBlock200} title="Translation" />                           
                         </Grid>
                         <Grid item xs={12} md={3} lg={3} >  
                         <FeatureIcon image={callBlock200} title="Call Whispering" />                       
                         </Grid>
                         <Grid item xs={12} md={3} lg={3} >  
                         <FeatureIcon image={callBlock200} title="Personalised Voicemail" />                           
                         </Grid>
                         <Grid item xs={12} md={3} lg={3} >  
                         <FeatureIcon image={callBlock200} title="Web Integration" />                       
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
