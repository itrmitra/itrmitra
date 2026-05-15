import { CheckCircle2, IndianRupee, MessageCircle, Mail } from "lucide-react"
import { services } from "../data/services"
import { cn } from "../lib/utils"
import Link from "next/link"
import { buttonVariants } from "../components/ui/button"
import { headingVariants } from "../components/ui/heading"
import CustomHead from "../components/custom-head"
import { siteConfig } from "../data/siteconfig"
import { useState } from "react"

export default function Services() {
    const [hoveredCard, setHoveredCard] = useState<string | null>(null)

    return (
        <>
            <CustomHead {...siteConfig.pageInfo.services} />
            <div className="px-8 py-12 text-center md:min-h-screen md:text-left">
                <div>
                    <h1 className={cn(headingVariants(), "mb-4")}>Services</h1>
                    <p
                        className={cn(
                            headingVariants({ variant: "subtext", size: "subtext" }),
                            "mb-12 lg"
                        )}
                    >
                        Our <b>Team of Experts</b> is dedicated to saving your Time⏳, Money💰, and Hassle🛡️. We provide an <b>end-to-end range of services</b> to ensure a complete solution for your requirements.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
                    {services.map((item) => (
                        <ServiceCard
                            {...item}
                            key={item.name}
                            isHovered={hoveredCard === item.name}
                            isBlurred={hoveredCard !== null && hoveredCard !== item.name}
                            onMouseEnter={() => setHoveredCard(item.name)}
                            onMouseLeave={() => setHoveredCard(null)}
                        />
                    ))}
                </div>

                <div className="mt-6 flex justify-center">
                    <div className="flex w-full max-w-md flex-col items-center justify-center gap-8 rounded-xl bg-green-500 p-8 text-center text-white shadow-lg">
                        <h1 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
                             Have 10+ ITRs..? <br />
                            You're qualifing for our bulk discount.. <br />
                            <br/>
                            Let's talk..!
                        </h1>

                        <Link
                            href="/#form-filing-section"
                            className={cn(buttonVariants(), "bg-white text-dark-gray")}
                        >
                            Connect With Our Team
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

function ServiceCard({
    name,
    usefulFor,
    includes,
    priceBefore,
    priceAfter,
    extraInfo,
    highlight,
    expired,
    isHovered,
    isBlurred,
    onMouseEnter,
    onMouseLeave,
}: {
    expired?: boolean
    highlight?: boolean
    name: string
    priceBefore: string
    priceAfter: string
    usefulFor: string[]
    includes?: string[]
    extraInfo?: string[]
    isHovered: boolean
    isBlurred: boolean
    onMouseEnter: () => void
    onMouseLeave: () => void
}) {
    const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER
    const whatsappMessage = encodeURIComponent(
        `Hi, I'm interested in the *${name}* plan. Please share more details.`
    )
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

    return (
        <div
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{
                transition: "filter 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease",
                filter: isBlurred ? "blur(3px) brightness(0.75)" : "none",
                transform: isHovered ? "translateY(-6px) scale(1.02)" : "none",
                boxShadow: isHovered
                    ? "0 20px 40px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.6)"
                    : undefined,
                zIndex: isHovered ? 10 : 1,
                position: "relative",
            }}
            className={cn(
                "rounded-xl bg-white p-8 shadow-lg",
                highlight && "bg-brand text-white"
            )}
        >
            {expired && (
                <div className="mb-4 rounded-md bg-red-500/20 p-2 text-center font-bold text-red-500">
                    Plan is expired
                </div>
            )}
            <p className="text-sm">Annual Pricing</p>
            <div className="mb-2 flex items-center gap-4">
                <div
                    className={cn("-ml-1 flex items-center text-brand", highlight && "text-white")}
                >
                    <IndianRupee size={30} className="h-8 md:h-12" strokeWidth={3} />
                    <span className="text-4xl font-extrabold">{priceAfter}</span>
                </div>
                <div className="flex items-center">
                    <IndianRupee size={28} />
                    <span className="text-3xl line-through">{priceBefore}</span>
                </div>
            </div>
            <h1 className="mb-4 text-xl font-bold md:text-2xl">{name}</h1>
            <div className="mb-4 space-y-2">
                <p className="mb-4 text-sm font-medium md:text-base">Useful For:</p>
                <ul>
                    {usefulFor.map((item, idx) => (
                        <li className="ml-4 flex items-start gap-2 text-sm md:text-base" key={item}>
                            <div className="min-w-8 h-8">
                                <CheckCircle2
                                    className={cn(
                                        "fill-brand text-white md:h-6 md:w-6",
                                        highlight && "fill-white text-brand"
                                    )}
                                />
                            </div>
                            <span className={cn()}>{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
            {includes && (
                <div className="space-y-2">
                    <p className="mb-4 text-sm font-medium md:text-base">Includes:</p>
                    <ul>
                        {includes.map((item, idx) => (
                            <li
                                className="ml-4 flex items-start gap-2 text-sm md:text-base"
                                key={item}
                            >
                                <div className="min-w-8 h-8">
                                    <CheckCircle2 className="fill-brand text-white md:h-6 md:w-6" />
                                </div>
                                <span className={cn()}>{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {extraInfo && (
                <ul className="mt-4 space-y-2">
                    {extraInfo.map((item) => (
                        <li className={cn("text-sm", highlight && "text-white")} key={item}>
                            * {item}
                        </li>
                    ))}
                </ul>
            )}

            {/* Send Enquiry Button — appears on hover */}
            <div
                style={{
                    transition: "opacity 0.3s ease, transform 0.3s ease",
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? "translateY(0)" : "translateY(8px)",
                    pointerEvents: isHovered ? "auto" : "none",
                }}
                className="mt-6 flex flex-col gap-3"
            >
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(
                        "flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-white",
                        "bg-green-500 hover:bg-green-600 active:scale-95",
                        "transition-colors duration-200"
                    )}
                >
                    <MessageCircle size={18} />
                    WhatsApp Enquiry
                    <img src="/whatsapp.svg" className="h-5 w-5" alt="WhatsApp" />
                </a>
                <Link
                    href={{ pathname: "/", query: { plan: name }, hash: "form-filing-section" }}
                    className={cn(
                        "flex w-full items-center justify-center gap-2 rounded-lg px-4 py-3 text-sm font-semibold text-brand",
                        "border-2 border-brand bg-white hover:bg-brand hover:text-white active:scale-95",
                        "transition-colors duration-200"
                    )}
                >
                    <Mail size={18} />
                    Email Enquiry
                </Link>
            </div>
        </div>
    )
}
