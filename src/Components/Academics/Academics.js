import React, { useEffect } from 'react';
import AOS from 'aos';  // Import AOS
import 'aos/dist/aos.css';  // Import AOS styles
import './Academics.css';

const Academics = () => {
  const academics = [
    {
      name: "Lovely Professional University",
      location: "Phagwara, Punjab, India",
      extra_details: [
        {
          heading: "Open Minor",
          detail: "Data Science"
        },
        {
          heading: "Elective Minor",
          detail: "DevOps"
        }
      ],
      marks: {
        heading: "Grade",
        details: "8.49 CGPA"
      },
      duration: "Sept 2022 - Present",
      explanation: "I am currently pursuing a Bachelor of Technology in Computer Science and Engineering from Lovely Professional University, with Data Science as my open minor and DevOps as my elective minor. In 2024, I successfully cleared the technical interview for Summer Placement Classes at the college. During the training, I was mentored by Harsh Deep Singh, an SDE 1 at Google, who taught us competitive programming concepts and encouraged us to practice on various coding platforms. At the same time, I have worked on several projects, applying the skills I have learned through my university courses."
    },
    {
      name: "Hari International Academy",
      location: "Saharanpur, Uttar Pradesh, India",
      extra_details: [
        {
          heading: "Group",
          detail: "PCM"
        }
      ],
      marks: {
        heading: "Percentage",
        details: "94%"
      },
      duration: "2021 - 2022",
      explanation: "I have completed my schooling at Hari International Academy, where I chose the PCM group for my 10+2 education."
    }
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Trigger animation only once when it comes into view
      easing: 'ease-in-out', // Easing function for the animations
    });
  }, []);

  // Helper function to conditionally apply AOS data attributes with delay
  const getAosData = (animation, delay) => ({
    "data-aos": animation,
    "data-aos-delay": delay, // Delay in milliseconds
  });

  return (
    <div className="academics">
      {/* Title with Animation */}
      <div className="academics_content1" >
        <div  style={{ display: 'inline' }} id="academics_content">
          <h1 {...getAosData("fade-left", 0)} className="academics_heading">Academics</h1>
        </div>
      </div>

      {/* Academic Items */}
      <div className="academics_content2">
        {academics.map((academic, index) => {
          return (
            <div   className="academic_item" {...getAosData("fade-up", index * 200)} key={index}>
              <div className="academic_left">
                <h1 className="academic_name" {...getAosData("fade-left", 0)}>{academic.name}</h1>
                <h3 className="academic_location" {...getAosData("fade-left", 100)}>( {academic.location} )</h3>
                
                {/* Extra Details */}
                <div className="academic_extra_details">
                  {academic.extra_details.map((extra_detail, index) => {
                    return (
                      <div className="academic_extra_detail" {...getAosData("fade-up", index * 200)} key={index}>
                        <h1 className="academic_extra_detail_heading">{extra_detail.heading} : </h1>
                        <h3 className="academic_extra_detail_detail">{extra_detail.detail}</h3>
                      </div>
                    );
                  })}
                </div>

                {/* Marks/Grade */}
                <div className="academic_extra_detail1" {...getAosData("fade-up", 300)}>
                  <h1 className="academic_extra_detail_heading">{academic.marks.heading} : </h1>
                  <h3 className="academic_extra_detail_detail">{academic.marks.details}</h3>
                </div>
              </div>

              {/* Academic Duration and Explanation */}
              <div className="academic_right">
                <h1 className="academic_duration" {...getAosData("fade-right", 0)}>{academic.duration}</h1>
                <h3 className="academic_explanation" {...getAosData("fade-right", 100)}>{academic.explanation}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Academics;
