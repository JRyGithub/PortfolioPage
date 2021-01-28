import * as React from "react";
import "./Background.scss";
import Particles from "react-particles-js";

const particleOptions = {
  autoPlay: true,
  background: {
    color: {
      value: "#FFAD00", //These is key variable to change.
    },
    image: "",
    position: "",
    repeat: "",
    size: "",
    opacity: 1,
  },
  backgroundMode: {
    enable: false,
    zIndex: -1,
  },
  detectRetina: true,
  fpsLimit: 60,
  infection: {
    cure: false,
    delay: 0,
    enable: false,
    infections: 1,
    stages: [],
  },
  interactivity: {
    detectsOn: "window",
    events: {
      onClick: {
        enable: true,
        mode: [],
      },
      onDiv: {
        selectors: [],
        enable: false,
        mode: [],
        type: "circle",
      },
      onHover: {
        enable: true,
        mode: "trail",
        parallax: {
          enable: false,
          force: 2,
          smooth: 10,
        },
      },
      resize: true,
    },
    modes: {
      attract: {
        distance: 200,
        duration: 0.4,
        speed: 1,
      },
      bounce: {
        distance: 200,
      },
      bubble: {
        distance: 200,
        duration: 0.4,
      },
      connect: {
        distance: 80,
        links: {
          opacity: 0.6,
        },
        radius: 60,
      },
      grab: {
        distance: 100,
        links: {
          blink: false,
          consent: false,
          opacity: 1,
        },
      },
      light: {
        area: {
          gradient: {
            start: {
              value: "#ffffff",
            },
            stop: {
              value: "#000000",
            },
          },
          radius: 1000,
        },
        shadow: {
          color: {
            value: "#000000",
          },
          length: 2000,
        },
      },
      push: {
        quantity: 4,
      },
      remove: {
        quantity: 2,
      },
      repulse: {
        distance: 200,
        duration: 0.4,
        speed: 1,
      },
      slow: {
        factor: 3,
        radius: 200,
      },
      trail: {
        delay: 0.01,
        quantity: 1,
        particles: {
          color: {
            value: "#02ABBB", //Trail
            animation: {
              enable: false,
              speed: 400,
              sync: true,
            },
          },
          collisions: {
            enable: false,
            bounce: {
              horizontal: {
                random: {},
              },
              vertical: {
                random: {},
              },
            },
          },
          links: {
            enable: false,
            shadow: {},
            triangles: {},
          },
          move: {
            outMode: "destroy",
            speed: 5,
            angle: {},
            attract: {
              rotate: {},
            },
            gravity: {},
            noise: {
              delay: {
                random: {},
              },
            },
            outModes: {},
            trail: {},
          },
          size: {
            value: 10,
            animation: {
              enable: true,
              speed: 5,
              minimumValue: 1,
              sync: true,
              startValue: "min",
              destroy: "max",
            },
            random: {},
          },
          bounce: {
            horizontal: {
              random: {},
            },
            vertical: {
              random: {},
            },
          },
          life: {
            delay: {
              random: {},
            },
            duration: {
              random: {},
            },
          },
          number: {
            density: {},
          },
          opacity: {
            animation: {},
            random: {},
          },
          rotate: {
            animation: {},
          },
          shadow: {
            offset: {},
          },
          shape: {
            type: "circle",
          },
          stroke: {
            color: {
              value: "#02ABBB", //Test Fail
              animation: {
                enable: false,
                speed: 0,
                sync: false,
              },
            },
          },
          twinkle: {
            lines: {},
            particles: {},
          },
        },
      },
    },
  },
  particles: {
    color: {
      value: "#02ABBB", //Joins
      animation: {
        enable: true,
        speed: 50,
        sync: true,
      },
    },
    links: {
      blink: false,
      color: {
        value: "#02ABBB", //Changes Lines
      },
      consent: false,
      distance: 100,
      enable: true,
      frequency: 5,
      opacity: 1,
      shadow: {
        blur: true,
        color: {
          value: "#02ABBB", //Can give like a show/blur
        },
        enable: true,
      },
      triangles: {
        enable: true,
        frequency: 1,
        color: {
          value: "#02ABBB", //Test Fail
        },
      },
      width: 3,
      warp: true,
    },
    move: {
      angle: {
        offset: 45,
        value: 90,
      },
      attract: {
        enable: true,
        rotate: {
          x: 3000,
          y: 3000,
        },
      },
      direction: "none",
      distance: 0,
      enable: true,
      gravity: {
        acceleration: 9.81,
        enable: false,
        maxSpeed: 50,
      },
      noise: {
        delay: {
          random: {
            enable: false,
            minimumValue: 0,
          },
          value: 0,
        },
        enable: false,
      },
      outModes: {
        default: "out",
      },
      random: false,
      size: false,
      speed: 2,
      straight: false,
      trail: {
        enable: false,
        length: 10,
        fillColor: {
          value: "#02ABBB", //Test
        },
      },
      vibrate: false,
      warp: false,
    },
    number: {
      density: {
        enable: true,
        area: 800,
        factor: 1000,
      },
      limit: 0,
      value: 100,
    },
    opacity: {
      random: {
        enable: true,
        minimumValue: 0.3,
      },
      value: 0.8,
      animation: {
        enable: true,
        minimumValue: 0.3,
        speed: 0.5,
        sync: false,
      },
    },
    reduceDuplicates: false,
    rotate: {
      random: {
        enable: false,
        minimumValue: 0,
      },
      value: 0,
      animation: {
        enable: false,
        speed: 0,
        sync: false,
      },
      direction: "clockwise",
      path: false,
    },
    shadow: {
      blur: 0,
      color: {
        value: "#02ABBB", //Test
      },
    },
  },
  pauseOnBlur: true,
  pauseOnOutsideViewport: false,
  themes: [],
};

const Background = () => {
  return (
    <span className="backgroundImage">
      <div className="outer-container">
        <div id="particles-js">
          <Particles params={particleOptions} />
        </div>
        <div id="svgBox">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
            <rect width="1440" height="200" x="0" y="0" fill="none"></rect>
            <path
              id="svgImage"
              fill-opacity="2"
              d="M0,128L80,112C160,96,320,64,480,90.7C640,117,800,203,960,213.3C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </span>
  );
};
//M0,128L80,112C160,96,320,64,480,90.7C640,117,800,203,960,213.3C1120,224,1280,160,1360,128L1440,96L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z
export default Background;
