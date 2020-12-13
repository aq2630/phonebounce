import React from 'react'
import PricePlan from './index'
import Carousel from 'react-multi-carousel';
import {Box, Grid} from '@material-ui/core'
import { isMobile  } from "react-device-detect";
import BR from '../../assets/images/BR.png'
import GB from '../../assets/images/GB.png'
import US from '../../assets/images/US.png'
import CA from '../../assets/images/CA.png'
import SE from '../../assets/images/SE.png'
import AU from '../../assets/images/AU.png'


const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 4,
      partialVisibilityGutter: 30,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 0,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 0,
    }
  };

const PricePlanCarousel = () => {
    return (
        <div>
            <Box className="bg-pricing py-4">
                 <>
                     <Grid container spacing={2}>
                         <Grid item xs={12}>    
                         {isMobile ? 
                            <div>
                               <PricePlan flagImage={BR} title="Brazil" price={5} />
                               <PricePlan flagImage={GB} title="United Kingdom" price={5} />
                               <PricePlan flagImage={AU} title="Australia" price={5} />
                               <PricePlan flagImage={US} title="US Toll-Free" price={5} />
                               <PricePlan flagImage={CA} title="Canada" price={5} />
                               <PricePlan flagImage={SE} title="Sweden" price={5} />
                            </div>
                           
                        : (<Carousel
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
                               <PricePlan flagImage={BR} title="Brazil" price={5} />
                               <PricePlan flagImage={GB} title="United Kingdom" price={5} />
                               <PricePlan flagImage={AU} title="Australia" price={5} />
                               <PricePlan flagImage={US} title="US Toll-Free" price={5} />
                               <PricePlan flagImage={CA} title="Canada" price={5} />
                               <PricePlan flagImage={SE} title="Sweden" price={5} />
                           
                            </Carousel>) }                         
                         </Grid>
                     </Grid>
                 </>
             </Box>            
        </div>
    )
}

export default PricePlanCarousel
