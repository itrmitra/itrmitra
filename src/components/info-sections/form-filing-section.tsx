import { useState } from "react"
import { buttonVariants } from "../ui/button"
import { sendEmail } from "../../lib/sendEmail"

interface FormDataType {
    name: string
    email: string
    phone: string
    query: string
    type: "FILE ITR" | "CONSULTANCY"
}

export default function FormFilingSection() {
    const [formState, setFormState] = useState<FormDataType>({
        name: "",
        email: "",
        phone: "",
        query: "",
        type: "FILE ITR",
    })
    const [error, setError] = useState("")

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setError((prev) => "")
        let re = /^\d{10}$/
        if (!re.test(formState.phone)) {
            setError((prev) => "Phone Number is not valid")
            return
        }
        let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
        if (!emailReg.test(formState.email)) {
            setError((prev) => "Email is not valid")
            return
        }

        sendEmail(formState)

        // send email using formstate
    }

    const onChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormState((prev) => ({
            ...prev,
            [event.target.name]: event.target.value,
        }))
    }
    return (
        <div className="py-8 md:py-0 md:min-h-screen flex flex-col-reverse md:flex-row items-center bg-[#ECF5CC]">
            <div className="flex-1">
                <div className="w-3/4 flex flex-col mx-auto text-center md:text-start items-center md:items-start"></div>
            </div>
            <div className="flex-1 mb-8 md:mb-0 z-0">
                <h2 className="font-extrabold text-3xl tracking-tighter mb-4 text-secondary">
                    Connect me with ITR Mitra
                </h2>
                <form onSubmit={onSubmit} className="flex flex-col gap-4 md:w-3/4">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="fullname" className="font-bold">
                            Name
                        </label>
                        <input
                            id="fullname"
                            name="name"
                            type="text"
                            placeholder="Full Name"
                            onChange={onChange}
                            className="placeholder:text-secondary/95 p-4 rounded-md text-secondary w-full"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="fullname" className="font-bold">
                            Email *
                        </label>
                        <input
                            required
                            name="email"
                            type="text"
                            placeholder="Email (required)"
                            onChange={onChange}
                            className="placeholder:text-secondary/95 p-4 rounded-md text-secondary w-full"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="fullname" className="font-bold">
                            Phone Number *
                        </label>
                        <input
                            required
                            name="phone"
                            type="number"
                            placeholder="Phone Number (required)"
                            onChange={onChange}
                            className="placeholder:text-secondary/95 p-4 rounded-md text-secondary w-full"
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="query" className="font-bold">
                            Message
                        </label>
                        <textarea
                            id="query"
                            name="query"
                            placeholder="Message"
                            onChange={onChange}
                            className="placeholder:text-secondary/95 p-4 rounded-md text-secondary"
                        />
                    </div>
                    {error.length > 0 && <p className="text-red-500 font-bold text-sm">{error}</p>}
                    <div className="flex gap-4 font-bold">
                        <div className="flex gap-2">
                            <input
                                id="fileitr"
                                type="radio"
                                name="type"
                                value="FILE ITR"
                                onChange={onChange}
                            />
                            <label htmlFor="fileitr">I want to file ITR</label>
                        </div>
                        <div className="flex gap-2">
                            <input
                                id="consultancy"
                                type="radio"
                                name="type"
                                value="CONSULTANCY"
                                onChange={onChange}
                            />
                            <label htmlFor="consultancy">I need Consultancy</label>
                        </div>
                    </div>

                    <button type="submit" className={buttonVariants()}>
                        Get Started Now
                    </button>
                </form>
            </div>
        </div>
    )
}
