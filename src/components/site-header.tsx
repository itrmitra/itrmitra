import Link from "next/link"
import { useRouter } from "next/router"
import { cn } from "../lib/utils"
import { MainNav } from "./main-nav"
import { buttonVariants } from "./ui/button"

import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

import { Menu } from "lucide-react"

const items = [
    {
        title: "Home",
        href: "/",
    },
    {
        title: "Services",
        href: "/services",
    },
    {
        title: "Pricing",
        href: "/pricing",
    },
    {
        title: "About Us",
        href: "/about-us",
    },
]

export function SiteHeader() {
    const router = useRouter()
    return (
        <header className="sticky top-0 z-40 border-b backdrop-blur-xl">
            <div className="px-8 sm:px-16 lg:px-0 lg:container h-20 flex items-center justify-between">
                <h1 className="font-extrabold tracking-tighter text-2xl">ITR Mitra</h1>
                <MainNav items={items} currentHref={router.pathname} />
                <Link
                    href="/contact"
                    className={cn(buttonVariants({ variant: "outlined" }), "hidden md:flex")}
                >
                    Contact Us
                </Link>
                <div className="md:hidden">
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <button className={buttonVariants({ variant: "icon", size: "icon" })}>
                                <Menu />
                            </button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.Content
                                className="min-w-[8rem] z-40 relative rounded-md shadow-md py-1 overflow-hidden bg-gray-100"
                                side="top"
                                sideOffset={4}
                            >
                                <>
                                    {items.map((item) => (
                                        <DropdownMenu.Item
                                            key={item.href}
                                            asChild
                                            className="relative select-none outline-none transition-colors flex p-2 focus:bg-secondary focus:text-gray-100"
                                        >
                                            <Link href={item.href}>{item.title}</Link>
                                        </DropdownMenu.Item>
                                    ))}
                                    <DropdownMenu.Separator />
                                    <DropdownMenu.Item
                                        asChild
                                        className="relative gap-1 items-center select-none outline-none transition-colors flex p-2 focus:bg-secondary focus:text-gray-100"
                                    >
                                        <Link href="/contact">Contact Us</Link>
                                    </DropdownMenu.Item>
                                </>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                </div>
            </div>
        </header>
    )
}
