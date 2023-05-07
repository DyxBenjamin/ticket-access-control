import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import MongooseAdapter from "@server/adapters/mongooseAdapter";

export const authOptions = {
	adapter: MongooseAdapter(),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
	pages: {
		signIn: "/auth/signin",
	},
}

export default NextAuth(authOptions)
