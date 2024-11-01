import DropdownButton from "../DropdownButton"

function Dropdown({unreadCount}) {  

    return (
        <div className="dropDownContent">
            <div className="grid grid-row-4 font-bold text-xl float-left
            text-white bg-gray-400 absolute">
                <DropdownButton name="New Email"
                                link="/compose"/>
                <DropdownButton name="Inbox"
                                count={unreadCount} 
                                link="/"/> 
                <DropdownButton name="Sent"  
                                link="/sent"/>
                <DropdownButton name="Deleted"  
                                link="/deleted"/>                          
            </div>
        </div>
    )
}

export default Dropdown