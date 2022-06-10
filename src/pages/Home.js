import React from "react";

import HelmetData from "../assets/HelmetData";
import Profile from "../components/Profile/Profile";
import SocialMedia from "../components/SocialMedia/SocialMedia";
import BgTsparticles from "../components/BgTsparticles/BgTsparticles";

const Home = () => {
  return (
    <div>
      <HelmetData
        title="Gabrielhalg"
        description="Gabriel Henriquez Alguacil software engineer passionate about front end development, new tech and solving problems"
      />
      <BgTsparticles />
      <SocialMedia />
      <Profile />
    </div>
  );
};

export default Home;
