import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
    return (
        <div className='hero container'>

            <div className="hero-text">
                <h1>We dasdasdasdasdsa</h1>
                <p> sasdhausd ajisdjais daisdoj aisd aisdj asidj aisdiasdiasidjiad
                    daidojaoidjaisdjioasdjiaidiadioasdisaid  ajisdjiad
                    siadiaodiaiodjaioisadj </p>
                <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>

            </div>

        </div>
    )
}

export default Hero