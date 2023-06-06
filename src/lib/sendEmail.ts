interface FormState {
    name: string
    email: string
    phone: string
    query: string
    type?: "FILE ITR" | "CONSULTANCY"
    sourceOfIncome: { [key: string]: boolean }
}

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
        <html>
        <body>
        <b>Name: </b>${state.name}<br>
        <b>Phone Number: </b>${state.phone}<br>
        <b>Source Of Income: </b><br>
        ${Object.keys(state.sourceOfIncome).join("<br>")}
        <br>
        <b>Message: </b><br>
        ${state.query}
        </body>
        </html>
        `,
    }

    const result = await fetch("/api/sendEmail", { method: "POST", body: JSON.stringify(data) })

    if (!(result.status >= 200 && result.status < 300)) return false
    return true
}
