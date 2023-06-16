import GuestServicesIndex from '@server/services/guest';
import Guest from '@server/data/models/GuestsModel';
import controller from "@server/components/Controller";

export default async function handler( req, res ) {
	const config = {
		collection: Guest,
		customServices: GuestServicesIndex,
		enableServices: {
			all: {
				enabled: true,
				auth: false,
				permissions: false,
			},
			find: {
				enabled: true,
				auth: false,
				permissions: false,
			},
			create: {
				enabled: true,
				auth: false,
				permissions: false,
			},
			update: {
				enabled: true,
				auth: false,
				permissions: false,
			},
			delete: {
				enabled: true,
				auth: true,
				permissions: ['admin', 'editor'],
			},
			analyze: {
				enabled: true,
				auth: true,
				permissions: ['admin', 'editor'],
			},
			importData: {
				enabled: true,
				auth: true,
				permissions: ['admin', 'editor'],
			},
			exportData: {
				enabled: true,
				auth: true,
				permissions: ['admin', 'editor'],
			}
		}
	}
	await controller({req, res, config})
}
