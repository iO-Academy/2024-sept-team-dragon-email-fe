import { useEffect, useState } from "react"
import {useNavigate, useParams } from "react-router-dom"
import reverseDate from "../../functions/reverseDate"

function ViewEmailPage() { 
    const {id} = useParams()
    const navigate = useNavigate()
    
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
                }
            })         
            .then(res => res.json())
            .then(() => {
                navigate("/")
            })
    }

    useEffect(getEmailData, [])
    
    return (
        <div>

            <div className="pl-4 pt-4 flex justify-between px-4 py-2 ">

                <div>
                    <h2 className="p-1">{name}</h2>
                    <p>{emailAddress}</p>
                    <p>{subject}</p>
                </div>

                <div>
                    <p className="px-4 py-2">{reverseDate(date)}</p></div>
                </div>

                <div>
                    <p>{body}</p>
                </div>
            <footer>
                {isDeleted ==0 && <button onClick={deleteEmail} className="border rounded py-2 px-3 text-white bg-red-600 cursor-pointer">Delete</button>}
            </footer>
        </div>
    )
}

export default ViewEmailPage