import Header from '../header';
import Footer from '../footer';
import { FiGithub } from 'react-icons/fi';
import { TfiEmail } from 'react-icons/tfi';
import { Link } from 'react-router-dom';
import './index.css';
import { FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';


const Aboutme =()=>{




    return (


       <>
        <header/>
      
 <div id='parent_body'>
        <div className='card_parent'>

        <div className='card1'>
        <img id='img' src="src/assets/images/photo-profil_301783868.jpg" alt=""  /> <br /> <br />
        <h3>Aayush Bagade</h3> <br />
       <Link to="/Resume">
        <button id='button_card1' style={{marginRight:"10px" , borderRadius:"20px"}} type="button" className="btn btn-primary">RESUME</button>
        </Link>  
        <Link to="/Project" >
        <button   style={{borderRadius:"20px"}} type="button" className="btn btn-outline-danger">PROJECTS</button> <br /> <br />
       </Link>

        <div className='icons_data' style={{ padding:"10px",marginTop:"10%", backgroundColor:"white"}}> 
            
            <a   style={{color:"black",marginRight:"20px" }}
              href="https://github.com/Aayush-Vijaykumar-Bagade" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FiGithub size={20} />
            </a>
            
        
            <a   style={{color:"black",marginRight:"20px"  }}
                href="https://www.linkedin.com/in/aayush-bagade/" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size={20} />
            </a>
            
        

          
            <a   style={{color:"black",marginRight:"20px"  }}
             href="mailto:aayushbagade56@gmail.com"
                     aria-label="Send email to Aayush"
              target="_blank" 
              rel="noopener noreferrer"
            >
              <TfiEmail size={20} />
            </a>
            
        </div>
        
</div>

{/* ///////////////////////////////////// */}

        <div className='contentself' style={{width:"100%"}}> 
            
            <br className='br' /><br className='br' />
            <h1><b>Hello</b></h1>
            
            <h4>Here's who I am & what I do</h4>
            
           <p style={{padding:"15px", textAlign:"justify"}}>

            “I am Aayush Bagade, aspiring front-end web developer with a strong foundation in HTML, CSS, JavaScript, and React.
             I enjoy creating clean, responsive, and user-friendly interfaces that offer smooth user
              experiences. With a background in Computer Engineering. <br /><br />I have developed solid problem-solving 
              abilities, attention to detail, and a deep interest in learning new technologies. 
              I am passionate about building meaningful digital products, improving my skills every day,
               and contributing to real-world projects through continuous practice and dedication.

           </p>
              </div>
</div>
{/* //////////////////////////////// */}



{/* <div id='footer_data'>             */}
    
    <Footer/>  

{/* </div> */}


        

        </div>
        </>
    )
    }
export default Aboutme;