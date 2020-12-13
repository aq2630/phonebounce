import React from 'react'
import './index.css'


export const FeatureItemText = (props) => {
    return (
        <div>
             <div className="feature-item-text">
                    <a href="#">
                        <div className="img"><img src={props.image} alt={props.imageAlt} /></div>
                        <div className="inform"><p>
                            <b>{props.title} </b>
                            {props.description}</p></div>
                    </a>
                    </div>
            
        </div>
    )
}
