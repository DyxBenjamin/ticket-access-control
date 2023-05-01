import Users from "@api/data/models/UserModel";
import connectMongo from "@api/data/database";

export default function create({req, res}) {
	const {body} = req;
	const user = new Users(body);
	return user.save();
}
