import controller from '@server/components/Controller';
import userServicesIndex from "@server/services/users";
import Users from '@server/data/models/UserModel';
import UserLinks from '@server/data/links/UserLinks';

export default async function handler( req, res ) {
	const config = {
		collection: Users,
		links: UserLinks,
		customServices: userServicesIndex
	}
	await controller({req, res, config})
}
