import { LucideIcon } from "lucide-react"
import { filingProcess } from "../../data/filing-process"

export default function ItrFilingProcessSection() {
    return (
        <div className="flex flex-col items-center px-8 py-12 md:min-h-screen md:px-12">
            <div className="text-center">
                <h1 className="mx-auto mb-12 text-center text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                    Seamless ITR Filing Process
                </h1>
            </div>
            <div className="grid place-content-center place-items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">
                {filingProcess.map((item, index) => (
                    <StepCard key={index} stepNumber={index + 1} {...item} />
                ))}
            </div>
        </div>
    )
}

function StepCard({
    stepNumber,
    title,
    content,
    Icon,
}: {
    stepNumber: number
    title: string
    content: string
    Icon: LucideIcon
}) {
    return (
        <div className="flex flex-1 flex-col items-stretch">
            <div className="mx-auto mb-4 grid h-16 w-16 place-items-center rounded-full bg-white text-3xl font-extrabold text-brand shadow-lg">
                <p>{stepNumber}</p>
            </div>
            <div className="flex flex-1 items-stretch overflow-hidden rounded-xl  bg-white shadow-lg">
                <div className="grid h-full w-16 place-items-center bg-brand text-white lg:w-24">
                    <Icon className="mx-auto my-auto h-10 w-10 lg:h-16 lg:w-16" />
                </div>
                <div className="flex-1 p-4 lg:p-8">
                    <h1 className="mb-2 text-xl font-semibold md:text-2xl">{title}</h1>
                    <p className="text-sm md:text-base lg:text-lg">{content}</p>
                </div>
            </div>
        </div>
    )
}
