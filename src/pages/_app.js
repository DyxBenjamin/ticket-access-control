import '@/styles/globals.css'
import {ThemeProvider} from "@mui/material";
import defaultTheme from "@styles/themes/defaultTheme";
import {SessionProvider} from "next-auth/react";


export default function App({Component, pageProps}) {
	const getLayout = Component.getLayout || ((page) => page)
	return (
		<ThemeProvider theme={defaultTheme}>
			<SessionProvider session={pageProps.session}>
				{ getLayout(<Component {...pageProps} />) }
			</SessionProvider>
		</ThemeProvider>
	)
}
