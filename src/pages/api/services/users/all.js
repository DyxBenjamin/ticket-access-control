import Users from "@api/data/models/UserModel";
import connectMongo from "@api/data/database";

export default function all({req, res}) {
	return Users.find({}).exec();
}
