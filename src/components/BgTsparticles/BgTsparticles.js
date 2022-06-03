import React from "react";
import { loadFull } from "tsparticles";

const BgTsparticles = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = () => {};
  return <div></div>;
};

export default BgTsparticles;
