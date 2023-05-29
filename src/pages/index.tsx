import { Metadata } from "next"
import LandingSection from "../components/info-sections/landing-section"
import AboutUsSection from "../components/info-sections/aboutus-section"
import FormFilingSection from "../components/info-sections/form-filing-section"
import TestimonialsSection from "../components/info-sections/testimonials-section"
import FaqSection from "../components/info-sections/faq-section"

export default function Home() {
    return (
        <>
            <title>ITR Mitra | Home</title>
            <meta
                name="description"
                content="ITR Mitra helps in filing Income Tax Returns and provides expert assistance with the whole ITR filing process."
            />
            <LandingSection />
            <FormFilingSection />
            <AboutUsSection />
            <TestimonialsSection />
            <FaqSection />
        </>
    )
}
