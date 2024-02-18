import React,{useEffect} from 'react'
import "../style/Home.css"
import { Link } from 'react-router-dom';
import { TypeAnimation } from "react-type-animation";
import AOS from "aos";
import "aos/dist/aos.css";
//img
import profilePic from  "../assets/portfolioPhoto.png"
import foodDeleivery from  "../assets/foodDeleivery.png"
import ScolarMart from  "../assets/ScolarMart.png"
import Chithi from  "../assets/Chithi.png"
const Home = () => {
   function closefun(){
    if (window.innerWidth <= 600) {
      let MenuBtn=document.querySelector(".MenuBtn");
      let Navbar=document.querySelector(".Navbar");
      MenuBtn.style="display:block;" 
      Navbar.style="display:none;"
    }
  }
  useEffect(() => {
    document.title = "Arpit | Home";
    AOS.init();
    AOS.refresh();
  }, []); 
  return (
    <>
   <div className='Main' onClick={closefun}>
      <div className="page1">
        <img src={profilePic} alt="profilePic"  data-aos="fade-up" data-aos-duration="2000"/>
        <div className="IntroCont" data-aos="zoom-in-up" data-aos-duration="2500">
        <div className="typing">
          <TypeAnimation
            sequence={["Hello World </>", 1000, "I am Arpit", 1000]}
            wrapper="span"
            speed={0}
            style={{ fontSize: "5em", display: "inline-block",color: "#ff37ff"}}
            repeat={Infinity}
          />
          </div>
          <div className="mydetail">
          Hello there! I'm Arpit, a passionate MERN full-stack web developer with a deep love for music in all its forms, especially desi hip-hop. When I'm not coding, you can find me immersed in the world of video games. Currently pursuing a degree in Computer Science Engineering, I'm dedicated to creating digital experiences that blend technology and creativity.❣️
          </div>
          <div className="IntroBtns-Div">
             <a href="https://drive.google.com/file/d/1fVCd2zqFGBzYAeI-biyLdByTdt9VgoD_/view?usp=sharing"><button>Download Resume</button></a>
             <Link to="/contact"><button>Contact Me</button></Link>
          </div>
        </div>
      </div>
      <div className="page2">
      <h3 className="page2-head">Projects</h3>
        <div className='card-wrapper'>
        <div className="FrontpageProject-Card">
          <img src={foodDeleivery} alt="foodDeleivery" />
          <div className="ProjectCont">
            <h5>KhaoPiyo</h5>
            <p>It is Food Delivery App made with React in frontend and  Redux for making the cart functionality and For backend I have used the Firebase</p>
            <a href="https://khaopiyo.onrender.com/">Vist the vebsite↗️</a>
          </div>
        </div>
        <div className="FrontpageProject-Card">
          <img src={ScolarMart} alt="ScolarMart" />
          <div className="ProjectCont">
            <h5>ScolarMart</h5>
            <p>It is a website where we can sell and purchase Study Material. I have used the React and Redux for the Frontend and Firebase for the backend.  </p>
            <a href="https://scholarmart.onrender.com/">Vist the vebsite↗️</a>
          </div>
        </div>
        <div className="FrontpageProject-Card">
          <img src={Chithi} alt="Chithi" />
          <div className="ProjectCont">
            <h5>CHITTHI</h5>
            <p>It is Chatting App where we can chat solo or with groups. I have used the HtML , CSS , JavaScritp , Node ,Express and Web Socket</p>
            <a href="https://chitthi-by-arpit.onrender.com/">Vist the vebsite↗️</a>
          </div>
        </div>
        <div className="ProjectSeeMore">
          <h2>See More Projects</h2>
          <Link to="/project">Click Here↗️</Link>
        </div>
        </div>
      </div>
      <div className="page3">
        <h3 className='page3-intro'>What I Know</h3>
        <div className="skillWraper">
          <div className='Skill frontend'>
            <h3>Frontend</h3>
            <div className="allSkill">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>Tailwind</span>
            <span>React.js</span>
            </div>
          </div>
          <div className='Skill backend'>
          <h3>Backend</h3>
          <div className="allSkill">
            <span>Node.js</span>
            <span>FireBase</span>
            <span>Express.js</span>
            <span>MongoDb</span>
            <span>Next.js</span>
          </div>
          </div>
          <div className='Skill other'>
            <h3>Others</h3>
            <div className="allSkill">
            <span>GitHub</span>
            <span>DSA</span>
            <span>Python</span>
            <span>MySQl</span>
            <span>C++</span>
            </div>
          </div>
          <div className='Skill design'>
            <h3>UI/UX Design</h3>
            <div className="allSkill">
            <span>Figma</span>
            <span>Canva</span>
            <span>Adobe XD</span>
            <span>Material UI</span>
            <span>PhotoShop</span>
            </div>
          </div>
        </div>
      </div>
   </div>
    </>
  )
}

export default Home