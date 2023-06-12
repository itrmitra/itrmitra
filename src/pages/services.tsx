import { CheckCircle2, IndianRupee } from "lucide-react"
import { services } from "../data/services"
import { cn } from "../lib/utils"
import Link from "next/link"
import { buttonVariants } from "../components/ui/button"

export default function Services() {
    return (
        <>
            <title>ITR Mitra | Services</title>
            <meta
                title="ITR Mitra | Services"
                name="description"
                content="ITR Mitra provides six types of services including Capital Gain Plan, Future & Options Plan and NRI having Foreign Income."
            />
            <div className="px-8 py-12 text-center md:min-h-screen md:text-left">
                <div>
                    <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                        Services
                    </h1>
                    <p className="mb-12 text-sm md:w-1/2 md:text-base lg:text-lg">
                        Our team of experts is here to help to save time, money and hassle. Our six
                        services offer a comprehensive solution for your needs.
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
                    {services.map((item) => (
                        <ServiceCard {...item} key={item.name} />
                    ))}
                    <div className="flex flex-col items-center justify-center gap-8 rounded-xl bg-green-500 p-8 text-center text-white shadow-lg">
                        <h1 className="mb-4 text-3xl font-bold tracking-tight lg:text-4xl">
                            For additional <br />
                            discount and offers <br />
                            contact our team
                        </h1>
                        <Link
                            href="/#form-filing-section"
                            className={cn(buttonVariants(), "bg-white text-primary")}
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
}: {
    highlight?: boolean
    name: string
    priceBefore: string
    priceAfter: string
    usefulFor: string[]
    includes?: string[]
    extraInfo?: string[]
}) {
    return (
        <div
            className={cn("rounded-xl bg-white p-8 shadow-lg", highlight && "bg-brand text-white")}
        >
            <p className="text-sm">Annual Pricing</p>
            <div className="mb-2 flex items-center gap-4">
                <div className={cn("flex items-center text-brand", highlight && "text-white")}>
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
                        <li className="ml-4 flex items-start gap-2 text-sm md:text-base">
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
                            <li className="ml-4 flex items-start gap-2 text-sm md:text-base">
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
                        <li className={cn("text-sm", highlight && "text-white")}>* {item}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}
