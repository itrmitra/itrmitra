import Link from "next/link"
import { useRouter } from "next/router"
import { MainNav } from "./main-nav"
import { buttonVariants } from "./ui/button"

import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

import { Menu } from "lucide-react"
import WhatsappButton from "./whatsapp_button"

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
        title: "About Us",
        href: "/about-us",
    },
]

export function SiteHeader() {
    const router = useRouter()
    return (
        <header className="sticky top-0 z-50 border-b backdrop-blur-3xl bg-gray-100/50">
            <div className="px-8 sm:px-16 lg:px-0 lg:container h-20 flex items-center justify-between">
                <Link href="/">
                    <h1 className="font-extrabold tracking-tighter text-2xl">ITR Mitra</h1>
                </Link>
                <MainNav items={items} currentHref={router.pathname} />
                <div className="hidden md:block">
                    <WhatsappButton />
                </div>
                <div className="md:hidden">
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <button className={buttonVariants({ variant: "icon", size: "icon" })}>
                                <Menu />
                            </button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.Content
                                className="min-w-[8rem] z-50  backdrop-blur-xl bg-gray-100/50 relative rounded-md shadow-md py-1 overflow-hidden text-sm sm:text-base"
                                side="top"
                                sideOffset={4}
                            >
                                <>
                                    {items.map((item) => (
                                        <DropdownMenu.Item
                                            key={item.href}
                                            asChild
                                            className="relative select-none outline-none transition-colors flex p-2 focus:bg-brand focus:text-white"
                                        >
                                            <Link href={item.href}>{item.title}</Link>
                                        </DropdownMenu.Item>
                                    ))}
                                </>
                            </DropdownMenu.Content>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Root>
                </div>
            </div>
        </header>
    )
}
