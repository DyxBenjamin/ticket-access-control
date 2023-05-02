import React from "react";
import Nav from "@components/nav/Nav";

export default function Main() {
	return (
		<div>
			<h1>Main</h1>
		</div>
	);
}

Main.getLayout = function getLayout(page) {
	return <Nav>{page}</Nav>;
}
