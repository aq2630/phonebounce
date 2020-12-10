import React from 'react'
import './index.css'

const ServiceCard = (props) => {
    return (
        <div>
             <div className="services-items">
            {props.svg}
            <h5 className="my-4">{props.title}</h5>
            <p className="subtitle">{props.description}</p>
            </div>
        </div>
    )
}

export default ServiceCard
