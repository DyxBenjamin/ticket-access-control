import Serverless from "@srclib/devclusters/ServerlessConector";

export default async function fetchStaticData({
	                                              collection,
	                                              singleton,
	                                              filters,
	                                              projection,
	                                              settings,
	                                              links
                                              })
{
	try {
		return await Serverless.fetchStaticData({collection, singleton, filters, projection, settings, links});
	} catch (err) {
		console.error(err);
		return null;
	}
}
