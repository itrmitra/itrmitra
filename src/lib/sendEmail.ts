import axios from "axios"
interface FormState {
    name: string
    email: string
    phone: string
    query: string
    type: "FILE ITR" | "CONSULTANCY"
}

const url = "https://api.brevo.com/v3/smtp/email"
const receiverEmail = "myitrmitra@gmail.com"

export const sendEmail = async (state: FormState) => {
    const data = {
        sender: {
            name: state.name.length == 0 ? "NO-NAME" : state.name,
            email: state.email,
        },
        to: [
            {
                email: receiverEmail,
                name: "ITR Mitra",
            },
        ],
        subject: "ITR MITRA - " + state.type,
        htmlContent: `
        ${state.name}\n
        ${state.phone}\n\n
        ${state.query}
        `,
    }

    console.log("Email api key : ", process.env.NEXT_PUBLIC_EMAIL_API_KEY)

    await axios.post(url, data, {
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
            "Api-Key": process.env.NEXT_PUBLIC_EMAIL_API_KEY,
        },
    })
}
