import Link from "next/link"
import { cn } from "../lib/utils"
import { siteConfig } from "../data/siteconfig"

interface MainNavProps {
    currentHref: string
}

export function MainNav({ currentHref }: MainNavProps) {
    return (
        <nav className="hidden items-center justify-evenly space-x-12 px-8 text-sm md:flex">
            <>
                {siteConfig.tabs.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={cn(currentHref == item.href && "font-bold text-brand")}
                    >
                        {item.title}
                    </Link>
                ))}
            </>
        </nav>
    )
}
