import Link from "next/link"
import { cn } from "../lib/utils"

export interface NavItem {
    title: string
    href: string
}

interface MainNavProps {
    items: NavItem[]
    currentHref: string
}

export function MainNav({ items, currentHref }: MainNavProps) {
    return (
        <nav className="hidden md:flex items-center justify-evenly space-x-12 px-8 text-sm">
            <>
                {items.map((item) => (
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
