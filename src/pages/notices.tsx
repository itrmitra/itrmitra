import Head from "next/head"
import NoticeSection from "../components/info-sections/notice-section"
import ProcessSection from "../components/info-sections/process-section"

export default function Notices() {
    return (
        <>
            <Head>
                <title>ITR Mitra | Notices</title>
                <meta
                    title="ITR Mitra | Notices"
                    name="description"
                    content="ITR Mitra can help related to notices received from Income Tax Department of India."
                />
            </Head>
            <NoticeSection />
            <ProcessSection />
        </>
    )
}
