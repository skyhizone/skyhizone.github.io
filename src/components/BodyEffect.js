import React from "react";
import Particles from 'react-particles-js';

const BodyEffect = () => {

    return (

        <Particles className="particle-canvas"
            params={{
                particles: {
                    number: {
                        value: 50,
                        density: {
                            enable: true,
                            opacity_min: 0.4,
                            sync: false
                        }
                    },
                    shape: {
                        type: "circle",
                        stroke: {
                            width: 10,
                            color: "#f2bc1b"
                        }
                    }
                }
            }
            }
        />

    )
}
export default BodyEffect;