import { useEffect, useState } from "react";
import EmailPreview from "../EmailPreview";

function EmailList() {

    const [emails, setEmails] = useState([])

function getEmailData () {
    fetch("https://email-client-api.dev.io-academy.uk/emails")
        .then(res => res.json())
        .then(emailData => {
            setEmails (emailData.data)
            // console.log(emailData.data)
        })
}


    
useEffect(getEmailData, [])

    return (
        <>
        <div className="border-b-2">
        {emails.map(email => <EmailPreview  key={email.id}
                                            emailName={email.name}
                                            emailSubject={email.subject}
                                            emailBody={`${email.body.slice(0, 35)}...`}
                                            emailDate={email.date_created.split(" ")[0]}/>)}

        </div>
 
        </>
    )

}

export default EmailList;