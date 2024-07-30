import React, { useRef } from 'react'
import './Video.css'
function Videoplay({videoplay,setVideoplay}) {
 
  return (
    <div className={`videoplay ${videoplay?"":"hide"}`} onClick={()=>setVideoplay(!videoplay)} >
      {/* <video src='' autoPlay muted controls></video> */}
      <iframe className='video 'src="https://www.youtube.com/embed/Ou-GuJi0H7Q" title="EduCity: Gateway to global learning" frameborder="0" allow="accelerometer;  encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen ></iframe>
    </div>
  )
}

export default Videoplay
