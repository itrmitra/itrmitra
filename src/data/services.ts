export const services = [
    {
        name: "Salary & House Property Plan",
        usefulFor: [
            "Single & Multiple Employers",
            "Single & Multiple House Property",
            "Income from Other Sources",
        ],
    },
    {
        name: "Business & Professional Plan",
        usefulFor: [
            "Business & Professional Income (Non Audit) *",
            "Speculative Income / Intraday Trading of Shares",
            "Agriculture Income",
        ],
        includes: ["Salary and House Property Plan"],
        extraInfo:
            "Plan does not include Account Writing charges, Business Consultancy services and balance sheet Attestation charges",
    },
    {
        name: "Capital Gain Plan",
        usefulFor: ["Capital Gain Income from Sale of Property, Mutual Funds, Shares, etc."],
        includes: ["Salary & House Property Plan", "Business and Professional Plan"],
    },
    {
        name: "Future & Options Plan",
        usefulFor: ["F&O Income/Loss (Non Audit)"],
        includes: [
            "Salary & House Property Plan",
            "Business and Professional Plan",
            "Capital Gain Plan",
        ],
    },
    {
        name: "Crypto Currency Plan",
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
]
