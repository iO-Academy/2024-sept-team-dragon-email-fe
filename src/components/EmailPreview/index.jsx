import { Link } from "react-router-dom"

function EmailPreview({emailName, emailSubject, emailBody, emailDate, emailRead, emailID}) {

    function readColor () {
        return emailRead==1 ? "bg-white" : "bg-gray-400"
    }

    return (
        <Link to={`/viewemail/${emailID}`}>
            <div className={readColor() + " emailSummaryBox flex justify-between px-4 py-2 border-t-2"}>
                <div>
                    <p className="text-lg font-bold">{emailName}</p>
                    <p className="text-sm">{emailSubject}</p>
                    <p className="text-sm">{emailBody}</p>
                </div>

                <div>
                    <p className="font-bold">{emailDate}</p>
                </div>
            </div>
        </Link>
    )
}

export default EmailPreview
