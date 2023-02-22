import React, { Component } from 'react'

// hear for import packages
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

// hear for import styling
import SliderCard from './SliderCard';

// hear for import images
import tchiboFamily250 from '../Image/tchibo-family-250g.png';
import tcheboBrazilMils from '../Image/Tchebo-brazilMild.png';
import mesicalDoro from '../Image/miscela-doro.png';
import tchiboPerfessional from '../Image/tchibo-espresso.png';
import TimHoltons from '../Image/TimHoltons.png'

export class ProductSlider extends Component {
  render() {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 220, min: 0 },
          items: 1
        }
    };

    const productData = [
        {
            id:1,
            imageurl: "https://th.bing.com/th/id/R.479390b99d297a0137d3f56457c56d99?rik=Bp1UruR1sYMAFg&riu=http%3a%2f%2fwww.worldstopcoffee.com%2fimages%2fcafe_creme_1.png&ehk=09VruogrrhLRRAnNXMbhoGOkyHJk8Fbc6%2bhsl59kjAY%3d&risl=&pid=ImgRaw&r=0",
            name:"Davidoff caffe",
            price: "$15.99",
            discription:"this Germanic Davidof caffe"
        },

        {
            id:2,
            imageurl: tchiboFamily250,
            name:"Tchibo Family 250g",
            price: "$35.99",
            discription:"this Germanic Davidof caffe"
        },

        {
            id:3,
            imageurl: tcheboBrazilMils,
            name:"Tchebo Brazil Mils",
            price: "$21.48",
            discription:"this Germanic Davidof caffe"
        },

        {
            id:4,
            imageurl: mesicalDoro,
            name:"Mesical doro caffe",
            price: "$18.50",
            discription:"this Germanic Davidof caffe"
        },

        {
            id:5,
            imageurl: tchiboPerfessional,
            name:"Tchebo Perfessional",
            price: "$28.99",
            discription:"this Germanic Davidof caffe"
        },

        {
            id:6,
            imageurl: TimHoltons,
            name:"TimeHoltons",
            price: "$12.23",
            discription:"this Germanic Davidof caffe"
        },

    ]

    const product = productData.map((item) => <SliderCard name={item.name} url={item.imageurl} price={item.price} discription={item.discription}/>);
    return (
      <div className='slider-container'>
        <h3>this Just for Coffe</h3>
        <Carousel className='sliders' responsive={responsive}>

            {product}
            
        </Carousel>
      </div>
    )
  }
}

export default ProductSlider