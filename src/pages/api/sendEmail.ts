import type { NextApiRequest, NextApiResponse } from "next"

const url = "https://api.brevo.com/v3/smtp/email"

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const result = await fetch(url, {
        method: "POST",
        body: req.body,
        headers: <any>{
            "Content-Type": "application/json",
            Accept: "application/json",
            "Api-Key": process.env.EMAIL_API_KEY,
        },
    })
    res.status(result.status).send({})
}
