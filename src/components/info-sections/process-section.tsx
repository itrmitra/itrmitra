import { Check } from "lucide-react"
import { notices } from "../../data/notices"

export default function ProcessSection() {
    return (
        <div className="flex flex-col items-center gap-8 bg-light-brand px-8 py-12 md:min-h-screen md:flex-row">
            <div className="mb-8 flex-1 md:mb-0">
                <img
                    src="/key_points.svg"
                    className="h-64 -scale-x-100 transform md:h-auto"
                    alt="Key Points"
                />
            </div>
            <div className="flex-1">
                <div className="flex flex-col">
                    <h1 className="mb-12 text-center text-4xl font-extrabold leading-tight tracking-tighter md:text-left md:text-5xl lg:text-6xl">
                        How we resolve your notices?
                    </h1>
                    <ul className="relative flex flex-col">
                        {notices.map((item, index) => (
                            <>
                                <li className="z-10 my-2 flex items-start gap-4" key={item.title}>
                                    <div className="flex flex-col items-center gap-2">
                                        <div className="grid aspect-square h-8 w-8 place-items-center rounded-full bg-brand md:h-12 md:w-12">
                                            <Check
                                                strokeWidth={3}
                                                className="h-4 w-4 text-white md:h-8 md:w-8"
                                            />
                                        </div>
                                        {index != notices.length - 1 && (
                                            <img
                                                src="/long-down-arrow.svg"
                                                className="h-4 text-white md:h-6"
                                                alt="Down Arrow"
                                            />
                                        )}
                                    </div>
                                    <div key={item.title}>
                                        <h1 className="text-sm font-bold md:text-base">
                                            {item.title}
                                        </h1>
                                        <p className="text-sm md:text-base">{item.subtitle}</p>
                                    </div>
                                </li>
                            </>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}
