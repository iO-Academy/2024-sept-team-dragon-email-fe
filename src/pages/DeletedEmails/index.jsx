import { useEffect, useState } from "react"
import EmailPreview from "../../components/EmailPreview"

function DeletedEmails() {
    
    const[deletedEmails, setDeletedEmails] = useState([])
    
    function getDeletedEmailData() {
        fetch("https://email-client-api.dev.io-academy.uk/emails/deleted")
            .then(res => res.json())
            .then(deletedEmailData => {
                // console.log(deletedEmailData.data)
                setDeletedEmails(deletedEmailData.data)
            })
    }

    useEffect (getDeletedEmailData, [])
    
    function reverseDate(inputDate) {
        let splitDate = inputDate.split(" ")[0]
        let array = splitDate.split("-")
        let newDate = `${array[2]}-${array[1]}-${array[0]}`
        return newDate
    }
    
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
export default DeletedEmails