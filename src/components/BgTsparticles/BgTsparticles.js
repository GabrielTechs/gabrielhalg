import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const BgTsparticles = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = () => {};
  return (
    <Particles
      className="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
    />
  );
};

export default BgTsparticles;
