import { useEffect, useState } from "react"
import DropdownButton from "../DropdownButton"

function Dropdown() {  
    const [unreadEmailCount, setUnreadEmailCount] = useState(0)

    function getEmailCount() {
        fetch("https://email-client-api.dev.io-academy.uk/emails")
            .then(res => res.json())
            .then(emailData => {

                let unreadCount = 0

                emailData.data.forEach(email => {
                    if (email.read == 0){unreadCount ++}
                })
                setUnreadEmailCount(unreadCount) 
            }
    )}

    useEffect(getEmailCount, [])

    return (
        <div className="dropDownContent">
            <div className="grid grid-row-4 font-bold text-xl float-left
            text-white bg-gray-400 absolute">
                <DropdownButton name="Inbox" count={unreadEmailCount} link="/"/>
            </div>
        </div>
    )
}

export default Dropdown