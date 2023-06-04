export default async function saveOnCollection( { req, res, config } ) {
	const { collection } = config;
	const { body } = req;
	const data = new collection( body );
	const result = await data.save();
	res.status( 200 ).json( result );
}
