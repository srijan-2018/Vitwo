import React from 'react'

const Industries = ({ industries_icon, title}) => {
    return (
        <div className="p-3">
            <div className="industries_items item">
                <div className="img_padding_30">
                    <img src={industries_icon}></img>
                </div>
                <div className="caption">
                    <h2>{title}</h2>
                </div>
            </div>
        </div>
    )
}

export default Industries;