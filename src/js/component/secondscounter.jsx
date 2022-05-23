import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
//import ReactDOM from "react-dom";
//import StopClock from "./stopclock.jsx";

const SecondsCounter = (props) => {
	const [myVar, setMyVar] = useState(0);
	useEffect(() => {
		const interval = setInterval(() => {
			if (myVar != 9) {
				setMyVar(myVar + 1);
			} else {
				setMyVar(0);
			}
		}, 1000 * props.time);
		return () => clearInterval(interval);
	}, [myVar]);

	return <div>{myVar}</div>;
};

export default SecondsCounter;

SecondsCounter.propTypes = {
	time: PropTypes.number,
};
