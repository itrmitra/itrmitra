import React from "react"
import { SiteHeader } from "./site-header"
import { SiteFooter } from "./site-footer"
import { cn } from "../lib/utils"

interface RootLayoutProps {
    children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
    return (
        <main className="flex flex-col">
            <SiteHeader />
            <section className="flex-1">{children}</section>
            <SiteFooter />
        </main>
    )
}
