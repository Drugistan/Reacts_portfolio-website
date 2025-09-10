import React from 'react'
import "./Hero.css"
import profile_img from "../../assets/profile_img.svg"

const Hero = () => {
  return (
    <div className='hero'>
        <img src={profile_img} alt="" />
        <h1><span>Hi, I'm Ali Khan, </span>Full Stack Developer based in USA</h1>
        <p>I'm a passionate and dedicated full-stack developer with expertise in both front-end and back-end technologies. I love creating dynamic and responsive web applications that provide seamless user experiences. Let's connect and build something amazing together!</p>
        <div className="hero-action">
            <div className='hero-resume'>My Resume</div>
            <div className='hero-connect'>Connect With Me</div>
        </div>
    </div>
  )
}

export default Hero