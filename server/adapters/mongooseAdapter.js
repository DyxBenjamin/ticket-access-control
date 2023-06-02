import Users from "@server/data/models/UserModel";
import connectMongo from "@server/data/Database";
import Accounts from "@server/data/models/AccountModel";
import Sessions from "@server/data/models/SessionModel";
import VerificationTokens from "@server/data/models/VerificationTokenModel";

export default function MongooseAdapter() {
	return {
		async createUser(data) {
			console.log('%c << ▶️ createUser >>', 'color: white; font-size: 16px');

			await connectMongo();
			const payload = {
				profile: {
					image: data.image,
					name: data.name,
				},
				emails: [
					{
						address: data.email,
						verified: data.emailVerified || false,
					}
				]
			}
			return Users.create(payload);
		},
		async getUser(id) {
			console.log('%c << ▶️ getUser >>', 'color: white; font-size: 16px');

			await connectMongo();
			return Users.findById(id);
		},
		async getUserByEmail(email) {
			console.log('%c << ▶️ getUserByEmail >>', 'color: white; font-size: 16px');

			await connectMongo();
			return Users.findOne({email});
		},
		async getUserByAccount(data) {
			const {providerAccountId, provider} = data || {};
			await connectMongo();
			const account = await Accounts.findOne({providerAccountId, provider});
			if (!account) return null;
			return Users.findById(account.userId);
		},
		async updateUser(data) {
			const {id, ...payload} = data;
			await connectMongo();
			return Users.findByIdAndUpdate(id, payload, {
				new: true,
				runValidators: true,
				returnDocument: "after",
			});
		},
		async deleteUser(userId) {
			await connectMongo();
			return Users.findByIdAndDelete(userId);
		},
		async linkAccount(data) {
			console.log('%c << ▶️ linkAccount >>', 'color: white; font-size: 16px');

			await connectMongo();
			return await Accounts.create(data);
		},
		async unlinkAccount({providerAccountId, provider}) {
			await connectMongo();
			const account = await Accounts.findOneAndDelete({
				providerAccountId,
				provider,
			});
			if (account) return account;
		},
		async createSession(data) {
			console.log('%c << ▶️ createSession >>', 'color: white; font-size: 16px');

			console.log('%c << 📌 data >>', 'color: white; font-size: 12px');
			console.log(data);
			await connectMongo();
			return Sessions.create(data);
		},
		async getSessionAndUser(sessionToken) {
			console.log('%c << ▶️ getSessionAndUser >>', 'color: white; font-size: 16px');

			await connectMongo();
			const session = await Sessions.findOne({sessionToken});
			console.log('%c << 📌 session >>', 'color: white; font-size: 12px');
			console.log(session);

			if (!session) return null;
			const user = await Users.findById(session.userId);
			if (!user) return null;
			return {session, user };
		},
		async updateSession(data) {
			console.log('%c << ▶️ updateSession >>', 'color: white; font-size: 16px');

			const {id, ...restData} = data;
			await connectMongo();
			return Sessions.findByIdAndUpdate(id, restData, {
				new: true,
				runValidators: true,
			});
		},
		async deleteSession(sessionToken) {
			await connectMongo();
			return Sessions.findOneAndDelete({sessionToken});
		},
		async createVerificationToken(data) {
			console.log('%c << ▶️ createVerificationToken >>', 'color: white; font-size: 16px');

			await connectMongo();
			return VerificationTokens.create(data);
		},
		async useVerificationToken(data) {
			console.log('%c << ▶️ useVerificationToken >>', 'color: white; font-size: 16px');

			const {identifier, token} = data;
			await connectMongo();
			return VerificationTokens.findOne({
				identifier,
				token,
			});
		},
	}
}
