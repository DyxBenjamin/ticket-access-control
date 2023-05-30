import Guest from '@server/data/models/GuestsModel';


const UserLinks = {
	guest: {
		type: 'many',
		from: '_id',
		to: 'userId',
		collection: Guest,
		onDeleted: 'cascade', // 'cascade', 'nullify', 'restrict', 'archive', 'transfer', 'anonymous', 'setDefault', 'doNothing'
		onCreate: 'create', // 'create', 'update', 'doNothing'
		// transform: (guest) => {}
	}
}

export default UserLinks
