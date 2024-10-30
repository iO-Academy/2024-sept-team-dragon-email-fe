import { Link } from "react-router-dom"

function DropdownButton ({name, count, link}) {
    return (
        <Link to={link} className="border-b hover:bg-slate-500 p-5 flex justify-between gap-12">
            <span>{name}</span> <span className="p-1 py-1.5 text-xs bg-cyan-700 rounded-full">{count}</span>
        </Link>
    )
}

export default DropdownButton