import RawData from "@server/data/models/RawDataModel";

export default function all({}){
	return RawData.find({}).exec();
}
