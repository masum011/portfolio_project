import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>


        <h2>Masum Reza</h2>
        <p>Developer</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://www.youtube.com/channel/UCA1myHtXo-2UsQQkbd8E34g" target={"blank"}>
            <AiFillYoutube />
          </a>
          <a href="/" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/ryanr01" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;