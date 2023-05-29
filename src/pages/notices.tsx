import NoticeSection from "../components/info-sections/notice-section"
import ProcessSection from "../components/info-sections/process-section"

export default function Notices() {
    return (
        <>
            <title>ITR Mitra | Notices</title>
            <meta
                name="description"
                content="ITR Mitra can help related to notices received from Income Tax Department of India."
            />
            <NoticeSection />
            <ProcessSection />
        </>
    )
}
