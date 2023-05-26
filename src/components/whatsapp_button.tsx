import React from "react"
import { cn } from "../lib/utils"
import { buttonVariants } from "./ui/button"

const WhatsappButton = ({ className }: { className?: string }) => {
    return (
        <a
            href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER}`}
            target="_blank"
            className={cn(
                buttonVariants({ variant: "filled" }),
                "z-0 gap-2 bg-white text-primary",
                className
            )}
        >
            Connect on
            <img src="/whatsapp.svg" className="h-7 w-7" />
        </a>
    )
}

export default WhatsappButton
