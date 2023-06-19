import React from "react";
import "../../styles/index.css"

const SecondsCounter = (props) => {
    return (
    <div className="text-light" >
        {props.digito6}
        {props.digito5}
        {props.digito4}
        {props.digito3}
        {props.digito2}
        {props.digito1}
        
    </div>
    )
};

export default SecondsCounter;