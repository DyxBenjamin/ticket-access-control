import {isEmpty} from "lodash";

export default function findOnCollection({req, res, collection}){
	const {body} = req;
	if (!body) res.status(400).json({error: "No body provided."});

	const {filters, projection, options} = body;
	if (!filters) res.status(400).json({error: "No filters provided."});
	if (isEmpty(filters)) res.status(400).json({error: "Empty filter provided."});

	return collection.find(filters, projection, options).exec();
}
