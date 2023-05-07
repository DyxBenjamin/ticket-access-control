import Users from "@server/data/models/UserModel";
import saveOnCollection from "@server/data/actions/saveOnCollection";

export default function create({req, res}) {
	return saveOnCollection({req, res, collection: Users})
}
