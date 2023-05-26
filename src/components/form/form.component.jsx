import React from "react";
import { FaEdit, FaTh, FaCheck, FaCertificate } from "react-icons/fa";
import Logo from "../../assets/images/logo.png";
import "./form.css";

const Form = () => {
    return<div className="form">
        <div className="form-top">
            <div className="number">
                <p><strong>Card Number</strong></p>
                <p>Enter the 16-digit card number on the card</p>
            </div>
            <div className="edit">
                <FaEdit />
                <p>Edit</p>
            </div>
            <div className="input">
                <img src={Logo} alt="the official mastercard logo" />
                <input type="number" placeholder="2412 - 7512 - 3412 - 3456" /> 
                <div className="icons">
                    <FaCertificate /> <FaCheck />
                </div>
            </div>
        </div>
        <div className="card-info">
            <div className="number">
                <p><strong>CVV Number</strong></p>
                <p>Enter the 3 or 4 digit number on the card</p>
            </div>
            <div className="input">
                <input type="number" value="327"/>
                <FaTh />
            </div>
        </div>
        <div className="card-info">
            <div className="number">
                <p><strong>Expiry Date</strong></p>
                <p>Enter the expiration date of the card</p>
            </div>
            <div className="input">
                <input type="number" value="09"/>
                <hr />
                <input type="number" value="222"/>
            </div>
        </div>
        <div className="card-info">
            <div className="number">
                <p><strong>Password</strong></p>
                <p>Enter your dynamic password</p>
            </div>
            <div className="input">
                <input type="password" value="AceCoin"/>
                <FaTh />
            </div>
        </div>
        <button className="pay-now">Pay Now</button>
    </div>
}

export default Form;