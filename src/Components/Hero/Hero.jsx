import React from 'react';
import './Hero.css'
import profile_img from '../../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div id="home" className='hero'>
      <img src={profile_img} alt="" width="300px"/>
      <h1><span>I'm Pankaj,</span>frontend developer based in india.</h1>
      <p>I am a frontend devloper from Uttar Pradesh, India i am a fresher. </p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link'offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume"> <a 
            className='anchor-link' 
            href='https://drive.google.com/file/d/1Vc9AiPxr7_be4CvhFQm1FFhrAdANCT9e/view?usp=drivesdk' 
            target="_blank" 
            rel="noopener noreferrer"
          >
            My Resume
          </a></div>
      </div>
    </div>
  );
}

export default Hero;
