import React from 'react'
import {HashRouter as Router, Routes ,Route} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import "./style/Style.css"
import Footer from './Components/Footer';
import Contact from './Components/Contact';
const App = () => {
  return (
    <>
   <Router>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
    <Footer/>
   </Router>
    </>
  )
}

export default App