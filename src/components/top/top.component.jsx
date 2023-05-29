import React from "react";
import { FaMoneyCheck } from "react-icons/fa"
import "./top.css";

const Top = () => {
    return(
        <div className="top">
            <div className="flex">
                <FaMoneyCheck className="logo"/>
                <p>AceCoinPay</p>
            </div>
            <div className="flex">
                <p className="blue">0</p>
                <p className="blue">1</p>
                <p className="colon">:</p>
                <p className="blue">1</p>
                <p className="blue">9</p>
            </div>
        </div>
    )
}

export default Top;