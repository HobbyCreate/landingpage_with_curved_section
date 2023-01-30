import React from 'react'
import Mockup from '../../assets/images/screen-mockups.svg'
import CommuImage from '../../assets/images/icon-communities.svg'
import messagesImage from '../../assets/images/icon-messages.svg'
import './Hero.css'

function Hero() {
    return (
        <div className='hero-container'>
            <h1>Build The Community Your Fans Will Love</h1>
            <div className='hero-paragraph'>
                <p>Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion</p>
                <button className='primary-btn'>Get Started For Free</button>
            </div>
            <img className='mockup-img' src={Mockup} alt='' />
            <div className='interact'>
                <div className='communities'>
                    <i className='image'><img src={CommuImage} alt='communities' /></i>
                    <h1>1.4m+</h1>
                    <p>Communities Formed</p>
                </div>
                <div className='messages'>
                    <i className='image'><img src={messagesImage} alt='messages' /></i>
                    <h1>2.7m+</h1>
                    <p>Messages Sent</p>
                </div>
            </div>
        </div>
    )
}

export default Hero
