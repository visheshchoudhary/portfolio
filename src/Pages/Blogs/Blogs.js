
import Blogs from "../../Components/Blogs/Blogs"
import { Helmet } from "react-helmet";


const Blogs1 = () => {
    const blogs = [
        {
          name: "Smart India Hackathon 2024",
          date_uploaded: "Sept 2024",
          description:
            "🚀 Excited to share that our team participated in the Smart India Hackathon 2024 and developed an innovative job and internship platform that empowers students and job seekers to find the right opportunities! 🌟Together with hashtag#NiteshJ, hashtag#VinuKanth, hashtag#ShanmukhDevarasetty, hashtag#LogeshWaran, hashtag#AshishdeepKaur, ",
          image:'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737011057/l4m0nfhyypgtjjygs6nh.webp',

          link: "https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_niteshj-vinukanth-shanmukhdevarasetty-activity-7242803342760894464-ol0a?utm_source=share&utm_medium=member_desktop",
        },
        {
          name: "Summer PEP Completion",
          date_uploaded: "Aug 2024",
          description:
            "🌟 Proud to share my latest achievement! 🌟 I’m thrilled to have successfully completed the PEP (Professional Enhancement Program) classes this summer, where I honed my skills in competitive coding and deepened my understanding of data structures and algorithms. 🚀 This intensive program challenged me to think critically and solve complex problems, while also allowing me to connect with a fantastic community of like-minded professionals.",
          image:  'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737011052/hlm33nlz365wu9s7vdgv.webp',

          link: "https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_competitivecoding-datastructures-algorithms-activity-7234194214660497408-xEyY?utm_source=share&utm_medium=member_desktop",
        },
        {
          name: "Leetcode 50 Days Completion",
          date_uploaded: "Jun 2024",
          description:
            "Excited to share that I've successfully completed my first 100 questions on LeetCode and earned the 50 Days Badge for 2024! 🎉 Through this journey, I've honed my problem-solving skills and delved into various techniques",
          image:   'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737011051/nndojrrtsigus0udsiia.webp',
          link: "https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_leetcode-coding-problemsolving-activity-7208414538923200512-x4vP?utm_source=share&utm_medium=member_desktop",
        },
        {
            name:"MS Excel Dashboard",
            date_uploaded:"Apr 2024",
            description:"Excited to share my latest Excel dashboard project, featuring dynamic pivot tables, pivot charts, and slicers for seamless data analysis. Big shoutout to my teacher, Amit Katoch, and my friends for their support! hashtag#Excel hashtag#DataAnalysis hashtag#DashboardDesign Amit Katoch",
            image:   'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737005743/pdj8xmhfmttrp5cuxvf4.webp',
            link:"https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_excel-dataanalysis-dashboarddesign-activity-7185968081511354369-a4Ev?utm_source=share&utm_medium=member_desktop"

        },
        {
            name:"Data Structures and Algorithm of 72 Hours",
            date_uploaded:"Aug 2023 - Nov 2023",
            description:"Got a chance to learn Data Structures and Algorithm from scratch to advanced level in 72 hours from imneao from my university. It was a great experience to learn from scratch to advanced level in 72 hours. I have learned a lot from this course and I am very happy to share this with you all. ",
            image:'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737011053/lqc7rrhfrj6ydxxab9q8.webp',
            link:"https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_activity-7157252479695417344-63LH?utm_source=share&utm_medium=member_desktop"
            
        },
        {
            name:"Object Oriented Programming of 72 Hours",
            date_uploaded:"Aug 2023 - Nov 2023",
            description:"Got a chance to learn Object Oriented Programming from scratch to advanced level in 72 hours from imneao from my university. It was a great experience to learn from scratch to advanced level in 72 hours. I have learned a lot from this course and I am very happy to share this with you all. ",
            image:'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737011054/zi7xniudqnifkhovvcoe.webp',
            link:"https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_activity-7157252479695417344-63LH?utm_source=share&utm_medium=member_desktop"
            
        },
        {
            name:"Introducing my new Portfolio Website",
            date_uploaded:"Jan 2024",
            description:"🚀 Excited to unveil my portfolio website! 🌐 Hello LinkedIn community! 👋 I'm thrilled to share my portfolio website with you, where creativity meets functionality. 🎨💻 🔍 Explore my Expertise: Dive into a showcase of my skills in HTML, CSS, and JavaScript, where I've honed my expertise in web development. From mastering CSS animations to refining JavaScript functionality, I bring a passion for continuous learning that transforms ideas into impactful solutions.",
            image:   'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737005743/fzoifdqr5fgpfvfkrudt.webp',
            link:"https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_portfolio-webdesign-techinnovation-activity-7146781998752149504-kB9t?utm_source=share&utm_medium=member_desktop"
            
        },
        {
            name:"Introducing my new Flipkart Clone",
            date_uploaded:"Dec 2023",
            description:"I’m happy to share this Flipkart Clone project I worked on recently. It was a great learning experience for me. I learned a lot of new things while working on this project. I am very happy to share this with you all. ",
            image:  'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737005742/awswx8g8im4vmmzltuxn.webp',
            link:"https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_im-happy-to-share-this-flipkart-clone-project-activity-7145292838178545665-tS6l?utm_source=share&utm_medium=member_desktop"
            
        },
        {
            name:"Typing Speed Test",
            date_uploaded:"Oct 2023",
            description:"I feel very happy to share this to my all friends, because I have reached 97 Words per minute typing speed in monkeytype website.",
            image:'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737011052/ylv1totdlgwmmlsl1tuh.webp',
            link:"https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_i-feel-very-happy-to-share-this-to-my-all-activity-7130442099937660930-_Xaw?utm_source=share&utm_medium=member_desktop"
            
        },
        {
            name:"Type Writing Certificate Achievement",
            date_uploaded:"Oct 2023",
            description:"I am feeling extremely delighted to have received my typing certificate from Rata Type, Platinum category certificate of 77 words per minute with a flawless 100% accuracy.",
            image : 'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737011052/ef2tqtxqicatzvvrwrt7.webp',
            link:"https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_i-am-feeling-extremely-delighted-to-have-activity-7120444119323222016-3wPR?utm_source=share&utm_medium=member_desktop"
            
        },
        {
            name:"Completion of Baskara Tex Website",
            date_uploaded:"Oct 2023",
            description:"🌟 Exciting News! Introducing the revamped website for my father's textile business, Baskara Tex. 👔 We've combined tradition and technology to bring you the finest textiles. Our new website, built with HTML, CSS, JavaScript, and Bootstrap, is your gateway to a world of quality fabrics and exceptional service. 💼 Explore our exquisite collection of textiles, from handcrafted yarns to artisan textiles, all designed to elevate your creative projects.",
            image:   'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737005742/jxsu7tzdv51xmiofh5hr.webp',
            link:"https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_textiles-craftsmanship-quality-activity-7115396166011256832-yuoi?utm_source=share&utm_medium=member_desktop"
            
        },
        {
            name : "CGPA calculator in PYthon",
            date_uploaded:"Sept 2023",
            description:"🔔 Today I write a simple code in PYTHON to calculate the CGPA of a student. This calculator is useful for college students to calculate the CGPA with just giving no of subjects , and marks and grade of each subject",
            image : 'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737011051/fnlckwz9qe8v83i9hcl7.webp'
        },
        {
            name : "Python Gold Badge in HackerRank",
            date_uploaded:"Aug 2023",
            description:"🌟 Excited to share that I've achieved the Gold Badge in Python on HackerRank! 🌟 Through this journey, I've honed my problem-solving skills and delved into various Python techniques, from basic to advanced. 💻🚀",
            image : 'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737011865/oyj7efpa2opzja7wpakp.webp',
            link : "https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_just-earned-the-gold-badge-for-python-on-activity-7093829751869472768-IHH-?utm_source=share&utm_medium=member_desktop"
        },
        {
            name : "Python 4 Star in HackerRank",
            date_uploaded:"Sept 2023",
            description:"🌟 Excited to share that I've achieved 4 stars in Python on HackerRank! 🌟 Through this journey, I've honed my problem-solving skills and delved into various Python techniques, from basic to advanced. 💻🚀",
            image :'https://res.cloudinary.com/dbbmdq3uy/image/upload/v1737011865/uohblakgit8mrov62qtj.webp',
            link : "https://www.linkedin.com/posts/sudharsan-baskaran-182bb4255_just-earned-my-4th-star-on-the-python-badge-activity-7093504457467969536-pT2B?utm_source=share&utm_medium=member_desktop"
        }
        
      ];


    return (
        <>
            <Helmet>
                <text>Blogs</text>
                <meta type="description" content="A list of blogs I have written on social media platforms like LinkedIn."/>
                <meta type="keywords" content="Blogs, LinkedIn, Sudharsan Baskaran"/>
            </Helmet>
            <div className="home">
                <Blogs blo={blogs} />
            </div>
        </>
    )
}

export default Blogs1