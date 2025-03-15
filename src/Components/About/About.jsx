import React from 'react'
import './About.css'
import about_img from '../../assets/about.jpg'
import play_icon from '../../assets/play-icon.png'
const About = () => {
    return (
        <div className='about'>
            <div className="bout-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play_icon' />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2> nuruawr kasdjakw dkawj kdjk awd </h2>
                <p>   adssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                    asddddddddddddddddddddddddddddddddddddddddd
                    asdddddddddddddddddddddddddddddddddddddddddasd
                    saddddddddddddddddddddddddd adssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                    asddddddddddddddddddddddddddddddddddddddddd
                    asdddddddddddddddddddddddddddddddddddddddddasd
                    saddddddddddddddddddddddddd
                </p>
                <p> adssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                    asddddddddddddddddddddddddddddddddddddddddd
                    asdddddddddddddddddddddddddddddddddddddddddasd
                    saddddddddddddddddddddddddd
                    adssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                    asddddddddddddddddddddddddddddddddddddddddd
                    asdddddddddddddddddddddddddddddddddddddddddasd
                    saddddddddddddddddddddddddd</p>
                <p> adssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                    asddddddddddddddddddddddddddddddddddddddddd
                    asdddddddddddddddddddddddddddddddddddddddddasd
                    saddddddddddddddddddddddddd
                    adssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                    asddddddddddddddddddddddddddddddddddddddddd
                    asdddddddddddddddddddddddddddddddddddddddddasd
                    saddddddddddddddddddddddddd</p>
            </div>
        </div>
    )
}

export default About