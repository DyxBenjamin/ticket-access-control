export default async function updateOnCollection({collection, selector, modifier, singleton, upsert }) {
	let result;
	if (singleton) {
		result = await collection.updateOne(selector, modifier,{upsert});
	} else {
		result = await collection.updateMany(selector, modifier,{upsert});
	}
	return result;
}
