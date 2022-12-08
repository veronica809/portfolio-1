import React from "react";
import Navigation from "./Navigation";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <h1>Veronica Garcia</h1>
      <div className="navigation-container">
        <Navigation />
      </div>
      <p
        className="menu-icon"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <GiHamburgerMenu />
      </p>
      {isOpen && (
        <div className="mobile-navigation">
          <Navigation />
        </div>
      )}
    </div>
  );
}

export default Header;
