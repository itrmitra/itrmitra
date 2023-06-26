const structuredData = {
    "@context": "https://schema.org",
    "@type": "FinancialService",
    name: "ITR Mitra",
    alternateName: "ITR Mitra | Your Personal Tax Filiing Expert",
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

export const siteConfig = {
    tabs: [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Services",
            href: "/services",
        },
        {
            title: "Notices",
            href: "/notices",
        },
        {
            title: "About Us",
            href: "/about-us",
        },
    ],
    pageInfo: {
        home: {
            title: "ITR Mitra | Your Personal Tax Filing Expert",
            description:
                "ITR Mitra helps in filing Income Tax Returns and provides expert assistance with the whole ITR filing process. We also help custombers with Income Tax Notices and further procedures.",
            structuredData,
        },
        aboutus: {
            title: "ITR Mitra | About Us",
            description:
                "ITR Mitra is group of Tax Experts having industry experience Income Tax Filing Return. We care about your privacy and confidentiality of your data.",
            structuredData,
        },
        notices: {
            title: "ITR Mitra | Notices",
            description:
                "ITR Mitra can help related to notices received from Income Tax Department of India. Our tax filing experts will help go through the whole notice procedures.",
            structuredData,
        },
        privacyPolicy: {
            title: "ITR Mitra | Privacy Policy",
            description: "ITR Mitra Privacy Policy",
            structuredData,
        },
        services: {
            title: "ITR Mitra | Services",
            description:
                "ITR Mitra provides six types of services including Capital Gain Plan, Future & Options Plan and NRI having Foreign Income.",
            structuredData,
        },
        team: {
            title: "ITR Mitra | Know Our Tax Experts",
            description:
                "Our team's creativity, innovatin, and drive have helped us to transform individual ideas into a functional and successful organization.",
            structuredData,
        },
        usefulLinks: {
            title: "ITR Mitra | Useful Links",
            description:
                "ITR Mitra helps in filing Income Tax Returns and provides expert assistance with the whole ITR filing process. We also help custombers with Income Tax Notices and further procedures.",
            structuredData,
        },
        termsAndConditions: {
            title: "ITR Mitra | Terms and Conditions",
            description:
                "ITR Mitra helps in filing Income Tax Returns and provides expert assistance with the whole ITR filing process. We also help custombers with Income Tax Notices and further procedures.",
            structuredData,
        },
    },
}
