import { useState } from "react"
import Dropdown from "../Dropdown";


function MenuButton (){
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen((prevIsMenuOpen) => !prevIsMenuOpen);
    console.log("Menu is now:", !isMenuOpen ? "Open" : "Closed");
  }

  return (
    <nav>
      <button 
        onClick={toggleMenu}
        className="border-4 p-1 rounded-md border-white font-normal hover:bg-slate-400"
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