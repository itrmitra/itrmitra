import { FileCheck2, FileEdit, FileStack, FileText, MailQuestion, UserCheck2 } from "lucide-react"

export const filingProcess = [
    {
        title: "Inquiry Form",
        content: "Clients provide tax information via an inquiry form.",
        Icon: FileText,
    },
    {
        title: "Document Collection",
        content:
            "Our tax experts connect with clients to gather required documents and credentials.",
        Icon: FileStack,
    },
    {
        title: "ITR Preparation",
        content: "Experts prepare the client's ITR, ensuring accurate and complete information.",
        Icon: FileEdit,
    },
    {
        title: "Approval Request",
        content: "Finalized ITR is sent to the client for review and approval.",
        Icon: MailQuestion,
    },
    {
        title: "Client Approval",
        content: "Clients carefully review and approve the ITR for filing.",
        Icon: UserCheck2,
    },
    {
        title: "ITR Filing",
        content: "Our experts file the approved ITR on the client's behalf, meeting all deadlines.",
        Icon: FileCheck2,
    },
]
