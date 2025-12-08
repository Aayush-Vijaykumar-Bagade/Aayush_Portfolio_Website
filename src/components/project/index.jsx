import './index.css';
import Header from '../header';
import Footer from '../footer';
const Project=()=>{



    return(


        <>
      <header/>

      <h1 id='heading_project'></h1>

      <div className="projects-section">
  <h2>PROJECTS</h2>

  <div className="projects-container">

    {/* <!-- Project 1 --> */}

    <div   className="project-card">
      <img src="src/assets/images/job3.jpg" alt="Project Image"/>
      <div className="project-content">
        <h3 className='Project_title'> JOB PORTABLE APPLICATION</h3>
        <p >A job-ready web application that helps users to find the suitable Jobs as per 
          their Skills sets and find the better oppurtunities and become Employable .</p>
        <a href="" className="project-btn">View Project</a>
      </div>
    </div>

    {/* <!-- Project 2 --> */}

    <div className="project-card">
      <img src="src/assets/images/gym_image1.jpg" alt="Gym_Web Image"/>
      <div className="project-content">
        <h3 className='Project_title'>GYM WEB APPLICATION </h3>
        <p>A responsive gym website featuring plans, trainers, and services, designed
           to provide a smooth user experience and promote fitness engagement.</p>
        <a href="https://responsive-gym-website-layout.vercel.app/" className="project-btn">View Project</a>
      </div>
    </div>

    {/* <!-- Project 3 --> */}

    <div className="project-card">
      <img src="src/assets/images/resumeimage2.png " alt="Project Image"/>
      <div className="project-content">
        <h3 className='Project_title'>PORTFOLIO & CV WEBSITE</h3>
        <p>  A modern personal portfolio with a professional CV, built to 
          showcase skills, projects, and achievements with clean UI and responsive design.</p>
        <a href="#" className="project-btn">View Project</a>
      </div>
    </div>

    
    <div className="project-card">
      <img src="  src/assets/images/smart_washroom.png" alt="Project Image"/>
      <div className="project-content">
        <h3 className='Project_title'>IOT SMART WASHROOM</h3>
        <p>A sensor-based smart washroom system that automates hygiene, monitors usage,
           and improves user convenience with real-time updates.</p>
        <a href="#" className="project-btn">View Project</a>
      </div>
    </div>

  </div>
</div>



{/* <div id='footer_data'>             */}
    
    <Footer/>  

{/* </div> */}

        </>
    )
}
export default Project;