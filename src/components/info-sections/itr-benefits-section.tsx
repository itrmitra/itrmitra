import { benefits } from "../../data/benefits"

export default function ItrBenefitsSection() {
    return (
        <div className="flex flex-col bg-light-brand px-8 py-12">
            <h1 className="mx-auto mb-8 text-center text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
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
        <div className="rounded-xl bg-white p-8 shadow-lg">
            <h1 className="mb-2 text-xl font-semibold md:text-2xl">{title}</h1>
            <p className="text-sm md:text-base">{content}</p>
        </div>
    )
}
