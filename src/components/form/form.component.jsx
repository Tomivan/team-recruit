import React from "react";
import { FaEdit, FaTh, FaCheck, FaCertificate } from "react-icons/fa";
import Logo from "../../assets/images/logo.svg";
import "./form.css";

const Form = () => {
    return<div className="form">
        <div className="form-top">
            <div className="number">
                <p><strong>Card Number</strong></p>
                <p>Enter the 16-digit card number on the card</p>
            </div>
            <div className="edit">
                <FaEdit className="edit-icon"/>
                <p>Edit</p>
            </div>
        </div>
        <div className="input">
            <img src={Logo} alt="the official mastercard logo" className="mastercard"/>
            <input type="number" placeholder="2412 - 7512 - 3412 - 3456" className="input-1"/> 
            <div className="logos">
                <FaCertificate className="certificate"/> <FaCheck className="check"/>
            </div>
        </div>
        <div className="card-info">
            <div className="card-detail">
                <p><strong>CVV Number</strong></p>
                <p>Enter the 3 or 4 digit number on the card</p>
            </div>
            <div className="input">
                <input type="number" value="327"/>
                <FaTh className="th"/>
            </div>
        </div>
        <div className="card-info">
            <div className="card-detail">
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
            <div className="card-detail">
                <p><strong>Password</strong></p>
                <p>Enter your dynamic password</p>
            </div>
            <div className="input">
                <input type="password" value="AceCoin"/>
                <FaTh className="th" />
            </div>
        </div>
        <button className="pay-now">Pay Now</button>
    </div>
}

export default Form;