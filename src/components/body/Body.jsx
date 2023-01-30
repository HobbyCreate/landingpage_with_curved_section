import React from 'react'
import './Body.css'
import Grow from '../../assets/images/illustration-grow-together.svg'
import Flowing from '../../assets/images/illustration-flowing-conversation.svg'
import YourUsers from '../../assets/images/illustration-your-users.svg'

function Body() {
    return (
        <div className='body-section'>
            <div className='section'>
                <div className='curve-top-section-1'></div>
                <div className='section-detail'>
                    <div className='paragraph'>
                        <h1>Grow Together</h1>
                        <p>Generate meaningful discussions with your audience and build a strong, loyal community. Think of the insightful conversations you miss out on with a feedback form.</p>
                    </div>
                    <img className='image' src={Grow} alt='grow' />
                </div>
                <div className='curve-bottom-section-1'></div>
            </div>

            <div className='section'>
                <div className='section-detail-white'>
                    <img className='image' src={Flowing} alt='flowing' />
                    <div className='paragraph'>
                        <h1>Flowing Conversations</h1>
                        <p>You wouldn't paginate a conversation in real life, so why do it online? Our threads have just-in-time loading for a more natural flow.</p>
                    </div>
                </div>
            </div>

            <div className='section'>
                <div className='curve-top-section-2'></div>
                <div className='curve-top'></div>
                <div className='section-detail'>
                    <div className='paragraph'>
                        <h1>Your Users</h1>
                        <p>It takes no time at all to integrate Huddle with your app's authentication solution. This means, once signed in to your app, your users can start chatting immediately.</p>
                    </div>
                    <img className='image' src={YourUsers} alt='youruser' />
                </div>
                <div className='curve-bottom-section-2'></div>
            </div>
            <div className='last-section'>
                <h1>Ready To Build Your Community?</h1>
                <a href='#' className='primary-btn'>Get Started For Free</a>
            </div>
        </div>
    )
}

export default Body
