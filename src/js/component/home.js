import React from "react";
import SecondsCounter from "./secondsCounter";
//include images into your bundle

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<SecondsCounter seconds={1} />
		</div>
	);
}
