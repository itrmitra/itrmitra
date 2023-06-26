import Head from "next/head"

export default function CustomHead({
    title,
    description,
    structuredData,
}: {
    title: string
    description: string
    structuredData: any
}) {
    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <script
                key="jsonid"
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(structuredData, null, "\t"),
                }}
            />
        </Head>
    )
}
