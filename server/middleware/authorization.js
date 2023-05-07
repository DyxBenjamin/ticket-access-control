import Users from "@server/data/models/UserModel";

export async function authorization(req, res, db, authorize, callback) {

	let user = false

	if (authorize) {
		const { userId } = req.body;
		user = await Users.findOne({ _id:userId })
		if(!user){
			res.status(400).json({message: 'User not found'})
			return
		}
	}

	callback({req, res, db, user})
}
