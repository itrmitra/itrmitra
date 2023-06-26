import Head from "next/head"
import AboutUsSection from "../components/info-sections/aboutus-section"
import FaqSection from "../components/info-sections/faq-section"
import FormFilingSection from "../components/info-sections/form-filing-section"
import ItrBenefitsSection from "../components/info-sections/itr-benefits-section"
import ItrFilingProcessSection from "../components/info-sections/itr-filiing-process-section"
import LandingSection from "../components/info-sections/landing-section"
import OfferSection from "../components/info-sections/offer-section"
import TestimonialsSection from "../components/info-sections/testimonials-section"
import Script from "next/script"

const content = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "ITR Mitra",
    alternateName: "ITR Mitra",
    url: "https://itrmitra.in/",
    telephone: "+91-9359412287",
    address: {
        "@type": "PostalAddress",
        streetAddress: "Office No. 5, Building No.2, New Laxmi Narayan Park, Koregaon Park",
        addressLocality: "Pune",
        postalCode: "411001",
        addressCountry: "IN",
    },
    contactPoint: {
        "@type": "ContactPoint",
        telephone: "+91-9359412287",
        contactType: "customer service",
    },
}

export default function Home() {
    return (
        <>
            <Head>
                <title>ITR Mitra | Home</title>
                <meta
                    title="ITR Mitra | Your Personal Tax Filing Expert"
                    name="description"
                    content="ITR Mitra helps in filing Income Tax Returns and provides expert assistance with the whole ITR filing process. We also help custombers with Income Tax Notices and further procedures."
                />
                
                <meta
                    title="ITR Filing | Your Personal Tax Filing Expert"
                    name="description"
                    content="ITR Mitra helps in filing Income Tax Returns and provides expert assistance with the whole ITR filing process. We also help custombers with Income Tax Notices and further procedures."
                />
                <Script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{
                        __html: JSON.stringify(content, null, "\t"),
                    }}
                />
            </Head>
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
