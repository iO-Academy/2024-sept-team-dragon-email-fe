import { useEffect, useState } from "react"
import SentItem from "../SentItem"

function SentList() {
  const [emails, setEmails] = useState([])
  function getEmailData() {
    fetch("https://email-client-api.dev.io-academy.uk/emails/sent")
      .then((res) => res.json())
      .then((emailData) => {
        setEmails(emailData.data)
        
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
    <div className = "border-b-2">
      {emails.map((email) => (
        <SentItem
          key={email.id}
          name={email.name}
          email={email.email}
          subject={email.subject}
          body={email.body}
          dateCreated={reverseDate(email.date_created)}
        />
      ))}
    </div>
  )
}

export default SentList