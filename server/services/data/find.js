import findOnCollection from "@server/data/actions/findOnCollection";
import RawData from "@server/data/models/RawDataModel";

export default function find({res, req}){
	return findOnCollection({res, req, collection: RawData})
}
