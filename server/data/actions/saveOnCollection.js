export default async function saveOnCollection( {collection, body} ) {
	const data = new collection( body );
	return await data.save()
}
