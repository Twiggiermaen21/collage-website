import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'
const About = ({ setPlayState }) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play_icon' onClick={() => {
                    setPlayState(true)
                }} />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2> PTnuruawr kasdjakw dkawj kdjk awd </h2>
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
                    saddsssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                    asddddddddddddddddddddddddddddddddddddddddd
                    asdddddddddddddddddddddddddddddddddddddddddasd
                    saddddddddddddddddddddddddd</p>
                <p> adssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss
                    asddddddddddddddddddddddddddddddddddddddddd
                    asdddddddddddddddddddddddddddddddddddddddddasd
                    sad
                    asdddddddddddddddddddddddddddddddddddddddddasd
                    saddddddddddddddddddddddddd</p>
            </div>
        </div>
    )
}

export default About