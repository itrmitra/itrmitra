import { CheckCircle2, IndianRupee } from "lucide-react"
import { cn } from "../../lib/utils"
import { services } from "../../data/services"
import Link from "next/link"
import { buttonVariants } from "../ui/button"

export default function OfferSection() {
    return (
        <div className="flex flex-col items-stretch border-b px-8 py-12 md:min-h-screen md:flex-row md:items-center md:py-0">
            <div className="mb-8 flex-1">
                <img
                    src="/discount-announcement.svg"
                    className="mx-auto h-52 -scale-x-100 md:h-auto md:w-auto"
                    alt="Discount Announcement"
                />
            </div>
            <div className="mb-8 flex flex-1 flex-col justify-center text-center md:mb-0">
                <h1 className="mb-4 animate-bounce text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl lg:text-5xl">
                    <span className="text-brand">LAUNCHING</span> OFFER
                </h1>
                <h1 className="mb-8 text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                    <span className="text-brand">100% DISCOUNT</span> <br />
                    <span>ON OUR BASIC PLAN</span>
                </h1>
                <ServiceCard {...services[0]} />
            </div>
        </div>
    )
}

function ServiceCard({
    name,
    usefulFor,
    priceBefore,
    priceAfter,
    extraInfo,
    highlight,
}: {
    highlight?: boolean
    name: string
    priceBefore: string
    priceAfter: string
    usefulFor: string[]
    extraInfo?: string[]
}) {
    return (
        <div
            className={cn(
                "flex flex-col items-stretch rounded-xl bg-white p-8 shadow-lg lg:flex-row",
                highlight && "bg-brand text-white"
            )}
        >
            <div className="flex flex-1 flex-col justify-center text-left lg:items-center lg:text-center">
                <p className="mb-1 text-sm lg:text-base">Annual Pricing</p>
                <div className="mb-2 flex items-center gap-4">
                    <div className={cn("flex items-center text-brand", highlight && "text-white")}>
                        <IndianRupee size={30} className="block h-8 lg:h-20" strokeWidth={3} />
                        <span className="text-4xl font-extrabold lg:text-6xl">{priceAfter}</span>
                    </div>
                    <div className="flex items-center">
                        <IndianRupee size={28} />
                        <span className="text-3xl line-through">{priceBefore}</span>
                    </div>
                </div>
                <h1 className="mb-4 text-3xl font-bold lg:text-5xl">{name}</h1>
            </div>
            <div className="mb-4 text-left">
                <p className="mb-4 text-sm font-medium md:text-base">Useful For:</p>
                <ul>
                    {usefulFor.map((item, idx) => (
                        <li key={idx} className="ml-4 flex items-start gap-2 text-sm md:text-base">
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
                {extraInfo && (
                    <div className="mb-8 mt-4">
                        <ul className="space-y-2">
                            {extraInfo.map((item) => (
                                <li key={item} className={cn("text-sm", highlight && "text-white")}>
                                    * {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <Link
                    href="/services"
                    className={cn(buttonVariants(), "mt-4 w-full bg-white text-brand")}
                >
                    Visit Services
                </Link>
            </div>
        </div>
    )
}
