import { cn } from "../../lib/utils"
import { buttonVariants } from "../ui/button"
import { headingVariants } from "../ui/heading"
import WhatsappButton from "../whatsapp_button"

export default function NoticeSection() {
    return (
        <div className="flex flex-col-reverse items-center px-8 py-12 md:min-h-screen md:flex-row">
            <div className="flex-1">
                <div className="mx-auto flex w-3/4 flex-col items-center text-center md:items-start md:text-start">
                    <h1 className={cn(headingVariants())}>
                        Notice Received from the Income Tax Department?
                    </h1>
                    <h1 className={cn(headingVariants(), "text-brand")}>
                        We're Here to Assist You!
                    </h1>
                    <div className="flex flex-col items-center gap-4 md:flex-row">
                        <a
                            className={cn(buttonVariants(), "text-primary gap-2 bg-white")}
                            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${process.env.NEXT_PUBLIC_EMAIL}&su=NOTICE+ITR+MITRA`}
                        >
                            Share Notice
                            <img src="/gmail.svg" className="h-6 w-6" alt="Gmail Logo" />
                        </a>
                        <WhatsappButton />
                    </div>
                </div>
            </div>
            <div className="mb-8 flex-1 md:mb-0">
                <img src="/notice.svg" className="h-52 md:h-auto" alt="Notice Mail" />
            </div>
        </div>
    )
}
