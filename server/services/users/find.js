import Users from "@server/data/models/UserModel";
import findOnCollection from "@server/data/actions/findOnCollection";

export default function find({req, res}) {
	return findOnCollection({req, res, collection: Users})
}
