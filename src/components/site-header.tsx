import Link from "next/link"
import { useRouter } from "next/router"
import { MainNav } from "./main-nav"
import { buttonVariants } from "./ui/button"

import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

import { Menu } from "lucide-react"
import WhatsappButton from "./whatsapp_button"
import { siteConfig } from "../data/siteconfig"

export function SiteHeader() {
    const router = useRouter()
    return (
        <header className="sticky top-0 z-50 border-b bg-gray-100/50 backdrop-blur-lg">
            <div className="flex h-20 items-center justify-between px-8 lg:container sm:px-16 lg:px-0">
                <Link href="/">
                    <h1 className="text-2xl font-extrabold tracking-tighter">ITR Mitra</h1>
                </Link>
                <MainNav currentHref={router.pathname} />
                <div className="hidden md:block">
                    <WhatsappButton />
                </div>
                <div className="md:hidden">
                    <DropdownMenu.Root>
                        <DropdownMenu.Trigger asChild>
                            <button
                                className={buttonVariants({ variant: "icon", size: "icon" })}
                                aria-label="Menu Button"
                            >
                                <Menu />
                            </button>
                        </DropdownMenu.Trigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.Content
                                className="relative z-50  min-w-[8rem] overflow-hidden rounded-md bg-gray-100/50 py-1 text-sm shadow-md backdrop-blur-xl sm:text-base"
                                side="top"
                                sideOffset={4}
                            >
                                <>
                                    {siteConfig.tabs.map((item) => (
                                        <DropdownMenu.Item
                                            key={item.href}
                                            asChild
                                            className="relative flex select-none p-2 outline-none transition-colors focus:bg-brand focus:text-white"
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
