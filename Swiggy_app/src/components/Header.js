import React, { useState } from "react";

import ReactDOM from "react-dom/client"
import {LOGO_URL} from "../utils/constants"



export const Header = () => {
    const [btnName,setBtnName] = useState(false)
    return (
        <div className="header" >
        
            <div className="logo-container">
                <img className = "logo" src={LOGO_URL} alt="" />
            </div>
            <div className="nav_items">
                
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                    <button className="login_btn" onClick={() =>setBtnName(!btnName)  }>{ btnName ? "Logout":"Login"}</button>
                </ul>
            </div>
        </div>

    )
}

export default Header