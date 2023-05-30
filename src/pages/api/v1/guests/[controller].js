import controller from '@server/middleware/controller';
import GuestServicesIndex from '@server/services/guest';
import Guest from '@server/data/models/GuestsModel';

export default async function handler( req, res ) {
	const config = {
		collection: Guest,
		customServices: GuestServicesIndex
	}
	await controller({req, res, config})
}
