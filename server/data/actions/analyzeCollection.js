
export default async function analyzeCollection({collection}) {
	console.log('%c << ▶️ analyzeCollection >>', 'color: white; font-size: 16px');


	return {
		total: await collection.countDocuments(),
		deleted: await collection.countDocuments({deleteAt: {$exists: true}}),
	}
}
