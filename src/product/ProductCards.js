import React, { Component } from 'react'

// this importing Styling
import './Product.css';

export class ProductCards extends Component {
    render() {
      return (
        <div className='productCard-container'>
            {/* this is Link For Icons */}
            <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>

            <div className='imagCard'>
                <img src='https://www.tchibo.de/newmedia/page/img/e41cbe1a16de3d3c/image_classic_jpg.jpg' alt='productsCard' />
            </div>

            <div className='cards-Discription'>
                <h5>product Title <span>Best Seller</span></h5>
                <a href='#'>product discription khertopertanioalis <i class="uil uil-angle-right"></i></a>
            </div>
          

        </div>
      )
    }
  }
  
  export default ProductCards