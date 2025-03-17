import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const ACCESS_KEY = 'ee145193-840e-4fa5-a136-2c2a07d34a01';

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", ACCESS_KEY);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src={msg_icon} alt="" /></h3>
                <p> Have any questions or need more information? Feel free to reach out to us, and we'll get back to you as soon as possible.

                    Send us a message and let's connect!</p>
                <ul>
                    <li><img src={mail_icon} alt="" /> Contact@asidjaidij@gmai.cov</li>
                    <li><img src={phone_icon} alt="" /> +23 123 123 123</li>
                    <li><img src={location_icon} alt="" /> szkona 23 warszaw, Warszaw <bt /> 32 -200 Katowice Polsa</li>
                </ul>
            </div>
            <div className="contact-col">
                <form onSubmit={onSubmit} >
                    <label >Your name</label>
                    <input type="text" name='name' placeholder='Enter your name' required />
                    <label >Phone number</label>
                    <input type="tel" name='phone' placeholder='Enter your phone number' required />
                    <label >Write your messages here</label>
                    <textarea name="message" id="" rows="6" placeholder='Enter your message' required></textarea>
                    <button type='submit' className='btn dark-btn'>Submit now
                        <img src={white_arrow} alt="" />
                    </button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact