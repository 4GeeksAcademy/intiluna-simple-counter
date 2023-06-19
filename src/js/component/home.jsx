import React from "react";
import SecondsCounter from "../component/seconds-counter.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";



//create your first component
const Home = (props) => {
	// let pepino = 8;
	// console.log(props);
	
	return (
		
		
		<div className="text-center bg-dark">
			<h1 className="text-center mt-5 text-light">Simple counter</h1>
			<div><SecondsCounter digito1={props.digito1} digito2={props.digito2} digito3={props.digito3} digito4={props.digito4} digito5={props.digito5} digito6={props.digito6} className= "text-light"/> </div>
		</div>
	);
};

export default Home;
