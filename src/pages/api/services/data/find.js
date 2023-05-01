import findOnCollection from "@api/data/actions/findOnCollection";
import RawData from "@api/data/models/RawDataModel";

export default function find({res, req}){
	return findOnCollection({res, req, collection: RawData})
}
