import { withAuth } from "next-auth/middleware";
import _ from "lodash";

const PrivateRoutes = [
    {
        path: "/app",
        roles: 'all',
        exact: false,
    },

    ]

export default withAuth(
    function middleware(req) {
    },
    {
        callbacks: {
            authorized: ({req, token}) => {
                if (!token) return false;
                const { pathname } = req.nextUrl;
                const route = PrivateRoutes.find((route) => {
                    if (route.exact) return route.path === pathname;
                    return pathname.includes(route.path);
                });

                if (route) {
                    if (route.roles === 'all') return true;
                    const { roles } = token.user;
                    if (!roles || roles.length === 0) return false;
                    if (_.intersection(roles, route.roles).length >= 0) {
                        return true;
                    }
                }
                return false
            },
        },
    }
)

export const config = { matcher: ["/app/:path*"] }
