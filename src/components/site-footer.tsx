import Link from "next/link"
import { siteConfig } from "../data/siteconfig"

export function SiteFooter() {
    const tabs = siteConfig.tabs.slice()
    tabs.push(
        { title: "Team", href: "/team" },
        { title: "Privacy Policy", href: "/privacy-policy" },
        { title: "Terms and Conditions", href: "/terms-and-conditions" }
    )
    return (
        <footer className="bg-dark-gray px-8 py-12 text-white">
            <div className="md:mx-auto md:flex md:justify-center lg:w-1/2">
                <div className="grid justify-center gap-4 md:grid-cols-2">
                    <div>
                        <h1 className="mb-4 font-bold">Company</h1>
                        <div className="grid grid-cols-2 gap-2 md:grid-cols-1 md:gap-4">
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
                        <div className="space-y-4 text-sm">
                            <p>Phone: {process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}</p>
                            <p>Email: {process.env.NEXT_PUBLIC_EMAIL}</p>
                            <div className="md:w-52">
                                <b>Office 1 (Main Office):</b>
                                <p className="text-xs">
                                    Office no.5,Building no.2, new Laxmi narayan Park, Koregaon
                                    park, Pune- 411001
                                </p>
                            </div>
                            <div className="md:w-52">
                                <b>Office 2 (Branch):</b>
                                <p className="text-xs">
                                    ITR Mitra, Near Basant Kirana, New Mondha, Parbhani,
                                    Maharashtra 431401
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-8 md:mt-0">
                    <h1 className="text-2xl font-extrabold tracking-tighter">ITR Mitra</h1>
                </div>
            </div>
        </footer>
    )
}
