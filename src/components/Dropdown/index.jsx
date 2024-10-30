import DropdownButton from "../DropdownButton"

function Dropdown() {
    return (
        <div className="dropDownContent">
            <div className="grid grid-row-4 font-bold text-xl float-left
            text-white bg-gray-400 absolute">
                <DropdownButton name="Inbox" link="/"/>
            </div>
        </div>
    )
}

export default Dropdown