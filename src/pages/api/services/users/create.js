import Users from "@api/data/models/UserModel";
import connectMongo from "@api/data/database";
import saveOnCollection from "@api/data/actions/saveOnCollection";

export default function create({req, res}) {
	return saveOnCollection({req, res, collection: Users})
}
