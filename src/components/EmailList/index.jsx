import { useEffect, useState } from "react";
import EmailPreview from "../EmailPreview";

function EmailList() {

    const [email, setEmail] = useState([])

function getEmailData () {
    fetch("https://email-client-api.dev.io-academy.uk/emails")
        .then(res => res.json())
        .then(emailData => {

            console.log(emailData.data)
//            console.log(data.0.name)
//            setEmailName(data.name)
//            setEmailSubject(data.subject)
//            setEmailBody(data.body)
        })
}

useEffect(getEmailData, [])

    return (
        <div className="border-b-2">
            <EmailPreview />
            <EmailPreview />
            <EmailPreview />
        </div>
    )

}
export default EmailList;