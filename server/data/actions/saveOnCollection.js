export default async function saveOnCollection( {
	req,
	res,
	collection
} ) {
	const { body } = req;
	const data = new collection( body );
	const result = await data.save();
	res.status( 200 )
	   .json( result );
}
