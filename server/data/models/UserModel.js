import {model, models, Schema} from "mongoose";
import moment from "moment";
import _ from "lodash";

const UserSchema = new Schema({
	profile: {
		image: {
			type: String,
		},
		name: {
			type: String,
			required: true,
		},
		secondName: {
			type: String,
		},
		lastName: {
			type: String,
			required: true,
		},
		secondLastName: {
			type: String,
		},
	},
	status: {
		type: String,
		default: "active",
		enum: ["active", "inactive", "deleted", "banned", "pending", "suspended" ],
	},
	emails: [
		{
			address: {
				type: String,
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
	accessLink: {
		type: String
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


UserSchema.pre('save', function(next) {
	this.accessLink = `${_.kebabCase(this.profile.name)}-${_.kebabCase(this.profile.lastName)}`;
	next();
});

const Users = models.Users || model("Users", UserSchema);

export default Users;
