import Head from "next/head"
import { usefulLinks } from "../data/useful-links"

export default function UsefulLinks() {
    return (
        <>
            <Head>
                <title>ITR Mitra | Useful Links</title>
                <meta
                    name="description"
                    content="ITR Mitra helps in filing Income Tax Returns and provides expert assistance with the whole ITR filing process. We also help custombers with Income Tax Notices and further procedures."
                />
            </Head>
            <div className="flex flex-col items-center justify-center px-8 py-12 md:min-h-screen">
                <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                    Useful Links
                </h1>
                <p className="mb-8 text-center text-sm md:text-base lg:text-lg">
                    These links are very helpful in many tax returns scenarios. We thought this
                    might be helpful for some of our users.
                </p>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {usefulLinks.map((item) => (
                        <div className="">
                            <a
                                href={item.href}
                                className="inline-block w-full cursor-pointer rounded-xl border bg-white p-8 text-center text-sm transition-all hover:bg-brand hover:text-white hover:underline hover:shadow-lg md:text-base lg:text-base"
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
