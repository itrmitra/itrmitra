import { CheckCircle, ArrowRight } from "lucide-react"
import { buttonVariants } from "../ui/button"
import { cn } from "../../lib/utils"

export default function AboutUsSection() {
    return (
        <div className="py-8 md:py-0 md:min-h-screen flex flex-col  md:flex-row items-center">
            <div className="flex-1 mb-8 md:mb-0">
                <img src="/meet-the-team.svg" className="h-52 md:h-auto" />
            </div>
            <div className="flex-1">
                <div className="w-3/4 flex flex-col mx-auto items-center md:items-start">
                    <h2 className="text-sm lg:text-lg mb-4 text-center md:text-start">ABOUT US</h2>
                    <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight mb-6 text-center md:text-start">
                        We are here to make your tax filing process easier!
                    </h1>
                    <ul className="text-sm md:text-base lg:text-lg mb-8 space-y-4">
                        <li className="flex items-start gap-2">
                            <CheckCircle size={24} />
                            Quality and on-time services.
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle size={24} />
                            Expert team members with industry experience.
                        </li>
                        <li className="flex items-start gap-2">
                            <CheckCircle size={24} />
                            Secure processing of your documents.
                        </li>
                    </ul>
                    <button className={cn(buttonVariants(), "gap-2")}>
                        Know More <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    )
}
