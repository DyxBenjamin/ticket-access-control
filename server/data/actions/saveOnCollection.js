export default function saveOnCollection({req, collection}){
	const {body} = req;
	const data = new collection(body);
	return data.save();
}
