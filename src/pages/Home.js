import React from "react";

import Profile from "../components/Profile/Profile";
import SocialMedia from "../components/SocialMedia/SocialMedia";
import BgTsparticles from "../components/BgTsparticles/BgTsparticles";

const Home = () => {
  return (
    <div>
      <BgTsparticles />
      <SocialMedia />
      <Profile />
    </div>
  );
};

export default Home;
