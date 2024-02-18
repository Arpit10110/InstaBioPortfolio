import React from 'react'
import {HashRouter as Router, Routes ,Route} from "react-router-dom";
import Home from './Components/Home';
import Nav from './Components/Nav';
import "./style/Style.css"
import Contact from './Components/Contact';
const App = () => {
  return (
    <>
   <Router>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/Contact" element={<Contact/>}/>
    </Routes>
   </Router>
    </>
  )
}

export default App