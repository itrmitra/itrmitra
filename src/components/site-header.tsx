import Link from "next/link"
import { useRouter } from "next/router"
import { MainNav } from "./main-nav"
import { buttonVariants } from "./ui/button"

import * as DropdownMenu from "@radix-ui/react-dropdown-menu"

import { Mail, Menu } from "lucide-react"
import WhatsappButton from "./whatsapp_button"
import { siteConfig } from "../data/siteconfig"
import { Logo } from "./logo"
import { cn } from "../lib/utils"

export function SiteHeader() {
    const router = useRouter()
    const tabs = siteConfig.tabs.slice()
    tabs.push({ title: "Useful Links", href: "/useful-links" })

    return (
        <header className="sticky top-0 z-50 border-b bg-gray-100/50 backdrop-blur-lg">
            <div className="flex h-20 items-center justify-between px-8 lg:container sm:px-16 lg:px-0">
                <Logo />
                <MainNav currentHref={router.pathname} />
                <div className="flex items-center gap-4">
                    <div className="hidden md:block">
                        <WhatsappButton />
                    </div>
                    <div className="hidden lg:block">
                        <Link
                            href="/#form-filing-section"
                            className={cn(buttonVariants(), "gap-2")}
                        >
                            Email Enquiry <Mail className="fill-white stroke-brand" />
                        </Link>
                    </div>
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
                                    {tabs.map((item) => (
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
