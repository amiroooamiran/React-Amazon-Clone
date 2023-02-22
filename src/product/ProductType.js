import React, { Component } from 'react'

// this section from import Styling
import './Product.css'

export class ProductType extends Component {
  render() {
    return (
      <div className='productType-container'>
        <div className='BransType'>IKEA</div>
        <div className='BransType'>TCHIBO</div>
        <div className='BransType'>BOSCH</div>
        <div className='BransType'>De'Longhi</div>
        <div className='BransType'>PHILIPS</div>
      </div>
    )
  }
}

export default ProductType