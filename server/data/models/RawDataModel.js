import {model, models, Schema} from "mongoose";
import moment from "moment";

const RawDataSchema = new Schema({
	key: {
		type: String,
		required: true,
		index: true,
		unique: true,
		immutable: true,
	},
	data: {
		type: Object,
		required: true,
	},
	labels: {
		type: [String],
	},
	metadata: {
		type: Object,
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

const RawData = models.RawData || model("RawData", RawDataSchema, "rawData");

export default RawData;
