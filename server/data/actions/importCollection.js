
export default async function importCollection({collection, data}) {
	const result = await collection.insertMany(data);
}
