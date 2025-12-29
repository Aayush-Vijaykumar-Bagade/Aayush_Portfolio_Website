import './index.css';
import Header from '../header';
import Footer from '../footer';
const Resume=()=>{



    return(


        < >
        <header/>


<div id='resume'>   

    <h3>RESUME</h3>
<br /><br /> 

  {/* <button  style={{borderRadius:"20px", backgroundColor:"", padding:"10px"}} type="button" className="btn btn-outline-primary"> */}
  <a   style={{marginRight:"10px",}}
    href="\pdf\Aayush_Bagade_FrontEnd_Backend (2).pdf"
  target="_blank"
  className="btn btn-outline-primary"
>
  View CV
</a>

<a
    // href="/pdf/Aayush_Bagade_FrontEnd.pdf"
    href="\pdf\Aayush_Bagade_FrontEnd_Backend (2).pdf"
  download
  className="btn btn-primary"
>
  Download CV
</a>

{/* </button> */}

  </div>  
<br />


    <h4 className='title_data' style={{textAlign:"center"}}> <b>EDUCATION</b> </h4>
 <br />
<div className='parent_card'>

<div id='cards'>

<div className='box1' >
<h5 style={{color:"blue"}}>2021-2025</h5> <br />
<h6 > Rashtrasant Tukadoji Maharaj Nagpur University</h6> 
  <h6>   B-TECH (Computer Engineering) </h6>  
  <h6>Suryoday College Of Engineering & Technology</h6>
<h6>Nagpur-Maharashtra</h6>
 </div>

<div  className='box2'>    
<br /><p style={{textAlign:"justify"}}>
  I completed my Bachelor of Technology in Computer Engineering from [Suryodaya College of Engineering & Technology], 
  gaining strong technical expertise in Java and React. During my course. <br /> <br />I have  developed hands-on experience in software development, 
  web application design, and modern programming practices, equipping me with the skills to build efficient and scalable solutions.
</p>
 </div> 

</div >
 <br /> <br />

{/* ///////////////////////////////// */}
 <div id='cards'>
 
 <div className='box1'>   
<h5 style={{color:"blue"}}>2019-2021</h5> <br />
<h6 > Maharashtra State Board</h6> 
  <h6>12th - General Science </h6>  
  <h6>Mahatma Gandhi Centennial Sindhu Junior College</h6>
<h6>Nagpur Maharashtra</h6>

  </div>


  <div className='box2'> 
<br /><p style={{textAlign:"justify"}}>
 I completed my 12th (General Science) from Mahatma Gandhi Centennial Sindhu Junior College,
  Nagpur, under the Maharashtra State Board. <br /><br /> This education provided a strong foundation in
   core science subjects, enhancing my analytical, problem-solving, and learning skills, 
   which prepared me for higher studies in technology and engineering.
</p>
</div > <br /><br />
</div>

<br /><br />
{/* /////////////////////////////// */}
 <div id='cards'>

<div className='box1'>


<h5 style={{color:"blue"}}>2019</h5> <br />
<h6 > Maharashtra State Board</h6> 
  <h6>10th </h6>  
  <h6>Mahatma Gandhi Centennial Sindhu High School</h6>
<h6>Nagpur Maharashtra</h6>
</div>

<div className='box2'>

<br /><p style={{textAlign:"justify"}}>
  I Completed my 10th standard from Mahatma Gandhi Centennial Sindhu High School, Nagpur, 
  under the Maharashtra State Board, building a solid 
  foundation in core subjects.  <br /><br />This education helped me 
  develop strong analytical, problem-solving, and learning 
  skills, preparing me for higher secondary studies in science and technology.
</p>
</div>
</div >
</div>
<br /><br />

<br />
    <h4 className='title_data' style={{textAlign:"center",marginBottom:"0"}}> <b>SKILLS</b> </h4>
<div className="cards-container">

  <div className="card">
    <h3>Frontend</h3>
    
  <ul >
      <li>HTML5, CSS3, JavaScript (ES6+)</li>
      <li>React.js (Hooks, Components, Props, State)</li>
      <li>Node.js</li>
      <li>Bootstrap, Responsive Web Design</li>
      <li>DOM Manipulation, Fetch API</li>
    </ul>
  
  
  </div>

  
  <div className="card">
    <h3>Backend</h3>
    
  <ul >
      <li>Node.js</li>
      <li>Express.js</li>
      <li>RESTful API Development, CRUD Operations</li>
      <li>Middleware, Error Handling</li>
    </ul>
  
  
  </div>

  <div className="card">
    <h3>Tools</h3> 
  
 <ul>
      <li>Git & GitHub</li>
      <li>VSCode</li>
      <li>Postman</li>
      <li>NPM</li>
    </ul>
    
   
  </div>

  <div className="card">
    <h3>AI Tools</h3> 
 <ul>
      <li>ChatGPT (code debugging & documentation)</li>
      <li>GitHub Copilot (Basic)</li>
      <li>Canva (UI content & design)</li>
    </ul>
  </div>

  <div className="card">
    <h3>Database</h3> 

 <ul>
      <li>MySQL</li>
      <li>Mongodb</li>
    </ul>
   
  </div>

  <div className="card">
    <h3>Testing</h3> 

 <ul>
      <li>Manual Testing (Basic)</li>
      <li>Functional Testing, UI Testing, Bug Reporting</li>
    </ul>
   
  </div>

  <div className="card">
    <h3>Programming</h3>
<ul>
      <li>Java </li>
    </ul>
    
  </div>


  <div className="card">
    <h3>Soft Skills</h3> 

    <ul> <br />
      <li>Communication</li>
      <li>Time Management</li>
      <li>Teamwork</li>
      <li>Adaptability</li>
    </ul>
   
  </div>

</div>



{/* <div id='footer_data'>             */}
    
    <Footer/>  

{/* </div> */}
        </>
    )
}
export default Resume;