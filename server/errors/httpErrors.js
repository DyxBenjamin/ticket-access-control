import moment from "moment";

const HttpErrors = {
	BadRequest: {
		status: 400,
		type: 'Http-Process',
		error:{
			code:'400',
			message: 'The provided request is invalid',
			details: '',
		},
		docs:'',
		time: moment().format( 'DD/MM/YYYY HH:mm:ss' ),
		timestamp: moment().valueOf(),
	},
	Unauthorized: {
		status: 401,
		type: 'Http-Access',
		error:{
			code:'401',
			message: 'The provided request is unauthorized',
			details: '',
		},
		docs:'',
		time: moment().format( 'DD/MM/YYYY HH:mm:ss' ),
		timestamp: moment().valueOf(),
	},
	Forbidden: {
		status: 403,
		type: 'Http-Access',
		error:{
			code:'403',
			message: 'The provided request is forbidden',
			details: '',
		},
		docs:'',
		time: moment().format( 'DD/MM/YYYY HH:mm:ss' ),
		timestamp: moment().valueOf(),
	}
}

export default HttpErrors;
