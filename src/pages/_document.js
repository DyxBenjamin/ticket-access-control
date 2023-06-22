import {Head, Html, Main, NextScript} from 'next/document'
import {ToastContainer} from "react-toastify";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
            </Head>
            <body>
            <ToastContainer/>
            <Main/>
            <NextScript/>
            <script src="https://upload-widget.cloudinary.com/global/all.js" type="text/javascript" async/>
            </body>
        </Html>
    )
}
