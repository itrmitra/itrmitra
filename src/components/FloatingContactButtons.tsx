import Link from "next/link"
import { Mail } from "lucide-react"
import { cn } from "../lib/utils"
import { buttonVariants } from "./ui/button"

export default function FloatingContactButtons() {
    return (
        <div className="fixed bottom-0 right-0 z-50 mb-4 mr-4 flex flex-col items-center gap-4 md:hidden">
            <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
                role="button"
                aria-label="Connect on Whatsapp button"
                target="_blank"
                className={cn(
                    buttonVariants({ variant: "filled" }),
                    "text-primary z-0 h-12 w-12 gap-2 bg-white p-2 shadow-lg"
                )}
            >
                <img src="/whatsapp.svg" className="h-8 w-8" alt="Whatsapp Logo" />
            </a>
            <Link
                href="/#form-filing-section"
                className={cn(
                    buttonVariants({ variant: "filled" }),
                    "z-0 h-12 w-12 gap-2 bg-brand p-2 shadow-lg"
                )}
            >
                <Mail className="fill-white stroke-brand" />
            </Link>
        </div>
    )
}
