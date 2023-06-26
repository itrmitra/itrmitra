import Head from "next/head"
import { team } from "../data/team"
import { headingVariants } from "../components/ui/heading"
import { cn } from "../lib/utils"
import CustomHead from "../components/custom-head"
import { siteConfig } from "../data/siteconfig"

export default function Team() {
    return (
        <>
            <CustomHead {...siteConfig.pageInfo.team} />
            <div className="px-8 py-12 text-center md:min-h-screen md:text-left">
                <h1 className={cn(headingVariants(), "mb-4")}>Meet Our Team</h1>
                <p
                    className={cn(
                        headingVariants({ variant: "subtext", size: "subtext" }),
                        "mb-12"
                    )}
                >
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
                    alt={name}
                />
            </div>
            <div className="flex-1 pt-6 text-center lg:pl-8 lg:pt-0 lg:text-left">
                <h1 className="mb-2 text-xl font-semibold text-brand md:text-2xl lg:text-3xl">
                    {name}
                </h1>
                <p className="text-justify text-sm md:text-base lg:text-lg">{intro}</p>
            </div>
        </div>
    )
}
