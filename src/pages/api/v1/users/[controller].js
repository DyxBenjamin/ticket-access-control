import controller from '@server/components/Controller';
import userServicesIndex from "@server/services/users";
import Users from '@server/data/models/UserModel';
import UserLinks from '@server/data/links/UserLinks';

export default async function handler( req, res ) {
	const config = {
		collection: Users,
		links: UserLinks,
		customServices: userServicesIndex,
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
				auth: true,
				permissions: ['admin', 'editor'],
			},
			update: {
				enabled: true,
				auth: true,
				permissions: ['admin', 'editor'],
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
