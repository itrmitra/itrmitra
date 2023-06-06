import { Star } from "lucide-react"
import { cn } from "../../lib/utils"
import { testimonials } from "../../data/testimonials"

export default function TestimonialsSection() {
    return (
        <div className="flex flex-col border-b bg-light-brand px-8 py-12 md:min-h-screen md:px-12">
            <h1 className="mx-auto mb-4 text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                Testimonials
            </h1>
            <p className="mx-auto text-center text-xl font-light tracking-tight md:text-2xl lg:text-3xl">
                We have worked with hundreds of amazing people
            </p>
            <div className="mt-8 space-y-6 md:grid md:grid-cols-2 md:gap-6 lg:grid-cols-3">
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
                "flex h-fit flex-col justify-center space-y-6 rounded-xl bg-white p-4 shadow-lg lg:p-8",
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
