//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application


let digit1 = 0;
let digit2 = 0;
let digit3 = 0;
let digit4 = 0;
let digit5 = 0;
let digit6 = 0;
setInterval(function(){
    digit1+=1
    if (digit1 ===10){
        digit2+=1
        digit1=0
    }
    
    if (digit2 ===10){
        digit3+=1
        digit2=0
    }

    if (digit3 ===10){
        digit4+=1
        digit3=0
    }

    if (digit4 ===10){
        digit5+=1
        digit4=0
    }

    if (digit5 ===10){
        digit6+=1
        digit5=0
    }

    if (digit6 ===10){
        digit1=0
        digit2=0
        digit3=0
        digit4=0
        digit5=0
        digit6=0
    }

    ReactDOM.render(<Home digito1={digit1} digito2={digit2} digito3={digit3} digito4={digit4} digito5={digit5} digito6={digit6}/>, document.querySelector("#app"));
    
},1000)


