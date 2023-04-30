import '@/styles/globals.css'
import {ThemeProvider} from "@mui/material";
import defaultTheme from "@styles/themes/defaultTheme";

export default function App({ Component, pageProps }) {
  return (
      <ThemeProvider theme={defaultTheme}>
        <Component {...pageProps} />
      </ThemeProvider>
  )
}
