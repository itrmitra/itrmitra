import Link from "next/link"
import { cn } from "../lib/utils"
import { siteConfig } from "../data/siteconfig"

export function MainNav({ currentHref }: { currentHref: string }) {
    const tabs = siteConfig.tabs.slice()
    tabs.push({ title: "Useful Links", href: "/useful-links" })

    return (
        <nav className="hidden md:flex items-center gap-6">
            {tabs.map((tab) => (
                <Link
                    key={tab.href}
                    href={tab.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-brand",
                        currentHref === tab.href
                            ? "text-brand font-semibold"
                            : "text-gray-600"
                    )}
                >
                    {tab.title}
                </Link>
            ))}
        </nav>
    )
}
