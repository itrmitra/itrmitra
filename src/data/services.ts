export const services = [
    {
        highlight: true,
        name: "Salary & House Property Plan",
        priceBefore: "1999",
        priceAfter: "999",
        usefulFor: [
            "Single & Multiple Employers",
            "Single & Multiple House Property",
            "Income from Other Sources",
        ],
        extraInfo: ["Terms and Conditions Apply", "Offer valid until 31st July, 2023"],
    },
    {
        name: "Capital Gain Plan",
        priceBefore: "3499",
        priceAfter: "1499",
        usefulFor: ["Capital Gain Income from Sale of Property, Mutual Funds, Shares, etc."],
        includes: ["Salary & House Property Plan"],
    },
    {
        name: "Business & Professional Plan",
        priceBefore: "4499",
        priceAfter: "2499",
        usefulFor: [
            "Business & Professional Income (Non Audit) *",
            "Speculative Income / Intraday Trading of Shares",
            "Agriculture Income",
        ],
        includes: ["Salary and House Property Plan", "Capital Gain Plan"],
        extraInfo: [
            "Plan does not include Account Writing, Business Consultancy Services and Balance Sheet Attestation charges",
        ],
    },

    {
        name: "Future & Options Plan",
        priceBefore: "4999",
        priceAfter: "2999",
        usefulFor: ["F&O Income/Loss (Non Audit)"],
        includes: [
            "Salary & House Property Plan",
            "Business and Professional Plan",
            "Capital Gain Plan",
        ],
    },
    {
        name: "Crypto Currency Plan",
        priceBefore: "6499",
        priceAfter: "4499",
        usefulFor: ["Income from Crypto"],
        includes: [
            "Salary & House Property Plan",
            "Business and Professional Plan",
            "Capital Gain Plan",
            "Future & Options Plan",
        ],
    },
    {
        name: "NRI/Resident Having Foreign Income",
        priceBefore: "6999",
        priceAfter: "4999",
        usefulFor: [
            "NRI income and Foreign Asset Reporting",
            "Indian Income of NRI individual",
            "DTAA Tax Relief",
        ],
        includes: [
            "Salary & House Property Plan",
            "Business and Professional Plan",
            "Capital Gain Plan",
            "Future & Options Plan",
            "Crypto Currency Plan",
        ],
    },
    {
        expired: true,
        name: "Basic Plan",
        priceBefore: "699",
        priceAfter: "0",
        usefulFor: [
            "Per Annum Salary less than 5 Lakh",
            "Single House Property",
            "Interest Income",
            "No TDS deductions and refund",
        ],
        extraInfo: ["Terms and Conditions Apply", "Offer valid until 30th June, 2023"],
    },
]
