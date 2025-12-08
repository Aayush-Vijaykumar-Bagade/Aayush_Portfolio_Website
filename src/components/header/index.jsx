import './index.css';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import React, { useRef } from "react";
import { Collapse } from "bootstrap";


const Header=()=>{
  // const Navbar = () => {
  const navbarRef = useRef(null);

  const closeNavbar = () => {
    const navbar = navbarRef.current;
    if (navbar.classList.contains("show")) {
      const bsCollapse = new Collapse(navbar, { toggle: false });
      bsCollapse.hide();
    }
  }



    return(


        < div>
     

<nav className="navbar navbar-expand-lg navbar-light bg-light">
<Link className="navbar-brand" to="/">
  <b>AAYUSH BAGADE</b>
</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavDropdown">
     <ul>
        {/* <li><Link to="/">Home</Link></li> */}
        <li><Link id='navlink' to="/" onClick={closeNavbar}>ABOUT ME</Link   ></li>
                <li><Link id='navlink'  onClick={closeNavbar} to="/resume">RESUME</Link></li>
        <li><Link id='navlink'  onClick={closeNavbar} to="/project">PROJECTS</Link></li>
           <li><Link  id='navlink'  onClick={closeNavbar} to="/contact">CONTACT</Link></li>
      </ul>
  </div>
</nav>



        </div>
    )
}
export default Header;