function EmailForm(){
    return(
        <form className="flex flex-col py-4 px-8 gap-4">
            <label htmlFor="email" />
            <input
            type="email"
            id="email"
            placeholder="To"
            className="border-2 rounded border-gray-200 p-2"
            />

            <label htmlFor="subject" />
            <input
            type="text"
            id="subject"
            placeholder="Subject"
            className="border-2 rounded border-gray-200 p-2"
            />

            <label htmlFor="message" />
            <textarea id="message"
            name="message"
            rows="20"
            cols="30"
            placeholder="Type your message here"
            className="border-2 rounded border-gray-200 p-2"
            />  
        </form> 
    )
}

export default EmailForm