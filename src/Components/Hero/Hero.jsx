import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className='hero container'>

            <div className="hero-text">
                <h1> Your future starts here! 🚀</h1>
                <p> Click the button below and join us to gain knowledge, develop your passions, and open the door to your career! </p>
                <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
            </div>
        </div>
    )
}
export default Hero