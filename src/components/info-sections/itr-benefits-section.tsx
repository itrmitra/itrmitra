import { benefits } from "../../data/benefits"

export default function ItrBenefitsSection() {
    return (
        <div className="flex flex-col px-8 py-12">
            <h1 className="mx-auto mb-12 text-center text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                Benefits of Filing ITR
            </h1>
            <div className="mx-auto w-full lg:w-3/4">
                <div className="grid gap-6 md:grid-cols-3">
                    {benefits.map((item) => (
                        <BenefitCard key={item.title} {...item} />
                    ))}
                </div>
            </div>
        </div>
    )
}

function BenefitCard({ title, content }: { title: string; content: string }) {
    return (
        <div className="overflow-hidden rounded-xl bg-white shadow-lg">
            <div className="bg-brand p-4 text-white lg:p-8">
                <h1 className="text-center text-xl font-semibold md:text-2xl lg:text-left">
                    {title}
                </h1>
            </div>
            <div className="flex-1 p-4 lg:p-8">
                <p className="text-center text-sm md:text-lg lg:text-left">{content}</p>
            </div>
        </div>
    )
}
