import React, { Component } from 'react'

export default function SliderCard(props) {
    return (
        <div className='cards-slider'>
            {/* this is Link For Icons */}
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
            <div className='image-cards'>
                <img src={props.url} />
            </div>
            
            <div className='button-sell'>
                <p className='product-card-title'>{props.name}</p>
                <hr></hr>
                <p className='card-discription'>{props.discription}</p>
                <p className='card-price'>Price: <span>{props.price}</span></p>
             <button>Buy the Product<span><i class="uil uil-shopping-basket"></i></span></button>
            </div>
        </div>
    );
}
