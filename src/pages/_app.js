import '@/styles/globals.css'
import {ThemeProvider} from "@mui/material";
import defaultTheme from "@styles/themes/defaultTheme";

export default function App({Component, pageProps}) {

	const getLayout = Component.getLayout || ((page) => page)

	return (
		<ThemeProvider theme={defaultTheme}>
			{ getLayout(<Component {...pageProps} />) }
		</ThemeProvider>
	)
}
