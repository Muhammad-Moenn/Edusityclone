import React from 'react'
import './Contact.css'
import msgicon from "../../assets/msg-icon.png";
import mailicon from "../../assets/mail-icon.png";
import phoneicon from "../../assets/phone-icon.png";
import locationicon from "../../assets/location-icon.png";
import whiteicon from "../../assets/white-arrow.png";
function Contact() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "1a3f5fb1-d4f6-48b4-bd5c-83b6b5ce5ad0");

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
      <div className='contact-col'>
        <h3>Send us a message <img src={msgicon} alt=''></img></h3>
        <p>We would love to hear from you! Whether you have a question, feedback, or just want to say hello, please don't hesitate to reach out. Our team is here to assist you and ensure you have a great experience with Edusity University. Fill out the form below and we'll get back to you as soon as possible.</p>
        <ul>
            <li> <img src={mailicon}alt=''></img>contact@TecMony</li>
            <li> <img src={phoneicon}alt=''></img>+923186588590</li>
            <li className='location'> <img className='locationicon' src={locationicon}alt=''></img>202 Education Street,<br/> Learnsville, State, <br/>55678</li>
            
        </ul>
      </div>
      <div className='contact-col'>
        <form className='form'onSubmit={onSubmit}>
          <label>Your Name:</label>
          <input type='text' required/>
          <label> YourEmail:</label>
          <input type='email' required/>
          <label> Your Phone:</label>
          <input type='tel' required/>
          <label> Your Message:</label>
          <textarea rows='6' required></textarea>
          <button className='btn dark-btn contbtn' type='submit'>Submit<img src={whiteicon} alt=''></img></button>
        </form>
        <span className='contspan'>{result}</span>
      </div>
    </div>
  )
}

export default Contact
