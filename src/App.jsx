import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from './components/home';
import Aboutme from './components/aboutme'
import Contact from './components/contact'
import Footer from './components/footer'
import Header from './components/header'
import Project from './components/project'
import Mid from './components/mid'
import Resume from './components/resume';
import './App.css'

// //////////////////////////////////////////////////////////////////////

// src/ → Saara React code

// components / → Full pages (aboutme, resume, Projects, Contact)

// assets/ → Images, icons, fonts

// App.jsx → Main layout file

// main.jsx → Entry point, browser me render karta hai

// ////////////////////////////////////////////////////////////////////////

function App() {

  return (
  
<>
      <Header />

      <Routes>
        {/* <Route path="/" element={<Home />} />        Home */}
        <Route path="/" element={<Aboutme />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />

      </Routes>
{/* <footer/> */}
    </>
  )
}

export default App;
