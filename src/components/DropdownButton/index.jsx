import { Link } from "react-router-dom"

function DropdownButton ({name, count, link}) {
    return (
        <Link to={link} className="border-b hover:bg-slate-500 p-5">
            <span>{name}</span> <span>{count}</span>
        </Link>
    )
}

export default DropdownButton