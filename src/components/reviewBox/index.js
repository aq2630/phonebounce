import React from 'react'
import './index.css'
import Carousel from 'react-material-ui-carousel'
import {Box, Container, Grid, Paper} from '@material-ui/core'
import android from "../../assets/images/android-app-icon.png"
import apple from "../../assets/images/apple-app-icon.svg"
import StarRateIcon from '@material-ui/icons/StarRate';

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


const ReviewBox = () => {
    return (
        <div>
            <div className="">
            <Box className="review-section py-4 px-5" >
                    <Container className="review-container">
                        <Grid container spacing={2} >
                            <Grid item xs={12} md={6} lg={6}>   
                                <img className="img-fluid px-5 mb-5" src={android} alt="Android" />                 
                                    <Carousel  className="px-5" navButtonsAlwaysInvisible={true} animation="slide" indicators={false}> 
                                    {
                                        reviews.map( (item, i) => <Item key={i} item={item} /> )
                                    }
                                </Carousel>

                                
                            </Grid>
                            <Grid item xs={12} md={6} lg={6}>
                            <img className="img-fluid px-5 mb-5" src={apple} alt="Apple" />                 
                                    <Carousel className="px-5" navButtonsAlwaysInvisible={true} animation="slide" indicators={false}> 
                                    {
                                        reviews.map( (item, i) => <Item key={i} item={item} /> )
                                    }
                                </Carousel>
                            </Grid>
                        </Grid>
                        
                    </Container>
                 </Box>
                
            </div>
            
        </div>
    )
}
export default ReviewBox;


