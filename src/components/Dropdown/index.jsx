import DropdownButton from "../DropdownButton"

function Dropdown({unreadCount}) {  

    return (
        <div className="dropDownContent">
            <div className="grid grid-row-4 font-bold text-xl float-left
            text-white bg-gray-400 absolute">
                <DropdownButton name="New Email"
                                link="/compose"/>
                <DropdownButton name="Inbox"
<<<<<<< HEAD
                                count={unreadCount}
                                link="/"/>                
=======
                                count={unreadEmailCount}
                    link="/" />
                <DropdownButton name="Deleted"
                    link="/deleted" />
>>>>>>> eb471b3b8b22e3d656eb016625619c33c16a2f79
            </div>
        </div>
    )
}

export default Dropdown