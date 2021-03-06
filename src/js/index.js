//import react into the bundle
import propTypes from "prop-types";
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

function SimpleCounter(props) {
	return (
		<div>
			<div className="bigCounter">
				<div className="calendar">
					<i className="fa-solid fa-clock"></i>
				</div>
				<div className="four">{props.digitFour}</div>
				<div className="three">{props.digitThree}</div>
				<div className="two">{props.digitTwo}</div>
				<div className="one">{props.digitOne}</div>
			</div>
		</div>
	);
}
SimpleCounter.protoTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number,
};

let counter = 0;
setInterval(function () {
	const four = Math.floor(counter / 1000);
	const three = Math.floor(counter / 100);
	const two = Math.floor(counter / 10);
	const one = Math.floor(counter / 1);
	console.log(four, three, two, one);
	//render your react application
	counter++;
	ReactDOM.render(
		<SimpleCounter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);
