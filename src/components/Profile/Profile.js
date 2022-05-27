import React from "react";
import "./Profile.css";

import AboutMe from "../AboutMe/AboutMe";
import ProfileImage from "../ProfileImage/ProfileImage";
import Skills from "../Skills/Skills";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-container">
        <AboutMe />
        <ProfileImage />
      </div>
      <Skills />
    </div>
  );
};

export default Profile;
