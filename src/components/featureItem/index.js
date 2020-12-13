import React from 'react'
import './index.css'


export const FeatureItem = (props) => {
    return (
        <div>
             <div className="feature-item">
                    <a href="#">
                        <div className="img"><img src={props.image} alt={props.imageAlt} /></div>
                        <div className="inform"><h2 className="title">{props.title}</h2></div>
                    </a>
                    </div>            
        </div>
    )
}
