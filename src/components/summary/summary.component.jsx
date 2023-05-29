import React from "react";
import { FaApple, FaBookmark } from "react-icons/fa";
import "./summary.css";

const Summary = () => {
    return(
        <div className="summary">
            <div className="summary-top">
                <div className="info">
                    <p>Company</p>
                    <p><FaApple className="apple" />Apple</p>
                </div>
                <div className="info">
                    <p>Order Number</p>
                    <p>1266201</p>
                </div>
                <div className="info">
                    <p>Product</p>
                    <p>Macbook air</p>
                </div>
                <div className="info">
                    <p>VAT(20%)</p>
                    <p>$100.00</p>
                </div>
                <div className="circles">
                    <div className="circle circle-1"></div>
                    <div className="border"></div>
                    <div className="circle circle-2"></div>
                </div>
            </div>
            <div className="summary-bottom">
                <div className="left">
                    <p>You have to pay</p>
                    <p>549.99 USD</p>
                </div>
                <FaBookmark className="bookmark"/>
            </div>
        </div>
    )
}

export default Summary;