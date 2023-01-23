import { hasPointerEvents } from '@testing-library/user-event/dist/utils';
import React from 'react'


// import styling
import './Header.css'

// importing Images

// body coding
function header() {
    // the open function from [ product ]
    
    const handelMouseEnter = e =>{
        if(document.getElementById('prduct_container').style.display == 'none'){
            document.getElementById('prduct_container').style.display = 'flex';
            document.getElementById('products').style.textDecoration = 'underline 3px';
        }else{
            document.getElementById('prduct_container').style.display = 'none';
            document.getElementById('products').style.textDecoration = 'none';

            // this Section for Subsets
            document.getElementById('product_results_tvs').style.display = 'none';
            document.getElementById('product_results_kitchen').style.display = 'none';
            document.getElementById('product_results_persone').style.display = 'none';
            document.getElementById('product_results_home').style.display = 'none';
        }
        
    } 

    const handelcoffeEnter = e =>{
        if(document.getElementById('cofee_container').style.display == 'none'){

            document.getElementById('cofee_container').style.display = 'flex';
            document.getElementById('coffe').style.textDecoration = 'underline 3px';

        }else{

            document.getElementById('cofee_container').style.display = 'none';
            document.getElementById('coffe').style.textDecoration = 'none';

        }
    }

    // this function for Opened The Product Lister [ Product ]

    const hpTvSoundsystem =e =>{
        document.getElementById('product_results_tvs').style.display = 'block';
        document.getElementById('product_results_kitchen').style.display = 'none';
        document.getElementById('product_results_persone').style.display = 'none';
        document.getElementById('product_results_home').style.display = 'none';
    }

    const hpkitchen = e =>{
        document.getElementById('product_results_kitchen').style.display = 'block';
        document.getElementById('product_results_tvs').style.display = 'none';
        document.getElementById('product_results_persone').style.display = 'none';
        document.getElementById('product_results_home').style.display = 'none';
    } 

    const hpPersonal = e =>{
        document.getElementById('product_results_persone').style.display = 'block';
        document.getElementById('product_results_tvs').style.display = 'none';
        document.getElementById('product_results_kitchen').style.display = 'none';
        document.getElementById('product_results_home').style.display = 'none';
    } 

    const hpHome = e =>{
        document.getElementById('product_results_home').style.display = 'block';
        document.getElementById('product_results_persone').style.display = 'none';
        document.getElementById('product_results_tvs').style.display = 'none';
        document.getElementById('product_results_kitchen').style.display = 'none';
    } 

    // this function for Product Results [ Products ]
    
    const outhpTvSoundsystem =e =>{
        document.getElementById('product_results_tvs').style.display = 'none';
        document.getElementById('product_results_kitchen').style.display = 'none';
        document.getElementById('product_results_home').style.display = 'none';
        document.getElementById('product_results_persone').style.display = 'none';
    }

    return (
    <div className='header'>

        {/* this is Link For Icons */}
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.0/css/line.css"></link>

        {/* logo of the headers */}
        <div className='logo-header'>
            <img className='image-logo-header' src="https://th.bing.com/th/id/R.61d9101a6841f5cd92afce057830fd7a?rik=3ymuV1eRqA8jHA&pid=ImgRaw&r=0" />
        </div>

        {/* product container fild */}
        <div className='header-container'>

            <div className='header-ithem'><button onClick={handelMouseEnter} id="products">Product</button></div>
            <div className='header-ithem'><button onClick={handelcoffeEnter} id="coffe">Coffe</button></div>
            <div className='header-ithem'><button>Blog</button></div>
            <div className='header-ithem'><button>about us</button></div>

        </div>

        {/* this section for Products */}
        <div className='Product-container' id='prduct_container'>

            <div className="Product-Lister" onMouseEnter={hpTvSoundsystem}>
                <i class="uil uil-desktop"></i>
                <h4>Tv & Sound System</h4>
                <p>all Tv and Sound Product and Accessories</p>
            </div>


            <div className="Product-Lister" onMouseEnter={hpkitchen}>
                <i class="uil uil-glass-martini"></i>
                <h4>Kitchen Care</h4>
                <p>all Tv and Sound Product and Accessories</p>
            </div>

            <div className="Product-Lister" onMouseEnter={hpPersonal}>
                <i class="uil uil-backpack"></i>
                <h4>Personal Care</h4>
                <p>all Tv and Sound Product and Accessories</p>
            </div>

            <div className="Product-Lister" onMouseEnter={hpHome}>
                <i class="uil uil-lamp"></i>
                <h4>Home Care</h4>
                <p>all Tv and Sound Product and Accessories</p>
            </div>

        </div>


        {/* thus section for Coffe  */}
        <div className='Product-container coffe' id='cofee_container'>

            <div className="Product-Lister">
                <img src="https://img.icons8.com/external-xnimrodx-lineal-xnimrodx/64/000000/external-coffee-machine-smart-home-xnimrodx-lineal-xnimrodx.png"/> 
                <h4>Coffee Machine</h4>
                <p>all Tv and Sound Product and Accessories</p>
            </div>


            <div className="Product-Lister">
                <img src="https://img.icons8.com/dotty/64/null/vietnamese-coffee.png"/>
                <h4>Coffee Accessories</h4>
                <p>all Tv and Sound Product and Accessories</p>
            </div>

            <div className="Product-Lister">
                <img src="https://img.icons8.com/ios/64/null/coffee-beans-.png"/>
                <h4>Coffees</h4>
                <p>all Tv and Sound Product and Accessories</p>
            </div>

        </div>

        {/* this section for product in the Product COntainers  */}
        <div className='Product-Section' id='product_results_tvs' onMouseLeave={outhpTvSoundsystem}>
            <p>Tv, Sound</p>
        </div>

        <div className='Product-Section' id='product_results_kitchen' onMouseLeave={outhpTvSoundsystem}>
            <p>Kitchen Producrts</p>
        </div>

        <div className='Product-Section' id='product_results_persone' onMouseLeave={outhpTvSoundsystem}>
            <p>Personal Producrts</p>
        </div>

        <div className='Product-Section' id='product_results_home' onMouseLeave={outhpTvSoundsystem}>
            <p>Home Producrts</p>
        </div>

        {/* search console */}
        <div className='header-search-console'>
            <input type="text" placeholder='search...' />
            <i class="uil uil-search-alt"></i>
        </div>

        {/* the Navigation section */}
        <div className='header_nav'>

            <div className='header_option'>
                <span className='header_optionOne'>Hello Guest</span>
                <span className='header_optionTwo'>Sing in</span>
            </div>

            <div className='header_option'>
                <span className='header_optionOne'>Returns</span>
                <span className='header_optionTwo'>Orders</span>
            </div>

            <div className='header_option'>
                <span className='header_optionOne'>Your</span>
                <span className='header_optionTwo'>Prime</span>
            </div>

        </div>

        {/* the Basket sectopn */}
        <div className='header_optionBasket'>

            <span> <i class="uil uil-shopping-basket"></i></span>
            <span className='header_optionTwo header_basketCount'>0</span>

        </div>

    </div>
    )
}

export default header