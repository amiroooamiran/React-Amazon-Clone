import React from 'react';
import { UseStateValue } from '../StateProvider';

// this importing Styling
import './Product.css';
function ProductCards({id, title, image, price, rating}) {

  const [ {basket}, dispatch] = UseStateValue();

  console.log("this is a basket >>>", basket)
  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id:id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }
  return (
    <div className='product'>
        {/* this is Link For Icons */}
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>
        <img src={image} />
        <div className='product_info'>
            <p className='newproduct'>New</p>
            <p>{title}</p>
            <p className='product_price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product_raiting'>
                {Array(rating).fill().map((_, i) => (
                  <p><i class="uil uil-heart"></i></p>
                ))}
            </div>
            <button onClick={addToBasket}>add to basket<i class="uil uil-shopping-basket"></i></button>
        </div>
    </div>
  )
}

export default ProductCards