import WhatsappButton from "../whatsapp_button"

export default function LandingSection() {
    return (
        <div className="flex flex-col-reverse items-center px-8 py-12 md:min-h-screen md:flex-row">
            <div className="flex-1">
                <div className="mx-auto flex w-3/4 flex-col items-center text-center md:items-start md:text-start">
                    <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                        Simplify Your Tax Filing Experience with Expert Guidance
                    </h1>
                    <p className="mb-8 text-sm md:text-base lg:text-lg">
                        Maximize Returns, Minimize Stress: Your Trusted Tax Filing Partner
                    </p>
                    <WhatsappButton />
                </div>
            </div>
            <div className="mb-8 flex-1 md:mb-0">
                <img
                    src="/personal-finance.svg"
                    className="h-52 md:h-auto"
                    alt="Personal Finance"
                />
            </div>
        </div>
    )
}
