import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import image from "../../Images/connect.svg";
import './Connect.css';

const Connect = () => {

  // Initialize AOS when the component mounts
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Trigger animations only once when they come into view
      easing: 'ease-in-out', // Easing function for smooth animation
    });
  }, []);

  return (
    <div className="connect_container">
      <div className="academics_content1" id="connect_heading" {...getAosData('fade-up', 0)}>
        <div style={{ display: 'inline' }} id="academics_content">
          <h1 className="academics_heading">Connect with me</h1>
        </div>
      </div>
      
      <div className="connect_container2">
        <img 
          src={image} 
          className="connect-image" 
          alt="connect image" 
          {...getAosData('fade-left', 100)} // Animation for the image
        />

        <div className="connect_form">
          <h1 className="connect_input_label" {...getAosData('fade-up', 200)}>Name</h1>
          <input 
            type="text" 
            placeholder="Enter your Name" 
            className="connect_input" 
            {...getAosData('fade-up', 300)} // Animation for the Name input field
          />
          
          <h1 className="connect_input_label" {...getAosData('fade-up', 400)}>Email</h1>
          <input 
            type="text" 
            placeholder="Enter your Email" 
            className="connect_input" 
            {...getAosData('fade-up', 500)} // Animation for the Email input field
          />
          
          <h1 className="connect_input_label" {...getAosData('fade-up', 600)}>Message</h1>
          <textarea 
            type="text" 
            placeholder="Write your Message" 
            id="connect_textarea" 
            className="connect_input" 
            {...getAosData('fade-up', 700)} // Animation for the Message textarea
          />
          
          <button 
            className="connect_button" 
            {...getAosData('fade-up', 800)} // Animation for the Send button
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

// Helper function to apply AOS data attributes with delay
const getAosData = (animation, delay) => ({
  "data-aos": animation,
  "data-aos-delay": delay, // Delay in milliseconds
});

export default Connect;
