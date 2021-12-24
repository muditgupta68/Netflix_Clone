import React, { useState, useEffect } from "react";
import "../style/navbar.css";

function scroll() {
  console.log("pressed!");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function Navbar() {
  const [navShow, setNav] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setNav(true);
      } else {
        setNav(false);
      }
    });
  }, []);
  return (
    <div className={`nav_logo ${navShow && "black_nav"}`}>
      <img
        className="netflix_Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1200px-Logonetflix.png"
        alt="Netflix-Logo"
        onClick={scroll}
      />
      <img
        className="avatar_logo"
        src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/2c659933850498.56ba69ac2e080.png"
        alt="avatar"
      />
    </div>
  );
}

export default Navbar;
