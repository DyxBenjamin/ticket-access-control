// [serviceName]: {
// 	    enabled: boolean,
// 		auth: boolean,
// 		permissions: boolean | string[], // false, ['admin', 'editor']
//      service: async function({req, res, config}) {
//          // do something
//      }
// },

const userServicesIndex = {
	test: {
		enabled: true,
		auth: true,
		permissions: false, // false, ['admin', 'editor']
		service: async function ({ res }) {
			res.status(200).json({message: 'test'});
		}
	},
}

export default userServicesIndex;
