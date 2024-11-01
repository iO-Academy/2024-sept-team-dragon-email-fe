import { useEffect, useState } from "react"
import EmailPreview from "../../components/EmailPreview"
import reverseDate from "../../functions/reverseDate"

function DeletedEmailsPage() {
    
    const[deletedEmails, setDeletedEmails] = useState([])
    
    function getDeletedEmailData() {
        fetch("https://email-client-api.dev.io-academy.uk/emails/deleted")
            .then(res => res.json())
            .then(deletedEmailData => {
                setDeletedEmails(deletedEmailData.data)
            })
    }

    useEffect (getDeletedEmailData, [])
    
    return (
        <div className="border-b-2" >
            {deletedEmails.map(deletedEmail =>
                    <EmailPreview
                    emailID={deletedEmail.id}
                    key={deletedEmail.id}
                    emailRead={deletedEmail.read}
                    emailName={deletedEmail.name}
                    emailSubject={deletedEmail.subject}
                    emailBody={`${deletedEmail.body.substring(0, 35)}...`}
                    emailDate={reverseDate(deletedEmail.date_created)}
                    />
                )}
            </div>      
 )
}

export default DeletedEmailsPage