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
    usefulFor: [
      "Capital Gain Income from Sale of Property, Mutual Funds, Shares, etc.",
    ],
    includes: ["Salary & House Property Plan"],
  },

  {
    name: "Business & Professional Plan",
    priceBefore: "4999",
    priceAfter: "3499",
    usefulFor: [
      "Business & Professional Income (Non Audit)",
      "Speculative Income / Intraday Trading of Shares",
      "Agriculture Income",
    ],
    includes: [
      "Salary & House Property Plan",
      "Capital Gain Plan",
    ],
    extraInfo: [
      "Plan does not include Account Writing, Business Consultancy Services and Balance Sheet Attestation charges",
    ],
  },
   {
    name: "NRI Silver Plan",
    priceBefore: "4999",
    priceAfter: "2999",
    usefulFor: [
      "'Zero' Income of NRI Individual",
      "NRI Having Only Interest and Dividend in India",
    ],
  },
  {
    name: "Future & Options Plan",
    priceBefore: "4999",
    priceAfter: "2999",
    usefulFor: ["F&O Income/Loss (Non Audit)"],
    includes: [
      "Salary & House Property Plan",
      "Business & Professional Plan",
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
      "Business & Professional Plan",
      "Capital Gain Plan",
      "Future & Options Plan",
    ],
  },
  {
    name: "High Networth Individual (HNI) Plan",
    priceBefore: "7499",
    priceAfter: "4999",
    usefulFor: ["Employee Having Salary More Than 1 Crore"],
    includes: [
      "Salary & House Property Plan",
      "Capital Gain Plan",
    ],
  },

  {
    name: "RSU / Foreign Assets Plan",
    priceBefore: "7599",
    priceAfter: "4999",
    usefulFor: [
      "Employees Having RSU Outside India",
      "Employees Having Assets Outside India",
    ],
    includes: [
      "Salary & House Property Plan",
      "Capital Gain Plan",
    ],
  },
    {
    name: "NRI Golden Plan",
    priceBefore: "9999",
    priceAfter: "7499",
    usefulFor: [
      "NRI Income and Foreign Asset Reporting",
      "Indian Income of NRI Individual",
      "DTAA Tax Relief",
    ],
    includes: [
      "Salary & House Property Plan",
      "Capital Gain Plan",
    ],
  },
];
