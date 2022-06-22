import React from "react";
import "./ProfileImage.css";

import ProfilePic from "../../images/ProfilePic.jpg";

const ProfileImage = () => {
  return <img className="profile-img" src={ProfilePic} alt="gabrielhalg" />;
};

export default ProfileImage;
