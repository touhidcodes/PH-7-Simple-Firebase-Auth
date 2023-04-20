import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import "./Root.css"

const Root = () => {
	return (
		<div className="Root">
			<Header />
			<Outlet />
		</div>
	);
};

export default Root;
