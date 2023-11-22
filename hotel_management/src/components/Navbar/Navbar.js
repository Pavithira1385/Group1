import React, { useState } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"

function Navbar() {

    const [click, setClick] = useState(false)

    const handleCliick = () => setClick(!click)
    const closeMobileMenu = () => setClick(false)
  return (
   <>
   <nav className='navbar'>
    <div className='container flex_space'>
        <div className='meni-icon' onClick = {handleClick}>
        <i className = {click? "fa-solid fa-bars" : " fas fa-bars"}></i>

        </div>
        <ul className= {click? 'nav-menu active': "nav-menu"}>
            
            <li><Link to='/' onClick ={closeMobileMenu}>Home</Link></li>
            <li> <Link to='/about' onClick ={closeMobileMenu}>About</Link></li>
            <li> <Link to='/gallery' onClick ={closeMobileMenu} >Gallery</Link></li>
            <li> <Link to='/gallery' onClick ={closeMobileMenu}>Gallery</Link></li>
            <li><Link to='/destination' onClick ={closeMobileMenu}>Destination</Link></li>
            <li><Link to='/blog' onClick ={closeMobileMenu}>Blog</Link></li>
            <li> <Link to='/testimonail' onClick ={closeMobileMenu}>Testimonail</Link></li>
            <li> <Link to='/contact' onClick ={closeMobileMenu}>Contact Us</Link></li>
            
        </ul>

        <div className='login-area flex'>

            <li>
                <Link to='/sign-in'>
                    <i className='far fa-chevron-right'>Sign In</i>
                </Link>
            </li>

            <li>
                <Link to='/register'>
                    <i className='far fa-chevron-right'>Register</i>
                </Link>
            </li>

            <li>
                <Link to='/contact'>
                    <button className='primary-btn'>Request a Quote</button>
                </Link>
            </li>

        </div>
    </div>
   </nav>

   <header>
    <div className='container flex_space'>
        <div className='logo'>
            <img src='images/logo.jpg' alt='' />
        </div>
        <div className='contact flex_space'>

        <div className='box flex_space'>
                <div className='icons'>
                    <i className='fas fa-phone-volume'></i>
                </div>

                <div className='text'>
                    <h4>Call Us</h4>
                    <Link to="/contact"> +94 76 664 8321 </Link>
                </div>
            </div>

            <div className='box flex_space'>
                <div className='icons'>
                    <i className='far fa-envelope'></i>
                </div>

                <div className='text'>
                    <h4>Mail Us</h4>
                    <Link to="/contact">rajeenthanrajaratnam0005@hotmail.com</Link>
                </div>
            </div>



            <div className='box flex_space'>
                <div className='icons'>
                    <i className='far fa-clock'></i>
                </div>

                <div className='text'>
                    <h4>Working Hours</h4>
                    <Link to="/contact">Monday - Sunday: 09.00am to 11.pm</Link>
                </div>
            </div>
        </div>
    </div>
   </header>
   </>
  )
}

export default Navbar