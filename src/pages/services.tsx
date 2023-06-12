import { CheckCircle2 } from "lucide-react"
import { services } from "../data/services"
import { cn } from "../lib/utils"

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
                <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                    Services
                </h1>
                <p className="mb-12 text-sm md:w-1/2 md:text-base lg:text-lg">
                    Our team of experts is here to help to save time, money and hassle. Our six
                    services offer a comprehensive solution for your needs.
                </p>
                <div className="grid grid-cols-1 gap-6 text-left md:grid-cols-2 lg:grid-cols-3">
                    {services.map((item) => (
                        <ServiceCard {...item} key={item.name} />
                    ))}
                </div>
            </div>
        </>
    )
}

function ServiceCard({
    name,
    usefulFor,
    includes,
}: {
    name: string
    usefulFor: string[]
    includes?: string[]
}) {
    return (
        <div className="rounded-xl bg-white p-8 shadow-lg">
            <h1 className="mb-4 text-xl font-bold md:text-2xl">{name}</h1>
            <div className="mb-4 space-y-2">
                <p className="mb-4 text-sm font-medium md:text-base">Useful For:</p>
                <ul>
                    {usefulFor.map((item, idx) => (
                        <li className="ml-4 flex items-start gap-2 text-sm md:text-base">
                            <div className="min-w-8 h-8">
                                <CheckCircle2 className="fill-brand text-white md:h-6 md:w-6" />
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
        </div>
    )
}
