import {model, models, Schema} from "mongoose";
import moment from "moment";

const RawDataSchema = new Schema({
	key: {
		type: String,
		required: true,
	},
	Data: {
		type: Object,
		required: true,
	},
	labels: {
		type: [String],
		required: true,
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

const RawDataModel = models.RawData || model("RawData", RawDataSchema);

export default RawDataModel;
