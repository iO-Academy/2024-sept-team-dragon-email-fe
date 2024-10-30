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
                setName(emailData.data.email.name)
                setEmailAddress(emailData.data.email.email)
                setSubject(emailData.data.email.subject)
                setBody(emailData.data.email.body)
                setDate(emailData.data.email.date_created)                
            })
    }

    useEffect(getEmailData, [])
    
    function reverseDate(inputDate) {
        let splitDate = inputDate.split(" ")[0]
        let array = splitDate.split("-")
        let newDate = `${array[2]}-${array[1]}-${array[0]}`
        return newDate
    }

    return (
        <div>
            <p className="flex justify-end mx-4 border-b-2 border-dotted py-2
            text-sm font-bold text-slate-600">{reverseDate (date)}</p>
            <div className="flex-col justify-between px-4 text-slate-600">
                <h2 className="pt-2 font-bold text-lg">{name}</h2>
                <p className="italic border-b-2 border-dotted
                 text-lg pb-2">{emailAddress}</p>
                <p className="mb-4 pt-2 border-b-2 border-dotted pb-2 font-extrabold
                text-2xl">{subject}</p>
            </div>
            <div> 
                <p className="px-4 text-slate-600">{body}</p> 
            </div>
        </div>
 )
}
export default ViewEmail