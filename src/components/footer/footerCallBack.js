import React from 'react'
import './footerCallBack.css'

const FooterCallBack = (props) => {
    return (
        <div>
             <div className="feature-item">
                    <a href="#">
                        <div className="img">{props.svg}</div>
                        <div className="inform"><h2 className="title">{props.title}</h2></div>
                    </a>
                    </div>            
        </div>
    )
}

export default FooterCallBack;
