import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ViewEmailPage() { 
    const {id} = useParams()
    
    const [name, setName] = useState ("")
    const [emailAddress, setEmailAddress] = useState("")
    const [subject, setSubject] = useState("")
    const [body, setBody] = useState("")
    const [date, setDate] = useState("")

    function getEmailData() {
        fetch(`https://email-client-api.dev.io-academy.uk/emails/${id}`)
            .then(res => res.json())
            .then(emailData => {
                setName(emailData.data.email.name)
                setEmailAddress(emailData.data.email.email)
                setSubject(emailData.data.email.subject)
                setBody(emailData.data.email.body)
                setDate(emailData.data.email.date_created)                
            })
    }

    useEffect(getEmailData, [])
    
    return (
        <div>
            <p>{date}</p>
            <div className="pl-4 pt-4 flex-col justify-between px-4 py-2 ">
                <h2 className="mb-4">{name}</h2>
                <p className="mb-4">{emailAddress}</p>
                <p className="mb-4">{subject}</p>
            </div>
            <div>
                <p>{body}</p>
            </div>
        </div>
 )
}
export default ViewEmailPage