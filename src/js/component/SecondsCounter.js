import React, { useRef, useEffect, useState } from "react";

function SecondsCounter({ seconds }) {
	const [num, setNum] = useState(seconds);
	let seg = 0;
	let seg2 = 0;
	let min = 0;
	let min2 = 0;
	let hora = 0;
	let hora2 = 0;

	let intervalRef = useRef();

	const incrementarNum = () => {
		setNum(prev => prev + 1);
	};

	useEffect(() => {
		intervalRef.current = setInterval(incrementarNum, 1000);
		return () => clearInterval(intervalRef.current);
	}, []);

	let total = num.toString().length;
	let num2 = num.toString();

	if (total == 1) {
		seg = num2[0];
	}
	if (total == 2) {
		seg = num2[1];
		seg2 = num2[0];
	}
	if (total == 3) {
		seg = num2[2];
		seg2 = num2[1];
		min = num2[0];
	}
	if (total == 4) {
		seg = num2[3];
		seg2 = num2[2];
		min = num2[1];
		min2 = num2[0];
	}
	if (total == 5) {
		seg = num2[4];
		seg2 = num2[3];
		min = num2[2];
		min2 = num2[1];
		hora = num2[0];
	}
	if (total == 6) {
		seg = num2[5];
		seg2 = num2[4];
		min = num2[3];
		min2 = num2[2];
		hora = num2[1];
		hora2 = num2[0];
	}

	return (
		<div className="d-flex justify-content-center bg-dark text-white text-center">
			<div className="p-3 m-3 border border-secondary font-weight-bold display-3  rounded">
				ico
			</div>
			<div className="p-3 m-3 border border-secondary font-weight-bold display-3 rounded">
				{hora2}
			</div>
			<div className="p-3 m-3 border border-secondary font-weight-bold display-3 rounded">
				{hora}
			</div>
			<div className="p-3 m-3 border border-secondary font-weight-bold display-3 rounded">
				{min2}
			</div>
			<div className="p-3 m-3 border border-secondary  font-weight-bold display-3 rounded">
				{min}
			</div>
			<div className="p-3 m-3 border border-secondary  font-weight-bold display-3 rounded">
				{seg2}
			</div>
			<div className="p-3 m-3 border border-secondary font-weight-bold display-3 rounded">
				{seg}
			</div>
		</div>
	);
}

export default SecondsCounter;
