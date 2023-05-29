import { CheckCircle, ArrowRight } from "lucide-react"
import { buttonVariants } from "../ui/button"
import { cn } from "../../lib/utils"

export default function AboutUsSection() {
    return (
        <div className="flex flex-col items-center py-8 md:min-h-screen  md:flex-row md:py-0">
            <div className="mb-8 flex-1 md:mb-0">
                <img src="/meet-the-team.svg" className="h-52 md:h-auto" alt="Teamwork" />
            </div>
            <div className="flex-1">
                <div className="mx-auto flex w-3/4 flex-col items-center md:items-start">
                    <h2 className="mb-4 text-center text-sm md:text-start lg:text-lg">ABOUT US</h2>
                    <h1 className="mb-6 text-center text-4xl font-extrabold leading-tight tracking-tighter md:text-start md:text-5xl lg:text-6xl">
                        We are here to make your tax filing process easier!
                    </h1>
                    <ul className="mb-8 space-y-4 text-sm md:text-base lg:text-lg">
                        <li className="flex items-start gap-2">
                            <div className="min-w-8 h-8">
                                <CheckCircle className="text-brand md:h-6 md:w-6" />
                            </div>
                            <span className="inline-block align-text-top">
                                Team of experts in Indian Tax Laws
                            </span>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="min-w-8 h-8">
                                <CheckCircle className="text-brand md:h-6 md:w-6" />
                            </div>
                            Your data is safe with us
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="min-w-8 h-8">
                                <CheckCircle className="text-brand md:h-6 md:w-6" />
                            </div>
                            Client satisfaction is our top priority
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
