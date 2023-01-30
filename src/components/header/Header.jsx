import React from 'react'
import logo from '../../assets/images/logo.svg'
import './Header.css'

function Header() {
    return (
        <div className='header-container'>
            <img className='logo' src={logo}/>
            <a href='#' className='secondary-btn' type='text'>Try it free</a>
        </div>
    )
}

export default Header
