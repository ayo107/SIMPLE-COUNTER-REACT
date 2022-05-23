import React from "react";
import SecondsCounter from "./secondscounter.jsx";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="d-flex justify-content-center">
			<div className="digit m-2">
				<i class="far fa-clock"></i>
			</div>
			<div className="digit m-2">
				<SecondsCounter time={100000} />
			</div>
			<div className="digit m-2">
				<SecondsCounter time={10000} />
			</div>
			<div className="digit m-2">
				<SecondsCounter time={1000} />
			</div>
			<div className="digit m-2">
				<SecondsCounter time={100} />
			</div>
			<div className="digit m-2">
				<SecondsCounter time={10} />
			</div>
			<div className="digit m-2">
				<SecondsCounter time={1} />
			</div>
		</div>
	);
}
