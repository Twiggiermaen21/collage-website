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
                <h2> Shaping the future through knowledge. </h2>
                <p>  Our university is a place of innovation, knowledge, and endless opportunities. Here, students gain not only theoretical expertise but also practical skills essential for their future careers.
                </p>
                <p> With a diverse and dynamic academic environment, we offer modern study programs, international collaborations, and hands-on experience through internships and research projects. Our goal is to inspire, educate, and empower the next generation of leaders and professionals.</p>
                <p> Join us and be part of a vibrant community where learning meets ambition!</p>
            </div>
        </div>
    )
}

export default About