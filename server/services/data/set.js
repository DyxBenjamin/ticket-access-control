import RawData from "@server/data/models/RawDataModel";
import saveOnCollection from "@server/data/actions/saveOnCollection";

export default function set({req, res}){
	 return saveOnCollection({req, res, collection: RawData})
}
