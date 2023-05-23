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
                "bg-green-500 text-white gap-2",
                className
            )}
        >
            Connect on <img src="/whatsapp.svg" className="h-6 md:h-8" />
        </a>
    )
}

export default WhatsappButton
