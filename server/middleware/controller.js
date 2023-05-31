import connectMongo from '@server/data/database';
import extendedCRUD from '@server/services/common/extendedCRUD';


export default async function controller({req, res, config}) {
	await connectMongo();
	const { method, query } = req;
	const { controller } = query;
	
	if ( method !== 'POST' ) {
		return res.status( 405 )
		          .json( { error: 'Method Not Allowed' } );
	}
	if ( !controller ) {
		return res.status( 404 )
		          .json( { error: 'Not Found' } );
	}
	console.log( '%c << ▶️ controller >>', 'color: white; font-size: 16px' );
	
	
	let services = extendedCRUD( { req, res, config });
	
	if ( config.customServices ) {
		services = { ...services, ...config.customServices };
	}
	
	const service = services[ controller ];
	
	if ( !service ) {
		return res.status( 404 )
		          .json( { error: 'Not Found' } );
	}
	
	await service( { req, res } );
}
