import { Star, StarIcon, StarOff } from "lucide-react"
import { cn } from "../../lib/utils"

const testimonials = [
    {
        name: "Sanit Jain",
        text: "Very satisfied with taxbuddy service. Mr. Krishna very professional in his behavior and filed my return on the same day without any hassle. I got all my queries answered before filing the returns and had very quick response from him.I really liked the service and excellent work. Thanks ITR Mitra",
        numStars: 4,
        imageUrl: "/sanit-jain.jpg",
    },
    {
        name: "Vikas Joshi",
        text: "Very Professionalism, Responsiveness. Jitendra was very responsive and prompt throughout the return filing process. He helped me to fill returns with the friendly behaviour.",
        numStars: 5,
        imageUrl: "/vikas-joshi.jpg",
    },
    {
        name: "Sameer Tiwari",
        text: "I have been taking tax consulting service from Jitendra for past 3 plus years. He has given me excellent guidance and always prompt on filing my return taxes. I would recommend his service to my friends too. Thanks for your help and guidance thus far. Keep up the good work.",
        numStars: 5,
        imageUrl: "/guruswami-hiremath.jpg",
    },
    {
        name: "Nilam Dubey",
        text: "It was very Hassle free communication and service from Jitendra he was very patient during the all service which he provided to me in last year. THANK YOU",
        numStars: 5,
        imageUrl: "rahul-sharma.jpg",
    },
    {
        name: "Shrutika Wani",
        text: "Very satisfied with ITR Mitra service. Mr Jitendra is very professional in his behavior and filed my return on the same day without any hassle. I got all my queries answered before filing the returns and had very quick response from him.I really liked the service and excellent work. Thanks ITR Mitra.",
        numStars: 5,
        imageUrl: "/shrutika-wani.jpg",
    },
    {
        name: "Brijesh Nair",
        text: "I'm filing my ITR from Jitendra from last 3 years, he is very professional in his work, excellent command over taxation and give me best advice as possible, guided me soo much with my taxes. Now I cam focus on my business and need not to worry about tax and accounts part, Jitendra take care of everything. \nThank you Jitendra, keep it up ITR Mitra.",
        numStars: 4,
        imageUrl: "/rohit-bhatia.jpg",
    },
]

export default function TestimonialsSection() {
    return (
        <div className="py-8 md:min-h-screen flex flex-col bg-light-brand">
            <h1 className="mx-auto font-extrabold text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight mb-4">
                Testimonials
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl tracking-tight mx-auto text-center">
                We have worked with hundreds of amazing people
            </p>
            <div className="mt-4 md:mt-8 space-y-8 md:space-y-0 md:grid grid-cols-3 md:grid-flow-col md:grid-rows-2 p-12 md:gap-8">
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
    imageUrl: string
}) {
    const stars = []
    for (let i = 0; i < numStars; i++) {
        stars.push(<Star className="text-orange-300" fill="orange" />)
    }
    return (
        <figure
            className={cn(
                "p-8 rounded-lg h-fit border border-gray-100 shadow-lg space-y-6 flex flex-col justify-center bg-gray-100",
                className
            )}
        >
            <blockquote className="text-sm md:text-lg">
                <p>"{text}"</p>
            </blockquote>
            <figcaption className="flex flex-col  md:flex-row items-center gap-2">
                <img src={imageUrl} className="h-10 w-10 rounded-full object-cover" />
                <div className="inline-block font-bold text-xs md:text-sm md:flex-1">{name}</div>
                <div className="flex items-center">
                    <img src="/google.svg" className="h-6 mr-2" />
                    {...stars}
                </div>
            </figcaption>
        </figure>
    )
}
