import {model, models, Schema} from "mongoose";

const VerificationTokenSchema = new Schema({
	expires: {
		type: Date,
		trim: true,
	},
	token: {
		type: String,
		trim: true,
	},
	identifier: {
		type: String,
		trim: true,
	},
})

const VerificationTokens = models.VerificationToken || model("VerificationToken", VerificationTokenSchema);
export default VerificationTokens;
