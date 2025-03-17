import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.png'
import user_2 from '../../assets/user-2.png'
import user_3 from '../../assets/user-3.png'
import user_4 from '../../assets/user-4.png'
const Testimonials = () => {
    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
            slider.current.style.transform = `translateX(${tx}%)`;
        }
    }
    const slideBackward = () => {
        if (tx < -0) {
            tx += 25;
            slider.current.style.transform = `translateX(${tx}%)`;
        }
    }

    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3> Anna Kowalska</h3>
                                    <span>Edusity, USA</span>
                                </div>
                            </div>
                            <p>The university provided me with a solid foundation for my career. The professors are incredibly supportive, and the hands-on experience I gained through internships was invaluable, practical, and inspiring.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>Michael Johnson</h3>
                                    <span>Global University, Canada</span>
                                </div>
                            </div>
                            <p>A place where ideas thrive! I’ve been able to explore my passions while gaining knowledge that directly applies to the industry. The international student community makes it feel like home.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>Emily Davis</h3>
                                    <span>Innovation College, Australia</span>
                                </div>
                            </div>
                            <p>What I love most is how the university emphasizes both personal growth and academic excellence. The campus is full of opportunities to learn and collaborate with diverse, like-minded individuals.</p>
                        </div>
                    </li>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>David Lee</h3>
                                    <span>Future Horizons University, Germany</span>
                                </div>
                            </div>
                            <p>The support from the faculty and the resources available made my learning experience truly enriching. I feel confident stepping into the professional world thanks to the skills and connections I’ve built here.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Testimonials