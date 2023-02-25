import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
// this section for Styling
import './Login.css'
function Login() {

  return (
    <div className='LoginPage'>
        <Link to='/'>
            <img className='login_logo' src='https://th.bing.com/th/id/R.61d9101a6841f5cd92afce057830fd7a?rik=3ymuV1eRqA8jHA&pid=ImgRaw&r=0' alt='logo' />
        </Link>

        <div className='login_container'>
            <h1>Sing-in</h1>

            <form>
                <h5>E-mail</h5>
                <input type='text'   />

                <h5>Password</h5>
                <input type='password'  />

                <button type='submit' className='login-singinerbtn'> Sing in </button>

                <hr />

                <p>
                    if you don't have account in Tezza kala, you can click on this button  and  creat acount for your self
                </p>

                <button  className='login_rigisterbtn'>Creat Your Tezza Kalla acount</button>
            </form>
        </div>


        
    </div>
  )
}

export default Login