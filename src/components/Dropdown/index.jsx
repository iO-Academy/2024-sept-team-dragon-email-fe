import DeletedButton from "../DeletedButton"
import InboxButton from "../InboxButton"
import NewEmailButton from "../NewEmailButton"
import SentButton from "../SentButton"

function Dropdown (){
    return (
        <div className="dropDownContent">
            <box className="grid grid-row-4 font-bold text-xl float-left
            text-white bg-gray-400 fixed">
                <button className="border-b
                 hover:bg-slate-500 p-5"><NewEmailButton /></button>
                <button className="border-b
                 hover:bg-slate-500 p-5"><InboxButton /></button>
                <button className="border-b
                 hover:bg-slate-500 p-5"><SentButton /></button>
                <button className="border-b
                 hover:bg-slate-500 p-5"><DeletedButton /></button>
            </box>
        </div>
    )
}

export default Dropdown