import * as React from "react";
import "./Background.scss";
import Particles from 'react-particles-js';

const particleOptions = {
    "autoPlay": true,
    "background": {
      "color": {
        "value": "#FFFBFC" //These is key variable to change.
      },
      "image": "",
      "position": "",
      "repeat": "",
      "size": "",
      "opacity": 1
    },
    "backgroundMask": {
      "composite": "destination-out",
      "cover": {
        "color": {
          "value": "#fff"
        },
        "opacity": 1
      },
      "enable": false
    },
    "backgroundMode": {
      "enable": false,
      "zIndex": -1
    },
    "detectRetina": true,
    "fpsLimit": 60,
    "infection": {
      "cure": false,
      "delay": 0,
      "enable": false,
      "infections": 0,
      "stages": []
    },
    "interactivity": {
      "detectsOn": "window",
      "events": {
        "onClick": {
          "enable": true,
          "mode": []
        },
        "onDiv": {
          "selectors": [],
          "enable": false,
          "mode": [],
          "type": "circle"
        },
        "onHover": {
          "enable": true,
          "mode": "trail",
          "parallax": {
            "enable": false,
            "force": 2,
            "smooth": 10
          }
        },
        "resize": true
      },
      "modes": {
        "attract": {
          "distance": 200,
          "duration": 0.4,
          "speed": 1
        },
        "bounce": {
          "distance": 200
        },
        "bubble": {
          "distance": 200,
          "duration": 0.4
        },
        "connect": {
          "distance": 80,
          "links": {
            "opacity": 0.6
          },
          "radius": 60
        },
        "grab": {
          "distance": 100,
          "links": {
            "blink": false,
            "consent": false,
            "opacity": 1
          }
        },
        "light": {
          "area": {
            "gradient": {
              "start": {
                "value": "#ffffff"
              },
              "stop": {
                "value": "#000000"
              }
            },
            "radius": 1000
          },
          "shadow": {
            "color": {
              "value": "#000000"
            },
            "length": 2000
          }
        },
        "push": {
          "quantity": 4
        },
        "remove": {
          "quantity": 2
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4,
          "speed": 1
        },
        "slow": {
          "factor": 3,
          "radius": 200
        },
        "trail": {
          "delay": 0.01,
          "quantity": 1,
          "particles": {
            "color": {
              "value": "#EC058E", //Trail
              "animation": {
                "enable": false,
                "speed": 400,
                "sync": true
              }
            },
            "collisions": {
              "enable": false,
              "bounce": {
                "horizontal": {
                  "random": {}
                },
                "vertical": {
                  "random": {}
                }
              }
            },
            "links": {
              "enable": false,
              "shadow": {},
              "triangles": {}
            },
            "move": {
              "outMode": "destroy",
              "speed": 5,
              "angle": {},
              "attract": {
                "rotate": {}
              },
              "gravity": {},
              "noise": {
                "delay": {
                  "random": {}
                }
              },
              "outModes": {},
              "trail": {}
            },
            "size": {
              "value": 5,
              "animation": {
                "enable": true,
                "speed": 5,
                "minimumValue": 1,
                "sync": true,
                "startValue": "min",
                "destroy": "max"
              },
              "random": {}
            },
            "bounce": {
              "horizontal": {
                "random": {}
              },
              "vertical": {
                "random": {}
              }
            },
            "life": {
              "delay": {
                "random": {}
              },
              "duration": {
                "random": {}
              }
            },
            "number": {
              "density": {}
            },
            "opacity": {
              "animation": {},
              "random": {}
            },
            "rotate": {
              "animation": {}
            },
            "shadow": {
              "offset": {}
            },
            "shape": {
              "type": "circle"
            },
            "stroke": {
              "color": {
                "value": "#3500D3", //Test Fail
                "animation": {
                  "enable": false,
                  "speed": 0,
                  "sync": false
                }
              }
            },
            "twinkle": {
              "lines": {},
              "particles": {}
            }
          }
        }
      }
    },
    "manualParticles": [],
    "motion": {
      "disable": false,
      "reduce": {
        "factor": 4,
        "value": true
      }
    },
    "particles": {
      "bounce": {
        "horizontal": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        },
        "vertical": {
          "random": {
            "enable": false,
            "minimumValue": 0.1
          },
          "value": 1
        }
      },
      "collisions": {
        "bounce": {
          "horizontal": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": 1
          },
          "vertical": {
            "random": {
              "enable": false,
              "minimumValue": 0.1
            },
            "value": 1
          }
        },
        "enable": true,
        "mode": "bounce"
      },
      "color": {
        "value": "#EC058E", //Joins
        "animation": {
          "enable": true,
          "speed": 50,
          "sync": false
        }
      },
      "life": {
        "count": 0,
        "delay": {
          "random": {
            "enable": false,
            "minimumValue": 0
          },
          "value": 0,
          "sync": false
        },
        "duration": {
          "random": {
            "enable": false,
            "minimumValue": 0.0001
          },
          "value": 0,
          "sync": false
        }
      },
      "links": {
        "blink": false,
        "color": {
          "value": "#EC058E" //Changes Lines
        },
        "consent": false,
        "distance": 100,
        "enable": true,
        "frequency": 1,
        "opacity": 1,
        "shadow": {
          "blur": false,
          "color": {
            "value": "#EC058E" //Can give like a show/blur
          },
          "enable": true
        },
        "triangles": {
          "enable": false,
          "frequency": 1,
          "color": {
            "value": "#3500D3" //Test Fail
          }
        },
        "width": 3,
        "warp": true
      },
      "move": {
        "angle": {
          "offset": 45,
          "value": 90
        },
        "attract": {
          "enable": false,
          "rotate": {
            "x": 3000,
            "y": 3000
          }
        },
        "direction": "none",
        "distance": 0,
        "enable": true,
        "gravity": {
          "acceleration": 9.81,
          "enable": false,
          "maxSpeed": 50
        },
        "noise": {
          "delay": {
            "random": {
              "enable": false,
              "minimumValue": 0
            },
            "value": 0
          },
          "enable": false
        },
        "outModes": {
          "default": "out"
        },
        "random": false,
        "size": false,
        "speed": 2,
        "straight": false,
        "trail": {
          "enable": false,
          "length": 10,
          "fillColor": {
            "value": "#3500D3" //Test
          }
        },
        "vibrate": false,
        "warp": false
      },
      "number": {
        "density": {
          "enable": true,
          "area": 800,
          "factor": 1000
        },
        "limit": 0,
        "value": 100
      },
      "opacity": {
        "random": {
          "enable": true,
          "minimumValue": 0.3
        },
        "value": 0.8,
        "animation": {
          "enable": true,
          "minimumValue": 0.3,
          "speed": 0.5,
          "sync": false
        }
      },
      "reduceDuplicates": false,
      "rotate": {
        "random": {
          "enable": false,
          "minimumValue": 0
        },
        "value": 0,
        "animation": {
          "enable": false,
          "speed": 0,
          "sync": false
        },
        "direction": "clockwise",
        "path": false
      },
      "shadow": {
        "blur": 0,
        "color": {
          "value": "#3500D3" //Test
        },
        "enable": false,
        "offset": {
          "x": 0,
          "y": 0
        }
      },
      "shape": {
        "options": {},
        "type": "circle"
      },
      "size": {
        "random": {
          "enable": true,
          "minimumValue": 1
        },
        "value": 3,
        "animation": {
          "destroy": "none",
          "enable": true,
          "minimumValue": 1,
          "speed": 3,
          "startValue": "max",
          "sync": false
        }
      },
      "stroke": {
        "width": 0,
        "color": {
          "value": "",
          "animation": {
            "enable": false,
            "speed": 0,
            "sync": false
          }
        }
      },
      "twinkle": {
        "lines": {
          "enable": false,
          "frequency": 0.05,
          "opacity": 1
        },
        "particles": {
          "enable": false,
          "frequency": 0.05,
          "opacity": 1
        }
      }
    },
    "pauseOnBlur": true,
    "pauseOnOutsideViewport": false,
    "themes": []
  }

const Background = () => {
  return (
    <span className="backgroundImage">
      <div className="outer-container">
        <div id="particles-js">
            <Particles params={particleOptions}/>
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