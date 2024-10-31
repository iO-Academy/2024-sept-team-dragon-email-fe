import { useEffect, useState } from "react"
import Dropdown from "../Dropdown"

function MenuButton (){

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

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav>
      <button 
        onClick={toggleMenu}
        className="border-4 p-1 rounded-md border-white font-normal hover:bg-slate-400 snap-normal scroll-mx-px">
        MENU
      </button>
      {isMenuOpen && (

          <Dropdown unreadCount={unreadEmailCount}/>
      )}
    </nav>
  )
}

 export default MenuButton