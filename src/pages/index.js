import React from "react";
import Left from "../components/left/left.component";
import Right from "../components/right/right.component";

const Pages = () => {
    return(
        <div className="flex page">
            <Left />
            <Right />
        </div>
    )
}

export default Pages;