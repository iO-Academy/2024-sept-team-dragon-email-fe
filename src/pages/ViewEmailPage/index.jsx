import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

function ViewEmailPage() { 
    const {id} = useParams()
    
    const [name, setName] = useState ("")
    const [emailAddress, setEmailAddress] = useState("")
    const [subject, setSubject] = useState("")
    const [body, setBody] = useState("")
    const [date, setDate] = useState("")
    const [isDeleted, setIsDeleted] = useState()

    function getEmailData() {
        fetch(`https://email-client-api.dev.io-academy.uk/emails/${id}`)
            .then(res => res.json())
            .then(emailData => {
                setName(emailData.data.email.name)
                setEmailAddress(emailData.data.email.email)
                setSubject(emailData.data.email.subject)
                setBody(emailData.data.email.body)
                setDate(emailData.data.email.date_created)     
                setIsDeleted(emailData.data.email.deleted)           
            })
    }

    function deleteEmail() {
       setIsDeleted(1)
            fetch(`https://email-client-api.dev.io-academy.uk/emails/${id}`, {
                method: 'DELETE',  
                headers: {
                    "content-type": "application/json"
                },
                
                body:JSON.stringify({
                    deleted:isDeleted
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
        
       console.log(isDeleted)
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
            <footer>
                <button onClick={deleteEmail}  className="border rounded
                    py-2 px-3 text-white bg-red-600 cursor-pointer">
                    Delete
                </button>
            </footer>
        </div>
 )
}
export default ViewEmailPage