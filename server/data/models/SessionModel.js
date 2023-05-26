import {model, models, Schema} from "mongoose";

const SessionSchema = new Schema({
	expires: {
		type: Date,
		trim: true,
	},
	sessionToken: {
		type: String,
		trim: true,
	},
	userId: {
		type: String,
		ref: "User",
	},
})

const Sessions = models.Session || model("Session", SessionSchema);
export default Sessions;
