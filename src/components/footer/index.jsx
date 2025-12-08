import { BsGithub, BsInstagram, BsLinkedin } from 'react-icons/bs';
import './index.css';
import { FaFacebook, FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { LiaLinkedinIn } from 'react-icons/lia';
import { FiGithub } from 'react-icons/fi';
import { ImInstagram } from 'react-icons/im';
import { TfiEmail } from 'react-icons/tfi';

// import { Link } from "react-router-dom";
const Footer=()=>{



    return(


        <div id='footer'>
            <div id='box1'  style={{display:"flex" ,color:"black" ,justifyContent:"space-between", padding:"5px"}}>
<div id='box'>
<h5 >Call</h5>
705-865-9526
</div>

<div id='box'>
<h5>Write</h5>
aayushbagade56@gmail.com
</div>
</div>

<div id='box' style={{textAlign:"left",  color:"black"}}> <br  id='break' />
<h5 id='head'>Follow</h5> 

<a   style={{color:"black" , marginRight:"15px"}}
  href="https://github.com/Aayush-Vijaykumar-Bagade" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <FaGithub size={30} />
</a>

<a   style={{color:"black",marginRight:"15px"}}
  href="https://www.linkedin.com/in/aayush-bagade/" 
  target="_blank" 
  rel="noopener noreferrer"
>
  <BsLinkedin size={30} />
</a>

<a   style={{color:"black",marginRight:"15px"}}
  href="mailto:aayushbagade56@gmail.com"
  target="_blank" 
  rel="noopener noreferrer"
>
  <MdEmail size={30} />
</a>


  
        </div>
        </div>
    )
}
export default Footer;