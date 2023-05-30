export default async function fetchStaticData({
	route,
	singleton,
	filters,
	projection,
	settings,
	links
}) {
	try {
		const response = await fetch(`http://localhost:3000/api/v1/${route}`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				singleton,
				filters,
				projection,
				settings,
				links
			})
		});
		const data = await response.json();
		return data.result;
	} catch (err) {
		console.error(err);
		return null;
	}
}
