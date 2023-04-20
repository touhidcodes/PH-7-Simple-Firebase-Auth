import React from "react";
import { Outlet } from "react-router-dom";

const Root = () => {
	return (
		<div>
			Hi
			<Outlet />
		</div>
	);
};

export default Root;
