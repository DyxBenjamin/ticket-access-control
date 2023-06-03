import moment from "moment";

export default async function deleteOnCollection({collection, selector, singleton, logical}) {
	if (logical) {
		const dateIn30Days = moment().add(30, 'days');
		const dateInMilliseconds = dateIn30Days.valueOf();
		const strategy = singleton ? 'findOneAndUpdate' : 'updateMany';
		return await collection[strategy](selector, {$set: {deleteAt: dateInMilliseconds}});
	} else {
		const strategy = singleton ? 'findOneAndDelete' : 'deleteMany';
		return await collection[strategy](selector);
	}
}
