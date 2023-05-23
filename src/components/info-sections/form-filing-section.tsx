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
    const [loading, setLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        setError((prev) => "")
        setSuccess((prev) => false)

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

        setLoading(true)

        const res = await sendEmail(formState)
        if (!res) setError("Could not send email. Please Try Again Later.")
        else setSuccess(true)
        setLoading(false)
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
            <div className="flex-1 mb-8 md:mb-0 z-0 px-4 sm:px-0">
                <h2 className="font-extrabold text-3xl tracking-tighter mb-4 text-secondary">
                    Connect me with ITR Mitra
                </h2>
                <form
                    onSubmit={onSubmit}
                    className="flex flex-col gap-4 md:w-3/4 text-sm md:text-base"
                >
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
                                required
                                id="fileitr"
                                type="radio"
                                name="type"
                                value="FILE ITR"
                                onChange={onChange}
                            />
                            <label htmlFor="fileitr" className="cursor-pointer">
                                I want to file ITR
                            </label>
                        </div>
                        <div className="flex gap-2">
                            <input
                                required
                                id="consultancy"
                                type="radio"
                                name="type"
                                value="CONSULTANCY"
                                onChange={onChange}
                                className=""
                            />
                            <label htmlFor="consultancy" className="cursor-pointer">
                                I need Consultancy
                            </label>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-4 items-start md:items-center">
                        <button type="submit" className={buttonVariants()} disabled={loading}>
                            {loading ? "Loading..." : "Get Started"}
                        </button>
                        <span className="text-green-600 font-bold">
                            {success && "Our experts will contact you after some time."}
                        </span>
                    </div>
                </form>
            </div>
        </div>
    )
}
