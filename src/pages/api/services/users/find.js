import Users from "@api/data/models/UserModel";
import findOnCollection from "@api/data/actions/findOnCollection";

export default function find({req, res}) {
	return findOnCollection({req, res, collection: Users})
}
