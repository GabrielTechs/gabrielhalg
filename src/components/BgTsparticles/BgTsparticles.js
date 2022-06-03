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
      options={{
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 136,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#e0e0f0",
          },
          links: {
            color: "#e0e0f0",
            distance: 169,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 69,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 6 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default BgTsparticles;
