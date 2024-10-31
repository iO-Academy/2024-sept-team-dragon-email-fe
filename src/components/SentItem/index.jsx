function SentItem({name, email, subject, body, dateCreated}) {

    return (
        <div className="flex justify-between px-4 py-2 border-t-2">
                <div>
                    <p className="text-lg font-bold">{name}</p>
                    <p className="text-lg font-bold">{email}</p>
                    <p className="text-sm">{subject}</p>
                    <p className="text-sm">{body}</p>
                   
                  
                </div>

                <div>
                    <p className="font-bold">{dateCreated}</p>
                </div>
            </div>
    )
}

export default SentItem