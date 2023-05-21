import { cn } from "../../lib/utils"
import { buttonVariants } from "../ui/button"

export default function LandingSection() {
    return (
        <div className="py-8 md:py-0 md:min-h-screen flex flex-col-reverse md:flex-row items-center">
            <div className="flex-1">
                <div className="w-3/4 flex flex-col mx-auto text-center md:text-start items-center md:items-start">
                    <h1 className="font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight mb-4">
                        Simplify Your Tax Filing Experience with Expert Guidance
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg mb-8">
                        Maximize Returns, Minimize Stress: Your Trusted Tax Filing Partner
                    </p>
                    <button className={cn(buttonVariants())}>Write us a query</button>
                </div>
            </div>
            <div className="flex-1 mb-8 md:mb-0">
                <img src="/personal-finance.svg" className="h-52 md:h-auto" />
            </div>
        </div>
    )
}
