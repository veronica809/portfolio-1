import React from "react";
import { AiFillGithub } from "react-icons/ai";

function Contact() {
  return (
    <div className="page">
      <h1>Contact Me</h1>
      <div className="contact-form">
        <form action="/action_page.php">
          <label for="fname">First Name</label>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <label for="lname">Last Name</label>
          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <label for="email">Email</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="Your email address"
          />
          <input type="submit" value="Submit" />
        </form>
      </div>
      <div>
        <h3>Email: veronica.gar.3@gmail.com</h3>
        <h4>
          <a href="my gitlink">
            {" "}
            <AiFillGithub />
          </a>
        </h4>
      </div>
    </div>
  );
}

export default Contact;
