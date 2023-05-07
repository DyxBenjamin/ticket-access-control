import Users from "@server/data/models/UserModel";

export default function all() {
	return Users.find({}).exec();
}
