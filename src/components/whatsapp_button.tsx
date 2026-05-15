import React from "react"
import { cn } from "../lib/utils"
import { buttonVariants } from "./ui/button"

const WhatsappButton = ({ className }: { className?: string }) => {
    const whatsappMessage = encodeURIComponent(
        `Hello ITR Mitra, 
        I am intrested in your services. Can you please assist me for this.
        Thank You.`
    )
    const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${whatsappMessage}`

    return (
        <a
            href={whatsappUrl}
            role="button"
            aria-label="Connect on Whatsapp button"
            target="_blank"
            className={cn(
                buttonVariants({ variant: "filled" }),
                "z-0 gap-2 bg-white text-primary",
                className
            )}
        >
            Connect on
            <img src="/whatsapp.svg" className="h-7 w-7" alt="Whatsapp Logo" />
        </a>
    )
}
const WhatsappNoticeButton = ({ className }: { className?: string }) => {
    const whatsappMessage = encodeURIComponent(
        `Hello ITR Mitra, 
        I have received a Notice from Income Tax Department, Please assist me for this.
        Thank You.`
    )
    const whatsappUrl = `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}?text=${whatsappMessage}`

    return (
        <a
            href={whatsappUrl}
            role="button"
            aria-label="Connect on Whatsapp button"
            target="_blank"
            className={cn(
                buttonVariants({ variant: "filled" }),
                "z-0 gap-2 bg-white text-primary",
                className
            )}
        >
            Connect on
            <img src="/whatsapp.svg" className="h-7 w-7" alt="Whatsapp Logo" />
        </a>
    )
}
export { WhatsappButton, WhatsappNoticeButton }
