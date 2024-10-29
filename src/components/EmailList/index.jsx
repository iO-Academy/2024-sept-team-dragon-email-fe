import { useEffect, useState } from "react"
import EmailPreview from "../EmailPreview"

function EmailList() {

    const [emails, setEmails] = useState([])

    function getEmailData () {
        fetch("https://email-client-api.dev.io-academy.uk/emails")
            .then(res => res.json())
            .then(emailData => {
                setEmails (emailData.data)
            })
    }
        
    useEffect(getEmailData, [])

    function reverseDate(inputDate) {
        let array = inputDate.split("-")
        let newDate = `${array[2]}-${array[1]}-${array[0]}`
        return newDate
    }

        return (
            <div className="border-b-2">
                {emails.map(email => 
                    <EmailPreview 
                        key={email.id}
                        emailRead={email.read}
                        emailName={email.name}
                        emailSubject={email.subject}
                        emailBody={`${email.body.substring(0, 35)}...`}
                        emailDate={reverseDate(email.date_created.split(" ")[0])}
                    />
                )}
            </div>
        )
    }

export default EmailList