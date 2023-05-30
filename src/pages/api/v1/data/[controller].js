import DataServicesIndex from '@server/services/data';
import controller from '@server/middleware/controller';
import RawData from '@server/data/models/RawDataModel';


export default async function handler( req, res ) {
	const config = {
		collection: RawData,
		customServices: DataServicesIndex
	}
	
	await controller({req, res, config})
}
