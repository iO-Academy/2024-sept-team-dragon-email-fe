import { useEffect, useState } from "react"
import {useNavigate, useParams } from "react-router-dom"
import reverseDate from "../../functions/reverseDate"
import DropdownButton from "../../components/DropdownButton"

function ViewEmailPage() { 
    const {id} = useParams()
    const navigate = useNavigate()
    
    const [name, setName] = useState ("")
    const [emailAddress, setEmailAddress] = useState("")
    const [subject, setSubject] = useState("")
    const [body, setBody] = useState("")
    const [date, setDate] = useState("")
    const [isDeleted, setIsDeleted] = useState()
    const [isRead, setIsRead] = useState()

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
                setIsRead(emailData.data.email.read)           
            })
    }

    function markEmailRead() {
        fetch(`https://email-client-api.dev.io-academy.uk/emails/${id}`, {
            method: 'Put',
            headers: {
                    "content-type": "application/json"
            }
        })
            .then(res => res.json())
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
    useEffect(markEmailRead, [])
    
    return (
        <div className="px-4 py-2">

            <div className="pt-4 flex justify-between py-2 ">

                <div>
                    <h2>{name}</h2>
                    <p className="text-sm">{emailAddress}</p>
                    <p className="text-lg font-bold">{subject}</p>
                </div>

                <div>
                    <p className="px-2 py-2 font-bold">{reverseDate(date)}</p></div>
                </div>

                <div>
                    <p>{body}</p>
                </div>
            <footer className="flex gap-1 justify-end pt-2">
                {isDeleted ==0 && <button onClick={deleteEmail} className="border rounded py-2 px-3 text-white bg-red-600 cursor-pointer">Delete</button>}
                <button className="border rounded py-2 px-3 text-white bg-gray-500">
                    Close
                </button>
            </footer>
        </div>
    )
}

export default ViewEmailPage