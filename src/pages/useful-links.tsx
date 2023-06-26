import Head from "next/head"
import { usefulLinks } from "../data/useful-links"
import { headingVariants } from "../components/ui/heading"
import { cn } from "../lib/utils"
import CustomHead from "../components/custom-head"
import { siteConfig } from "../data/siteconfig"

export default function UsefulLinks() {
    return (
        <>
            <CustomHead {...siteConfig.pageInfo.usefulLinks} />
            <div className="flex flex-col items-stretch justify-center px-8 py-12 md:min-h-screen">
                <h1 className={cn(headingVariants(), "mx-auto mb-4")}>Useful Links</h1>
                <p
                    className={cn(
                        headingVariants({ variant: "subtext", size: "subtext" }),
                        "mx-auto mb-12"
                    )}
                >
                    These links are very helpful in many tax returns scenarios. We thought this
                    might be helpful for some of our users.
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {usefulLinks.map((item) => (
                        <div className="">
                            <a
                                href={item.href}
                                className="inline-block w-full cursor-pointer rounded-xl border bg-white p-8 text-center  transition-all hover:bg-brand hover:text-white hover:underline hover:shadow-lg  lg:text-lg"
                                target="_blank"
                            >
                                {item.title}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
