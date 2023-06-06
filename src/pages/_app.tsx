import "@/styles/globals.css"
import type { AppProps } from "next/app"
import RootLayout from "../components/root-layout"
import { Analytics } from "@vercel/analytics/react"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`
                html {
                    font-family: ${inter.style.fontFamily};
                }
            `}</style>
            <RootLayout>
                <Component {...pageProps} />
            </RootLayout>
            <Analytics />
        </>
    )
}
