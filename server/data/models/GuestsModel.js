import {model, models, Schema} from "mongoose";
import moment from "moment";
import _ from 'lodash';

const GuestSchema = new Schema({
	profile: {
		honorificPrefix: {
			type: String,
			enum: ['', 'Sr.', 'Sra.', 'Srta.', 'Dr.', 'Dra.', 'Ing.', 'Lic.', 'Arq.', 'Mtro.', 'Mtra.', 'C.', 'C.P.', 'Profr.', 'Profra.', 'Padre', 'Madre', 'Rvdo.'],
			default: '',
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
	roles: {
		type: [String],
		enum: ["user", "client", "admin", "boss"],
		default: ["client"],
	},
	subscriptions: {
		type: [Object],
	},
	accessLink: {
		type: String,
		immutable: true,
		unique: true,
	},
	userId:{
		type: Schema.Types.ObjectId,
		required: true,
	},
	table:{
		type: Number,
		default: 0,
	},
	menu:{
		type: String,
		default: 'regular',
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

GuestSchema.pre('save', function(next) {
	this.accessLink = `${_.kebabCase(this.profile.name)}-${_.kebabCase(this.profile.lastName)}`;
	next();
});

const Guest = models.Guest || model("Guest", GuestSchema);

export default Guest;
