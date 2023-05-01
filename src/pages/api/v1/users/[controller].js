import userServicesIndex from "@api/services/users";
import connectMongo from "@api/data/database";
const connection = connectMongo();

export default function handler( req, res ) {
	const { method, query, headers } = req
	const { controller } = query;

	if (method !== "POST") return res.status(405).json({ error: 'Method Not Allowed' });
	if (!controller) return res.status(404).json({ error: 'Not Found' });

	const service = userServicesIndex[controller];
	if (!service) return res.status(404).json({ error: 'Not Found' });

	const execute = service({req, res})

	execute
		.then((result) => {
			res.status(200).json({ status: 200, result})
		})
		.catch((error) => {
			res.status(500).json(error)
		});
}
