import "@/styles/globals.css"
import type { AppProps } from "next/app"
import RootLayout from "../components/root-layout"
import { Analytics } from "@vercel/analytics/react"

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
            <Analytics />
        </>
    )
}
