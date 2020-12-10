import React from 'react'
import './index.css'


const FeatureIcon = (props) => {
    return (
        <div className="text-center">
            <a href="translation.html" className="feature-link">
                <div className="d-inline-block rounded-circle shadow p-5">
                    <img src={props.image} alt="call-translation" class="img-fluid " width="100" />
                </div>
            <div className="text-danger text-center mt-4 title">{props.title}</div>
            </a>
            
        </div>
    )
}

export default FeatureIcon;
