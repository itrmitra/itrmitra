import Link from "next/link"
import { siteConfig } from "../data/siteconfig"

export function SiteFooter() {
    const tabs = siteConfig.tabs.slice()
    tabs.push(
        { title: "Team", href: "/team" },
        { title: "Privacy Policy", href: "/privary-policy" }
    )
    return (
        <footer className="bg-dark-gray px-8 py-12 text-white">
            <div className="flex justify-center gap-16 md:flex-row">
                <div>
                    <h1 className="mb-4 text-lg font-bold">Company</h1>
                    <div className="grid grid-cols-1 gap-2 md:grid-cols-2">
                        {tabs.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="text-sm underline-offset-2 hover:underline"
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="justify-center md:flex-col">
                    <h1 className="text-2xl font-extrabold tracking-tighter">ITR Mitra</h1>
                </div>
            </div>
        </footer>
    )
}
