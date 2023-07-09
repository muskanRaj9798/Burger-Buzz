import React from "react";
import { AiFillInstagram, AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <h1>Burger-Buzz</h1>

        <p>Providing delicious, high-quality burgers with exceptional service.</p>
        <br />

        <em>We give attention to genuine feedback.</em>
        
        <br/>
        <strong>All right received @burger-buzz</strong>
      </div>

      <aside>
        <h4>Follow Us</h4>


        <a href="https://github.com/muskanRaj9798">
          <AiFillGithub />
        </a>
        <a href="https://www.linkedin.com/in/muskan-raj-b2b4b6224/">
          <AiFillLinkedin/>
        </a>
        <a href="https://www.instagram.com/muskanraj8823/">
          <AiFillInstagram />
        </a>
        
      </aside>
    </footer>
  );
};

export default Footer;
