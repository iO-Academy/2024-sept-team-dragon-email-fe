import { useEffect, useState } from "react";
import EmailPreview from "../EmailPreview";

function EmailList() {

    const [emails, setEmails] = useState([])

function getEmailData () {
    fetch("https://email-client-api.dev.io-academy.uk/emails")
        .then(res => res.json())
        .then(emailData => {
            setEmails (emailData.data)
            console.log(emailData.data)
//            console.log(emailData.data[0].name)
//            console.log(emailData.data[].name)
//            setEmailName(data[].name)
//            setEmailSubject(data[].subject)
//            setEmailBody(data[].body)
        })

}

    
useEffect(getEmailData, [])

    return (
        <>
        <div className="border-b-2">
        {emails.map(email => <EmailPreview  emailName= {email.name}
                                            emailSubject={email.subject}
                                            emailBody={email.body}
                                            emailDate={email.date_created}/>)}

        </div>
        </>
    )

}
export default EmailList;