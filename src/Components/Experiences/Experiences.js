import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import './Experiences.css';

const Experiences = () => {
  const experiences = [
    {
      name: "Freelance",
      role: "Data Analyst",
      location: "Remote",
      technologies: "Tableau, MS Excel, Power Bi",
      projects: "animal hospital data analysis, sales data analysis",
      description: "I completed an internship at a government animal hospital, where i worked on data filtration and trend analysis to identity which animals where more prone to diseases."
    }
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      once: true, // Animation triggers once when scrolled into view
      easing: 'ease-in-out', // Easing function
    });
  }, []);

  // Helper function to apply AOS animations with delay
  const getAosData = (animation, delay) => ({
    "data-aos": animation,
    "data-aos-delay": delay,
  });

  return (
    <div className="experiences">
      <div id="experiences_heading" className="academics_content1">
        <div style={{ display: 'inline' }} id="academics_content">
          <h1 className="academics_heading" {...getAosData('fade-up', 0)}>Experiences</h1>
        </div>
      </div>
      <div className="experiences_container">
        {experiences.map((experience, index) => {
          return (
            <div
              id="experiences_item"
              className="academic_item"
              {...getAosData('fade-up', index * 200)} // Adding delay based on index for staggered animation
              key={index}
            >
              <div className="academic_left">
                {/* Company Name */}
                <h1 className="academic_name" {...getAosData('fade-left', 0)}>{experience.name}</h1>
                {/* Role */}
                <h1 className="academic_name" {...getAosData('fade-left', 100)}>{experience.role}</h1>
                {/* Location */}
                <h3 className="academic_location" {...getAosData('fade-left', 200)}>( {experience.location} )</h3>
                {/* Technologies */}
                <h3 className="project_item_technologies" {...getAosData('fade-left', 300)}>
                  <span className="project_item_technologies1">Technologies Used: </span>{experience.technologies}
                </h3>
                {/* Projects Worked */}
                <h3 className="project_item_technologies" {...getAosData('fade-left', 400)}>
                  <span className="project_item_technologies1">Projects Worked: </span>{experience.projects}
                </h3>
              </div>
              <div className="academic_right">
                {/* Description */}
                <h3 className="academic_explanation" {...getAosData('fade-right', 200)}>{experience.description}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experiences;
