import { aboutus } from "../data/aboutus"

export default function AboutUs() {
    return (
        <>
            <title>ITR Mitra | About Us</title>
            <meta
                name="description"
                content="ITR Mitra is group of Tax Experts having industry experience. We care about your privacy and confidentiality of your data."
            />
            <div className="flex flex-col-reverse items-center py-12 md:min-h-screen md:flex-row md:py-0">
                <div className="flex-1">
                    <div className="mx-auto flex w-3/4 flex-col items-center text-center md:items-start md:text-start">
                        <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                            Welcome to ITR Mitra
                        </h1>
                        <p className="mb-8 text-sm md:text-base lg:text-lg">
                            Your Tax Solution Companion! With 8 years of experience in the taxation
                            realm, we're thrilled to launch our online portal, bringing our
                            expertise to your fingertips. Backed by a team of competent tax
                            professionals and Chartered Accountants, we're here to provide you with
                            timely assistance whenever you need it.
                        </p>
                    </div>
                </div>
                <div className="flex-1">
                    <img src="/about-us.svg" className="h-52 md:h-auto" alt="About Us" />
                </div>
            </div>
            <div className="flex flex-col bg-light-brand px-8 py-12 md:px-12">
                <h1 className=" mx-auto mb-4 text-4xl font-extrabold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
                    Why choose ITR Mitra?
                </h1>
                <div className="mt-8 flex flex-col gap-6 md:flex-row">
                    {aboutus.slice(0, -2).map((item) => (
                        <FeatureCard key={item.title} {...item} />
                    ))}
                </div>

                <div className="mt-6 flex flex-col items-stretch justify-center gap-6 md:flex-row">
                    {aboutus.slice(-2).map((item) => (
                        <FeatureCard key={item.title} {...item} />
                    ))}
                </div>
            </div>
            <div className="mx-auto px-8 py-12 md:w-1/2">
                <h1 className="text-center text-lg font-light md:text-3xl">
                    Join ITR Mitra today and experience a new era of effortless tax preparation.
                    Together, we'll conquer your tax challenges and embrace financial success.
                </h1>
            </div>
        </>
    )
}

function FeatureCard({
    title,
    imageUrl,
    content,
    alt,
}: {
    title: string
    imageUrl: string
    content: string
    alt: string
}) {
    return (
        <div
            key={title}
            className="basis-1/3 rounded-xl bg-white p-8 text-center shadow-lg transition-colors"
        >
            {imageUrl && <img src={imageUrl} className="mx-auto mb-8 h-20" alt={alt} />}
            <h3 className="mb-2 text-lg font-semibold md:text-xl">{title}</h3>
            <p className="text-sm md:text-base">{content}</p>
        </div>
    )
}
