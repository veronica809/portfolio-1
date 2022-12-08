import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            to="/"
            style={({ isActive }) => ({ color: isActive ? "black" : "white" })}
          >
            About Me
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/portfolio"
            style={({ isActive }) => ({ color: isActive ? "black" : "white" })}
          >
            Portfolio
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            style={({ isActive }) => ({ color: isActive ? "black" : "white" })}
          >
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/resume"
            style={({ isActive }) => ({ color: isActive ? "black" : "white" })}
          >
            Resume
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
