import RawData from "@api/data/models/RawDataModel";
import saveOnCollection from "@api/data/actions/saveOnCollection";

export default function set({req, res}){
	 return saveOnCollection({req, res, collection: RawData})
}
