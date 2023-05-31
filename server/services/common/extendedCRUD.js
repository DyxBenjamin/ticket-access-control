import findOnCollection from '@server/data/actions/findOnCollection';
import saveOnCollection from '@server/data/actions/saveOnCollection';


export default function extendedCRUD({req, res, config}) {
	const {collection, links} = config;
	return {
		all: async function all() {
			const result = await collection.find({}).exec();
			res.status( 200 ).json( result );
		},
		find: async function find() {
			return findOnCollection({req, res, config})
		},
		create: async function create() {
			return saveOnCollection({req, res, collection})
		},
		update: async function update() {},
		remove: async function remove() {},
	}
}
