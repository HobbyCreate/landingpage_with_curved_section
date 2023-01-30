import React from 'react'
import Logo from '../../assets/images/logo copy.svg'
import Phone from '../../assets/images/icon-phone.svg'
import Email from '../../assets/images/icon-email.svg'
import './Footer.css'

function Footer() {
    return (
        <div className='footer-container'>
            <div className='footer-curve'></div>
            <div className='footer'>
                <div className='newsletter'>
                    <h2>NEWSLETTER</h2>
                    <p>To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never send you spam or pass on your email address Subscribe</p>
                    <div className='input'>
                        <input type='text'></input>
                        <a href='#' className='third-btn'>Subscribe</a>
                    </div>
                </div>

                <div className='contact'>
                    <img src={Logo} alt='logo' />
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit lacinia vestibulum a, ultrices quis sem.</p>
                    <div className='cont'>
                        <img src={Phone} alt='' />
                        <p>Phone: +1-543-123-4567</p>
                    </div>
                    <div className='cont'>
                        <img src={Email} alt='' />
                        <p>example@huddle.com</p>
                    </div>
                    
                </div>
            </div>
            <div className='sns'>

            </div>
        </div>
    )
}

export default Footer
