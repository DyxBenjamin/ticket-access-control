import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import MongooseAdapter from "@server/adapters/mongooseAdapter";
import _ from "lodash"


export const authOptions = {
	adapter: MongooseAdapter(),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID,
			clientSecret: process.env.GITHUB_SECRET,
		}),
	],
	secret: process.env.NEXTAUTH_SECRET,
	session: { strategy: "jwt" },
	callbacks: {
		async jwt({token, account}) {
			if (account?.provider === 'github' && account?.access_token) {
				token.accessToken = account.access_token
			}
			const user = await MongooseAdapter().getUserByAccount(account)
			if (user) {
				token.user = _.pick(user, ["_id", "profile", "roles", "status"])
			}
			return token
		},
	},
	pages: {
		signIn: "/auth/signin",
	},
}

export default NextAuth(authOptions)
