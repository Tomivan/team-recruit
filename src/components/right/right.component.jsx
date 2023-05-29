import React from "react";
import "./right.css";
import Card from "../card/card.component";
import Summary from "../summary/summary.component";

const Right = () => {
    return(
        <div className="right">
            <Card />
            <Summary />
        </div>
    )
}

export default Right;