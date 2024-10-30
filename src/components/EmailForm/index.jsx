import { useState } from "react"
import { Link } from "react-router-dom"

function EmailForm(){
    const [email,setEmail]=useState('')
    const [subject,setSubject]=useState('')
    const [message,setMessage]=useState('')
    const handleSubmit=(e)=> {
        e.preventDefault()
        console.log(email)
        console.log(subject)
        console.log(message)
    }

    return(
        <form onSubmit={handleSubmit}
        className="flex flex-col py-4 px-8 gap-4">
            <label htmlFor="email" />
            <input
            type="email"
            id="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            placeholder="To"
            className="border-2 rounded border-gray-200 p-2"
            />

            <label htmlFor="subject" />
            <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e)=> setSubject(e.target.value)}
            placeholder="Subject"
            className="border-2 rounded border-gray-200 p-2"
            />

            <label htmlFor="message" />
            <textarea id="message"
            name="message"
            rows="20"
            cols="30"
            value={message}
            onChange={(e)=> setMessage(e.target.value)}
            placeholder="Type your message here"
            className="border-2 rounded border-gray-200 p-2"
            />

            <div className="flex gap-1 self-end">
                    <Link to="/">
                    <button className="border rounded
                    py-2 px-3 text-white bg-gray-500">Cancel</button>
                    </Link>

                    <input type="submit" value="Send" className="border rounded
                    py-2 px-3 text-white bg-green-600 cursor-pointer"/>

            </div>
        </form> 
    )
}

export default EmailForm