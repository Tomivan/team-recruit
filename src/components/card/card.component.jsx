import React from "react";
import { FaWifi } from "react-icons";
import Logo from "../../assets/images/logo.png";
import "./card.css";

const Card = () => {
    return(
        <div className="">
            <div className="cardtop">
                <FaWifi />
            </div>
            <p>Jonathan Micheal</p>
            <p>3456</p>
            <div className="card-bottom">
                <p>09/22</p>
                <img src={Logo} alt="the official mastercard logo" />
            </div>
        </div>
    )
}

export default Card;