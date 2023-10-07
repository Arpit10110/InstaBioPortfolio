import React from "react";
import "../style/Home.css";
import catintro from "../assets/introImg.png";
import aboutImg from "../assets/aboutImg.gif";
import { TypeAnimation } from "react-type-animation";
import { useEffect } from "react";
const Home = () => {
  useEffect(()=>{
    document.title="Home | Arpit"
  })
  return (
    <>
      <div className="homeMain">
        <div className="intro">
          <div className="introCont">
          <div className="IntroMessage">
          <div className="typing">
          <TypeAnimation
            sequence={["Hello World </>", 1000, "I am Arpit", 1000]}
            wrapper="span"
            speed={0}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
          </div>
          <div className="mydetail">
          Hello there! I'm Arpit, a passionate MERN full-stack web developer with a deep love for music in all its forms, especially desi hip-hop. When I'm not coding, you can find me immersed in the world of video games. Currently pursuing a degree in Computer Science Engineering, I'm dedicated to creating digital experiences that blend technology and creativity.❣️
          </div>
          </div>
           <img className="introImg" src={catintro} alt="dfhbdfhb" />
          </div>
        </div>
        {/* about section */}
        <div className="about" id="About">
            <h3 className="Abouthead">About Me</h3>
            <div className="aboutCont">
            <div className="aboutMessgae">
            I'm a passionate MERN full-stack web developer who is deeply immersed in the world of technology. Beyond my coding skills, I have a love for the finer things in life, including desi hip-hop beats, the captivating stories of anime, and the thrill of immersive video games.My knack for forming connections with individuals who share my vibe is something I hold dear. One of my remarkable strengths is the ability to quickly grasp new concepts, allowing me to stay agile in the ever-evolving tech landscape.<br/>While I appreciate all aspects of web development, frontend work holds a special place in my heart. There, I aim to create engaging and user-friendly web experiences. My ultimate aspiration is to become an accomplished software developer, where I can blend my love for creativity, technology, and meaningful friendships. Join me on this exciting journey of growth and discovery.<br/><span className="endline">Feel free to reach out and connect as I continue to grow, learn, and create in this exciting digital adventure</span>
            </div>
            <img className="aboutImg" src={aboutImg} alt="aboutImg" />
            </div>
        </div>
      </div>
    </>
  );
};

export default Home;
