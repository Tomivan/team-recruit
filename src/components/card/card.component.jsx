import React from "react";
import { FaWifi } from "react-icons/fa";
import Logo from "../../assets/images/logo.svg";
import Chip from "../../assets/images/chip.jpg";
import "./card.css";

const Card = () => {
    return(
        <div className="card">
            <div className="card-top">
                <img src={Chip} alt="a smart card chip" className="chip"/>
                <FaWifi className="wifi"/>
            </div>
            <p className="name">Jonathan Micheal</p>
            <div className="numbers">
                <p >. . . .</p>
                <p>3456</p>
            </div>
            <div className="card-bottom">
                <p>09/22</p>
                <div className="logo-info">
                    <img src={Logo} alt="the official mastercard logo" className="mastercard-logo"/>
                    <sub>mastercard</sub>
                </div>
            </div>
        </div>
    )
}

export default Card;