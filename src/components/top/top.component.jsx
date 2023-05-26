import React from "react";
import { FaMoneyCheck } from "react-icons/fa"
import "./top.css";

const Top = () => {
    return(
        <div className="top">
            <div className="log">
                <FaMoneyCheck />
                <p>AceCoinPay</p>
            </div>
            <div className="time">
                <p className="blue">0</p>
                <p className="blue">1</p>
                <p>:</p>
                <p className="blue">1</p>
                <p className="blue">9</p>
            </div>
        </div>
    )
}

export default Top;