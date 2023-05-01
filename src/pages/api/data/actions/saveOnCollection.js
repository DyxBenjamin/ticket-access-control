export default function saveOnCollection({req, res, collection}){
	const {body} = req;
	const data = new collection(body);
	return data.save();
}
