// [serviceName]: {
// 	    enabled: boolean,
// 		auth: boolean,
// 		permissions: boolean | string[], // false, ['admin', 'editor']
//      service: async function({req, res, config}) {
//          // do something
//      }
// },
import { v2 as cloudinary } from 'cloudinary';
import handleResult from "@server/utils/handleResult";


const userServicesIndex = {
	cloudinarySignature: {
		enabled: true,
		auth: false,
		permissions: false,
		service: async function({req, res}) {
			const {body} = req;
			const {options} = body;
			const signature = cloudinary.utils.api_sign_request( options , process.env.CLOUDINARY_API_SECRET);

			const result = {
				uploadSignatureTimestamp: options.timestamp,
				signature: signature,
				api_key: process.env.CLOUDINARY_API_KEY,
			}
			handleResult(result, res)
		}
	},
}

export default userServicesIndex;
