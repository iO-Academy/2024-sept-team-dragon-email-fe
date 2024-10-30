import { Link } from "react-router-dom"

function CancelButton() {
    return(
        <Link to ="/"> 
            <button className="border rounded py-2 px-3 bg-gray-500 text-white">
                Cancel
            </button>
        </Link>
    )
}

export default CancelButton