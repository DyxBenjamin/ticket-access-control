
export default async function analyzeCollection({collection}) {
	return {
		total: await collection.countDocuments(),
		deleted: await collection.countDocuments({deleteAt: {$exists: true}}),
	}
}
