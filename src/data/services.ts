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
        extraInfo: ["Terms and Conditions Apply", "Offer valid"],
    },
    {
        name: "Capital Gain Plan",
        priceBefore: "3599",
        priceAfter: "1799",
        usefulFor: ["Capital Gain Income from Sale of Property, Mutual Funds, Shares, etc."],
        includes: ["Salary & House Property Plan"],
    },
    {
        name: "Business & Professional Plan",
        priceBefore: "4499",
        priceAfter: "2999",
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
        name: "High Network Individual Plan",
        priceBefore: "7499",
        priceAfter: "4999",
        usefulFor: ["Employee Having Salary More Than 1 Crore"],
        includes: ["Salary & House Property Plan", "Capital Gain Plan"],
    },
{
        name: "RSU/ Foreign Assets",
        priceBefore: "7599",
        priceAfter: "4999",
        usefulFor: ["Employees Having RSU outside India",
                   "Employees Having Assets Outside India",
                    ],
        includes: ["Salary & House Property Plan",
                  "Capital Gain Plan",
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
        priceAfter: "3999",
        usefulFor: ["Income from Crypto"],
        includes: [
            "Salary & House Property Plan",
            "Business and Professional Plan",
            "Capital Gain Plan",
            "Future & Options Plan",
        ],
    },
    {
        name: "NRI/Resident Golden Plan",
        priceBefore: "9999",
        priceAfter: "7599",
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
        name: "NRI/Resident Silver Plan",
        priceBefore: "4999",
        priceAfter: "2999",
        usefulFor: [
            "NRI having only Interest and Dividend in India",
            "Indian Income of NRI individual",
            "DTAA Tax Relief",
        ]       
    },
   ]
