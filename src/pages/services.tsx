import { CheckCircle, CheckCircle2 } from "lucide-react"
import { services } from "../data/services"
import { cn } from "../lib/utils"

export default function Services() {
    return (
        <>
            <title>ITR Mitra | Services</title>
            <div className="min-h-screen px-8 py-12">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {services.map((item) => ServiceCard({ ...item }))}
                </div>
            </div>
        </>
    )
}

function ServiceCard({
    name,
    features,
    mainFeatures,
}: {
    name: string
    mainFeatures: number[]
    features: string[]
}) {
    return (
        <div className="rounded-lg bg-white p-8 shadow-lg shadow-gray-200">
            <h3 className="mb-8 text-xl font-bold md:text-2xl">{name}</h3>
            <div className="space-y-2">
                {features.map((item, idx) => (
                    <div className="flex items-start gap-2 text-sm md:text-base">
                        <div className="min-w-8 h-8">
                            <CheckCircle2 className="fill-brand text-white md:h-6 md:w-6" />
                        </div>
                        <div className={cn(mainFeatures.indexOf(idx) != -1 && "font-semibold")}>
                            {item}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
