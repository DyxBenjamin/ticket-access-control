import controller from '@server/components/Controller';
import DataServicesIndex from '@server/services/data';
import RawData from '@server/data/models/RawDataModel';

// [serviceName]: {
// 	    enabled: boolean, // true means service is enabled
// 		auth: boolean, // true means authentication required
// 		override: ({ req, res, config }) => {}, // function means override default service
// 		permissions: string[] | boolean(false), // false means no permissions required
//      mute: boolean, // true means only return status code
//      preProcessRequest: (request) => {}, // function means process request before send to server
//      postProcessResponse: (response) => {}, // function means process response before send to client
// 		debug: boolean, // true means return debug info
// 		cacheTTl: number | boolean(false), // false means no cache, number means cache time in seconds
// },

export default async function handler( req, res ) {
	const config = {
		collection: RawData,
		customServices: DataServicesIndex,
		enableServices:{
			all: {
				enabled: true,
				auth: false,
				permissions: false,
			},
			find: {
				enabled: true,
				auth: false,
				permissions: false,
			},
			create: {
				enabled: true,
				auth: true,
				permissions: ['admin', 'editor'],
			},
			update: {
				enabled: true,
				auth: true,
				permissions: ['admin', 'editor'],
			},
			remove: {
				enabled: true,
				auth: true,
				permissions: ['admin', 'editor'],
			},
			analyse:{
				enabled: true,
				auth: true,
				permissions: ['admin', 'editor'],
			},
			importData:{
				enabled: true,
				auth: true,
				permissions: ['admin', 'editor'],
			},
			exportData:{
				enabled: true,
				auth: true,
				permissions: ['admin', 'editor'],
			}
		},
		enableChronServices:{
			clearDocuments: {
				enabled: true,
				expression: '0 0 * * *', // every day at 00:00
				scheduled: true,
				timezone: 'America/New_York',
			}
		}
	}

	await controller({req, res, config})
}
