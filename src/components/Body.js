import React from "react";
import Typed from "react-typed";
import telegram from "../assets/telegram.webp"

const Body = () => {

    return (

        <div className="header-wraper">

            {/* <div className="fixed" >
                <h1>
                    A junior Web Developer, interested in technology and passionate to create useful tech solutions.
                </h1>
            </div> */}

            <div className="main-info">
                <h1>Web Development and Video Editing</h1>

                <Typed
                    className="type-text"
                    strings={["Web Development", "Content Creator", "Digital Sculpting"]}
                    typeSpeed={40}
                    backSpeed={40}
                    loop
                />
                <a href="https://t.me/callmeskyhi" target="_blank" className="btn-contact">
                    <img src={telegram} style={{ width: "30px", height: "30px" }} />   CONTACT ME
                    </a>
            </div>

        </div>

    )

}

export default Body;