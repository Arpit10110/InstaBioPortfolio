import React from "react";
import {
  AiFillGithub,
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import "../style/Footer.css"
const Footer = () => {
  return (
    <div className="Footer">
      <div className="copyRight">© Arpit.com</div>
      <div className="Social">
        <a href="https://www.facebook.com/arpit.agrahari.5"> <AiFillFacebook className="scoialImg" /></a>
        <a href="https://www.linkedin.com/in/arpit-agrahari-985600293/"> <AiFillLinkedin className="scoialImg" /></a>
        <a href="https://www.instagram.com/anonymous.____69_/"><AiFillInstagram className="scoialImg" /></a>
        <a href="https://github.com/Arpit10110"> <AiFillGithub className="scoialImg" /></a>
      </div>
    </div>
  );
};

export default Footer;
