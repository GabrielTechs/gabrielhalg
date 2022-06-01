import React from "react";
import "./SocialMedia.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="social-media">
      <a
        href="https://github.com/GabrielTechs"
        target="_blank"
        rel="noopener noreferrer"
        className="social-media-icon"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/gabriel-henriquez-alguacil-658165189/"
        target="_blank"
        rel="noopener noreferrer"
        className="social-media-icon"
      >
        <FaLinkedin />
      </a>
      <div className="social-media-vl" />
    </div>
  );
};

export default SocialMedia;
