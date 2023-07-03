import { Head, Html, Main, NextScript } from "next/document"
import FloatingContactButtons from "../components/FloatingContactButtons"

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body className="min-h-screen bg-gray-100 text-dark-gray">
                <Main />
                <NextScript />
                <FloatingContactButtons />
            </body>
        </Html>
    )
}
