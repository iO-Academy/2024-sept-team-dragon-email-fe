function EmailPreview() {
    return (
        // console.log('EmailPreview')
        <div className="emailSummaryBox flex justify-between px-4 py-2 border-t-2">
            <div>
                <p className="emailName text-lg font-bold">Name</p>
                <p className="emailSubject text-sm">Subject</p>
                <p className="emailBody text-sm">First line</p>
            </div>
            
            <div>
                <p className="emailDate text-lg font-bold">Date</p>
            </div>
            
        </div>

    );
}
export default EmailPreview;
