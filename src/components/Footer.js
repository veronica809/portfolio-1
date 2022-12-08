import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

function Footer() {
  return (
    <footer>
      <p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/veronica809"
        >
          <AiFillGithub />
        </a>
      </p>
      <p>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/veronica-garcia-b217a41b2/"
        >
          <AiFillLinkedin />
        </a>
      </p>
    </footer>
  );
}

export default Footer;
