import {Head, Html, Main, NextScript} from 'next/document'
import {ToastContainer} from "react-toastify";
import Script from "next/script";

export default function Document() {
    return (
        <Html lang="en">
            <Head/>
            <body>
            <ToastContainer/>
            <Main/>
            <NextScript/>
            <Script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript"></Script>
            </body>
        </Html>
    )
}
