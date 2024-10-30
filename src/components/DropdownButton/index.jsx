import { Link } from "react-router-dom"

function DropdownButton ({name, link}) {
    return (
        <Link to={link} className="border-b hover:bg-slate-500 p-5">
            {name}
        </Link>
    )
}

export default DropdownButton