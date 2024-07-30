import React, { useRef } from 'react'
import './Testimonial.css'
import nexticon from '../../assets/next-icon.png'
import backicon from '../../assets/back-icon.png'
import user1 from '../../assets/user-1.png'
import user2 from '../../assets/user-2.png'
import user3 from '../../assets/user-3.png'
import user4 from '../../assets/user-4.png'

function Testimonial() {

    const slider=useRef()
    let tx=0;
    
    const Forword=()=>{
        // 
        if(tx>0){
            tx -=25;
           }
       slider.current.style.transform=`translateX(-${tx}%)`;
    }
    const Backword=()=>{
        
        if(tx<50){
                    tx +=25;
                   }
           slider.current.style.transform=`translateX(-${tx}%)`;
    }
      return (
    <div className='testimonial'> 
      <img src={nexticon}alt='' className='nexticon' onClick={Forword}/>
      <img src={backicon}alt='' className='backicon' onClick={Backword}/>
      <div className='slider'>
        <ul ref={slider}>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user1}alt=''></img>
                        <div>
                            <h3>Emily Hart</h3>
                            <span>Edusity ,USA</span>
                        </div>
                    </div>
                    <p>Edusity University emphasizes the importance of holistic development and community engagement. Our vibrant campus life offers numerous extracurricular activities, cultural events, and service-learning opportunities that enrich the student experience .</p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user2}alt=''></img>
                        <div>
                            <h3>John Doe</h3>
                            <span>Edusity ,USA</span>
                        </div>
                    </div>
                    <p>At Edusity University, we believe in shaping not just capable professionals, but also responsible global citizens who are prepared to make meaningful contributions to society. Join us at Edusity University, where education meets inspiration </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user3}alt=''></img>
                        <div>
                            <h3>Lydia Bennett</h3>
                            <span>Edusity ,USA</span>
                        </div>
                    </div>
                    <p>At Edusity University, we are committed to providing a transformative educational experience that empowers students to achieve their full potential. Our diverse academic programs are designed to foster critical thinking, innovation and their full potential </p>
                </div>
            </li>
            <li>
                <div className='slide'>
                    <div className='user-info'>
                        <img src={user4}alt=''></img>
                        <div>
                            <h3>Eleanor Foster</h3>
                            <span>Edusity ,USA</span>
                        </div>
                    </div>
                    <p>Edusity University ,With state-of-the-art facilities, cutting-edge research opportunities, and a faculty of distinguished scholars and industry experts, Edusity University is dedicated to nurturing the leaders of tomorrow.and a faculty of distinguished scholars </p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonial
