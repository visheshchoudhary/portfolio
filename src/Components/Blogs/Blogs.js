import React, { useEffect } from 'react';
import AOS from 'aos'; // Import AOS
import 'aos/dist/aos.css'; // Import AOS styles
import project1 from '../../Images/project/project1.svg';
import project2 from '../../Images/project/project2.svg';
import project3 from '../../Images/project/project3.svg';
import './Blogs.css';

const Blogs = ({blo}) => {
  const blogs = !blo ? [
    {
      name: "Smart India Hackathon 2024",
      date_uploaded: "Sept 2024",
      description:
        "🚀 Excited to share that our team participated in the Smart India Hackathon 2024 and developed an innovative job and internship platform that empowers students and job seekers to find the right opportunities! 🌟Together with hashtag#NiteshJ, hashtag#VinuKanth, hashtag#ShanmukhDevarasetty, hashtag#LogeshWaran, hashtag#AshishdeepKaur, ",
      image: "https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737011057/l4m0nfhyypgtjjygs6nh.webp",
      link: "https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_niteshj-vinukanth-shanmukhdevarasetty-activity-7242803342760894464-ol0a?utm_source=share&utm_medium=member_desktop",
    },
    {
      name: "Summer PEP Completion",
      date_uploaded: "Aug 2024",
      description:
        "🌟 Proud to share my latest achievement! 🌟 I’m thrilled to have successfully completed the PEP (Professional Enhancement Program) classes this summer, where I honed my skills in competitive coding and deepened my understanding of data structures and algorithms. 🚀 This intensive program challenged me to think critically and solve complex problems, while also allowing me to connect with a fantastic community of like-minded professionals.",
      image: "https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737011052/hlm33nlz365wu9s7vdgv.webp",
      link: "https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_competitivecoding-datastructures-algorithms-activity-7234194214660497408-xEyY?utm_source=share&utm_medium=member_desktop",
    },
    {
      name: "Leetcode 50 Days Completion",
      date_uploaded: "Jun 2024",
      description:
        "Excited to share that I've successfully completed my first 100 questions on LeetCode and earned the 50 Days Badge for 2024! 🎉 Through this journey, I've honed my problem-solving skills and delved into various techniques",
      image: "https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737011051/nndojrrtsigus0udsiia.webp",
      link: "https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_leetcode-coding-problemsolving-activity-7208414538923200512-x4vP?utm_source=share&utm_medium=member_desktop",
    },

  ] : 
  blo;


  // Initialize AOS when the component is mounted
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Trigger animations only once when they come into view
      easing: 'ease-in-out', // Easing function for smooth animation
    });
  }, []);

  // Helper function to apply AOS attributes with delay
  const getAosData = (animation, delay) => ({
    "data-aos": animation,
    "data-aos-delay": delay, // Delay for the animation in milliseconds
  });

  return (
    <div className="blogs_container">
      <div className="academics_content1" id="blogs_container">
        <div style={{ display: 'inline' }} id="academics_content">
          <h1 className="academics_heading" {...getAosData('fade-up', 0)}>
            Blogs
          </h1>
        </div>
      </div>

      <div id="blogs_container4" className="projects_content4">
        <div className="projects_content2">
          {blogs.map((blog, index) => {
            return (
              <div className="project_nn">
              <div
                className="project_item"
                key={index}
                onClick={() => window.open(blog.link, '_blank')} // Open the project link in a new tab
                {...getAosData('fade-up',0)} // Stagger animations for each blog
              >
                <img
                  src={blog.image}
                  className="project-image"
                  alt="Project image"
                  {...getAosData('zoom-in', 100)} // Apply zoom-in animation for the image
                />
                <h1 className="project_item_name" {...getAosData('fade-up', 200)}>
                  {blog.name}
                </h1>
                <h1 className="project_item_duration" {...getAosData('fade-up', 250)}>
                  {blog.date_uploaded}
                </h1>
                <h3 className="project_item_description" {...getAosData('fade-up', 300)}>
                  {blog.description}
                </h3>
                <div className="project_item_links" {...getAosData('fade-up', 350)}>
                  <a href={blog.link} target="_blank" rel="noopener noreferrer">
                    <h1 className="project_item_links1">Show More</h1>
                  </a>
                </div>
              </div>
              </div>
            );
          })}
        </div>
        { blo ? null :
        <div className="projects_content3">
          <a href="/blogs" className="projects_content_btn">Show more Blogs</a>
        </div>
}
      </div>
    </div>
  );
};

export default Blogs;
