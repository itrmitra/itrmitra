import { cn } from "../../lib/utils"
import { buttonVariants } from "../ui/button"
import WhatsappButton from "../whatsapp_button"

export default function NoticeSection() {
    return (
        <div className="flex flex-col-reverse items-center py-12 md:min-h-screen md:flex-row md:py-0">
            <div className="flex-1">
                <div className="mx-auto flex w-3/4 flex-col items-center text-center md:items-start md:text-start">
                    <h1 className="mb-8 text-center text-4xl font-extrabold leading-tight tracking-tighter md:text-start md:text-5xl lg:text-6xl">
                        Notice Received from the Income Tax Department?
                        <br className="mb-4" />
                        <span className="text-brand">We're Here to Assist You!</span>
                    </h1>
                    <div className="flex flex-col items-center gap-4 md:flex-row">
                        <a
                            className={cn(buttonVariants(), "gap-2 bg-white text-primary")}
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
