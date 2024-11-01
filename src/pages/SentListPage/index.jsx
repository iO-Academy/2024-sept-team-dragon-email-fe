import { useEffect, useState } from "react"
import SentItem from "../../components/SentItem"
import reverseDate from "../../functions/reverseDate"

function SentListPage() {
  const [emails, setEmails] = useState([])
  function getEmailData() {
    fetch("https://email-client-api.dev.io-academy.uk/emails/sent")
      .then(res => res.json())
      .then(emailData => {
        setEmails(emailData.data)
      })
  }

  useEffect(getEmailData, [])

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

export default SentListPage