import { useState } from "react"
import { Link } from "react-router-dom"
import InputBox from "../InputBox"

function EmailForm(){

  const [email, setEmail] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [confirm, setConfirm] = useState('')
  const emailChange = (e) => {setEmail(e.target.value)}
  const subjectChange = (e) => {setSubject(e.target.value)}
  const handleSubmit = (e) => {
      e.preventDefault()
      getData()
  }
    
  function getData (){
    fetch('https://email-client-api.dev.io-academy.uk/emails', {
      method: 'POST',
      headers: {
        "content-type": "application/json"
      },
      body:JSON.stringify({
        name: "username",
        email:email,
        subject:subject,
        body:message
      })
    })
      .then(res => res.json())
      .then(data => {
        confirmMessage(data.data.sent)
    })
  }

  function confirmMessage(isSent) {
    if (isSent != true) {
      setConfirm(<p className="text-red-500">
          Sending failed, please check all fields are correct.
        </p>)
    } else {
      setConfirm(<p>Email sent succesfully!</p>)
    }
  }


  return(
    <form onSubmit={handleSubmit}
      className="flex flex-col py-4 px-8 gap-4">
      <label htmlFor="email" />
        <InputBox 
          type = "email"
          id = "email"
          value = {email}
          action = {emailChange}
          placeholder = "To"
        />
      <label htmlFor="subject" />  
        <InputBox 
          type = "text"
          id = "subject"
          value = {subject}
          action = {subjectChange}
          placeholder = "Subject"
        />
        <label htmlFor="message" />
          <textarea id="message"
            name = "message"
            rows = "20"
            cols = "30"
            value = {message}
            onChange = {(e) => setMessage(e.target.value)}
            placeholder = "Type your message here"
            className = "border-2 rounded border-gray-200 p-2"
          />
          
        <div className="flex gap-1 self-center ">
          {confirm}
        </div>
          
        <div className="flex gap-1 self-end">
          <Link to="/">
            <button className="border rounded py-2 px-3 text-white bg-gray-500">
              Cancel
            </button>
          </Link>
          <input type="submit" value="Send" className="border rounded
            py-2 px-3 text-white bg-green-600 cursor-pointer"/>
        </div>
    </form> 
  )
}

export default EmailForm