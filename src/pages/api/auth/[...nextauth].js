import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import MongooseAdapter from "@server/adapters/mongooseAdapter";
import {getStripeInstance} from "@api/v1/payments/checkout-sessions";


export const authOptions = {
	adapter: MongooseAdapter(),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: { strategy: "database" },
	callbacks: {
		async session({ session, token, user }) {
			// console.log('%c << 📌 data >>', 'color: white; font-size: 12px');
			// console.log(data);

			// console.log('%c << ▶️ session >>', 'color: white; font-size: 16px');
			//
			// console.log('%c << 📌 session >>', 'color: white; font-size: 12px');
			// console.log(session);
			//
			// console.log('%c << 📌 token >>', 'color: white; font-size: 12px');
			// console.log(token);
			//
			// console.log('%c << 📌 user >>', 'color: white; font-size: 12px');
			// console.log(user);

			// session.user = user.user
			return session
		}
	},
	events: {
		createUser: async ({ user }) => {
			const stripe = getStripeInstance();


			// await stripe.customers
			// 	.create({
			// 		email: user.email })
			// 	.then(async (customer) => {
			// 		return await MongooseAdapter().updateUser(user.id, {
			// 			stripeCustomerId: customer.id,
			// 		})
			// 	});
		},
	},
	pages: {
		signIn: "/auth/signin",
	},
}

export default NextAuth(authOptions)
