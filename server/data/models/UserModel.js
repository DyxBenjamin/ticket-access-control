import {model, models, Schema} from "mongoose";
import moment from "moment";

const UserSchema = new Schema({
	profile: {
		image: {
			type: String,
		},
		name: {
			type: String,
			required: true,
		},
		lastName: {
			type: String,
		},
	},
	status: {
		type: String,
		default: "pending",
		enum: ["active", "inactive", "deleted", "banned", "pending", "suspended" ],
	},
	emails: [
		{
			address: {
				type: String,
				required: true,
			},
			verified: {
				type: Boolean,
				default: false,
			},
		}
	],
	phone: {
		type: String,
	},
	roles: {
		type: [String],
		enum: ["user", "client", "admin", "boss"],
		default: ["user"],
	},
	subscriptions: {
		type: [Object],
	},
	createAt: {
		type: Number,
		default: moment().valueOf(),
	},
	updateAt: {
		type: Number,
		default: moment().valueOf(),
	}
})

const Users = models.Users || model("Users", UserSchema);

export default Users;
