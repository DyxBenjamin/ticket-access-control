import Users from "@api/data/models/UserModel";
import {isEmpty} from "lodash";

export default function find({req, res, payload, headers}) {
	const {body} = req;
	if (!body) res.status(400).json({error: "No body provided."});

	const {filters, projection, options} = body;
	if (!filters) res.status(400).json({error: "No filters provided."});
	if (isEmpty(filters)) res.status(400).json({error: "Empty filter provided."});


	return Users.find(filters, projection, options).exec();
}
