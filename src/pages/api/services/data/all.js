import RawData from "@api/data/models/RawDataModel";

export default function all({}){
	return RawData.find({}).exec();
}
