import Link from "next/link"
import { siteConfig } from "../data/siteconfig"
import { Logo } from "./logo"

export function SiteFooter() {
    const tabs = siteConfig.tabs.slice()
    tabs.push(
        { title: "Team", href: "/team" },
        { title: "Useful Links", href: "/useful-links" },
        { title: "Privacy Policy", href: "/privacy-policy" },
        { title: "Terms and Conditions", href: "/terms-and-conditions" }
    )
    return (
        <footer className="bg-dark-gray px-8 py-12 text-white">
            <div className="text-center">
                <div className="mb-12 text-left md:mx-auto md:flex md:items-start md:justify-center">
                    <div className="mb-12 grid justify-center gap-4 md:mb-0 md:grid-cols-2">
                        <div>
                            <h1 className="mb-4 font-bold">Company</h1>
                            <div className="grid grid-cols-2 gap-2 md:grid-cols-2 md:gap-4">
                                {tabs.map((item) => (
                                    <Link
                                        key={item.href}
                                        href={item.href}
                                        className="block py-1 text-sm underline-offset-2 hover:underline md:py-0"
                                    >
                                        {item.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="mt-8 md:mt-0">
                            <h1 className="mb-4 font-bold">Contact Us</h1>
                            <div className="grid grid-cols-2 gap-6 text-sm">
                                <p>
                                    Phone: <br />
                                    +91 {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}
                                </p>
                                <p>
                                    Email: <br />
                                    {process.env.NEXT_PUBLIC_EMAIL}
                                </p>
                                <div className="md:w-52">
                                    <b>Office 1 (Main Office):</b>
                                    <p className="text-xs">
                                        Office No.5, Building No.2, New Laxmi Narayan Park, <br />
                                        Koregaon Park, Pune - 411001
                                    </p>
                                </div>
                                <div className="md:w-52">
                                    <b>Office 2 (Branch):</b>
                                    <p className="text-xs">
                                        ITR Mitra, Near Basant Kirana,
                                        <br /> New Mondha, Parbhani, Maharashtra - 431401
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Logo />
                </div>
                <p className="mx-auto text-xs lg:w-1/2">
                    Copyright © 2023 ITR Mitra. All rights reserved
                </p>
            </div>
        </footer>
    )
}
