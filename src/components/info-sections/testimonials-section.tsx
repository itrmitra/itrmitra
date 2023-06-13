import { Star } from "lucide-react"
import { cn } from "../../lib/utils"
import { testimonials } from "../../data/testimonials"
import { headingVariants } from "../ui/heading"

export default function TestimonialsSection() {
    return (
        <div className="flex flex-col items-center bg-light-brand px-8 py-12 md:min-h-screen">
            <h1 className={cn(headingVariants(), "mb-4")}>Testimonials</h1>
            <p className={cn(headingVariants({ variant: "subheading", size: "normal" }))}>
                We have worked with hundreds of amazing people
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {testimonials.map((testimony) => (
                    <TestimonialCard key={testimony.name} {...testimony} />
                ))}
            </div>
        </div>
    )
}

function TestimonialCard({
    name,
    text,
    className,
    numStars,
    imageUrl,
}: {
    name: string
    text: string
    className?: string
    numStars: number
    imageUrl?: string
}) {
    const stars = []
    for (let i = 0; i < numStars; i++) {
        stars.push(<Star className="text-orange-300" fill="orange" />)
    }
    return (
        <figure
            className={cn(
                "flex flex-col justify-center space-y-6 place-self-start rounded-xl bg-white p-4 shadow-lg lg:p-8",
                className
            )}
        >
            <blockquote className="text-center text-sm md:text-base lg:text-lg">
                <p>"{text}"</p>
            </blockquote>
            <figcaption className="flex flex-col  items-center gap-2 md:flex-row">
                {imageUrl && (
                    <img
                        src={imageUrl}
                        className="h-10 w-10 rounded-full object-cover"
                        alt={name}
                    />
                )}
                {!imageUrl && (
                    <div className="grid h-10 w-10 place-items-center rounded-full bg-brand object-cover font-bold text-white">
                        <span>{name.charAt(0)}</span>
                    </div>
                )}
                <div className="inline-block text-xs font-bold md:flex-1 md:text-sm">{name}</div>
                <div className="flex items-center">
                    <img src="/google.svg" className="mr-2 h-6" alt="Google Logo" />
                    {...stars}
                </div>
            </figcaption>
        </figure>
    )
}
