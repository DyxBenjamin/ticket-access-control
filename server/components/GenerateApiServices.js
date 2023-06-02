import findOnCollection from '@server/data/actions/findOnCollection';
import saveOnCollection from '@server/data/actions/saveOnCollection';


export default function generateApiServices({req, res, config}) {
	const {collection, services} = config;

	let result = {}

	if (services) {

	}
	
	return {
		async all() {
			return collection.find({}).exec();
		},
		async find() {
			return findOnCollection({req, res, config})
		},
		async create() {
			return saveOnCollection({req, res, collection})
		},
		async update() {},
		async remove() {},
		async analize() {}, // stats and data analisis
		async importData() {}, // import data from file
		async exportData() {}, // export data to file
	}
}
