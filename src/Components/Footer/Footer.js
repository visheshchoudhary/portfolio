import "./Footer.css";
import linkedin from "../../Images/linkedin.svg";
import github from "../../Images/github.svg";
import leetcode from "../../Images/leetcode.svg";
import profilepic from "../../Images/pho.jpeg";

const Footer = () => {
    return (
        <div className="footer">
            <div className="some"></div>
            <div className="line"></div>
            <div className="footer_content">
                <div className="social_media">
                    <h1 className="social_media_heading">Social Media</h1>
                    <div className="social_media_icons">
                        <img src={linkedin} className="social_media_icon" />
                        <img src={github} className="social_media_icon" />
                        <img src={leetcode} className="social_media_icon" />
                    </div>
                </div>
                <div className="footer_link_container">
                    <h1 className="social_media_heading">Quick Links</h1>
                    <div className="footer_links">
                        <h1 className="footer_link">Home</h1>
                        <h1 className="footer_link">About</h1>
                        <h1 className="footer_link">Projects</h1>
                        <h1 className="footer_link">Blogs</h1>
                        <h1 className="footer_link">Connect</h1>
                    </div>
                </div>
                {/* <div className="footer_thanks">
                    <h1 className="social_media_heading">Special Thanks to</h1>
                    <h1 className="footer_link1">I would like to extend my heartfelt gratitude to my loving parents,<b> Sumathi </b> and <b> Baskaran </b>. Their unwavering support, guidance, and constant encouragement have been the driving force behind my growth. They have always motivated me to strive for excellence, pushing me to do my best and continually improve. I am truly fortunate to have them by my side, and their belief in me has made all the difference in my journey.</h1>

                </div> */}
                <div className="footer_photo">
                    <img src={profilepic} className="footer_photo_image" />
                    <h1 className="footer_photo_text">Aryan Choudhary</h1>
                </div>
            </div>
            <div className="line"></div>
            <div className="footer_bottom">
                <h1 className="footer_bottom_text">© 2025 Aryan Choudhary. All rights reserved.</h1>
            </div>
        </div>
    )
}


export default Footer;
