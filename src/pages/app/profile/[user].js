import Nav from "@components/nav/Nav";

export default function Profile({}) {
	return (
		<div>
			<h1>Profile</h1>
		</div>
	);
}

Profile.getLayout = function getLayout(page) {
	return <Nav>{page}</Nav>;
}
