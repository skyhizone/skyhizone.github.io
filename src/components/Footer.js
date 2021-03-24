import React from "react";

const Footer = () => {

    return (
        <div className="main-footer bg-dark text-white ">
            <div className="container">
                <div className="row" >
                    {/* Column 1*/}
                    <div className="col-md-3 col-sm-6">
                        <h4>Addresses</h4>
                        <ul className="list-unstyled">
                            <li> National Highway 4, Phnom Penh, Cambodia </li>
                        </ul>
                    </div>
                </div>
                {/*Footer Bottom*/}
                <div className="foot-bottom text-center">
                    <p className="text-xs-center">
                        &copy;{new Date().getFullYear()} skyhi production - All Rights
                        Reserved
                    </p>
                </div>
            </div>
        </div>

    )
}
export default Footer;