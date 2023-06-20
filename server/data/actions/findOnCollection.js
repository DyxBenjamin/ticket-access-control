import _ from 'lodash';


//config = {
//  collection: Object, // Required - Mongoose model
//  links: Object, // Optional - Default: {} - See project documentation for more information
// }

// body = {
//  filters: Object, // Optional - Default: {} - See mongoose documentation for more information
//  projection: Object, // Optional - Default: {} - See mongoose documentation for more information
//  options: Object, // Optional - Default: {} - See mongoose documentation for more information
//  singleton: Boolean, // Optional - Default: false - If true, it will return only one document
//  links: Boolean // Optional - Default: false - If true, it will return the linked documents
// }
export default async function findOnCollection( {
	                                                filters,
	                                                projection,
	                                                options,
	                                                singleton,
	                                                enableLinks,
	                                                config
} ) {
	const {
		collection,
		links
	} = config;
	
	if ( !filters ) {
		return { error: 'No filters provided.' };
	}
	if ( _.isEmpty( filters ) ) {
		return { error: 'Empty filter provided.' };
	}
	
	let result = singleton
		? await collection
			.findOne( filters, projection, options )
			.exec()
		: await collection
			.find( filters, projection, options )
			.exec();
	
	if ( !result ) {
		return { error: 'Empty' }
	}
	
	if ( enableLinks && links ) {
		console.log('%c << 📌 enableLinks >>', 'color: white; font-size: 12px');
		console.log(enableLinks);
		console.log('%c << 📌 links >>', 'color: white; font-size: 12px');
		console.log(links);
		const linkedDocuments = await getLinkedDocuments( {
			links,
			result
		} );
		result = result.toObject();
		result = { ...result, ...linkedDocuments };
		return result;
	} else {
		return result;
	}
	
}

const getLinkedDocuments = async ( {
	links,
	result
} ) => {
	const linkedDocuments = {};
	await Promise.all( Object.entries( links )
	                         .map( async ( [ key, value ] ) => {
		                         linkedDocuments[ key ] = value.type === 'many'
			                         ? await value.collection
			                                      .find( { [ value.to ]: result[ value.from ] } )
			                                      .exec()
			                         : await value.collection
			                                      .findOne( { [ value.to ]: result[ value.from ] } )
			                                      .exec();
	                         } ) );
	return linkedDocuments;
};
