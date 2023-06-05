import { team } from "../data/team"

export default function Team() {
    return (
        <>
            <title>ITR Mitra | Team</title>
            <meta
                name="description"
                content="Our team's creativity, innovation, and drive have helped us to transform
                    individual ideas into a functional and successful organization."
            />
            <div className="px-8 py-12 text-center md:min-h-screen md:text-left">
                <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                    Meet Our Team
                </h1>
                <p className="mb-12 text-sm md:w-1/2 md:text-base lg:text-lg">
                    Our team's creativity, innovation, and drive have helped us to transform
                    individual ideas into a functional and successful organization.
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                    {team.map((item) => (
                        <InfoCard key={item.name} {...item} />
                    ))}
                </div>
            </div>
        </>
    )
}

function InfoCard({ name, intro, imageUrl }: { name: string; intro: string; imageUrl: string }) {
    return (
        <div className="flex flex-col overflow-hidden rounded-xl bg-white p-8 shadow-lg lg:flex-row lg:items-start">
            <div className="mx-auto h-36 w-36 lg:h-full lg:w-56">
                <img
                    src={imageUrl}
                    className="mx-auto h-36 w-36 rounded-full object-cover lg:h-full lg:w-56 lg:rounded-lg"
                />
            </div>
            <div className="flex-1 pt-6 text-center lg:pl-8 lg:pt-0 lg:text-left">
                <h1 className="mb-2 text-xl font-semibold text-brand md:text-2xl lg:text-3xl">
                    {name}
                </h1>
                <p className="text-sm md:text-base lg:text-lg">{intro}</p>
            </div>
        </div>
    )
}
