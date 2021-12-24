import React from "react";
import "../style/footer.css";

function Footer() {
  return (
    <div>
      <h4 className="credits">
        Made with <span id="heart">❤</span> by{" "}
        <a
          className="author"
          target="_blank"
          href="https://github.com/muditgupta68"
        >
          Mudit Gupta
        </a>
      </h4>
    </div>
  );
}

export default Footer;
