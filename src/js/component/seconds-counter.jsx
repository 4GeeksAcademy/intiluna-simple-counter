import React from "react";
import "../../styles/index.css"

const SecondsCounter = (props) => {
    return (
    <div className="row d-flex justify-content-center" >
        
        <div className="card clock-style" style={{width: "4rem"}}>
        <i className="fa-regular fa-clock"></i>
        </div>

        <div className="card" style={{width: "4rem"}}>
        {props.digito6}
        </div>
        <div className="card" style={{width: "4rem"}}>
        {props.digito5}
        </div>
        <div className="card" style={{width: "4rem"}}>
        {props.digito4}
        </div>
        <div className="card" style={{width: "4rem"}}>
        {props.digito3}
        </div>
        <div className="card" style={{width: "4rem"}}>
        {props.digito2}
        </div>
        <div className="card" style={{width: "4rem"}}>
        {props.digito1}
        </div>
        
        {/* {props.digito5}
        {props.digito4}
        {props.digito3}
        {props.digito2}
        {props.digito1} */}
        
    </div>
    )
};

export default SecondsCounter;