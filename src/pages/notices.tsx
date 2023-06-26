import Head from "next/head"
import NoticeSection from "../components/info-sections/notice-section"
import ProcessSection from "../components/info-sections/process-section"
import CustomHead from "../components/custom-head"
import { siteConfig } from "../data/siteconfig"

export default function Notices() {
    return (
        <>
            <CustomHead {...siteConfig.pageInfo.notices} />
            <NoticeSection />
            <ProcessSection />
        </>
    )
}
