import { useState } from "react"
import Dropdown from "../Dropdown"


function MenuButton (){
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen)
  }

  return (
    <nav>
      <button 
        onClick={toggleMenu}
        className="border-4 p-1 rounded-md border-white font-normal hover:bg-slate-400 snap-normal scroll-mx-px"
      >
        MENU
      </button>
      {isMenuOpen && (
        <div>
          <Dropdown />
        </div>
      )}
    </nav>
  );
}


 export default MenuButton