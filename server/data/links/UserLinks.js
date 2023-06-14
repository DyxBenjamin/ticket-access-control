// [linkName]: {
// 	type: string // 'one', 'many'
// 	from: string // 'field name in current collection',
// 	to: string // 'field name in linked collection'
// 	collection: mongoose.model, // 'linked collection'
// 	onDeleted: string // 'cascade', 'nullify', 'restrict', 'archive', 'transfer', 'anonymous', 'setDefault', 'doNothing'
// 	onCreate: string // 'create', 'update', 'doNothing'
// 	postProcessDocuments: (document) => {} // Optional - Function to process the linked documents
//}


const UserLinks = {}

export default UserLinks
