import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  return
  <ThemeProvider theme={theme}>
    <Component {...pageProps} />
  </ThemeProvider>
}
