import AboutUsSection from "../components/info-sections/aboutus-section"
import FaqSection from "../components/info-sections/faq-section"
import FormFilingSection from "../components/info-sections/form-filing-section"
import ItrBenefitsSection from "../components/info-sections/itr-benefits-section"
import ItrFilingProcessSection from "../components/info-sections/itr-filiing-process-section"
import LandingSection from "../components/info-sections/landing-section"
import OfferSection from "../components/info-sections/offer-section"
import TestimonialsSection from "../components/info-sections/testimonials-section"

export default function Home() {
    return (
        <>
            <title>ITR Mitra | Home</title>
            <meta
                title="ITR Mitra | Your Personal Tax Filing Expert"
                name="description"
                content="ITR Mitra helps in filing Income Tax Returns and provides expert assistance with the whole ITR filing process."
            />
            <OfferSection />
            <LandingSection />
            <FormFilingSection />
            <ItrFilingProcessSection />
            <AboutUsSection />
            <ItrBenefitsSection />
            <TestimonialsSection />
            <FaqSection />
        </>
    )
}
