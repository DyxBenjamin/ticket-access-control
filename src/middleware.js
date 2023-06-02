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

        console.log('%c << 📌 re >>', 'color: white; font-size: 12px');
        console.log(req);

    },
    {
        callbacks: {
            authorized: ({req, token}) => {

                console.log('%c << 📌 req >>', 'color: white; font-size: 12px');
                console.log(req.body);

                console.log('%c << 📌 token >>', 'color: white; font-size: 12px');
                console.log(token);

                if (!token) return true;
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
