// [linkName]: {
// 	type: string // 'one', 'many'
// 	from: string // 'field name in current collection',
// 	to: string // 'field name in linked collection'
// 	collection: mongoose.model, // 'linked collection'
// 	onDeleted: string // 'cascade', 'nullify', 'restrict', 'archive', 'transfer', 'anonymous', 'setDefault', 'doNothing'
// 	onCreate: string // 'create', 'update', 'doNothing'
// 	postProcessDocuments: (document) => {} // Optional - Function to process the linked documents
//}


import Guest from "@server/data/models/GuestsModel";

const UserLinks = {
	guests: {
		type: 'many',
		from: '_id',
		to: 'userId',
		collection: Guest
	}
}

export default UserLinks
