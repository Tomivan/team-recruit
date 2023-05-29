import React from "react";
import "./left.css";
import Top from "../top/top.component";
import Form from "../form/form.component";

const Left = () => {
    return(
        <div className="left">
            <Top />
            <Form />
        </div>
    )
}

export default Left;