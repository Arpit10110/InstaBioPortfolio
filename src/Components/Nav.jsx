import React,{useEffect} from 'react'
import "../style/Na.css"
import { Link } from 'react-router-dom';
//material ui
import HomeIcon from '@mui/icons-material/Home';
import CodeOffSharpIcon from '@mui/icons-material/CodeOffSharp';
import CardMembershipSharpIcon from '@mui/icons-material/CardMembershipSharp';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import Aos from "aos";
import "aos/dist/aos.css";
//social img
import FacebookImg from "../assets/facebook.png" 
import GithubImg from "../assets/github.png" 
import InstaImg from "../assets/instagram.png" 
import TwiterImg from "../assets/twitter.png" 
import LinkdinImg from "../assets/linkedin.png" 
const Nav = () => {
    function menuFun(){
        let menuBtn=document.querySelector(".MenuBtn");
        let Navbar=document.querySelector(".Navbar");
        menuBtn.style="display:none;"
        Navbar.style="display: inline-block;"
      }
      function closefun(){
        if (window.innerWidth <= 600) {
          let MenuBtn=document.querySelector(".MenuBtn");
          let Navbar=document.querySelector(".Navbar");
          MenuBtn.style="display:block;" 
          Navbar.style="display:none;"
        }
      }
    useEffect(() => {
        Aos.init();
      }, []);
  return (
   <>
   <nav className='Navbar'>
   <div className="BtnDiv">
   <CloseIcon onClick={closefun} className='CloseBtn'/>
   </div>
    <div className="navlinks">
        <Link to="/" data-aos="fade-right"  data-aos-duration="2900" onClick={closefun}><HomeIcon className='Icons-MateralUi' /> Home</Link>
        <Link to="/project" data-aos="fade-right"  data-aos-duration="2700" onClick={closefun}><CodeOffSharpIcon className='Icons-MateralUi'/> Projects</Link>
        <Link to="/certificates" data-aos="fade-right"  data-aos-duration="2500" onClick={closefun}><CardMembershipSharpIcon className='Icons-MateralUi'/> Certificates</Link>
    </div>
        <h4 className='socialhead' data-aos="fade-right"  data-aos-duration="2400">Social Media</h4>
    <div className="socialmedia">
        <a href='https://www.facebook.com/arpit.agrahari.5' data-aos="fade-right"  data-aos-duration="2300" onClick={closefun}> <img src={FacebookImg} alt="FacebookImg" /> Facebook</a>
        <a href='https://www.instagram.com/___arpit_._/' data-aos="fade-right"  data-aos-duration="2100" onClick={closefun}><img src={InstaImg} alt="InstaImg" /> Instagram</a>
        <a href='https://github.com/Arpit10110' data-aos="fade-right"  data-aos-duration="1900" onClick={closefun}> <img src={GithubImg} alt="GithubImg" />Github</a>
        <a href='https://www.linkedin.com/in/arpit-agrahari-54aa192a1/' data-aos="fade-right"  data-aos-duration="1500" onClick={closefun}><img src={LinkdinImg} alt="LinkdinImg" /> Linkedin</a>
        <a href='https://x.com/ArpitAgrahari26?t=IyDaE6R8sNL10VQlozEYrQ&s=09' data-aos="fade-right"  data-aos-duration="1600" onClick={closefun}><img src={TwiterImg} alt="TwiterImg" /> Twitter</a>
    </div>
   </nav> 
   <div className="BtnDiv">
   <MenuIcon onClick={menuFun} className='MenuBtn'/>
   </div>
   </>
  )
}

export default Nav