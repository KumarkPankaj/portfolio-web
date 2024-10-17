import React from 'react';
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/profile_img.png'

const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About me</h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="about-section">
        <div className="about-left">
            <img src={profile_img} alt="" />
        </div>

        <div className="about-right">
            <div className="about-para">
                <p>I am a passionate and detail-oriented Frontend Developer with a strong background in creating responsive, user-friendly web interfaces. With expertise in HTML, CSS, and JavaScript,React Js.</p>
                <p>I thrive in collaborative environments where I can contribute to a team's success and continually learn and adapt to new technologies. </p>
            </div>
            <div className="about-skills">
                 <div className="about-skill"><p>HTML & CSS</p> <hr style={{width:" 50% "}} /></div>
                 <div className="about-skill"><p>React JS</p> <hr style={{width:" 70% "}} /></div>
                 <div className="about-skill"><p>JavaScript</p> <hr style={{width:" 60% "}} /></div>
            </div>
        </div>
      </div>

      <div className="about-achievements">
        <div className="about-achievement">
          <h1>1+</h1>
          <p>YEARS OF EXPERIENCE</p>
        </div>

        <hr />

        <div className="about-achievement">
          <h1>10+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        <hr/>
        <div className="about-achievement">
          <h1>10+</h1>
          <p>HAPPY CLIENTS</p>
        </div>

      </div>
      
    </div>
  );
}

export default About;
