import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ViewEmail() { 
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
                // console.log(emailData.data.email.name)
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
            <h2>{name}</h2>
            <p>{emailAddress}</p>
            <p>{subject}</p>
            <p>{date}</p>
            <p>{body}</p>
        </div>
 )
}
export default ViewEmail