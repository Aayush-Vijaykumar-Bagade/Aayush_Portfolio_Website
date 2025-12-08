import './index.css';
import Header from '../header';
import Footer from '../footer';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact=()=>{



    return(


        <  >
        <header/>



<section className="contact-section">
  <h3  style={{textAlign:"center"}}>Contact Me</h3> <br />
  <p style={{fontSize:"large"}} className="contact-subtitle">
  "Let's Connect & Collaborate & Open for Roles — Contact Me"</p>
<br />
  <div className="contact-container">

    {/* <!-- Left : Contact Form --> */}

    <div className="contact-form">
      <form>
        <label>Your Name</label>
        <input type="text" placeholder="Enter your name" required />

        <label>Your Email</label>
        <input type="email" placeholder="Enter your email" required />

        <label>Your Message</label>
        <textarea placeholder="Type your message" required></textarea>

        <button type="submit">Send Message</button>
      </form>
    </div>

    {/* <!-- Right : Contact Details --> */}

    <div className="contact-details">
      <h3>Let's Talk</h3>

      <p><strong>Email:</strong> aayushbagade56@gmail.com</p>
      <p><strong>Phone:</strong> +91 7058-659-526</p>
      <p><strong>Location:</strong> Nagpur, Maharashtra</p>

      <div className="social-icons">
         <a href="https://github.com/Aayush-Vijaykumar-Bagade" target="_blank" rel="noopener noreferrer">
    <FaGithub className="icon" />

  </a>
  {/* //////////// */}

<a href="https://www.linkedin.com/in/aayush-bagade/" target="_blank" rel="noopener noreferrer">
    <FaLinkedin className="icon" />
  </a>
{/* ///////////// */}

  <a href="mailto:aayushbagade56@gmail.com">
    <FaEnvelope className="icon" />
  </a>

      </div>
    </div>

  </div>
</section>

{/* <div id='footer_data'>             */}
    
    <Footer/>  

{/* </div> */}

        </>
    )
}
export default Contact;