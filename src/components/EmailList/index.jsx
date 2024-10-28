import EmailPreview from "../EmailPreview";

function EmailList() {
    return (
        <div className="border-b-2">
            <EmailPreview />
            <EmailPreview />
            <EmailPreview />
        </div>
    )
}
export default EmailList;