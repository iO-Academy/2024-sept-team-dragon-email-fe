function EmailForm(){
    return(
        <div class="form-group">
        <form>
            <label for="email"></label>
            <input
            type="email"
            id="email"
            placeholder="To"
            />

<label for="Subject"></label>
            <input
            type="text"
            id="Subject"
            placeholder="Subject"
            />

            <textarea id="Message"
            name="Message"
            rows="20"
            cols="30"
            placeholder="Type your message here"
            />

            




        
        </form>
    
    </div>
    )
}

export default EmailForm