import React from 'react';

// import styling
import './Home.css';

// import other components
import Product from '../product/Product.js';
import ProductType from '../product/ProductType';
import ProductCards from '../product/ProductCards';
import ProductSlider from '../product/ProductSlider';

// image importing
import BgHome from '../Image/BGhome.png';


function Home() {
  return (
    <div className='home'>

        <div className='home_container'>
            <img className="home__image" src={BgHome} alt=""/>
        </div>

        <div className='home_row'>
          {/* product Card 1 */}
          <Product 

          id = "1"
          title='IKEA Givs a sneak Peek'
          price={29.99}
          image='https://www.ikea.com/ext/ingkadam/m/4f359f0b4280a957/original/PH186612-crop001.jpg?f=s'
          rating={3}/>

          {/* product Card 2 */}
          <Product 
           id = "2"
           title='Tchebo Socks'
           price={5.14}
           image='https://m.media-amazon.com/images/I/91CfVtdJlSS._AC_UL320_.jpg'
           rating={5}/>

          {/* product Card 3 */}
          <Product
           id = "3"
           title='Tchebo Shert'
           price={13.99}
           image='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS_U5eSee2CKiR-KbYWneB9IN7y-CuMOg_Df3EqabGN4Z_JduQDmLYC4sVtXhTtKDOiBs&usqp=CAU'
           rating={4}/>

          {/* product Card 4 */}
          <Product 
           id = "4"
           title='Tchebo Gold Coffe'
           price={12}
           image='https://kelchi.com/wp-content/uploads/2022/04/tchibo-gold-200-1.jpg'
           rating={5}/>

          {/* product Card 5 */}
          <Product 
           id = "5"
           title='IKEA Givs a sneak Peek'
           price={43.99}
           image='https://m.media-amazon.com/images/I/81bcXgxbLoL._SX569_.jpg'
           rating={4}/>
        </div>

        <div className='productType'>
          <ProductType />
        </div>


        <h2 className='product-card-h2'>the Best Sells Products</h2>
        <div className='ProductCards'>
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
          <ProductCards />
        </div>

        {/* products Sliders in heare */}
        <ProductSlider />
        
    </div>
  )
}

export default Home