import React from "react";
import "./Profile.css";

import AboutMe from "../AboutMe/AboutMe";
import ProfileImage from "../ProfileImage/ProfileImage";

const Profile = () => {
  return (
    <div className="profile">
      <div className="profile-container">
        <AboutMe />
        <ProfileImage />
      </div>
    </div>
  );
};

export default Profile;
