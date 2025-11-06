import './Hero.css';
import React, { useEffect } from 'react';

import profilepic from '../../Images/pho.jpeg';
import resume from '../../Images/resume.svg';
import linkedin from '../../Images/linkedin.svg';
import github from '../../Images/github.svg';
import leetcode from '../../Images/leetcode.svg';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS styles

const Hero = () => {
  useEffect(() => {
    // Initialize AOS with custom settings
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Ensures the animation triggers only once when it comes into view
      startEvent: 'DOMContentLoaded', // Trigger AOS when the DOM is loaded
      easing: 'ease-in-out', // Easing function for the animations
    });
  }, []);

  // Helper function to conditionally apply AOS animations with delay
  const getAosData = (animation, delay) => ({
    "data-aos": animation,
    "data-aos-delay": delay, // Delay in milliseconds
  });

  return (
    <div className="hero">
      <img  {...getAosData("fade-left", 0)} src={profilepic} className="profile-pic" alt="Profile" />
      <div id="hero1" className="hero__content">
        {/* Hero Name with AOS Animation */}
        <div {...getAosData("fade-up", 0)} className="hero_name">
          <h1 className="hero_name1">Aryan Choudhary</h1>
          <h3 className="hero_name2">MCA</h3>
        </div>

        {/* Education Section with AOS Animation */}
        <div {...getAosData("fade-up", 100)} className="hero_education">
          <h1 className="hero_education1">Student @ Lovely Professional University</h1>
        </div>

        {/* About Section with AOS Animation */}
        <div {...getAosData("fade-up", 200)} className="hero_about">
          <h1 className="hero_about1">
            I am a dedicated and enthusiastic professional with a strong passion for technology and a hunger for continuous learning. Eager to explore diverse job roles within computer science and engineering, I actively update my skills and stay abreast of industry advancements. Committed to personal and professional growth in a dynamic and evolving field, I consistently apply the concepts learned in my classes to create projects, which I update on Github and Linkedin. 
          </h1>
        </div>

        {/* Links Section with AOS Animation */}
        <div {...getAosData("fade-up", 300)} className="hero_links">
          <div className="hero_link_btn">
            <img src={resume} className="hero_link_btn_img" alt="Resume" />
            <a className="hero_link_btn_text" href="https://drive.google.com/file/d/1rBU1VFSnRQSC1F-BeTQwQGDZhjNddZe/vie">Resume</a>
          </div>
          <div className="hero_link_btn1">
            <a href="https://www.linkedin.com/in/aryan-choudhary-68205a383"><img  src={linkedin} className="hero_link_btn_img1" alt="LinkedIn" /></a>
            <a href="https://github.com/visheshchoudhar"><img src={github} className="hero_link_btn_img1" alt="GitHub" /></a>
            <a href="https://leetcode.com/u/visheshchoudhar/" ><img src={leetcode} className="hero_link_btn_img1" alt="Leetcode" /></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;



